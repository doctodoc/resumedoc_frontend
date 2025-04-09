import CurvedButton from "@/components/buttons/CurvedButton";
import AddSectionCard from "@/components/card/AddSectionCard";
import FmkInput from "@/components/formik/FmkInput";
import DateInput from "@/components/inputs/DateInput";
import InputWithTag from "@/components/inputs/InputWithTag";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { CertificateObjectType } from "@/shared/types/formTypes";
import { Add } from "@mui/icons-material";
import { FieldArray } from "formik";
import React, { useState } from "react";

interface ResumeCertPropTypes {
  formValues: ResumeFormCompType;
}

const ResumeCert = ({ formValues }: ResumeCertPropTypes) => {
  // const [certificateList, setCertificateList] = useState<
  //   CertificateObjectType[]
  // >([certificateShape]);

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

  const handleDeleteCertEntry = (id: string) => {
    // setCertificateList(certificateList.filter((exp, i) => id !== `${i}`));
  };

  const addCertificate = () => {
    // setCertificateList([...certificateList, certificateShape]);
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <FieldArray
        name="certificate.certificate.value"
        render={(arrayHelpers) => (
          <>
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
              />
            ))}
            <CurvedButton
              className="bg-primary text-white flex gap-3 w-fit"
              py={"2"}
              onClick={() => {
                arrayHelpers.push(certificateShape);
              }}
            >
              <p>Add Certificate</p>
              <Add />
            </CurvedButton>
          </>
        )}
      />
    </div>
  );
};

const certificateShape = {
  certificateTitle: {
    value: "",
  },
  dateAwarded: { value: "" },
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
}

const Certificate = ({
  certificateTitle,
  dateAwarded,
  id,
  numberOfCertificates,
  handleCertificateField,
  handleDeleteEntry,
  index,
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
    >
      <div className="flex gap-3 flex-1 justify-between">
        <FmkInput
          placeholder="Certificate Title"
          name={`certificate.certificate.value[${index}].certificateTitle.value`}
          id="certificateTitle"
          label="Certificate Title"
          title="Certificate Title"
          className="flex-1"
        />

        <FmkInput
          inputProps={{
            placeholder: "Date of Certificate",
            id: "certificateDate",
            name: `certificate.certificate.value[${index}].dateAwarded.value`,
          }}
          inputComp={DateInput}
          name={`certificate.certificate.value[${index}].dateAwarded.value`}
        />
      </div>
    </AddSectionCard>
  );
};

export default ResumeCert;
