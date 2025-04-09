import { ResumeForm } from "@/api/slices/resume/resumeFormData/types";
import { TransformResumeFormType } from "@/shared/enums/resumeEnums";
import {
  ResumeCrumbArray,
  ResumeFormCompType,
  ResumeFormDataUnion,
} from "@/shared/types/componentTypes";
import { resumeAliases } from "../helperData/resume";

export const transfromPageNumber = (sz: number | string) => {
  const size = Number(sz);
  switch (size) {
    case 1:
      return "one page";
    case 2:
      return "two pages";
    default:
      return "not recognized";
  }
};

export const transformResumeForm = ({
  type,
  data,
}: {
  type:
    | TransformResumeFormType.dataToClient
    | TransformResumeFormType.dataToServer;
  data: ResumeForm | ResumeFormCompType;
}) => {
  if (!data) return;
  let transformedData: ResumeFormDataUnion = null;

  switch (type) {
    case TransformResumeFormType.dataToClient:
      Object.keys(data).forEach((dk: any) => {
        const dataKey: keyof typeof data = dk;
        const innerData: any = data[dataKey];
        let transformedInnerData = {};

        typeof innerData === "object" &&
        !Array.isArray(innerData) &&
        innerData !== null
          ? Object.keys(innerData).forEach((dk2: any) => {
              const dataKey2: keyof typeof resumeAliases = dk2;

              transformedInnerData = {
                ...transformedInnerData,
                [`${String(dataKey2)}`]: Array.isArray(innerData[dataKey2])
                  ? innerData[dataKey2].map((val, i) => ({
                      value: val,
                      error: null,
                      alias: `${resumeAliases[dataKey2]} ${i}`,
                    }))
                  : {
                      value: innerData[dataKey2],
                      error: null,
                      alias: `${resumeAliases[dataKey2]}`,
                    },
              };
            })
          : null;

        transformedData = {
          ...transformedData,
          [`${dataKey}`]: transformedInnerData,
        };
      });

      return transformedData;

    case TransformResumeFormType.dataToServer:
      Object.keys(data).forEach((dk: any) => {
        const dataKey: keyof typeof data = dk;
        const innerData: any = data[dataKey];
        let transformedInnerData = {};

        typeof innerData === "object" &&
        !Array.isArray(innerData) &&
        innerData !== null // check if innerData is an object
          ? Object.keys(innerData).forEach((dk2: any) => {
              const dataKey2: keyof typeof resumeAliases = dk2;

              transformedInnerData = {
                ...transformedInnerData,
                [`${String(dataKey2)}`]: Array.isArray(
                  innerData[dataKey2].value
                )
                  ? innerData[dataKey2].value.map(
                      (val: { value: any; error: any; alias: any }) => val.value
                    )
                  : innerData[dataKey2].value,
              };
            })
          : null;

        transformedData = {
          ...transformedData,
          [`${dataKey}`]: transformedInnerData,
        };
      });
      return transformedData;

    default:
      return null;
      break;
  }
};

export const transformCrumbsArray = (
  data: ResumeFormCompType
): ResumeCrumbArray | undefined => {
  if (!data) return;

  let transformedData: ResumeCrumbArray =
    Object.keys(data).map((dataKey: any) => {
      const dk: keyof ResumeFormCompType = dataKey;
      const innerData: any = data[dk];
      const alias = resumeAliases[dk];

      return {
        name: dataKey,
        alias: alias ?? "Section",
        value: Object.keys(innerData).map((dataKey2: any) => {
          let dk2: keyof typeof resumeAliases = dataKey2;
          return {
            name: dk2,
            alias: resumeAliases[dk2],
            error: innerData[String(dk2)]["error"],
            value: innerData[String(dk2)]["value"],
          };
        }),

        // error: data[String(dataKey)]["error"],
      };
    }) ?? [];

  console.log(transformedData);
  return transformedData;
};

// export const transformResumeDataForReview = (formData: ResumeFormCompType) => {
//   if (!formData) return;
//   // let transformedList = [];
//   return Object.keys(formData).map((section: any) => {
//     //section loop end
//     let formDataKey: keyof typeof formData = section;
//     const field = formData[`${formDataKey}`];
//     return {
//       section: resumeAliases[`${section}`], //section loop start
//       value:
//         typeof field === "object"
//           ? Object.keys(field).map((value: any, i) => {
//               //field1 start
//               const val: keyof typeof field = value;
//               const fieldValue = field[val].value;
//               return !Array.isArray(fieldValue) //field2 start
//                 ? {
//                     field: `${resumeAliases[`${val}`]}`,
//                     value: fieldValue,
//                   }
//                 : fieldValue.map((val2, index) => {
//                     return {
//                       field: `${resumeAliases[`${val}`]} ${index + 1}`, //field1 end
//                       value: Object.keys(val2).map((val2Key) => {
//                         const val3 = val2[val2Key];
//                         if (val2Key === "id") return;
//                         if (Array.isArray(val3.value)) {
//                           return val3.value.map((val4) => {});
//                         }
//                         return {
//                           field: `${val2Key}`,
//                           value: `${val3.value}`,
//                         };
//                       }),
//                       // fieldValue.map((val, index) => {
//                       //       const innerFieldVal = fieldValue[val];
//                       //       return (
//                       //         innerFieldVal &&
//                       //         Object.keys(innerFieldVal).map((item) => {
//                       //           return innerFieldVal[item];
//                       //         })
//                       //       );
//                       //       // return { field: `${val}${index}` };
//                       //     }),
//                     };
//                   });
//             })
//           : null,
//     };
//   });
// };

export const transformResumeDataForReview = (formData: ResumeFormCompType) => {
  const parsedData = [
    {
      section: "Contact",
      fields: [
        { field: "Full Name", value: formData?.header?.fullName },
        { field: "Phone Number", value: formData?.contact?.phoneNumber },
        { field: "Location", value: formData?.contact?.location },
        { field: "Email", value: formData?.contact?.emailAddress },
        {
          field: "Links and URLs",
          value: formData?.contact?.websiteLinks?.value?.map((link) => {
            return { field: link?.type, value: link?.url };
          }),
        },
      ],
    },
    {
      section: "Summary",
      fields: [
        { field: "Job title", value: formData?.header?.jobTitle },
        {
          field: "Experience level",
          value: formData?.summary?.experienceLevel,
        },
        { field: "Professional Summary", value: formData?.summary?.summary },
      ],
    },
    {
      section: "Experience",
      fields: formData?.experience?.experience?.value?.map(
        (experience, index) => ({
          field: `${
            experience?.companyName
              ? experience?.companyName
              : `Company ${index}`
          }`,
          value: [
            // field: 'Company name', value: experience?.companyName,
            { field: "Job title", value: experience?.jobTitle },
            { field: "Location", value: experience?.location },
            { field: "Start date", value: experience?.startDate },
            { field: "End date", value: experience?.endDate },
            {
              field: "Activity",
              value: experience?.experienceDescriptions?.value?.map(
                (activity, index) => ({
                  field: `Activity ${index + 1}`,
                  value: activity?.value,
                })
              ),
            },
          ],
        })
      ),
    },
    {
      section: "Skills",
      fields: formData?.skills?.skills?.value?.map((skill, index) => ({
        value: skill?.value,
      })),
    },
    // avatar: "Avatar",
    {
      section: "Education",
      fields: formData?.education?.education?.value?.map(
        (education, index) => ({
          field: `${
            education?.schoolName ? education?.schoolName : `School ${index}`
          }`,
          value: [
            // field: 'Company name', value: experience?.companyName,
            { field: "Degree", value: education?.degree },
            { field: "Location", value: education?.location },
            { field: "Start date", value: education?.startDate },
            { field: "End date", value: education?.endDate },
            // field: 'Activity', value: experience?.experienceDescriptions?.value?.map((activity,index)=>(
            //   {field: `Activity ${index+1}`, value: activity?.value}
            // ))}
          ],
        })
      ),
    },

    {
      section: "Certificate",
      fields: formData?.certificate?.certificate?.value?.map(
        (certificate, index) => ({
          field: `${
            certificate?.certificateTitle
              ? certificate?.certificateTitle
              : `Certificate ${index}`
          }`,
          value: {
            // field: 'Company name', value: experience?.companyName,
            field: "Date Awarded",
            value: certificate?.dateAwarded,

            // field: 'Activity', value: experience?.experienceDescriptions?.value?.map((activity,index)=>(
            //   {field: `Activity ${index+1}`, value: activity?.value}
            // ))}
          },
        })
      ),
    },

    {
      section: "Awards",
      fields: formData?.awards?.awards?.value?.map((award, index) => ({
        field: `${award?.awardTitle ? award?.awardTitle : `Award ${index}`}`,
        value: {
          // field: 'Company name', value: experience?.companyName,
          field: "Date Awarded",
          value: award?.dateAwarded,

          // field: 'Activity', value: experience?.experienceDescriptions?.value?.map((activity,index)=>(
          //   {field: `Activity ${index+1}`, value: activity?.value}
          // ))}
        },
      })),
    },

    {
      section: "Projects",
      fields: formData?.project?.project?.value?.map((project, index) => ({
        field: `${
          project?.projectName ? project?.projectName : `Project ${index}`
        }`,
        value: [
          // field: 'Company name', value: project?.companyName,
          { field: "Job title", value: project?.role },
          { field: "Location", value: project?.projectLink },
          { field: "Start date", value: project?.startDate },
          { field: "End date", value: project?.endDate },
          {
            field: "Activity",
            value: project?.projectDescriptions?.value?.map(
              (activity, index) => ({
                field: `Activity ${index + 1}`,
                value: activity?.value,
              })
            ),
          },
        ],
      })),
    },
    {
      section: "Involvements",
      fields: formData?.involvement?.involvement?.value?.map(
        (involvement, index) => ({
          field: `${
            involvement?.organizationName
              ? involvement?.organizationName
              : `Involvement ${index}`
          }`,
          value: [
            // field: 'Company name', value: involvement?.companyName,
            { field: "Job title", value: involvement?.role },
            { field: "Location", value: involvement?.location },
            { field: "Start date", value: involvement?.startDate },
            { field: "End date", value: involvement?.endDate },
            // field: 'Activity', value: involvement?.involvementDescriptions?.value?.map((activity,index)=>(
            //   {field: `Activity ${index+1}`, value: activity?.value}
            // ))
          ],
        })
      ),
    },
  ];

  return parsedData
};
