import {
  greyBorder,
  lightCardBg,
  secTextColor,
} from "@/assets/css/tailwindcss";
import AddDocumentIcon from "@/assets/svg/AddDocumentIcon";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import CreateCard from "@/components/card/CreateCard";
import { format } from "date-fns";
import React from "react";
import Layout from "../Layout";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/routes/AppRoutes";

type Props = {
  triggerEdit?: (id: string) => void;
  triggerView?: (id: string) => void;
  triggerDownload?: (id: string) => void;
  triggerDelete?: (id: string) => void;
};

const CreatedStatementOfPurpose = ({
  triggerEdit,
  triggerView,
  triggerDownload,
  triggerDelete,
}: Props) => {
  const router = useRouter();
  const createSop = () => {
    router.push(`${AppRoutes.dashboard.statementOfPurpose}/new`);
  };
  const savedSops = [
    {
      schoolName: "Zeus University",
      professionalTitle: "Data Scientist",
      resumeType: "school",
      templateSelected: "default",
      id: "new_resume",
      dateUpdated: format(new Date(), "yyyy-MM-dd"),
    },
  ];
  return (
    <Layout title={"My Statement of Purpose"}>
      <OutlinedButton
        className={`${lightCardBg} flex flex-col gap-4 justify-center items-center border-dashed text-primary ${lightCardBg} border-dashed ${greyBorder} border-[2px] min-h-[300px] text-base`}
        onClick={createSop}
      >
        <div className="text-primary w-7 h-7  md:w-10 md:h-10">
          <AddDocumentIcon />
        </div>
        <p>Create Statement of Purpose</p>
        {/* <Add sx={{ fontSize: 50 }} /> */}
      </OutlinedButton>
      {savedSops && savedSops.length
        ? savedSops?.map((savedSop) => (
            <CreateCard
              key={savedSop.id}
              subTitle={savedSop?.schoolName}
              title={savedSop?.professionalTitle}
              dateUpdated={savedSop?.dateUpdated}
              tags={["statement of purpose"]}
              id={"jkagjo29409n"}
              triggerEdit={triggerEdit}
              triggerView={triggerView}
              triggerDownload={triggerDownload}
              triggerDelete={triggerDelete}
            />
          ))
        : [
            <OutlinedButton
              className={` border-solid h-full w- ${greyBorder}`}
              onClick={createSop}
            >
              <></>
              {/* <p>Create Resume</p> */}
              {/* <Add sx={{ fontSize: 50 }} /> */}
            </OutlinedButton>,
            <OutlinedButton
              className={` border-solid h-full w- ${greyBorder}`}
              onClick={createSop}
            >
              <></>
              {/* <p>Create Resume</p> */}
              {/* <Add sx={{ fontSize: 50 }} /> */}
            </OutlinedButton>,
            <OutlinedButton
              className={` border-solid h-full w- ${greyBorder}`}
              onClick={createSop}
            >
              <></>
              {/* <p>Create Resume</p> */}
              {/* <Add sx={{ fontSize: 50 }} /> */}
            </OutlinedButton>,
          ]}
    </Layout>
  );
};

export default CreatedStatementOfPurpose;
