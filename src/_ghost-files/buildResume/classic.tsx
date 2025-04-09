// import { selectResumeForm } from "@/api/slices/resume/resumeFormData/slice";
// import { useAppSelector } from "@/lib/hooks/globalHooks";
// import useGetResumeDimensions from "@/shared/hooks/useGetResumeDimensions";
// import { ResumeFormCompType } from "@/shared/types/componentTypes";
// // import { Circle } from "@mui/icons-material";
// import React, { forwardRef, useEffect, useState } from "react";
// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   Svg,
//   Circle,
//   Link,
//   usePDF,
//   // Table
// } from "@react-pdf/renderer";
// import {
//   DocumentProps,
//   Document as PlainDoc,
//   Page as PlainPage,
// } from "react-pdf";
// import { useAsync } from "react-use";
// import styled from "@emotion/styled";
// import dynamic from "next/dynamic";
// import { styles } from "./classicResumeStyle";
// import { checkIfAnyResumeFieldFilled } from "@/lib/components/resume/resumeComponents";
// import { CircleBullet, ContactLink, HLine } from "./ClassicResumeComponents";

// const PDFViewer = dynamic(() => import("../../../components/pdf/PdfViewer"), {
//   ssr: false,
// });

// type Props = {
//   formValues: ResumeFormCompType;
//   // sampleWidth: number;
// };

// type PdfResume = {
//   jsxResume?: React.ReactElement<DocumentProps>;
// } & Props;

// const ClassicResume = ({ formValues }: Props) =>
//   // ref: React.LegacyRef<HTMLInputElement> | undefined
//   {
//     const { padding, baseText, headText, textConverter } = {
//       padding: "10px",
//       baseText: "11px",
//       headText: "16px",

//       textConverter: (text: number) => {
//         return `12px`;
//       },
//     };

//     const {
//       header: isHeaderFilled,
//       contact: isContactFilled,
//       summary: isSummaryFilled,
//       experience: isExperienceFilled,
//       skills: isSkillsFilled,
//       education: isEducationFilled,
//       awards: isAwardsFilled,
//       certificate: isCertificateFilled,
//       project: isProjectFilled,
//       involvement: isInvolvementFilled,
//     } = checkIfAnyResumeFieldFilled;

//     const contactURL = (type: string) => {
//       const contactLink = formValues?.contact?.websiteLinks?.value?.find(
//         (link) => link.type?.toLocaleLowerCase() === type.toLowerCase()
//       )?.url;
//       return contactLink;
//     };

//     return (
//       // <PDFViewer style={styles.pdfView} showToolbar={false}>

//       <Document pageMode="useNone" pageLayout={"oneColumn"} onRender={() => {}}>
//         <Page size="A4" style={styles.page} wrap>
//           <View
//             style={{
//               padding: padding,
//               fontSize: baseText,
//               fontWeight: 400,
//               width: "100%",
//             }}
//           >
//             <View style={styles.pdfContainer}>
//               {/* HEADER */}
//               {isHeaderFilled(formValues?.header) ||
//               isContactFilled(formValues?.contact) ? (
//                 <View style={styles.header}>
//                   <View
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "4px",
//                     }}
//                   >
//                     <Text
//                       style={{
//                         fontSize: "18px",
//                         fontWeight: 300,
//                         textTransform: "capitalize",
//                       }}
//                     >
//                       {formValues?.header?.fullName?.value
//                         ? formValues?.header?.fullName?.value
//                         : ""}
//                     </Text>

//                     <Text
//                       style={{ fontSize: "14px", textTransform: "capitalize" }}
//                     >
//                       {formValues?.header?.jobTitle?.value
//                         ? formValues?.header?.jobTitle?.value
//                         : ""}
//                     </Text>

//                     {/* <View
//                       style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "4px",
//                       }}
//                     >
//                       <View></View>
//                       <Link
//                         src={`https://linkedin.com/in/${contactURL(
//                           "linkedin"
//                         )}`}
//                       >
//                         {contactURL("linkedin")
//                           ? `${contactURL("linkedin")} | linkedIn`
//                           : ""}
//                       </Link>

//                       <Link src={`https://github.com/${contactURL("github")}`}>
//                         {contactURL("github")
//                           ? `${contactURL("github")} | github`
//                           : ""}
//                       </Link>
//                     </View> */}
//                   </View>

//                   <View
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "4px",
//                     }}
//                   >
//                     <Text>
//                       {formValues?.contact?.emailAddress?.value
//                         ? formValues?.contact?.emailAddress?.value
//                         : ""}
//                     </Text>
//                     <Text>
//                       {formValues?.contact?.phoneNumber?.value
//                         ? formValues?.contact?.phoneNumber?.value
//                         : ""}
//                     </Text>
//                     <Text style={{ textTransform: "capitalize" }}>
//                       {formValues?.contact?.city?.value
//                         ? formValues?.contact?.city?.value
//                         : ""}

//                       {formValues?.contact?.city?.value &&
//                         formValues?.contact?.country?.value &&
//                         " | "}

//                       {formValues?.contact?.country?.value
//                         ? formValues?.contact?.country?.value
//                         : ""}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}

//               <View style={styles.contactLinksContainer}>
//                 {formValues?.contact?.websiteLinks?.value?.map(
//                   (link) =>
//                     link.url &&
//                     link.type && <ContactLink url={link.url} type={link.type} />
//                 )}
//               </View>

//               <HLine />

//               {/* SUMMARY */}
//               {isEducationFilled(formValues?.education) ? (
//                 <View style={styles.educationContainer}>
//                   <View style={styles.title}>
//                     <Text
//                       style={{ fontSize: textConverter(14), fontWeight: 600 }}
//                     >
//                       PROFESSIONAL SUMMARY
//                     </Text>
//                   </View>

//                   <View style={styles.educationContentContainer}></View>
//                 </View>
//               ) : null}

//               {/* EDUCATION */}
//               {isEducationFilled(formValues?.education) ? (
//                 <View style={styles.educationContainer}>
//                   <View style={styles.title}>
//                     <Text
//                       style={{ fontSize: textConverter(14), fontWeight: 600 }}
//                     >
//                       EDUCATION
//                     </Text>
//                   </View>

//                   <View style={styles.educationContentContainer}>
//                     {/* <table className="table-auto border-spacing-y-3 border-separate  ">
//                       <thead>
//                         <tr>
//                           <th className="w-full "></th>
//                           <th className=""></th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {formValues?.education?.education?.value?.map(
//                           (education) => (
//                             <tr>
//                               <td className=" mr-6 flex items-start ">
//                                 <aside>
//                                   <p className="whitespace-nowrap">
//                                     {education?.schoolName?.value
//                                       ? education?.schoolName?.value
//                                       : "School Name"}
//                                   </p>
//                                   <p className="whitespace-nowrap">
//                                     {education?.degree?.value
//                                       ? education?.degree?.value
//                                       : "Degree"}
//                                   </p>
//                                 </aside>
//                               </td>
//                               <td className=" ">
//                                 <aside className="w-full">
//                                   <p className="whitespace-nowrap">
//                                     {education?.location?.value
//                                       ? education?.location?.value
//                                       : "Location"}
//                                   </p>
//                                   <div className="flex gap-1">
//                                     <p className="whitespace-nowrap">
//                                       {education?.startDate?.value
//                                         ? education?.startDate?.value
//                                         : "Start Date"}
//                                     </p>
//                                     -
//                                     <p className="whitespace-nowrap">
//                                       {education?.endDate?.value
//                                         ? education?.endDate?.value
//                                         : "End Date"}
//                                     </p>
//                                   </div>
//                                 </aside>
//                               </td>
//                             </tr>
//                           )
//                         )}
//                       </tbody>
//                     </table> */}
//                   </View>
//                 </View>
//               ) : null}

//               {/* SKILLS */}
//               {isSkillsFilled(formValues?.skills) ? (
//                 <View style={styles.skillContainer}>
//                   <View style={styles.title}>
//                     <Text
//                       style={{ fontSize: textConverter(14), fontWeight: 600 }}
//                     >
//                       SKILLS
//                     </Text>
//                   </View>

//                   <View style={[styles.skillContent, {flexWrap: "wrap"}]}>
//                     {formValues?.skills?.skills?.value?.map((skill) => (
//                       <View
//                         key={skill.value}
//                         style={[{
//                           display: "flex",
//                           flexDirection: "row",
//                           gap: "4px",
//                           alignItems: "center",
//                         }, ]}
//                       >
//                         <Text>{skill.value}</Text>
//                         {skill.skillLevel && (
//                           <View
//                             style={{
//                               display: "flex",
//                               flexDirection: "row",
//                               gap: "4px",
//                               alignItems: "center",
//                             }}
//                           >
//                             <Text>-</Text>
//                             <Text>{skill.skillLevel}</Text>
//                           </View>
//                         )}
//                       </View>
//                     ))}
//                   </View>
//                 </View>
//               ) : null}

//               {/* WORK EXPERIENCE */}
//               {isExperienceFilled(formValues?.experience) ? (
//                 <View style={styles.experienceContainer}>
//                   <View
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Text
//                       style={{ fontSize: textConverter(14), fontWeight: 600 }}
//                     >
//                       WORK EXPERIENCE
//                     </Text>
//                   </View>

//                   <View style={styles.experienceContentContainer}>
//                     {formValues?.experience?.experience?.value?.map(
//                       (experience, i) => {
//                         return (
//                           <View style={styles.experienceContents} key={i}>
//                             <View
//                               style={styles.experienceContentTitleContainer}
//                             >
//                               <View style={styles.experienceContentTitle}>
//                                 <Text>
//                                   {experience?.jobTitle?.value
//                                     ? experience?.jobTitle?.value
//                                     : "Job Title"}
//                                 </Text>
//                                 <Text>|</Text>
//                                 <Text>
//                                   {experience?.location?.value ||
//                                     "Company Location"}
//                                 </Text>
//                               </View>
//                               <View style={styles.experienceContentTitle}>
//                                 <Text>
//                                   {experience?.startDate?.value || "Start date"}
//                                 </Text>
//                                 <Text>-</Text>
//                                 <Text>
//                                   {experience?.endDate?.value || "End date"}
//                                 </Text>
//                               </View>
//                             </View>

//                             <View
//                               style={[
//                                 { marginLeft: "8px" },
//                                 styles.experienceActivityList,
//                               ]}
//                             >
//                               {experience.experienceDescriptions?.value?.map(
//                                 (activity) => (
//                                   <View
//                                     style={styles.experienceActivity}
//                                     key={activity.id}
//                                   >
//                                     <CircleBullet />

//                                     <Text style={{ paddingVertical: 0 }}>
//                                       {activity.value}
//                                     </Text>
//                                   </View>
//                                 )
//                               )}
//                             </View>
//                           </View>
//                         );
//                       }
//                     )}
//                   </View>
//                 </View>
//               ) : null}

//               {/* PROJECTS */}
//               {isProjectFilled(formValues?.project) ? (
//                 <View style={styles.projectContainer}>
//                   <View style={styles.title}>
//                     <Text
//                       style={{ fontSize: textConverter(14), fontWeight: 600 }}
//                     >
//                       PROJECTS
//                     </Text>
//                   </View>

//                   <View style={styles.projectContentContainer}>
//                     {formValues?.project?.project?.value?.map((project) => {
//                       return (
//                         <View style={styles.projectContents} key={project.id}>
//                           <View style={styles.projectContentTitleContainer}>
//                             <View style={styles.projectContentTitle}>
//                               <Text>{project?.projectName?.value}</Text>
//                               <Text>|</Text>
//                               <Link>{project?.projectLink?.value}</Link>
//                             </View>
//                             <View style={styles.projectContentTitle}>
//                               <Text>{project?.startDate?.value}</Text>
//                               <Text>-</Text>
//                               <Text>{project?.endDate?.value}</Text>
//                             </View>
//                           </View>

//                           <View
//                             style={[
//                               { marginLeft: "8px" },
//                               styles.projectActivityList,
//                             ]}
//                           >
//                             {project.projectDescriptions?.value?.map(
//                               (activity) => (
//                                 <View
//                                   style={styles.projectActivity}
//                                   key={activity.id}
//                                 >
//                                   <CircleBullet />
//                                   <Text>{activity.value}</Text>
//                                 </View>
//                               )
//                             )}
//                           </View>
//                         </View>
//                       );
//                     })}
//                   </View>
//                 </View>
//               ) : null}

//               {/* CERTIFICATES */}
//               {isCertificateFilled(formValues?.certificate) ? (
//                 <View style={styles.certificateContainer}>
//                   <View style={styles.title}>
//                     <Text
//                       style={{ fontSize: textConverter(14), fontWeight: 600 }}
//                     >
//                       CERTIFICATES
//                     </Text>
//                   </View>

//                   <View style={styles.certificateContentContainer}></View>
//                 </View>
//               ) : null}

//               {/* AWARDS */}
//               {isAwardsFilled(formValues?.awards) ? (
//                 <View style={styles.awardsContainer}>
//                   <View style={styles.title}>
//                     <Text
//                       style={{ fontSize: textConverter(14), fontWeight: 600 }}
//                     >
//                       AWARDS
//                     </Text>
//                   </View>

//                   <View style={styles.awardsContentContainer}></View>
//                 </View>
//               ) : null}

//               {/* INVOLVEMENT */}
//               {isInvolvementFilled(formValues?.involvement) ? (
//                 <View style={styles.involvementContainer}>
//                   <View style={styles.title}>
//                     <Text
//                       style={{ fontSize: textConverter(14), fontWeight: 600 }}
//                     >
//                       INVOLVEMENT
//                     </Text>
//                   </View>

//                   <View style={styles.involvementContentContainer}></View>
//                 </View>
//               ) : null}
//             </View>
//           </View>
//         </Page>
        
//       </Document>
//     );
//   };

// export default React.memo(ClassicResume);
