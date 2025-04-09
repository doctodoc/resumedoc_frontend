import { z } from "zod";

export const defaultLayout = [
  [
    ["summary", "profiles", "experience", "education", "project", "involvement", "references"],
    ["skills", "interests", "certificate", "awards", "publications", "languages"],
  ],
];

// Schema
export const appearanceSchema = z.object({
  template: z.string().default("classic"),
  layout: z.array(z.array(z.array(z.string()))).default(defaultLayout), // pages -> columns -> sections
  css: z.object({
    value: z.string().default(".section {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}"),
    visible: z.boolean().default(false),
  }),
  page: z.object({
    margin: z.number().default(18),
    format: z.enum(["a4", "letter"]).default("a4"),
    options: z.object({
      breakLine: z.boolean().default(true),
      pageNumbers: z.boolean().default(true),
    }),
  }),
  theme: z.object({
    background: z.string().default("#ffffff"),
    text: z.string().default("#000000"),
    primary: z.string().default("#dc2626"),
    accent: z.string().default("#dc2626"),
  }),
  typography: z.object({
    font: z.object({
      family: z.string().default("IBM Plex Serif"),
      subset: z.string().default("latin"),
      variants: z.array(z.string()).default(["regular"]),
      size: z.number().default(14),
      headerSize: z.number().default(16),
      headerCasing: z.string().default("upper"),
    }),
    lineHeight: z.number().default(1.5),
    hideIcons: z.boolean().default(false),
    underlineLinks: z.boolean().default(true),
  }),
  notes: z.string().default(""),
});

// Type
export type AppearanceType = z.infer<typeof appearanceSchema>;

// Defaults
export const defaultAppearance: AppearanceType = {
  template: "classic",
  layout: defaultLayout,
  css: {
    value: ".section {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}",
    visible: false,
  },
  page: {
    margin: 18,
    format: "a4",
    options: {
      breakLine: true,
      pageNumbers: true,
    },
  },
  theme: {
    background: "#ffffff",
    text: "#000000",
    primary: "#dc2626",
    accent: "#dc2626",
  },
  typography: {
    font: {
      family: "IBM Plex Serif",
      subset: "latin",
      variants: ["regular", "italic", "600"],
      size: 14,
      headerSize: 16,
      headerCasing: "upper",
    },
    lineHeight: 1.5,
    hideIcons: false,
    underlineLinks: true,
  },
  notes: "",
};
