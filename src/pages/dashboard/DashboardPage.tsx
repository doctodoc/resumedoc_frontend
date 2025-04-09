import { universalPaddingX, universalPaddingY } from "@/assets/css/tailwindcss";
import TabButton from "@/components/buttons/TabButton";
import AvatarMenu from "@/containers/navbar/topNav/accountMenu/AccountMenu";
import CoverLetter from "@/containers/dashboard/coverLetter/CreatedCoverLetter";
import CreatedResumes from "@/containers/dashboard/resumeAndEntries/CreatedResumes";
import { Subscriptions } from "@mui/icons-material";
import React, { useCallback, useEffect, useState } from "react";
import ThemeToggle from "@/containers/navbar/topNav/ThemeToggle";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/routes/AppRoutes";
import matchRoute from "@/utils/helperFunctions/matchRoute";

const tabLinks = [
  {
    name: "resume",
    routeName: "resume",
    alias: "resume",
    link: AppRoutes.dashboard.resume,
  },
  {
    name: "coverLetter",
    routeName: "cover-letter",
    alias: "cover letter",
    link: AppRoutes.dashboard.coverLetter,
  },
  {
    name: "resignationLetter",
    routeName: "resignation-letter",
    alias: "resignation letter",
    link: AppRoutes.dashboard.resignationLetter,
  },
];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("resume");
  const pathname = usePathname();
  const router = useRouter();

  const handleTabNav = (index: number, link: string) => {
    // setActiveTab(index);
    router.push(link);
  };
  const [isAuth, setIsAuth] = useState(true);

  // useEffect(() => {
  //   if (!pathname) return;
  //   const routeMatch = matchRoute(2, pathname);
  //   if (routeMatch) {
  //     return setActiveTab(routeMatch);
  //   }
  //   router.replace(AppRoutes.dashboard.resume);
  // }, [pathname]);

  return (
    <div
      className={`flex flex-col gap-6 items-center w-full dark:text-dark_primary_text h-full`}
    >
      <div
        className={`${universalPaddingX} ${universalPaddingY} flex w-full gap-8 h-full`}
      >
        <nav className="flex justify-between items-start w-full bg-red-500">
          <div className="flex gap-4">
            {tabLinks.map((link, index) => (
              <TabButton
                active={activeTab === link.routeName}
                onClick={() => {
                  handleTabNav(index, link.link);
                }}
                key={`${index}`}
              >
                {link.alias}
              </TabButton>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <AvatarMenu isAuth={isAuth} />
          </div>
        </nav>
        <section>{/* search */}</section>
        <main className="max-w-[1400px] w-full flex flex-col gap-10">
          <section>{/* <CreatedResumes resumeList={[]} /> */}</section>

          <section>
            <CoverLetter />
          </section>

          {/* <section>
              <Subscriptions />
            </section> */}
        </main>{" "}
      </div>
    </div>
  );
};

export default DashboardPage;
