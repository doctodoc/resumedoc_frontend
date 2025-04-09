import { ResumeIcon, SpecialistIcon, TipsIcon } from "@/assets/svg";
import AtsIcon from "@/assets/svg/AtsIcon";
import CustomizableIcon from "@/assets/svg/CustomizableIcon";
import ResumeCategoryIcon from "@/assets/svg/ResumeCategoryIcon";
import {
    IconFeaturesDataType,
    ImageFeaturesDataType,
  } from "@/shared/types/featureType";
  
  export const iconFeaturesData: Array<IconFeaturesDataType> = [
    {
      title: "AI Powered Resume builder",
      description: "Build powerful resumes with the right keywords on the go.",
      icon: CustomizableIcon,
    },
    {
      title: "Resume Specialists",
      description:
        "Our team has dedicated  Resume specialists with years of experience in every industry ranging from Technology, Finance to Law. ",
      icon: SpecialistIcon,
    },
    
    {
      title: "Customizable Resumes",
      description: "Templates are customizable to fit your style and preference.",
      icon: CustomizableIcon,
    },
    {
      title: "ATS Standard Resumes",
      description:
        "We ensure your Resumes are ATS friendly by including key words relevant to the role.",
      icon: AtsIcon,
    },
    {
      title: "Professional Tips",
      description:
        "We offer Expert tips and analysis to help you improve your Resumes.",
      icon: TipsIcon,
    },
    {
      title: "Categorized Resumes",
      description:
        "Samples and Templates are categorized into roles or industries to make your building process easier.",
      icon: ResumeCategoryIcon,
    },
  ];
  
  export const imageFeaturesData: Array<ImageFeaturesDataType> = [
    {
      title: "Success Proven Resume Templates ",
      description:
        "Resume samples we curate have landed roles successfully. We do this to give you insights on how your Resume should look.",
      image: "",
      buttonText: "Become A Success Story",
    },
    {
      title: "Industry Specific Resumes",
      description:
        "Our Resume templates are industry-specific as we stay updated on industry trends to put you ahead of other candidates.",
      image: "",
      buttonText: "Get Your Tailored Resume Now",
    },
    {
      title: "Get In Touch With Experts",
      description:
        "We have a diverse team of Resume experts across different fields. We can build your resumes, analyze or give your tips to improve your resumes.",
      image: "",
      buttonText: "Hire An Expert",
    },
  ];
  