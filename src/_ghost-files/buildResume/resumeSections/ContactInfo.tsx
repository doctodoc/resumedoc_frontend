import { MediumIcon, TwitterIcon } from "@/assets/svg";
import AddButton from "@/components/buttons/AddButton";
import FmkInput from "@/components/formik/FmkInput";
import DropDownSearch from "@/components/inputs/DropDownSearch";
import InputField from "@/components/inputs/InputField";
import { resumeContactInfoIcons } from "@/lib/components/resume/resumeComponents";
import { ResumeContactInfoEnum } from "@/shared/enums/resumeEnums";
import {
  ResumeContactInfoTypes,
  ResumeFormCompType,
} from "@/shared/types/componentTypes";
import { countArrObj } from "@/utils/helperFunctions/arrayFunctions";
import {
  BusinessCenter,
  GitHub,
  Language,
  LinkedIn,
  Remove,
} from "@mui/icons-material";
import { Field, FormikErrors, useFormikContext } from "formik";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { v4 as uuidv4 } from "uuid";
import "react-phone-input-2/lib/style.css";
import "@/assets/css/comps/input.css";
import CustomTextDropDown from "@/components/inputs/CustomTextDropDown";

type ContactInfoType = {
  type: keyof ResumeContactInfoTypes;
  url: string;
  alias: string;
  id: string;
};

type ContactInfoPropType = {
  setFieldValue?: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<ResumeFormCompType>>;
  formValues?: ResumeFormCompType;
};

type ContactInfoInputType = {
  type: keyof ResumeContactInfoTypes;
  handleDelete: (id: string) => void;
  handleInputChange: ({ id, val }: { id: string; val: string }) => void;
  url: string;
  id: string;
  alias: string;
};

type AddContactInfoType = {
  type: keyof ResumeContactInfoTypes;
  alias: string;
  id: string;
};

const ContactInfo = ({ setFieldValue, formValues }: ContactInfoPropType) => {
  const [contactInfoLinks, setContactInfoLinks] = useState<ContactInfoType[]>(
    []
  );
  const [phoneData, setPhoneData] = useState<{
    country: string;
    phoneNumber: string;
  }>({ country: "", phoneNumber: "" });

  // const { setFieldValue } = useFormikContext();

  const handleDeleteContactInfoLink = (id: string) => {
    setContactInfoLinks(contactInfoLinks.filter((link) => link.id !== id));
  };

  const handleChangeContactInfoLink = ({
    val,
    id,
  }: {
    val: string;
    id: string;
  }) => {
    setContactInfoLinks(
      contactInfoLinks.map((link) =>
        link.id === id ? { ...link, url: val } : link
      )
    );
  };

  const addContactInfo = ({ type, alias, id }: AddContactInfoType) => {
    setContactInfoLinks([...contactInfoLinks, { type, url: "", alias, id }]);
  };

  const handlePhone = ({ name, value }: any) => {
    console.log(`${name}: ${value}`);
    setPhoneData((prevData) => ({ ...prevData, [`${name}`]: value }));
  };

  // const countContactLink = (arr:ContactInfoType[], value: string, k: keyof ContactInfoType )=>{
  // return arr.reduce((a, i)=> value === i[k] ? a + 1: a , 0)
  // }

  return (
    <div>
      <div className="w-full flex flex-col gap-3 items-center">
        <section className="w-full flex flex-col justify-center py-4">
          <div className="flex flex-col gap-5">
            {/* email */}
            <div className="max-w-[500px]">
              <FmkInput
                id="resume_email"
                name={"contact.emailAddress.value"}
                type="email"
                label="Email"
                placeholder="Email address you can be contacted by the employer"
              />
            </div>

            {/* phone */}
            <div className="max-w-[500px]">
              <Field>
                {({
                  field,
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }: any) => {
                  return (
                    <PhoneInput
                      inputProps={{
                        name: "contact.phoneNumber.value",
                        id: "contact.phoneNumber.value",
                        value: formValues?.contact?.phoneNumber?.value,
                      }}
                      // value={`${val}`}
                      onChange={(val, country, e, formattedValue) => {
                        setFieldValue &&
                          setFieldValue(
                            "contact.phoneNumber.value",
                            formattedValue
                          );
                      }}
                      autoFormat={true}
                      containerClass={
                        "group/phone-number-input w-fit max-w-fit"
                      }
                      inputClass={
                        "bg-[transparent!important] dark:text-dark_primary_text group-hover/phone-number-input:border-[#0DD354!important]  border-[#D9D9D9!important] dark:border-[#D9D9D9!important]/60 py-[1.2rem!important] dark:placeholder:text-[#D9D9D9!important]/55"
                      }
                      dropdownClass="bg-[white!important] dark:bg-[#2C2C2C!important] dark:text-dark_primary_text dark:hover:bg-[red_!important]"
                      buttonClass="bg-[transparent!important] dark:bg-[transparent!important] dark:hover:bg-[transparent!important] border-[#D9D9D9!important] dark:border-[#D9D9D9!important]/60 group-hover/phone-number-input:border-[#0DD354!important]"
                      searchClass="bg-[transparent!important] dark:bg-[transparent!important]"
                    />
                  );
                }}
              </Field>
            </div>

            <div className={"max-w-[500px]"}>
              <FmkInput
                id="resume_location"
                name={"contact.location.value"}
                type="location"
                label="Location"
                placeholder="Select a City, State or Country"
              />
            </div>

            {/* Website */}
            <div className=" flex flex-col gap-3">
              <div>
                <h1 className=" dark:text-dark_secondary_text font-medium">
                  Website and Links
                </h1>
                <p className="text-secondary_text dark:text-dark_secondary_text text-base font-light">
                  You can add more than one contact link by clicking on the same
                  button
                </p>
              </div>

              <div className="w-full flex flex-wrap gap-2 mb-4">
                {/* <AddButton >
                  <Language />
                  <p> Personal / Portfolio Website</p>
                </AddButton> */}

                <AddButton
                  onClick={() =>
                    addContactInfo({
                      type: ResumeContactInfoEnum.portfolioLink,
                      id: uuidv4(),
                      alias: "portfolio or website",
                    })
                  }
                  disabled={
                    countArrObj(
                      contactInfoLinks,
                      ResumeContactInfoEnum.portfolioLink,
                      "type"
                    ) >= 2
                  }
                  amount={countArrObj(
                    contactInfoLinks,
                    ResumeContactInfoEnum.portfolioLink,
                    "type"
                  )}
                >
                  <BusinessCenter />
                  <p> Personal / Portfolio Website</p>
                </AddButton>

                <AddButton
                  onClick={() =>
                    addContactInfo({
                      type: ResumeContactInfoEnum.linkedIn,
                      id: uuidv4(),
                      alias: "linkedIn",
                    })
                  }
                  disabled={Boolean(
                    countArrObj(
                      contactInfoLinks,
                      ResumeContactInfoEnum.linkedIn,
                      "type"
                    )
                  )}
                  amount={countArrObj(
                    contactInfoLinks,
                    ResumeContactInfoEnum.linkedIn,
                    "type"
                  )}
                >
                  <LinkedIn />
                  <p>LinkedIn</p>
                </AddButton>

                <AddButton
                  onClick={() =>
                    addContactInfo({
                      type: ResumeContactInfoEnum.github,
                      id: uuidv4(),
                      alias: "github",
                    })
                  }
                  disabled={Boolean(
                    countArrObj(
                      contactInfoLinks,
                      ResumeContactInfoEnum.github,
                      "type"
                    )
                  )}
                  amount={countArrObj(
                    contactInfoLinks,
                    ResumeContactInfoEnum.github,
                    "type"
                  )}
                >
                  <GitHub />
                  <p>Github</p>
                </AddButton>

                <AddButton
                  onClick={() =>
                    addContactInfo({
                      type: ResumeContactInfoEnum.medium,
                      id: uuidv4(),
                      alias: "medium",
                    })
                  }
                  disabled={Boolean(
                    countArrObj(
                      contactInfoLinks,
                      ResumeContactInfoEnum.medium,
                      "type"
                    )
                  )}
                  amount={countArrObj(
                    contactInfoLinks,
                    ResumeContactInfoEnum.medium,
                    "type"
                  )}
                >
                  <MediumIcon className={"text-white"} />
                  <p>Medium</p>
                </AddButton>
                <AddButton
                  onClick={() =>
                    addContactInfo({
                      type: ResumeContactInfoEnum.twitter,
                      id: uuidv4(),
                      alias: "twitter",
                    })
                  }
                  disabled={Boolean(
                    countArrObj(
                      contactInfoLinks,
                      ResumeContactInfoEnum.twitter,
                      "type"
                    )
                  )}
                  amount={countArrObj(
                    contactInfoLinks,
                    ResumeContactInfoEnum.twitter,
                    "type"
                  )}
                >
                  <TwitterIcon className="text-whites" />
                  <p>Twitter</p>
                </AddButton>
              </div>

              <div className="w-full flex flex-col gap-2 justify-start">
                {contactInfoLinks.map((link, i) => (
                  <ContactInfoInput
                    type={link.type}
                    handleDelete={handleDeleteContactInfoLink}
                    handleInputChange={handleChangeContactInfoLink}
                    id={link.id}
                    url={link.url}
                    alias={link.alias}
                    key={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <CurvedButton
          className="bg-primary text-white flex gap-3 w-fit"
          py={"2"}
        >
          <p>Add Contact </p>
          <Add />
        </CurvedButton> */}
      </div>
    </div>
  );
};

const ContactInfoInput = ({
  type,
  alias,
  handleDelete,
  handleInputChange,
  url,
  id,
}: ContactInfoInputType) => {
  const Icon = resumeContactInfoIcons[type];

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const val = ev.target.value;
    handleInputChange({ val, id });
  };

  return (
    <div className={"w-full flex gap-2 items-center text-sm"}>
      <InputField
        id={id}
        handleChange={handleChange}
        value={url}
        isOutlined
        containerClass="w-full max-w-[600px]"
        placeholder={`Please enter your ${alias} link`}
        icon={Icon}
        iconClass="text-gray-500/[20] text-[14px]"
        autoFocus
      />
      <button
        onClick={() => handleDelete(id)}
        className={"text-red-400 text-sm flex items-center"}
      >
        <Remove sx={{ fontSize: "23px" }} />
        <p>remove</p>
      </button>
    </div>
  );
};

export default ContactInfo;
