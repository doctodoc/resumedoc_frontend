export interface ResumeAppearanceConfigType 


{
  general?: GenericAppearanceType;
  header?: HeaderAppearanceType;
  contact?: ContactAppearanceType;
  summary?: SummaryAppearanceType;
  experience?: ExperienceAppearanceType;
  project?: ProjectAppearanceType;
  skills?: SkillsAppearanceType;
  education?: EducationAppearanceType;
  involvement?: InvolvementAppearanceType;
  awards?: AwardAppearanceType;
  certificate?: CertificateAppearanceType;
}

interface GenericAppearanceType {
  accentColor?: Array<string>;
  fontStyles?: Array<string>;
  fontSizes?: Array<string>;
  lineHeights?: Array<string>;
  currentAccentColor?: string;
  currentFontStyle?: string;
  currentFontSize?: string;
  currentLineHeight?: string;
}
interface HeaderAppearanceType extends GenericAppearanceType {}

interface ContactAppearanceType extends GenericAppearanceType {}

interface SummaryAppearanceType extends GenericAppearanceType {}

interface ProjectAppearanceType extends GenericAppearanceType {
  bulletSize: string;
  buletType: string;
}
interface ExperienceAppearanceType extends GenericAppearanceType {
  bulletSize: string;
  buletType: string;
}
interface SkillsAppearanceType extends GenericAppearanceType {}
interface EducationAppearanceType extends GenericAppearanceType {}
interface AwardAppearanceType extends GenericAppearanceType {}
interface InvolvementAppearanceType extends GenericAppearanceType {}

interface CertificateAppearanceType extends GenericAppearanceType {}
