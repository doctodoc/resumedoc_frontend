import React from "react";
import { Add } from "@mui/icons-material";
import {
  greyBorder,
  lightCardBg,
  secTextColor,
} from "@/assets/css/tailwindcss";
import CurvedButton from "@/components/buttons/CurvedButton";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import { format } from "date-fns";
import CreateCard from "@/components/card/CreateCard";
import AddDocumentIcon from "@/assets/svg/AddDocumentIcon";
import Layout from "../Layout";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/routes/AppRoutes";

type Props = {
  triggerEdit?: (id: string) => void;
  triggerView?: (id: string) => void;
  triggerDownload?: (id: string) => void;
  triggerDelete?: (id: string) => void;
};
const CreatedCoverLetter = ({
  triggerEdit,
  triggerView,
  triggerDownload,
  triggerDelete,
}: Props) => {
  const router = useRouter();
  const savedCoverLetters = [
    {
      companyName: "Zeus inc.",
      jobTitle: "Software Engineering",
      resumeType: "job",
      templateSelected: "default",
      id: "new_resume",
      dateUpdated: format(new Date(), "yyyy-MM-dd"),
    },
  ];

  const createCoverLetter = () => {
    router.push(`${AppRoutes.dashboard.coverLetter}/new`);
  };
  return (
    <Layout title="My cover letters">
      <OutlinedButton
        className={`${lightCardBg} flex flex-col gap-4 justify-center items-center border-dashed text-primary ${lightCardBg} border-dashed ${greyBorder} border-[2px] min-h-[300px] text-base`}
        onClick={createCoverLetter}
      >
        <div className="text-primary w-7 h-7  md:w-10 md:h-10">
          <AddDocumentIcon />
        </div>
        <p>Create Cover Letter</p>
        {/* <Add sx={{ fontSize: 50 }} /> */}
      </OutlinedButton>
      {savedCoverLetters && savedCoverLetters.length
        ? savedCoverLetters?.map((savedCoverLetter) => (
            <CreateCard
              key={savedCoverLetter.id}
              subTitle={savedCoverLetter?.jobTitle}
              title={savedCoverLetter?.companyName}
              dateUpdated={savedCoverLetter?.dateUpdated}
              tags={["cover letter"]}
              id={savedCoverLetter.id}
              triggerEdit={triggerEdit}
              triggerView={triggerView}
              triggerDownload={triggerDownload}
              triggerDelete={triggerDelete}
            />
          ))
        : [
            <OutlinedButton
              className={` border-solid h-full w- ${greyBorder}`}
              onClick={createCoverLetter}
            >
              <></>
              {/* <p>Create Resume</p> */}
              {/* <Add sx={{ fontSize: 50 }} /> */}
            </OutlinedButton>,
            <OutlinedButton
              className={` border-solid h-full w- ${greyBorder}`}
              onClick={createCoverLetter}
            >
              <></>
              {/* <p>Create Resume</p> */}
              {/* <Add sx={{ fontSize: 50 }} /> */}
            </OutlinedButton>,
            <OutlinedButton
              className={` border-solid h-full w- ${greyBorder}`}
              onClick={createCoverLetter}
            >
              <></>
              {/* <p>Create Resume</p> */}
              {/* <Add sx={{ fontSize: 50 }} /> */}
            </OutlinedButton>,
          ]}
    </Layout>
    // <div className="flex flex-col gap-4 w-full bg-inherit items-center">
    //   <div className="flex flex-col gap-4 max-w-[1000px]">
    //     <h1 className={`font-semibold text-lg ${secTextColor} text-start`}>
    //       My Cover Letters
    //     </h1>
    //     <main className="grid gap-3 grid-cols-4 w-full">
    //
    //     </main>
    //   </div>
    // </div>
  );
};

export default CreatedCoverLetter;
