// https://x.com/atulkumarzz/status/1817791895105667570/photo/1

import { ResumeFormCompType } from "@/shared/types/componentTypes";
import React, { Fragment, memo, useEffect } from "react";
import { DocumentProps } from "react-pdf";
import { cn, isEmptyString, isUrl } from "@/utils/";
import { get } from "lodash";
import { useAppSelector } from "@/lib/hooks/globalHooks";
import { selectResumeForm } from "@/api/slices/resume/resumeFormData/slice";
import { AppearanceType } from "@/schema/resume/appearanceSchema";
import LinkText, { LinkedEntity } from "@/components/texts/LinkText";
import { resumeAliases, SkillCategoryAlias } from "@/utils/helperData/resume";

type Props = {
  formValues: ResumeFormCompType;
  resumeAppearance: AppearanceType;
  // sampleWidth: number;
};

// type PdfResume = {
//   jsxResume?: React.ReactElement<DocumentProps>;
// } & Props;
const Header = ({ formValues, resumeAppearance }: Props) => {
  const header: ResumeFormCompType["header"] = formValues["header"];
  const contact: ResumeFormCompType["contact"] = formValues["contact"];

  useEffect(() => console.log(header), [header]);

  return (
    <section className="flex items-start justify-between space-y-2">
      {/* <Picture /> */}

      <aside className="flex flex-col gap-3">
        <div className="flex flex-col">
          <div className="text-2xl font-bold">{header?.fullName?.value}</div>
          <div className="text-lg">{header?.jobTitle?.value}</div>
        </div>
        <div className="flex flex-col">
          {contact?.websiteLinks?.value?.map(
            (link, i) =>
              typeof link.url == "string" && (
                <LinkText link={link.url} key={`${i}`} underline>
                  {link.url}
                </LinkText>
              )
          )}
        </div>
      </aside>

      <aside className="flex flex-col gap-1">
        <div className="flex gap-1">
          <p>Email:</p>
          <p>{contact?.emailAddress?.value}</p>
        </div>
        <div className="flex gap-1">
          <p>Mobile:</p>
          <p>{contact?.phoneNumber?.value}</p>
        </div>
      </aside>
    </section>
  );
};

const Education = ({ formValues, resumeAppearance }: Props) => {
  const education: ResumeFormCompType["education"] = formValues["education"];

  return (
    <div className="flex flex-col items-center space-y-2">
      <p className="capitalize text-lg font-semibold">EDUCATION</p>
      {education?.education?.value?.map((item, i) => (
        <section className="flex justify-between w-full" key={i}>
          <aside className="flex flex-col gap-1">
            <div className=" font-bold">{item?.schoolName?.value}</div>
            <div className="">{item?.degree?.value}</div>
          </aside>

          <aside className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 ">
              <p>
                {item?.city?.value}, {item?.country?.value}
              </p>
              <p className="font-semibold">
                {item?.startDate?.value} - {item?.endDate?.value}
              </p>
            </div>
          </aside>
        </section>
      ))}
    </div>
  );
};

const Experience = ({ formValues, resumeAppearance }: Props) => {
  const experience: ResumeFormCompType["experience"] = formValues["experience"];

  return (
    <div className="flex flex-col items-center  space-y-2">
      <p className="text-lg font-semibold">EXPERIENCE</p>
      {experience?.experience?.value?.map((item, i) => (
        <main className="flex flex-col gap-2 " key={i}>
          <section className="flex justify-between items-center">
            <aside className="flex flex-col gap-1">
              <div className=" font-bold">
                {item?.companyName?.value} | {item?.country?.value}
              </div>
            </aside>

            <aside className="flex flex-col gap-1">
              <div className="flex flex-col gap-1 ">
                {/* <p>{item?.city?.value}, {item?.country?.value}</p> */}
                <p className="font-semibold">
                  {item?.startDate?.value} - {item?.endDate?.value}
                </p>
              </div>
            </aside>
          </section>

          {item?.experienceDescriptions?.value && (
            <section
              className="ml-9 wysiwyg"
              dangerouslySetInnerHTML={{
                __html: item?.experienceDescriptions?.value[0].value ?? "",
              }}
            >
              {/* <ul>
              {item?.experienceDescriptions?.value?.map((desc, i) => (
                <li key={i} className="list-disc list-inside">
                  {desc.value}
                </li>
              ))}
            </ul> */}
            </section>
          )}
        </main>
      ))}
    </div>
  );
};

const Project = ({ formValues, resumeAppearance }: Props) => {
  const project: ResumeFormCompType["project"] = formValues["project"];

  return (
    <div className="flex flex-col items-center space-y-2">
      <p className="text-lg font-semibold">PROJECT</p>
      {project?.project?.value?.map((item, i) => (
        <main className="flex flex-col gap-2 " key={i}>
          <section className="flex gap-2 justify-between">
            <aside className="flex flex-col gap-1">
              <div className="flex gap-1 font-bold">
                <p>{item?.projectName?.value}</p> <p>|</p>
                {item?.projectLink?.value && (
                  <LinkedEntity
                    name={"LINK"}
                    url={{ href: item?.projectLink?.value, label: "LINK" }}
                    underline
                  />
                )}
              </div>
            </aside>

            <aside className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 ">
                {/* <p>{item?.city?.value}, {item?.country?.value}</p> */}
                <p className="font-semibold">
                  {item?.startDate?.value} - {item?.endDate?.value}
                </p>
              </div>
            </aside>
          </section>

          {item?.projectDescriptions?.value && (
            <section
              className="ml-9"
              dangerouslySetInnerHTML={{
                __html: item?.projectDescriptions?.value[0].value ?? "",
              }}
            >
              {/* <ul>
              {item?.projectDescriptions?.value?.map((desc, i) => (
                <li key={i} className="list-disc list-inside">
                  {desc.value}
                </li>
              ))}
            </ul> */}
            </section>
          )}
        </main>
      ))}
    </div>
  );
};

const Certificate = ({ formValues, resumeAppearance }: Props) => {
  const certificate: ResumeFormCompType["certificate"] =
    formValues["certificate"];

  return (
    <div className="flex flex-col items-center  space-y-2">
      <p className="text-lg font-semibold">CERTIFICATE</p>
      {certificate?.certificate?.value?.map((item, i) => (
        <main
          className="w-full flex flex-col gap-2 justify-between"
          key={`${i}`}
        >
          <section className="flex justify-between">
            <aside className="flex flex-col gap-2">
              <div className="flex gap-1 font-semibold">
                <p>{item?.certificateTitle?.value}</p>
                {item?.certificateLink?.value && (
                  <>
                    <p>|</p>
                    <LinkText link={item?.certificateLink?.value}>
                      CERTIFICATE
                    </LinkText>
                  </>
                )}
              </div>
            </aside>

            <aside className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                {/* <p>{item?.city?.value}, {item?.country?.value}</p> */}
                <p className="font-semibold">{item?.dateAwarded?.value}</p>
              </div>
            </aside>
          </section>

          <section>
            {/* <ul>
              {item?.projectDescriptions?.value?.map((desc) => (
                <li>{desc.value}</li>
              ))}
            </ul> */}
          </section>
        </main>
      ))}
    </div>
  );
};

const Involvement = ({ formValues, resumeAppearance }: Props) => {
  const involvement: ResumeFormCompType["involvement"] =
    formValues["involvement"];

  return (
    <div className="flex flex-col items-center  space-y-2">
      <p className="text-lg font-semibold">INVOLVEMENT</p>
      {involvement?.involvement?.value?.map((item, i) => (
        <main className="w-full flex flex-col gap-2 justify-between" key={i}>
          <section className="flex justify-between">
            <aside className="flex flex-col gap-2">
              <div className="flex gap-1 font-semibold">
                <p>{item?.organizationName?.value}</p>
                {/* {item?.involvementLink?.value && (
                  <>
                    <p>|</p>
                    <LinkText link={item?.involvementLink?.value}>
                      INVOLVEMENT
                    </LinkText>
                  </>
                )} */}
              </div>
            </aside>

            <aside className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                {/* <p>{item?.city?.value}, {item?.country?.value}</p> */}
                <p className="font-semibold">
                  {item?.startDate?.value} - {item?.endDate?.value}
                </p>
              </div>
            </aside>
          </section>

          <section>
            {/* <ul>
              {item?.projectDescriptions?.value?.map((desc) => (
                <li>{desc.value}</li>
              ))}
            </ul> */}
          </section>
        </main>
      ))}
    </div>
  );
};

const Summary = ({ formValues, resumeAppearance }: Props) => {
  const summary: ResumeFormCompType["summary"] = formValues["summary"];

  console.log(summary?.summary?.value);
  if (isEmptyString(summary?.summary?.value)) return null;

  return (
    <section
      id={summary?.summary?.alias}
      className="flex flex-col items-center w-full"
    >
      <div>
        <h4 className="text-lg font-semibold">SUMMARY</h4>
      </div>

      <div
        className="wysiwyg w-full bg-red-500"
        dangerouslySetInnerHTML={{ __html: summary?.summary?.value ?? "" }}
      ></div>

      {/* <div
        dangerouslySetInnerHTML={{ __html: section.content }}
        className="wysiwyg col-span-4"
        style={{ columns: section.columns }}
      /> */}
    </section>
  );
};
type CategorizedSkill = {
  [T: string]: {
    id?: string;
    value?: string;
    skillLevel?: string;
    category?: string;
  }[];
};

const Skills = ({ formValues, resumeAppearance }: Props) => {
  const skills: ResumeFormCompType["skills"] = formValues["skills"];
  if (!skills?.skills?.value?.length) return;
  const categorizedSkills: CategorizedSkill = {};
  // if (isEmptyString(skills?.skills?.value)) return null;

  useEffect(() => {
    skills?.skills?.value?.forEach((skill) => {
      const categoryName = Boolean(skill.category?.trim())
        ? skill.category?.trim()
        : "relevant";

      if (categorizedSkills[`${categoryName}`]) {
        categorizedSkills[`${categoryName}`] = [
          ...categorizedSkills[`${categoryName}`],
          skill,
        ];
      } else {
        categorizedSkills[`${categoryName}`] = [skill];
      }
    });
  }, [skills?.skills?.value]);

  useEffect(() => {
    console.log(categorizedSkills);
    console.log(skills?.skills?.value);
  }, [categorizedSkills]);
  return (
    <section id={skills?.skills?.alias} className="flex flex-col items-center">
      <div>
        <h4 className="text-lg font-semibold">SKILLS</h4>
      </div>

      <div className="w-full">
        {Object.keys(categorizedSkills).map((category) => {
          console.log(category);
          return (
            <div className="flex flex-col gap-2">
              jkl
              <p>
                {SkillCategoryAlias[category]} {category}
              </p>
              <div className="flex gap-2">
                {categorizedSkills[category].map((skill) => (
                  <div className="flex items-center gap-1">
                    <p>{skill.value}</p>
                    <p>-</p>
                    <p>{skill.category}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
type RatingProps = { level: number };

// const Custom = ({ id }: { id: string }) => {
//   // const section = useArtboardStore((state) => state.resume.sections.custom[id]);

//   return (
//     <Section<CustomSection>
//       section={section}
//       urlKey="url"
//       summaryKey="summary"
//       keywordsKey="keywords"
//     >
//       {(item) => (
//         <div>
//           <div>
//             <LinkedEntity
//               name={item.name}
//               url={item.url}
//               separateLinks={section.separateLinks}
//               className="font-bold"
//             />
//             <div>{item.description}</div>

//             <div className="font-bold">{item.date}</div>
//             <div>{item.location}</div>
//           </div>
//         </div>
//       )}
//     </Section>
//   );
// };

const Rating = ({ level }: RatingProps) => (
  <div className="flex items-center gap-x-1.5">
    {Array.from({ length: 5 }).map((_, index) => (
      <div
        key={index}
        className={cn(
          "size-2 rounded-full border border-primary",
          level > index && "bg-primary"
        )}
      />
    ))}
  </div>
);

// type LinkProps = {
//   url: URL;
//   icon?: React.ReactNode;
//   iconOnRight?: boolean;
//   label?: string;
//   className?: string;
// };

// const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
//   if (!isUrl(url.href)) return null;

//   return (
//     <div className="flex items-center gap-x-1.5">
//       {!iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
//       <a
//         href={url.href}
//         target="_blank"
//         rel="noreferrer noopener nofollow"
//         className={cn("inline-block", className)}
//       >
//         {label ?? (url.label || url.href)}
//       </a>
//       {iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
//     </div>
//   );
// };

type LinkedEntityProps = {
  name: string;
  url: URL;
  separateLinks: boolean;
  className?: string;
};

// const LinkedEntity = ({ name, url, separateLinks, className }: LinkedEntityProps) => {
//   return !separateLinks && isUrl(url.href) ? (
//     <Link
//       url={url}
//       label={name}
//       icon={<i className="ph ph-bold ph-globe text-primary" />}
//       iconOnRight={true}
//       className={className}
//     />
//   ) : (
//     <div className={className}>{name}</div>
//   );
// };

// type SectionProps<T> = {
//   section: SectionWithItem<T> | CustomSectionGroup;
//   children?: (item: T) => React.ReactNode;
//   className?: string;
//   urlKey?: keyof T;
//   levelKey?: keyof T;
//   summaryKey?: keyof T;
//   keywordsKey?: keyof T;
// };

// const Section = <T,>({
//   section,
//   children,
//   className,
//   urlKey,
//   levelKey,
//   summaryKey,
//   keywordsKey,
// }: SectionProps<T>) => {
//   if (!section.visible || section.items.length === 0) return null;

//   return (
//     <section id={section.id} className="grid grid-cols-5 border-t pt-2.5">
//       <div>
//         <h4 className="text-base font-bold">{section.name}</h4>
//       </div>

//       <div
//         className="col-span-4 grid gap-x-6 gap-y-3"
//         style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
//       >
//         {section.items
//           .filter((item) => item.visible)
//           .map((item) => {
//             const url = (urlKey && get(item, urlKey)) as URL | undefined;
//             const level = (levelKey && get(item, levelKey, 0)) as number | undefined;
//             const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
//             const keywords = (keywordsKey && get(item, keywordsKey, [])) as string[] | undefined;

//             return (
//               <div key={item.id} className={cn("space-y-2", className)}>
//                 <div>
//                   {children?.(item as T)}
//                   {url !== undefined && section.separateLinks && <Link url={url} />}
//                 </div>

//                 {summary !== undefined && !isEmptyString(summary) && (
//                   <div dangerouslySetInnerHTML={{ __html: summary }} className="wysiwyg" />
//                 )}

//                 {level !== undefined && level > 0 && <Rating level={level} />}

//                 {keywords !== undefined && keywords.length > 0 && (
//                   <p className="text-sm">{keywords.join(", ")}</p>
//                 )}
//               </div>
//             );
//           })}
//       </div>
//     </section>
//   );
// };

// const Profiles = () => {
//   const section = useArtboardStore((state) => state.resume.sections.profiles);
//   const fontSize = useArtboardStore((state) => state.resume.metadata.typography.font.size);

//   return (
//     <Section<Profile> section={section}>
//       {(item) => (
//         <div>
//           {isUrl(item.url.href) ? (
//             <Link
//               url={item.url}
//               label={item.username}
//               icon={
//                 <img
//                   className="ph"
//                   width={fontSize}
//                   height={fontSize}
//                   alt={item.network}
//                   src={`https://cdn.simpleicons.org/${item.icon}`}
//                 />
//               }
//             />
//           ) : (
//             <p>{item.username}</p>
//           )}
//           {!item.icon && <p className="text-sm">{item.network}</p>}
//         </div>
//       )}
//     </Section>
//   );
// };

// const Experience = () => {
//   const section = useArtboardStore((state) => state.resume.sections.experience);

//   return (
//     <Section<Experience> section={section} urlKey="url" summaryKey="summary">
//       {(item) => (
//         <div className="flex items-start justify-between">
//           <div className="text-left">
//             <LinkedEntity
//               name={item.company}
//               url={item.url}
//               separateLinks={section.separateLinks}
//               className="font-bold"
//             />
//             <div>{item.position}</div>
//           </div>

//           <div className="shrink-0 text-right">
//             <div className="font-bold">{item.date}</div>
//             <div>{item.location}</div>
//           </div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Education = () => {
//   const section = useArtboardStore((state) => state.resume.sections.education);

//   return (
//     <Section<Education> section={section} urlKey="url" summaryKey="summary">
//       {(item) => (
//         <div className="flex items-start justify-between">
//           <div className="text-left">
//             <LinkedEntity
//               name={item.institution}
//               url={item.url}
//               separateLinks={section.separateLinks}
//               className="font-bold"
//             />
//             <div>{item.area}</div>
//             <div>{item.score}</div>
//           </div>

//           <div className="shrink-0 text-right">
//             <div className="font-bold">{item.date}</div>
//             <div>{item.studyType}</div>
//           </div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Awards = () => {
//   const section = useArtboardStore((state) => state.resume.sections.awards);

//   return (
//     <Section<Award> section={section} urlKey="url" summaryKey="summary">
//       {(item) => (
//         <div className="flex items-start justify-between">
//           <div className="text-left">
//             <div className="font-bold">{item.title}</div>
//             <LinkedEntity
//               name={item.awarder}
//               url={item.url}
//               separateLinks={section.separateLinks}
//             />
//           </div>

//           <div className="shrink-0 text-right">
//             <div className="font-bold">{item.date}</div>
//           </div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Certifications = () => {
//   const section = useArtboardStore((state) => state.resume.sections.certifications);

//   return (
//     <Section<Certification> section={section} urlKey="url" summaryKey="summary">
//       {(item) => (
//         <div className="flex items-start justify-between">
//           <div className="text-left">
//             <div className="font-bold">{item.name}</div>
//             <LinkedEntity name={item.issuer} url={item.url} separateLinks={section.separateLinks} />
//           </div>

//           <div className="shrink-0 text-right">
//             <div className="font-bold">{item.date}</div>
//           </div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Skills = () => {
//   const section = useArtboardStore((state) => state.resume.sections.skills);

//   return (
//     <Section<Skill> section={section} levelKey="level" keywordsKey="keywords">
//       {(item) => (
//         <div className="space-y-0.5">
//           <div className="font-bold">{item.name}</div>
//           <div>{item.description}</div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Interests = () => {
//   const section = useArtboardStore((state) => state.resume.sections.interests);

//   return (
//     <Section<Interest> section={section} keywordsKey="keywords" className="space-y-0.5">
//       {(item) => <div className="font-bold">{item.name}</div>}
//     </Section>
//   );
// };

// const Publications = () => {
//   const section = useArtboardStore((state) => state.resume.sections.publications);

//   return (
//     <Section<Publication> section={section} urlKey="url" summaryKey="summary">
//       {(item) => (
//         <div className="flex items-start justify-between">
//           <div className="text-left">
//             <LinkedEntity
//               name={item.name}
//               url={item.url}
//               separateLinks={section.separateLinks}
//               className="font-bold"
//             />
//             <div>{item.publisher}</div>
//           </div>

//           <div className="shrink-0 text-right">
//             <div className="font-bold">{item.date}</div>
//           </div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Volunteer = () => {
//   const section = useArtboardStore((state) => state.resume.sections.volunteer);

//   return (
//     <Section<Volunteer> section={section} urlKey="url" summaryKey="summary">
//       {(item) => (
//         <div className="flex items-start justify-between">
//           <div className="text-left">
//             <LinkedEntity
//               name={item.organization}
//               url={item.url}
//               separateLinks={section.separateLinks}
//               className="font-bold"
//             />
//             <div>{item.position}</div>
//           </div>

//           <div className="shrink-0 text-right">
//             <div className="font-bold">{item.date}</div>
//             <div>{item.location}</div>
//           </div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Languages = () => {
//   const section = useArtboardStore((state) => state.resume.sections.languages);

//   return (
//     <Section<Language> section={section} levelKey="level">
//       {(item) => (
//         <div className="space-y-0.5">
//           <div className="font-bold">{item.name}</div>
//           <div>{item.description}</div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Projects = () => {
//   const section = useArtboardStore((state) => state.resume.sections.projects);

//   return (
//     <Section<Project> section={section} urlKey="url" summaryKey="summary" keywordsKey="keywords">
//       {(item) => (
//         <div className="flex items-start justify-between">
//           <div className="text-left">
//             <LinkedEntity
//               name={item.name}
//               url={item.url}
//               separateLinks={section.separateLinks}
//               className="font-bold"
//             />
//             <div>{item.description}</div>
//           </div>

//           <div className="shrink-0 text-right">
//             <div className="font-bold">{item.date}</div>
//           </div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const References = () => {
//   const section = useArtboardStore((state) => state.resume.sections.references);

//   return (
//     <Section<Reference> section={section} urlKey="url" summaryKey="summary">
//       {(item) => (
//         <div>
//           <LinkedEntity
//             name={item.name}
//             url={item.url}
//             separateLinks={section.separateLinks}
//             className="font-bold"
//           />
//           <div>{item.description}</div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Custom = ({ id }: { id: string }) => {
//   const section = useArtboardStore((state) => state.resume.sections.custom[id]);

//   return (
//     <Section<CustomSection>
//       section={section}
//       urlKey="url"
//       summaryKey="summary"
//       keywordsKey="keywords"
//     >
//       {(item) => (
//         <div className="flex items-start justify-between">
//           <div className="text-left">
//             <LinkedEntity
//               name={item.name}
//               url={item.url}
//               separateLinks={section.separateLinks}
//               className="font-bold"
//             />
//             <div>{item.description}</div>
//           </div>

//           <div className="shrink-0 text-right">
//             <div className="font-bold">{item.date}</div>
//             <div>{item.location}</div>
//           </div>
//         </div>
//       )}
//     </Section>
//   );
// };

//

const ClassicResume = memo(({ formValues, resumeAppearance }: Props) => {
  const {
    layout,
    page: {
      margin,
      format,
      options: { breakLine, pageNumbers },
    },
    theme: { background, text, primary },
    typography: {
      font: { family, subset, variants, size: fontSize, headerSize },
      lineHeight,
      hideIcons,
      underlineLinks,
    },
  } = resumeAppearance;

  const [[main, sidebar]] = layout;

  return (
    <div
      className="flex flex-col"
      style={{
        fontSize: `${fontSize}px`,
        padding: `${margin}px`,
        lineHeight,
        backgroundColor: background,
        color: text,
      }}
    >
      <Header formValues={formValues} resumeAppearance={resumeAppearance} />
      <div className=" space-y-4">
        {main.map((section) => (
          <Fragment key={section}>
            {mapSectionToComponent(section as keyof ResumeFormCompType, {
              formValues,
              resumeAppearance,
            })}
          </Fragment>
        ))}
      </div>
      <div className="space-y-4">
        {sidebar.map((section) => (
          <Fragment key={section}>
            {mapSectionToComponent(section as keyof ResumeFormCompType, {
              formValues,
              resumeAppearance,
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
});

const mapSectionToComponent = (
  section: keyof ResumeFormCompType,
  props: Props
) => {
  switch (section) {
    // case "profiles": {
    //   return <Profiles />;
    // }
    case "summary": {
      return <Summary {...props} />;
    }
    case "header": {
      return <Header {...props} />;
    }
    case "experience": {
      return <Experience {...props} />;
    }
    case "education": {
      return <Education {...props} />;
    }
    // case "awards": {
    //   return <Awards />;
    // }
    case "certificate": {
      return <Certificate {...props} />;
    }
    case "skills": {
      return <Skills {...props} />;
    }
    // case "interests": {
    //   return <Interests />;
    // }
    // case "publications": {
    //   return <Publications />;
    // }
    case "involvement": {
      return <Involvement {...props} />;
    }
    // case "languages": {
    //   return <Languages />;
    // }
    case "project": {
      return <Project {...props} />;
    }
    // case "references": {
    //   return <References />;
    // }
    default: {
      if (section.startsWith("custom.")) return;
      return null;
    }
  }
};

export default ClassicResume;
