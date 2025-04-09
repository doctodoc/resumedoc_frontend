import { pryTextColor, secTextColor } from "@/assets/css/tailwindcss";
import CurvedButton from "@/components/buttons/CurvedButton";
import AddSectionCard from "@/components/card/AddSectionCard";
import {
  Context,
  useCardContext,
} from "@/components/card/CollapsedCard";
import FmkInput from "@/components/formik/FmkInput";
import DateInput from "@/components/inputs/DateInput";
import InputWithTag from "@/components/inputs/InputWithTag";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { CertificateObjectType, SetFieldValue } from "@/shared/types/formTypes";
import { cn } from "@/utils";
import { Add } from "@mui/icons-material";
import { FieldArray, FieldArrayRenderProps } from "formik";
import React, { useState } from "react";

interface ResumeCertPropTypes {
  formValues: ResumeFormCompType;
  setFieldValue: SetFieldValue;
}

const CerificateSection = ({
  formValues,
  setFieldValue,
}: ResumeCertPropTypes) => {
  const { activeCards, collapseCard, activateCard, setActiveCards } =
    useCardContext() as Context;
  const certificateList = formValues?.certificate?.certificate?.value ?? [];
  const handleCertificateField = ({
    val,
    k,
    i,
  }: {
    val: string;
    k: string;
    i: string;
  }) => {
    // setCertificateList(
    //   certificateList.map((certificate, index) =>
    //     index === Number(i) ? { ...certificate, [k]: val } : certificate
    //   )
    // );
  };

  const addCertificate = (arrayHelpers: FieldArrayRenderProps) => {
    arrayHelpers.unshift({
      certificateTitle: {
        value: "",
      },
      dateAwarded: { value: "" },
    });
  };

  const showCard = (i: number) => {
    if (activateCard) {
      activateCard(i);
    }
  };

  const collapse = (id?: number) => {
    // console.log("clicked collapse ");
    if (collapseCard && typeof id === "number") {
      collapseCard(id);
    }
  };
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <FieldArray
        name="certificate.certificate.value"
        render={(arrayHelpers) => (
          <div className={"flex flex-col items-start gap-3 w-full"}>
            <CurvedButton
              className="bg-primary text-white flex gap-3 w-fit"
              py={"1"}
              onClick={() => addCertificate(arrayHelpers)}
            >
              <p>Add Certificate</p>
              <Add />
            </CurvedButton>
            {certificateList.map((cert, index) => (
              <Certificate
                key={`${index}`}
                certificateTitle={cert?.certificateTitle?.value ?? ""}
                dateAwarded={cert?.dateAwarded?.value ?? ""}
                id={`${index}`}
                numberOfCertificates={certificateList.length}
                handleCertificateField={handleCertificateField}
                handleDeleteEntry={() => {
                  arrayHelpers.remove(index);
                }}
                index={index}
                setFieldValue={setFieldValue}
                activateCard={() => showCard(index)}
                collapse={collapse}
                collapsed={activeCards.findIndex((card) => card === index) < 0}
              />
            ))}
          </div>
        )}
      />
    </div>
  );
};

interface CertPropTypes extends CertificateObjectType {
  handleDeleteEntry: (id: string) => void;
  id: string;
  index: number;
  numberOfCertificates: number;
  handleCertificateField: ({
    val,
    k,
    i,
  }: {
    val: string;
    k: string;
    i: string;
  }) => void;
  setFieldValue: SetFieldValue;
  activateCard: (id: number) => void;
  collapse: (id?: number) => void;
  collapsed: boolean;
}

const Certificate = ({
  certificateTitle,
  dateAwarded,
  id,
  numberOfCertificates,
  handleCertificateField,
  handleDeleteEntry,
  index,
  setFieldValue,
  activateCard,
  collapse,
  collapsed,
}: CertPropTypes) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleCertificateField({ val: e.target.value, k: e.target.name, i: id });
  };

  return (
    <AddSectionCard
      id={id}
      totalCard={numberOfCertificates}
      handleDeleteEntry={handleDeleteEntry}
      className={"flex flex-col gap-3"}
      collapsed={collapsed}
      title={`Certificate ${certificateTitle}`}
      // subtitle={`Role  ${role}`}
      collapse={() => collapse(index)}
      activateCard={(index) => activateCard(index)}
    >
      <div className="flex gap-3 flex-1 flex-wrap">
        <div className="flex-1 min-w-fit max-w-[700px] w-fit">
          {/* <p className={`capitalize ${secTextColor}`}>Certificate Title</p> */}

          <FmkInput
            // placeholder="Certificate Title"
            name={`certificate.certificate.value[${index}].certificateTitle.value`}
            id="certificateTitle"
            placeholder="Certificate Title"
            title="Certificate Title"
            label={
              <p>
                What is the{" "}
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  title of your certificate
                </span>
                ?
              </p>
            }
            className="flex-1"
          />
        </div>

        <div className="flex-1 min-w-[200px] max-w-[700px]">
          {/* <p className={`capitalize ${secTextColor}`}>certificate Link or URL</p> */}
          {/* project LINK*/}
          <FmkInput
            placeholder="Link to certificate e.g https://coursedo.com/python-mastery"
            id="certificateLink"
            // label={"Project Link"}
            name={`certificate.certificate.value[${index}].certificateLink.value`}
            className="flex-1"
            label={
              <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                Paste a
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  {" link to the certificate "}
                </span>
              </p>
            }
            optional
          />
        </div>
      </div>
      <div className="flex-1 min-w-fit max-w-[700px] w-fit">
        {/* <p className={`capitalize ${secTextColor}`}>Certificate Date</p> */}

        <FmkInput
          inputProps={{
            placeholder: "Date of Certificate",
            id: "certificateDate",
            name: `certificate.certificate.value[${index}].dateAwarded.value`,
          }}
          inputComp={DateInput}
          name={`certificate.certificate.value[${index}].dateAwarded.value`}
          setFieldValue={setFieldValue}
          title="Certificate Date"
          label={
            <p>
              What is the{" "}
              <span className={cn(`font-semibold ${pryTextColor}`)}>
                date your certificate was awarded
              </span>
              ?
            </p>
          }
          optional
        />
      </div>
    </AddSectionCard>
  );
};

export default CerificateSection;
