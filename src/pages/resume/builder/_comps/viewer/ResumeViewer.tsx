import WidgetCard from "@/components/card/WidgetCard";
import { getTemplate } from "@/pages/resume/resumeSamples";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import React, { RefObject, useEffect, useMemo, useRef, useState } from "react";
import Page, { MM_TO_PX } from "./ResumePage";
import {
  TransformComponent,
  TransformWrapper,
  ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import { pageSizeMap } from "@/utils/helperData/resume";
import { selectAppearance } from "@/api/slices/resume/resumeAppearanceConfig/slice";
import { useAppSelector } from "@/lib/hooks/globalHooks";
import { AnimatePresence, motion } from "framer-motion";
import ResumeToolBar from "./ResumeToolBar";
import { useDynamicSize } from "@/shared/hooks/dynamicSize";
import {
  useDownloadResumeWithoutRef,
  useDownloadResumeWithRef,
} from "@/lib/hooks/useDownloadResume";
import { cn } from "@/utils";
import ResumeOrder from "./ResumeOrder";

type Props = {
  formValues: ResumeFormCompType;
  template: string;
  handleNav: (T: string) => void;
};
type Screen = "orderSection" | "viewer";
const ResumeViewer = ({ formValues, template, handleNav }: Props) => {
  const Template = useMemo(() => getTemplate(template), [template]);
  // const transformRef = useRef<typeof ReactZoomPanPinchRef>(null);
  // const viewerRef = useRef<HTMLInputElement>(null);

  const [viewerWidth, setViewerWidth] = useState<number>(0);
  const [screen, setScreen] = useState<Screen>("viewer");
  const [initiateDownload, setInitiateDownload] = useState<boolean>(false);
  const format = useAppSelector(selectAppearance).page.format;
  const layout = useAppSelector(selectAppearance).layout;

  const page = useAppSelector(selectAppearance).page;
  const resumeAppearance = useAppSelector(selectAppearance);
  const [viewerRef, size] = useDynamicSize();
  const { download: downloadResume, targetRef } = useDownloadResumeWithRef({
    template: Template,
    formValues,
    resumeAppearance,
  });

  const resetZoom = (T: any) => {};

  const download = () => {
    setInitiateDownload(true);
    downloadResume();
    setInitiateDownload(false);
  };

  const scale = useMemo(() => {
    if (!size.width) return 0;
    const viewerWidth = size.width;
    const resumeWidth = pageSizeMap[page.format].width * MM_TO_PX;

    return Number((viewerWidth / resumeWidth).toFixed(2));
  }, [size]);

  const orderSection = () => {
    setScreen("orderSection");
  };

  // get resume template width scale
  // useEffect(() => {
  //   if (!viewerRef) return;
  //   const viewerWidth = viewerRef.current?.getBoundingClientRect().width;
  //   const resumeWidth = pageSizeMap[page.format].width * MM_TO_PX;
  //   if (!viewerWidth) return;

  //   const scale: number = Number((viewerWidth / resumeWidth).toFixed(2));
  //   // console.log(viewerWidth);
  //   // console.log(pageSizeMap[page.format].width * MM_TO_PX);
  //   console.log({ scale, resumeWidth, viewerWidth });
  //   setViewerWidth(viewerWidth);
  //   setScale(scale);
  // }, [viewerRef]);

  return (
    <div
      className=" flex flex-col items-center h-full rounded-xl max-h-full overflow-auto w-full"
      ref={viewerRef}
      id="viewer"
    >
      <ResumeToolBar
        resetZoom={() => {}}
        zoomIn={() => {}}
        customize={() => {
          handleNav("customize");
        }}
        // orderSection={orderSection}
        download={download}
        className={"z-5 bg-light_gray_widget dark:bg-secondary_dark"}
      />
      <AnimatePresence>
        <main className="w-full overflow-y-auto overflow-x-clip h-full relative no-scrollbar">
          <div className={cn(`fixed -right-[100vw] top-0`)}>
            <Page
              mode="preview"
              className="pointer-events-none p-5 absolute top-0 left-[50%] "
              // pageNumber: number;
              style={{
                transform: `scale(1) translate(-50%,0)`,
                transformOrigin: "left top",
              }}
              ref={targetRef}
            >
              <Template
                formValues={formValues}
                resumeAppearance={resumeAppearance}
              />
            </Page>
          </div>
          {/* {
            screen === 'orderSection' && <div className={cn(``)}>
            <ResumeOrder orderList={layout[0]}/>
          </div>
          } */}
          {screen === "viewer" && (
            <Page
              mode="builder"
              className="pointer-events-none p-5 absolute top-0 left-[50%] "
              // pageNumber: number;
              style={{
                transform: `scale(${scale - 0.1}) translate(-50%,0)`,
                transformOrigin: "left top",
              }}
              // ref={targetRef}
            >
              <Template
                formValues={formValues}
                resumeAppearance={resumeAppearance}
              />
            </Page>
          )}
        </main>
      </AnimatePresence>
    </div>
  );
};

export default ResumeViewer;

const ExpandedResumeViewer = ({ formValues, template }: Props) => {
  const Template = useMemo(() => getTemplate(template), [template]);
  const transformRef = useRef<ReactZoomPanPinchRef>(null);
  const viewerRef = useRef<HTMLInputElement>(null);

  const [scale, setScale] = useState<number>(0);
  const [viewerWidth, setViewerWidth] = useState<number>(0);
  const format = useAppSelector(selectAppearance).page.format;
  const page = useAppSelector(selectAppearance).page;
  const resumeAppearance = useAppSelector(selectAppearance);

  const resetZoom = (T: any) => {};

  const download = (T: any) => {};

  // get resume template width scale
  useEffect(() => {
    if (!viewerRef) return;
    const viewerWidth = viewerRef.current?.getBoundingClientRect().width;
    const resumeWidth = pageSizeMap[page.format].width * MM_TO_PX;
    if (!viewerWidth) return;

    const scale: number = Number((viewerWidth / resumeWidth).toFixed(2));

    setViewerWidth(viewerWidth);
    setScale(scale);
  }, [viewerRef]);

  return (
    <div
      className="relative  flex flex-col items-center flex-1 h-full rounded-xl max-w-full max-h-full overflow-hidden"
      ref={viewerRef}
      id="viewer"
    >
      <TransformWrapper
        ref={transformRef}
        centerOnInit
        maxScale={2}
        minScale={0.4}
        initialScale={1}
        limitToBounds={false}
        wheel={{ disabled: true, step: 0.1 }}
        pinch={{ step: 0.1 }}
        initialPositionX={0}
        initialPositionY={-200}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }: any) => (
          <>
            <ResumeToolBar
              resetZoom={() => resetTransform()}
              zoomIn={() => zoomIn()}
              zoomOut={() => zoomOut()}
              download={download}
              className={"z-5 bg-light_gray_widget dark:bg-secondary_dark"}
            />

            <TransformComponent
              wrapperClass="flex-1 relative flex flex-col"
              contentClass="pointer-events-none"
              contentStyle={
                {
                  // width: `${
                  //   layout.length * (pageSizeMap[format].width * MM_TO_PX + 42)
                  // }px`,
                  // width: "100%",
                  // gridTemplateColumns: `repeat(${layout.length}, 1fr)`,
                }
              }
              wrapperStyle={
                {
                  // width: `${viewerWidth - 20}px`,
                  // backgroundColor: "red",
                  // borderRadius: "20px",
                  // margin: "5px",
                }
              }
            >
              <AnimatePresence>
                <Page
                  mode="builder"
                  // pageNumber: number;
                  style={{ transform: `scale(${1})` }}
                >
                  <Template
                    formValues={formValues}
                    resumeAppearance={resumeAppearance}
                  />
                </Page>
              </AnimatePresence>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};
