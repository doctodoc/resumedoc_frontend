import { useRouter } from "next/navigation";
import React from "react";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import {
  greyBorder,
  lightCardBg,
  secTextColor,
} from "@/assets/css/tailwindcss";
import { SavedResume } from "@/shared/types/resumeTypes";
import { format } from "date-fns";
import ResumeCard from "../resumeAndEntries/ResumeCard";
import { NoteAdd, PostAddOutlined } from "@mui/icons-material";
import AddDocumentIcon from "@/assets/svg/AddDocumentIcon";
import Layout from "../Layout";
import CreateCard from "@/components/card/CreateCard";
import { AppRoutes } from "@/routes/AppRoutes";

type Props = {
  cvList: any;
  createNewCv: () => void;
  triggerEdit?: (id: string) => void;
  triggerView?: (id: string) => void;
  triggerDownload?: (id: string) => void;
  triggerDelete?: (id: string) => void;
};

const CreatedAcademicCv = ({
  cvList,
  createNewCv,
  triggerEdit,
  triggerView,
  triggerDownload,
  triggerDelete,
}: Props) => {
  const router = useRouter();
  const savedCvs: Array<SavedResume> = [
    {
      schoolName: "Zeus University",
      professionalTitle: "Data Scientist",
      resumeType: "school",
      templateSelected: "default",
      id: "new_resume",
      dateUpdated: format(new Date(), "yyyy-MM-dd"),
    },
  ];

  // const CreateAcademicCv = () => {
  //   router.push(`${AppRoutes.dashboard.academicCv}/new`)
  // }

  return (
    <Layout title="My Academic CVs">
      <OutlinedButton
        className={`flex flex-col gap-4 justify-center items-center text-primary ${lightCardBg} border-dashed ${greyBorder} border-[2px] min-h-[300px] text-lg`}
        onClick={createNewCv}
      >
        <div className="text-primary w-7 h-7  md:w-10 md:h-10">
          <AddDocumentIcon />
        </div>
        <p className="font-semibold">Create CV</p>
        {/* <Add sx={{ fontSize: 50 }} /> */}
      </OutlinedButton>

      {savedCvs && savedCvs.length
        ? savedCvs.map((savedCv) => (
            <CreateCard
              key={savedCv.id}
              subTitle={savedCv?.schoolName}
              title={savedCv?.professionalTitle}
              dateUpdated={savedCv?.dateUpdated}
              tags={["statement of purpose"]}
              id={savedCv.id}
              triggerEdit={triggerEdit}
              triggerView={triggerView}
              triggerDownload={triggerDownload}
              triggerDelete={triggerDelete}
            />
          ))
        : [
            <OutlinedButton
              className={` border-solid h-full w- ${greyBorder}`}
              onClick={createNewCv}
            >
              <></>
              {/* <p>Create Resume</p> */}
              {/* <Add sx={{ fontSize: 50 }} /> */}
            </OutlinedButton>,
            <OutlinedButton
              className={` border-solid h-full w- ${greyBorder}`}
              onClick={createNewCv}
            >
              <></>
              {/* <p>Create Cv</p> */}
              {/* <Add sx={{ fontSize: 50 }} /> */}
            </OutlinedButton>,
            <OutlinedButton
              className={` border-solid h-full w- ${greyBorder}`}
              onClick={createNewCv}
            >
              <></>
              {/* <p>Create Resume</p> */}
              {/* <Add sx={{ fontSize: 50 }} /> */}
            </OutlinedButton>,
          ]}
    </Layout>
  );
};

export default CreatedAcademicCv;
