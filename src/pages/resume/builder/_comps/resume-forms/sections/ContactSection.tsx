import React, { useState } from "react";
import { pryTextColor, secTextColor } from "@/assets/css/tailwindcss";
import AddButton from "@/components/buttons/AddButton";
import FmkInput from "@/components/formik/FmkInput";
import CustomTextField from "@/components/inputs/CustomTextField";
import TitleCenteredSection from "@/components/sections/TitleSection";
import {
  ResumeContactInfoTypes,
  ResumeFormCompType,
} from "@/shared/types/componentTypes";
import { Field, FieldArray, FormikErrors } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "@/assets/css/comps/input.css";
import {
  resumeContactInfoIcons,
  resumeContactInfoMeta,
} from "@/lib/components/resume/resumeComponents";
import { Remove } from "@mui/icons-material";
import { ResumeContactInfoEnum } from "@/shared/enums/resumeEnums";
import { countArrObj } from "@/utils/helperFunctions/arrayFunctions";
import { v4 as uuidv4 } from "uuid";
import DropDownSearch from "@/components/inputs/DropDownSearch";
import WidgetCard from "@/components/card/WidgetCard";
import { cn } from "@/utils";

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

const webLinks: Array<{
  id: keyof typeof ResumeContactInfoEnum;
  alias: string;
}> = [
  { id: "portfolioLink", alias: "Portfolio Link or Personal Website" },
  { id: "linkedIn", alias: "linkedIn" },
  { id: "medium", alias: "medium" },
  { id: "github", alias: "github" },
  { id: "twitter", alias: "twitter" },
];

const ContactSection = ({ formValues, setFieldValue }: ContactInfoPropType) => {
  const [contactInfoLinks, setContactInfoLinks] = useState<ContactInfoType[]>(
    []
  );
  const selectedWebLinks = formValues?.contact?.websiteLinks?.value ?? [];
  return (
    <div className={"flex flex-col gap-3"}>
      <WidgetCard>
        <section className={`flex flex-col gap-3 ${pryTextColor}`}>
          <div className={`flex flex-wrap gap-3`}>
            <div className="flex-1 min-w-fit max-w-[700px] w-fit">
              {/* <p className={`capitalize ${secTextColor}`}>Full name</p> */}
              <FmkInput
                placeholder="Full Name"
                id="header.fullName.value"
                className="w-full max-w-[700px]"
                name="header.fullName.value"
                type="text"
                label={
                  <p>
                    What is your{" "}
                    <span className={cn(`font-semibold ${pryTextColor}`)}>
                      Full Name
                    </span>
                    ?
                  </p>
                }
                // optional
                // label="Full Name"
              />
            </div>

            <div className="flex-1 min-w-fit max-w-[700px] w-fit">
              {/* <p className={`capitalize ${secTextColor}`}>Email</p> */}
              <FmkInput
                id="resume_email"
                name={"contact.emailAddress.value"}
                type="email"
                className="w-full max-w-[700px]"
                label={
                  <p>
                    What is your{" "}
                    <span className={cn(`font-semibold ${pryTextColor}`)}>
                      Email Address
                    </span>
                    ?
                  </p>
                }
                // label="Email"
                placeholder="Email address you can be contacted by the employer"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* country */}
            <div className="flex-1 min-w-fit max-w-[700px] w-fit ">
              {/* <p className={`capitalize ${secTextColor}`}>Country</p> */}
              <FmkInput
                inputProps={{
                  placeholder: "Select country",
                  name: `contact.country.value`,
                  id: "country",
                  // className: "w-full",
                  freeSolo: true,

                  options: [
                    { display: "Entry Level", id: "entryLevel" },
                    { display: "Intermediate Level", id: "intermediateLevel" },
                  ],
                  fullWidth: true,
                }}
                name={`contact.country.value`}
                inputComp={DropDownSearch}
                setFieldValue={setFieldValue}
                label={
                  <p>
                    What is your{" "}
                    <span className={cn(`font-semibold ${pryTextColor}`)}>
                      Country of Residence
                    </span>
                    ?
                  </p>
                }
                optional
              />
            </div>

            <div className="flex-1 min-w-fit max-w-[700px] w-fit">
              {/* <p className={`capitalize ${secTextColor}`}>City</p> */}
              <FmkInput
                inputProps={{
                  placeholder: "Select city",
                  name: `contact.city.value`,
                  id: "city",
                  className: "w-full",
                  freeSolo: true,

                  options: [
                    { display: "Entry Level", id: "entryLevel" },
                    { display: "Intermediate Level", id: "intermediateLevel" },
                  ],
                  fullWidth: true,
                }}
                name={`contact.city.value`}
                inputComp={DropDownSearch}
                setFieldValue={setFieldValue}
                label={
                  <p>
                    What is your{" "}
                    <span className={cn(`font-semibold ${pryTextColor}`)}>
                      City of Residence
                    </span>
                    ?
                  </p>
                }
                optional
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* phone */}
            <div className="flex-1 max-w-[800px]">
              <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                What is your{" "}
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  Mobile Number
                </span>
                ?
              </p>

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
                      containerClass={"group/phone-number-input w-full "}
                      inputClass={
                        "bg-[transparent!important] dark:text-dark_primary_text group-hover/phone-number-input:border-[#0DD354!important]  border-[#D9D9D9!important] dark:border-[rgb(217_217_217_/_0.6)_!important] py-[1.2rem!important] dark:placeholder:text-[#D9D9D9!important]/55"
                      }
                      dropdownClass="bg-[white!important] dark:bg-[#2C2C2C!important] dark:text-dark_primary_text"
                      buttonClass="bg-[transparent!important] dark:bg-[transparent_!important] dark:hover:bg-[transparent_!important] border-[#D9D9D9!important] dark:border-[rgb(217_217_217_/_0.6)_!important] group-hover/phone-number-input:border-[#0DD354!important]"
                      searchClass="bg-[transparent!important] dark:bg-[transparent!important]"
                    />
                  );
                }}
              </Field>
            </div>
          </div>
        </section>
      </WidgetCard>

      <TitleCenteredSection
        title="Links"
        withLine
        plain
        description={
          <p className={cn(`${secTextColor}`)}>
            <span className={cn(`${pryTextColor}`)}>Add External Links</span> to
            your resume <span className="text-primary">{"(optional)"}</span> E.g
            Portfolio Links, Website Links, Blogs, Socials...
          </p>
        }
      >
        <FieldArray
          name="contact.websiteLinks.value"
          render={(arrayHelpers) => (
            <>
              <div className="w-full flex flex-wrap gap-2 mb-4">
                {/* <AddButton >
                  <Language />
                  <p> Personal / Portfolio Website</p>
                </AddButton> */}

                {webLinks.map((link) => {
                  const type = ResumeContactInfoEnum[link.id];
                  const Icon = link.id
                    ? resumeContactInfoIcons[link.id]
                    : resumeContactInfoIcons["portfolioLink"];
                  const arrCount = countArrObj(contactInfoLinks, type, "type");
                  return (
                    <AddButton
                      key={link.id}
                      onClick={() =>
                        arrayHelpers.unshift({
                          type,
                          url: "",
                          error: null,
                          id: uuidv4(),
                          alias: link.alias,
                        })
                      }
                      disabled={arrCount >= 2}
                      amount={arrCount}
                    >
                      <Icon />
                      <p className="text-sm md:text-base">{link.alias}</p>
                    </AddButton>
                  );
                })}
              </div>

              <div className="w-full flex flex-col gap-2 justify-start">
                {selectedWebLinks.map((link, i) => {
                  const Icon = link?.type
                    ? resumeContactInfoIcons[link.type]
                    : resumeContactInfoIcons["portfolioLink"];

                  const inputMeta = link?.type
                    ? {
                        linkPrefix: resumeContactInfoMeta[link.type].linkPrefix,
                        placeholder:
                          resumeContactInfoMeta[link.type].placeholder,
                      }
                    : {
                        linkPrefix:
                          resumeContactInfoMeta["portfolioLink"].linkPrefix,
                        placeholder:
                          resumeContactInfoMeta["portfolioLink"].placeholder,
                      };
                  return (
                    <div
                      className={"w-full flex gap-2 items-center text-sm"}
                      key={link.type}
                    >
                      <FmkInput
                        id={`resume_link${i}`}
                        name={`contact.websiteLinks.value[${i}].url`}
                        placeholder={inputMeta.placeholder}
                        adornment={
                          <div
                            className={`flex gap-1 items-center text-grey_icon/60 dark:text-dark_primary_text/60`}
                          >
                            {Icon && <Icon />}
                            <p className={`${pryTextColor}`}>
                              {inputMeta.linkPrefix}
                            </p>
                          </div>
                        }
                        // value={'ff'}
                        autoFocus
                      />
                      <button
                        onClick={() => {
                          arrayHelpers.remove(i);
                        }}
                        className={"text-red-400 text-sm flex items-center"}
                      >
                        <Remove sx={{ fontSize: "23px" }} />
                        <p>remove</p>
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        />
      </TitleCenteredSection>
    </div>
  );
};

export default ContactSection;
