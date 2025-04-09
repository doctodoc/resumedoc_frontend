import Tsect from "@/components/sections/TableSection";
import TitleSection from "@/components/sections/TitleSection";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { v4 as uuidv4 } from "uuid";

// {
//   header: {
//     fullName: ,
//     jobTitle: ,
//     avatar: { value: "", error: null, alias: "", isOptional: true },
//   },

//   contact: {
//     emailAddress: ,
//     location: ,
//     phoneNumber: ,
//     websiteLinks: { value: [], error: null, alias: "" },
//     city: ,
//     country: { value: "", error: null, alias: "" },
//   },

//   summary: {
//     summary: { value: "", error: null, alias: "" },
//     experienceLevel: { value: "", error: null, alias: "" },
//   },

//   experience: {
//     experience: {
//       value: [
//         {
//           id: uuidv4(),
//           companyName: { value: "" },
//           jobTitle: { value: "" },
//           startDate: { value: "" },
//           endDate: { value: "" },
//           experienceDescriptions: { value: [{ id: uuidv4(), value: "" }] },
//           location: { value: "" },
//           city: { value: "", error: null, alias: "" },
//           country: { value: "", error: null, alias: "" },
//         },
//       ],
//       error: null,
//       alias: "",
//     },
//   },

//   project: {
//     project: {
//       value: [
//         {
//           id: uuidv4(),
//           projectName: { value: "" },
//           projectLink: { value: "" },
//           role: { value: "" },
//           startDate: { value: "" },
//           endDate: { value: "" },
//           projectDescriptions: { value: [{ id: uuidv4(), value: "" }] },
//         },
//       ],
//       error: null,
//       alias: "",
//     },
//   },

//   skills: {
//     skills: {
//       value: [],
//       error: null,
//       alias: "",
//     },
//   },

//   education: {
//     education: {
//       value: [
//         {
//           schoolName: { value: "" },
//           degree: { value: "" },
//           startDate: { value: "" },
//           endDate: { value: "" },
//           location: { value: "" },
//           city: { value: "", error: null, alias: "" },
//           country: { value: "", error: null, alias: "" },
//         },
//       ],
//       error: null,
//       alias: "",
//     },
//   },

//   involvement: {
//     involvement: {
//       value: [
//         {
//           organizationName: { value: "" },
//           role: { value: "" },
//           startDate: { value: "" },
//           endDate: { value: "" },
//           location: { value: "" },
//         },
//       ],
//       error: null,
//       alias: "",
//     },
//   },

//   awards: {
//     awards: {
//       value: [
//         {
//           awardTitle: { value: "" },
//           dateAwarded: { value: "" },
//         },
//       ],
//       error: null,
//       alias: "",
//     },
//   },
//   certificate: {
//     certificate: {
//       value: [
//         {
//           certificateTitle: {
//             value: "",
//           },
//           dateAwarded: { value: "" },
//         },
//       ],
//       error: null,
//       alias: "",
//     },
//   },
// }

export const initialResumeFormData: ResumeFormCompType = {
  header: {
    fullName: {
      value: "",
      error: null,
      alias: "",
    },
    jobTitle: {
      value: "",
      error: null,
      alias: "",
    },
    avatar: {
      value: "",
      error: null,
      alias: "",
    },
  },

  contact: {
    emailAddress: {
      value: "",
      error: null,
      alias: "",
    },
    location: {
      value: "",
      error: null,
      alias: "",
    },
    phoneNumber: {
      value: "",
      error: null,
      alias: "",
    },
    websiteLinks: {
      value: [],
      error: null,
      alias: "",
    },
    city: { value: "", error: null, alias: "" },
    country: { value: "", error: null, alias: "" },
  },

  summary: {
    summary: {
      value: "",
      error: null,
      alias: "",
    },
    experienceLevel: { value: "Entry Level", error: null, alias: "" },
  },

  experience: {
    experience: {
      value: [
        {
          id: uuidv4(),
          companyName: { value: "" },
          jobTitle: { value: "" },
          startDate: { value: "" },
          endDate: { value: "" },
          experienceDescriptions: {
            value: [
              {
                id: uuidv4(),
                value: `
            `,
              },
            ],
          },
          location: { value: "" },
          city: { value: "", error: null, alias: "" },
          country: { value: "", error: null, alias: "" },
        },
        // {
        //   id: uuidv4(),
        //   companyName: { value: "Amazon Web Technologies" },
        //   jobTitle: { value: "Fullstack Developer" },
        //   startDate: { value: "Jan, 2019" },
        //   endDate: { value: "Jan, 2019" },
        //   experienceDescriptions: {
        //     value: [
        //       {
        //         id: uuidv4(),
        //         value: `
        //   Demonstrated expertise in collaborating with cross-functional teams to translate business requirements into seamless, interactive interfaces that enhance user engagement. Strong knowledge of performance optimization, accessibility standards (WCAG), and browser compatibility. Experienced in leveraging tools like Webpack, Git, and CI/CD pipelines for streamlined development workflows.
        //   `,
        //       },
        //       {
        //         id: uuidv4(),
        //         value: `
        //   Highly skilled and detail-oriented Senior Frontend Developer with [X+] years of experience delivering user-centric and responsive web applications. Proficient in modern JavaScript frameworks such as React, Angular, and Vue.js, with a strong understanding of HTML, CSS, and advanced CSS pre-processors like SASS/LESS. Adept at creating clean, maintainable, and scalable code following industry best practices and Agile methodologies.
        //   `,
        //       },
        //     ],
        //   },
        //   location: { value: "" },
        //   city: { value: "Lagos", error: null, alias: "" },
        //   country: { value: "Nigeria", error: null, alias: "" },
        // },
        // {
        //   id: uuidv4(),
        //   companyName: { value: "Aero Contractors Nigeria ltd" },
        //   jobTitle: { value: "Fullstack Developer" },
        //   startDate: { value: "" },
        //   endDate: { value: "" },
        //   experienceDescriptions: {
        //     value: [
        //       {
        //         id: uuidv4(),
        //         value: `
        //   Highly skilled and detail-oriented Senior Frontend Developer with [X+] years of experience delivering user-centric and responsive web applications. Proficient in modern JavaScript frameworks such as React, Angular, and Vue.js, with a strong understanding of HTML, CSS, and advanced CSS pre-processors like SASS/LESS. Adept at creating clean, maintainable, and scalable code following industry best practices and Agile methodologies.
        //   `,
        //       },
        //       {
        //         id: uuidv4(),
        //         value: `
        //   Demonstrated expertise in collaborating with cross-functional teams to translate business requirements into seamless, interactive interfaces that enhance user engagement. Strong knowledge of performance optimization, accessibility standards (WCAG), and browser compatibility. Experienced in leveraging tools like Webpack, Git, and CI/CD pipelines for streamlined development workflows.
        //   `,
        //       },
        //     ],
        //   },
        //   location: { value: "" },
        //   city: { value: "Lagos", error: null, alias: "" },
        //   country: { value: "Nigeria", error: null, alias: "" },
        // },
      ],
      error: null,
      alias: "",
    },
  },

  project: {
    project: {
      value: [
        {
          id: uuidv4(),
          projectName: { value: "" },
          projectLink: { value: "" },
          role: { value: "" },
          startDate: { value: "" },
          endDate: { value: "" },
          projectDescriptions: {
            value: [
              {
                id: uuidv4(),
                value: ``,
              },
            ],
          },
        },
      ],
      error: null,
      alias: "",
    },
  },

  skills: {
    skills: {
      value: [],
      error: null,
      alias: "",
    },
  },

  education: {
    education: {
      value: [
        {
          schoolName: { value: "" },
          degree: { value: "" },
          startDate: { value: "" },
          endDate: { value: "" },
          location: { value: "" },
          city: { value: "", error: null, alias: "" },
          country: { value: "", error: null, alias: "" },
        },
      ],
      error: null,
      alias: "",
    },
  },

  involvement: {
    involvement: {
      value: [
        {
          organizationName: { value: "" },
          role: { value: "" },
          startDate: { value: "" },
          endDate: { value: "" },
          location: { value: "" },
        },
        // {
        //   organizationName: { value: "HIV/AIDS Community" },
        //   role: { value: "Coordinator" },
        //   startDate: { value: "Jan, 2019" },
        //   endDate: { value: "Jan, 2019" },
        //   location: { value: "Nigeria" },
        // },
      ],
      error: null,
      alias: "",
    },
  },

  awards: {
    awards: {
      value: [
        {
          awardTitle: { value: "" },
          dateAwarded: { value: "" },
        },
        // {
        //   awardTitle: { value: "Professor Awojobi" },
        //   dateAwarded: { value: "May, 2021" },
        // },
      ],
      error: null,
      alias: "",
    },
  },
  certificate: {
    certificate: {
      value: [
        {
          certificateTitle: {
            value: "",
          },
          dateAwarded: { value: "" },
        },
        // {
        //   certificateTitle: {
        //     value: "Coursera Certificate for Advanced Python Concepts",
        //   },
        //   dateAwarded: { value: "Sept, 2024" },
        // },
      ],
      error: null,
      alias: "",
    },
  },
};

export const initialResumeAppearanceData = {
  header: {
    accentColor: ["#764abc", "#0DD354", "#1DA1F2"],
    fontStyles: ["Serif", "Mono", "Sans"],
    fontSizes: ["small", "medium", "large"],
    lineHeights: ["1", "1.15", "1.5"],
    currentAccentColor: "",
    currentFontStyle: "",
    currentFontSize: "",
    currentLineHeight: "",
  },
};

export const sectionInformation = {
  header: {
    general: (
      <TitleSection
        title={"What is the header section?"}
        plain
        medFont
        alignStart
      >
        <div>
          <p>
            The header section of a resume is the top part that includes your:
            Full Name in bold or larger font. Job Title to can match the role
            you're applying for.
          </p>
        </div>
        <div>{/* header example */}</div>
      </TitleSection>
    ),
    fullName: "",
    jobTitle: "",
    avatar: { value: "", error: null, alias: "", isOptional: true },
  },

  contact: {
    general: (
      <TitleSection
        title={"What is the contact section?"}
        plain
        medFont
        alignStart
      >
        <div className="flex flex-col gap-2">
          <p>
            The Contact Section on a resume is where you list your essential
            contact information. It includes: Phone Number, Email Address
            LinkedIn Profile optional, but recommended. Portfolio or Website if
            applicable. Location City and State, or just City
          </p>
          <Tsect title="Full Name">
            <p>
              {
                "Your full name, usually your first and last name, e.g., John Doe."
              }
            </p>
          </Tsect>
          <Tsect title="Mobile Number">
            <p>
              {
                "Your active, professional number containing your country code, e.g., +1 212 456 7890."
              }
            </p>
          </Tsect>

          <Tsect title="Email Address">
            <p>{"A professional and active email e.g., johndoe@gmail.com."}</p>
          </Tsect>

          <Tsect title="Location">
            <p>{"Indicates where you live, Country, State or City. "}</p>
          </Tsect>

          <Tsect title="LinkedIn Profile">
            <p>
              {"If relevant, include a link e.g., www.linkedin.com/in/johndoe"}
            </p>
          </Tsect>

          <Tsect title="Portfolio/Website">
            <p>
              {
                "For creative or tech roles, add your portfolio or personal website e.g., www.johndoeworks.com"
              }
            </p>
          </Tsect>
        </div>
        <div className="mt-3 font-semibold">
          {/* header example */}
          Your contact section might appear like this depending on the template
          selected:
        </div>
      </TitleSection>
    ),
    emailAddress: "",
    location: "",
    phoneNumber: "",
    websiteLinks: "",
  },

  summary: {
    general: (
      <TitleSection
        title={"What is the summary section?"}
        plain
        medFont
        alignStart
      >
        <div className="flex flex-col gap-2">
          <p>
            The Summary Section on a resume is where you list your essential
            contact information. It includes: Phone Number, Email Address
            LinkedIn Profile optional, but recommended. Portfolio or Website if
            applicable. Location City and State, or just City
          </p>
          <Tsect title="Full Name">
            <p>
              {
                "Your full name, usually your first and last name, e.g., John Doe."
              }
            </p>
          </Tsect>
          <Tsect title="Mobile Number">
            <p>
              {
                "Your active, professional number containing your country code, e.g., +1 212 456 7890."
              }
            </p>
          </Tsect>

          <Tsect title="Email Address">
            <p>{"A professional and active email e.g., johndoe@gmail.com."}</p>
          </Tsect>

          <Tsect title="Location">
            <p>{"Indicates where you live, Country, State or City. "}</p>
          </Tsect>

          <Tsect title="LinkedIn Profile">
            <p>
              {"If relevant, include a link e.g., www.linkedin.com/in/johndoe"}
            </p>
          </Tsect>

          <Tsect title="Portfolio/Website">
            <p>
              {
                "For creative or tech roles, add your portfolio or personal website e.g., www.johndoeworks.com"
              }
            </p>
          </Tsect>
        </div>
        <div className="mt-3 font-semibold">
          {/* header example */}
          Your contact section might appear like this depending on the template
          selected:
        </div>
      </TitleSection>
    ),
    summary: "",
    experienceLevel: "",
  },

  experience: {
    general: "experience",
    companyName: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    experienceDescriptions: "",
    location: "",
    city: "",
    country: "",
  },

  project: {
    general: "project",
    projectName: "",
    projectLink: "",
    role: "",
    startDate: "",
    endDate: "",
    projectDescriptions: "",
  },

  skills: {
    general: "skills",
    skillLevel: "",
    skillCategory: "",
  },

  education: {
    general: "education",
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    city: "",
    country: "",
  },

  involvement: {
    general: "involvement",
    organizationName: "",
    role: "",
    startDate: "",
    endDate: "",
    location: "",
  },

  awards: {
    general: "awards",
    awardTitle: "",
    dateAwarded: "",
  },

  certificate: {
    general: "certificate",
  },

  // {
  //   certificateTitle: {
  //     value: "Coursera Certificate for Advanced Python Concepts",
  //   },
  //   dateAwarded: { value: "Sept, 2024" },
  // },
};
