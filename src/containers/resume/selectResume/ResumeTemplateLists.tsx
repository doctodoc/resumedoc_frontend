import { universalPaddingX, universalPaddingY } from "@/assets/css/tailwindcss";
import TileTag from "@/components/tags/TileTag";
import { ResumeFilterQueryType } from "@/shared/types/resumeTypes";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { initialResumeQueryData } from "./FilterResume";
import { transfromPageNumber } from "@/utils/transformOps";
import {
  ResumeTemplateType,
  getResumeTemplates,
} from "@/utils/dummyDataOps/resumeTemplates";
import ResumeClip from "./ResumeClip";
import RoundedButton from "@/components/buttons/RoundedButton";
import useGetHeight from "@/lib/hooks/elements/useGetHeight";
import useGetScrollPosition from "@/lib/hooks/elements/useGetScrollPosition";
import { useRouter } from "next/navigation";

type Props = {
  resumeFilterQuery: ResumeFilterQueryType;
  handleRemoveTag: (id: string) => void;
  resumeList: [];
};

const ResumeTemplateLists = ({
  resumeFilterQuery,
  handleRemoveTag,
  resumeList,
}: Props) => {
  const { resumeCategory, pageSize, atsFriendly } = resumeFilterQuery
    ? resumeFilterQuery
    : initialResumeQueryData;

  const router = useRouter();

  const [fetchStart, setFetchStart] = useState(0);
  const [resumeTemplateList, setResumeTemplateList] = useState<
    ResumeTemplateType[]
  >([]);
  const [buttonScrolledToPosition, setbutttonScrolledToPosition] =
    useState(false);

  const {
    eleRef: resumeContainerRef,
    height,
    bottom: resumeContainerBottom,
    top: resumeContainerTop,
    winHeight,
  } = useGetHeight();

  const {
    eleRef: actionButtonRef,
    position,
    scrollPosition,
    scrollHeight,
  } = useGetScrollPosition(
    { relElRef: resumeContainerRef },
    handleActionButtonPosition
  );

  function handleActionButtonPosition() {
    if (position >= winHeight) {
      console.log("reached");
      return setbutttonScrolledToPosition(false);
    }

    if (position < winHeight) {
      return setbutttonScrolledToPosition(true);
    }
  }

  const navToBuildResume = () => {
    router.push("/build-resume", { scroll: false });
  };

  useEffect(() => {
    setResumeTemplateList(getResumeTemplates({ start: 0, offset: 30 }));
  }, []);
  return (
    <div
      className={classNames(
        `relative inset-0 flex-1 flex flex-col gap-5 ${universalPaddingY} ${universalPaddingX} h-full w-full mb-8`
      )}
    >
      <header className="text-center items-center flex-col">
        <h1 className="text-xl xl:text-3xl font-semibold dark:text-dark_primary_text">
          Choose Your Template And Preferred Theme
        </h1>
        <h3 className="xl:text-lg dark:text-dark_secondary_text">
          You can filter Resume based on the role or industry you are applying
          for
        </h3>
      </header>

      <section className="flex mt-4 items-center gap-3">
        <h4 className="dark:text-dark_primary_text">{`Showing results for:`}</h4>
        <div className="flex flex-wrap items-center gap-3">
          {resumeCategory && (
            <TileTag
              value={`${resumeCategory?.type}: ${resumeCategory?.value}`}
              handleRemove={handleRemoveTag}
              id={"resumeCategory"}
            />
          )}
          {pageSize && (
            <TileTag
              value={`Resume size: ${transfromPageNumber(pageSize)}`}
              handleRemove={handleRemoveTag}
              id={"pageSize"}
            />
          )}
          {atsFriendly && (
            <TileTag
              value={`ATS Friendly`}
              handleRemove={handleRemoveTag}
              id={"atsFriendly"}
            />
          )}
        </div>
      </section>

      <main className="">
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4 h-full">
          {resumeTemplateList.map((resume) => {
            return (
              <ResumeClip atsFriendly={resume?.atsFriendly} key={resume?.id} />
            );
          })}
        </section>
        <div className="" ref={resumeContainerRef}></div>
      </main>

      <section className="flex h-fit w-full justify-center">
        <div
          className={`h-fit w-fit p-4 ${
            buttonScrolledToPosition
              ? "relative flex"
              : "fixed top-[88vh] left-[60%] -translate-x-[50%] "
          }`}
          ref={actionButtonRef}
        >
          <RoundedButton
            className={`bg-primary_dark text-white dark:bg-white dark:text-black font-semibold  px-20 py-1 shadow-md`}
            onClick={navToBuildResume}
          >
            Skip
          </RoundedButton>
        </div>
      </section>
    </div>
  );
};

export default ResumeTemplateLists;
