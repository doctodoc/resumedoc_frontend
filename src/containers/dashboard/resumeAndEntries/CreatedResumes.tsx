import CurvedButton from "@/components/buttons/CurvedButton";
import { Add } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React from "react";
import OutlinedButton from "@/components/buttons/OutlinedButton";
// import CoverLetterCard from "../coverLetter/CoverLetterCard";
import {
  greyBorder,
  lightCardBg,
  secTextColor,
} from "@/assets/css/tailwindcss";
import CoverLetterSampleCard from "@/containers/coverLetter/coverLetterSamples/CoverLetterSampleCard";
import ResumeCard from "./ResumeCard";
import { SavedResume } from "@/shared/types/resumeTypes";
import { format } from "date-fns";
import AddDocumentIcon from "@/assets/svg/AddDocumentIcon";
import Layout from "../Layout";
import CreateCard from "@/components/card/CreateCard";

type Props = {
  resumeList: any;
  createNewResume: () => void;
  triggerEdit?: (id: string) => void;
  triggerView?: (id: string) => void;
  triggerDownload?: (id: string) => void;
  triggerDelete?: (id: string) => void;
};

const CreatedResumes = ({
  resumeList,
  createNewResume,
  triggerEdit,
  triggerView,
  triggerDownload,
  triggerDelete,
}: Props) => {
  const router = useRouter();
  const savedResumes: Array<SavedResume> = [
    {
      companyName: "Zeus inc.",
      jobTitle: "Software Engineering",
      resumeType: "job",
      templateSelected: "default",
      id: "new_resume",
      dateUpdated: format(new Date(), "yyyy-MM-dd"),
    },
  ];

  return (
    <Layout title="My Resumes">
      <OutlinedButton
        className={`${lightCardBg} flex flex-col gap-4 justify-center items-center border-dashed text-primary ${lightCardBg} border-dashed ${greyBorder} border-[2px] min-h-[300px] text-lg`}
        onClick={createNewResume}
      >
        <div className="text-primary w-7 h-7  md:w-10 md:h-10">
          <AddDocumentIcon />
        </div>
        <p className="font-semibold">Create Resume</p>
        {/* <Add sx={{ fontSize: 50 }} /> */}
      </OutlinedButton>

      {savedResumes && savedResumes.length
        ? savedResumes.map((savedResume) => (
            <CreateCard
              key={savedResume.id}
              subTitle={savedResume?.jobTitle}
              title={savedResume?.companyName}
              dateUpdated={savedResume?.dateUpdated}
              tags={["work resume"]}
              id={savedResume.id}
              triggerEdit={triggerEdit}
              triggerView={triggerView}
              triggerDownload={triggerDownload}
              triggerDelete={triggerDelete}
            />
          ))
        : [
            <OutlinedButton
              className={` border-solid h-full w- ${greyBorder}`}
              onClick={createNewResume}
            >
              <></>
              {/* <p>Create Resume</p> */}
              {/* <Add sx={{ fontSize: 50 }} /> */}
            </OutlinedButton>,
            <OutlinedButton
              className={` border-solid h-full w- ${greyBorder}`}
              onClick={createNewResume}
            >
              <></>
              {/* <p>Create Resume</p> */}
              {/* <Add sx={{ fontSize: 50 }} /> */}
            </OutlinedButton>,
            <OutlinedButton
              className={` border-solid h-full w- ${greyBorder}`}
              onClick={createNewResume}
            >
              <></>
              {/* <p>Create Resume</p> */}
              {/* <Add sx={{ fontSize: 50 }} /> */}
            </OutlinedButton>,
          ]}
    </Layout>
  );
};

export default CreatedResumes;
