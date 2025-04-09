import {
  lightCardBg,
  overLayColor,
  secBgColor,
  secTextColor,
} from "@/assets/css/tailwindcss";
import usePopUpMenu from "@/shared/hooks/usePopUpMenu";
import { Delete, Download, Edit, MoreVert } from "@mui/icons-material";
import React from "react";

type Props = {
  id?: string;
  resumeType?: "job" | "school";
  templateSelected?: string;
  companyName?: string;
  schoolName?: string;
  jobTitle?: string;
  dateUpdated?: string;
  professionalTitle?: string;
};

const ResumeCard = ({
  resumeType,
  companyName,
  jobTitle,
  professionalTitle,
  schoolName,
  dateUpdated,
}: Props) => {
  const {
    openPopUp: openResumeMenu,
    closePopUp: closeResumeMenu,
    togglePopUp: toggleResumeMenu,
    popUpState: isResumeMenuOpen,
    popUpRef: popUpResumeRef,
  } = usePopUpMenu();
  return (
    <main className=" flex items-center justify-center relative group/resume-card w-full ">
      <div className={`absolute top-1 right-1 text-secondary_text z-10 p`}>
        <div className="relative">
          <button onClick={openResumeMenu}>
            <MoreVert />
          </button>
          {isResumeMenuOpen && (
            <div
              className={`flex flex-col gap-2 absolute top-full right-0 ${secBgColor} ${secTextColor} bg-white shadow-md p-2 px-3 text-start z-20 rounded-lg`}
              ref={popUpResumeRef}
            >
              <button className="text-start">Edit</button>
              <button className="text-start">View</button>
              <button className="text-start">Download</button>
              <button className="text-start">Delete</button>
            </div>
          )}
        </div>
      </div>

      {/* <div
        className={`z-2 inset-0 ${overLayColor} hidden absolute group-hover/resume-card:flex`}
      >
        <div>
            <button><Delete/></button>
        </div>
      </div> */}
      <div
        className={`flex flex-col gap-3 h-full w-full dark:text-dark_secondary_text border-light_border_color dark:border-light_gray_widget/15 border-[1px] hover:shadow-md cursor-pointer`}
      >
        <section className="flex-1 w-full bg-white p-2 relative rounded-t-lg">
          <div
            className={`gap-4 hidden absolute group-hover/resume-card:flex z-[2] top-[50%] left-[50%] -translate-x-[50%] w-fit ${secTextColor}`}
          >
            <button className="shadow-md p-1 rounded-full aspect-square dark:bg-dark_icon_circle">
              <Download />
            </button>
            <button className="shadow-md p-1 rounded-full aspect-square dark:bg-dark_icon_circle">
              <Edit />
            </button>
          </div>
        </section>
        <section
          className={`p-3 flex flex-1 flex-col justify-between w-full gap-4 absolute bottom-0 ${lightCardBg}`}
        >
          <div className="flex-1 relative w-full ">
            <p className="text-ellipsis truncate font-medium dark:text-dark_primary_text">
              {jobTitle ?? professionalTitle}
            </p>
            <p className="truncate text-ellipsis text-secondary_text dark:text-dark_secondary_text">
              {" "}
              <span className="">@</span>
              {companyName ?? schoolName}
            </p>
            <p className="truncate text-ellipsis text-sm text-secondary_text dark:text-dark_secondary_text">
              {dateUpdated}
            </p>
          </div>

          <div className="">
            <div className="text-sm text-secondary_text dark:text-dark_secondary_text italic">
              {resumeType && resumeType === "school" ? (
                <p>academic cv</p>
              ) : (
                <p>work resume</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ResumeCard;
