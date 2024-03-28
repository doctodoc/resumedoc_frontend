import { ResumeIcon } from "@/assets/svg";

export type NavLinksPropsType = {
    name: string;
    link?: string;
    alias?: string;
    Icon: any;
    isActive: boolean;
  };
  
  export const navLinks:NavLinksPropsType[] = [
      
      {
        name: "New Resume",
        alias: "New Resume",
        // link: `${AppRoutes.statistics.analysis}`,
        isActive: false,
        Icon: ResumeIcon,
      },
      {
        name: "Cover Letter",
        alias: "Cover Letter",
        // link: AppRoutes.classesAndResources.classes,
        isActive: false,
        Icon: ResumeIcon,
      },
      {
        name: "Hire Resume Expert",
        alias: "Hire Expert",
        // link: AppRoutes.examination.index,
        isActive: false,
        Icon: ResumeIcon,
      },
      {
        name: "Blog",
        alias: "Blog",
        // link: AppRoutes.dashboard.index,
        isActive: false,
        Icon: ResumeIcon,
      },
    //   // { name: "Students Forum", link: "" },
      // {
      //   name: "Consultancy",
      //   alias: "Consultancy",
    //   //   link: "",
      //   isActive: false,
      //   Icon: SupportIcon,
      // },
      // {
      //   name: "School News",
      //   alias: "School News",
    //   //   link: "",
      //   isActive: false,
      //   Icon: NewsIcon,
      // },
    //   {
    //     name: "Subscriptions and Referrals",
    //     alias: "Subscriptions",
    //     // link: AppRoutes.subscription.index,
    //     isActive: false,
    //     Icon: SubscriptionIcon,
    //   },
    //   {
    //     name: "Settings",
    //     alias: "Settings",
    //     // link: AppRoutes.settings.index,
    //     isActive: false,
    //     Icon: SettingsIcon,
    //   },
    ];
  