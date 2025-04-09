import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { DocumentProps, pdf } from "@react-pdf/renderer";
import { Document, Page, pdfjs } from "react-pdf";
import { useAsync } from "react-use";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { widgetBg } from "@/assets/css/tailwindcss";
import useResizeObserver from "use-resize-observer";
import { v4 as uuidv4 } from "uuid";

// import * as pdfjs from 'pdfjs-dist';
// import * as pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type Props = {
  value: React.ReactElement<DocumentProps>;
  onUrlChange?: any;
  onRenderError?: any;
};

const PDFViewer = ({ value, onUrlChange, onRenderError }: Props) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [previousRenderValue, setPreviousRenderValue] = useState<any>(null);
  // const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();

  const render = useAsync(async () => {
    if (!value) return null;

    const blob = await pdf(value).toBlob();
    const url = URL.createObjectURL(blob);

    return url;
  }, [value]);

  // useEffect(() => onUrlChange(render.value), [render.value]);

  // useEffect(() => onRenderError(render.error), [render.error]);

  const onPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const onNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onDocumentLoad = (d: any) => {
    setNumPages(d.numPages);
    setCurrentPage((prev) => Math.min(prev, d.numPages));
  };

  const isFirstRendering = !previousRenderValue;

  const isLatestValueRendered = previousRenderValue === render.value;
  const isBusy = !isLatestValueRendered;

  const shouldShowTextLoader = isFirstRendering && isBusy;
  const shouldShowPreviousDocument = !isFirstRendering && isBusy;

  useEffect(() => {
    if (!previousRenderValue) console.log("No previous render value");
  }, [previousRenderValue]);

  return (
    <Wrapper className="">
      <Message active={shouldShowTextLoader}>Rendering PDF...</Message>

      <Message active={!render.loading && !value}>
        You are not rendering a valid document
      </Message>

      {
        isBusy && <div className="absolute z-10 bg-white  inset-0 flex items-center justify-center ">
          <p>Updating...</p>
        </div>
      }

      <DocumentWrapper className={`border-none w-full`}>
        {shouldShowPreviousDocument && previousRenderValue ? (
          <Document
            key={uuidv4()}
            className="previous-document"
            file={previousRenderValue}
            loading={null}
            onLoad={() => {}}
            onLoadSuccess={({ numPages }: { numPages: number }) => {
              setNumPages(numPages);
            }}
          >
            <div className="flex flex-col gap-3 flex-1 h-14">
              {Array.from(
                { length: numPages ?? 0 },
                (_, index) => index + 1
              ).map((index) => {
                return (
                  <Page
                    key={uuidv4()}
                    pageNumber={index}
                    loading={null}
                    scale={1}
                  />
                );
              })}
            </div>
          </Document>
        ) : null}

        <Document
          key={render.value}
          className={`         
          ${shouldShowPreviousDocument ? "rendering-document" : ""} `}
          file={render.value}
          loading={null}
          onLoadSuccess={onDocumentLoad}
        >
          <div className=" flex flex-col gap-3 flex-1 h-10 w-full">
            {numPages &&
              Array.from({ length: numPages }, (_, index) => index + 1).map(
                (index) => {
                  return (
                    <Page
                      key={index}
                      pageNumber={index}
                      loading={null}
                      onRenderSuccess={() =>
                        setPreviousRenderValue(render.value)
                      }
                    />
                  );
                }
              )}
          </div>
        </Document>
      </DocumentWrapper>

      {/* <PageNavigator
        currentPage={currentPage}
        numPages={numPages}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
      /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;

const DocumentWrapper = styled.div`
  flex: 1;
  // padding: 1em;
  display: flex;
  z-index: 500;
  align-items: center;
  justify-content: center;
  transition-property: all !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;


  .react-pdf__Document {
    height: 100%;
    width: 100%;
    &.previous-document {
      canvas {
        opacity: 0.5;
      }
    }

    
    canvas {
      width: 100% !important;
      height: 100% !important;
      

    }
    &.rendering-document {
      position: absolute;
      opacity: 0;
      top: 1rem;

      &.react-pdf__Page {
        box-shadow: none
        aspect-ratio: 1.414;
        // background-color: green !important;
      }
    }
  }
`;

const Message = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1000;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  transition: all 1s;
  opacity: ${(props: { active: boolean }) => (props.active ? 1 : 0)};
  pointer-events: ${(props) => (props.active ? "all" : "none")};
`;

export default React.memo(PDFViewer);
