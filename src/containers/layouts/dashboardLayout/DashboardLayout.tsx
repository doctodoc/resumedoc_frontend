import React, { useEffect, useState } from "react";
import SideNav from "../../navbar/sideNav/SideNav";
import { ChildrenType } from "@/shared/types/globalTypes";
import { AppRoutes } from "@/routes/AppRoutes";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "@/containers/navbar/topNav/ThemeToggle";
import AvatarMenu from "@/containers/navbar/topNav/accountMenu/AccountMenu";
import {
  pryBgColor,
  pryTextColor,
  secTextColor,
  universalPaddingX,
  universalPaddingY,
} from "@/assets/css/tailwindcss";
import CommentButton from "@/components/buttons/CommentButton";

type Props = {
  children: ChildrenType;
};
const tabLinks = [
  {
    name: "resume",
    routeName: "resume",
    alias: "work resume",
    link: AppRoutes.dashboard.resume,
    color: "#708090",
  },
  {
    name: "cv",
    routeName: "cv",
    alias: "academic CV",
    link: AppRoutes.dashboard.academicCv,
    color: "rgb(160 141 196)",
  },
  {
    name: "coverLetter",
    routeName: "cover-letter",
    alias: "cover letter",
    link: AppRoutes.dashboard.coverLetter,
    color: "rgb(108 154 223)",
  },

  {
    name: "statementOfPurpose",
    routeName: "statement-of-purpose",
    alias: "statement of purpose",
    link: AppRoutes.dashboard.statementOfPurpose,
    color: "rgb(253 88 115)",
  },
  // {
  //   name: "resignationLetter",
  //   routeName: "resignation-letter",
  //   alias: "resignation letter",
  //   link: AppRoutes.dashboard.resignationLetter,
  // },
];

const DashboardLayout = ({ children }: Props) => {
  const [activeTab, setActiveTab] = useState("resume");
  const [isAuth, setIsAuth] = useState(true);
  // const [pageType, setPageType] = useState<"dashboard" | "build" | null>(null);

  const pathname = usePathname();
  const router = useRouter();
  const handleTabNav = (index: number, link: string) => {
    // setActiveTab(index);
    router.push(link);
  };

  // useEffect(() => {
  //   if (!pathname) return;

  //   if (/(resume|cv)/i.test(pathname)) {
  //     setPageType("build");
  //   } else {
  //     setPageType("dashboard");
  //   }
  // });
  return (
    <div className={`flex gap-4 h-screen w-full ${pryBgColor}`}>
      <div className=" h-full w-fit max-w-[300px] p-3">
        <div className="h-fit">
          <SideNav collapsed page={"dashboard"} />
        </div>
      </div>
      <div
        className={`${universalPaddingX} pb-6 md:pb-6  w-full overflow-auto flex-1 flex flex-col `}
      >
        {tabLinks.findIndex((link) => link.link === pathname) !== -1 && (
          <>
            <nav
              className={`flex justify-between items-center mb-8 z-nav_bar sticky top-0 py-2 md:py-4`}
            >
              <p className={`${secTextColor} font-semibold`}>
                Welcome back, John!
              </p>
              <div className="hidden sm:flex items-center gap-4 z-nav_bar">
                <ThemeToggle />
                <AvatarMenu isAuth={isAuth} />
              </div>
            </nav>

            <div
              className={`w-full flex flex-col items-center gap-4 md:gap-6 xl:gap-8 ${pryTextColor} mb-7`}
            >
              <p className="text-2xl md:text-3xl xl:text-6xl font-semibold max-w-[700px] text-center">
                What do you want to create today?
              </p>
              <div className="flex gap-4 sticky top-0 h-fit">
                {tabLinks.map((link, index) => (
                  <CommentButton
                    key={link.link}
                    active={activeTab === link.routeName}
                    onClick={() => {
                      handleTabNav(index, link.link);
                    }}
                    className={`py-3 px-4 font-semibold md:text-lg text-white ${
                      pathname === link.link
                        ? "dark:border-primary border-black border-solid border-b-[3.5px] border-[2px] rounded-t-md"
                        : ""
                    } `}
                    style={{ backgroundColor: link.color }}
                  >
                    {link.alias}
                  </CommentButton>
                ))}
              </div>
            </div>
          </>
        )}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
