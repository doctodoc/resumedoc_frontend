import {
  gradientGreenToPurpleText,
} from "@/assets/css/tailwindcss";
import AddDocumentIcon from "@/assets/svg/AddDocumentIcon";
import MoreTemplatesIcon from "@/assets/svg/MoreTemplatesIcon";
import ResumeBioIcon from "@/assets/svg/ResumeBioIcon";
import Settings from "@/assets/svg/Settings";
import SubscriptionIcon from "@/assets/svg/SubscriptionIcon";
import CurvedButton from "@/components/buttons/CurvedButton";
import WidgetCard from "@/components/card/WidgetCard";
import MenuDisclosure from "@/components/disclosures/MenuDisclosure";
import { ErrorType } from "@/shared/types/formTypes";
import Link from "next/link";
import React, { ReactNode } from "react";
import DashboardMenu from "./DashboardMenu";
import BuildMenu from "./BuildMenu";
import ThemeToggle from "../topNav/ThemeToggle";
import { cn } from "@/utils";
import { cx } from "class-variance-authority";

type NavLinksType = Array<{
  name: string;
  alias: string;
  contents?: Array<{ alias: string; name: string; link: string }>;
  icon?: (P: any) => ReactNode;
}>;
const navLinks: NavLinksType = [
  { name: "dashboard", alias: "Dashboard", icon: ResumeBioIcon },
  {
    name: "exploreTemplates",
    alias: "Explore",
    icon: MoreTemplatesIcon,
  },
  { name: "settings", alias: "Settings", icon: Settings },
  { name: "subscription", alias: "Subscriptions", icon: SubscriptionIcon },
];

type Props = {
  collapsed?: boolean;
  page?: "dashboard" | "build" | null;
  handleNav?: (P: string) => void;
  activeTab?: string
};

const SideNav = ({ collapsed, page, handleNav, activeTab }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <WidgetCard
        title={
          <Link
            className="w-full flex justify-center font-bold text-lg md:text-xl text-title_grey dark:text-dark_primary_text "
            href={"/"}
          >
            {
              <div className={`text-primary ${gradientGreenToPurpleText}`}>
                {!collapsed ? (
                  <div className="flex gap-1">
                    <p>Zeus</p>
                    <p>Resume</p>
                  </div>
                ) : (
                  <p className="text-xl xl:text-3xl ">ZR</p>
                )}
              </div>
            }
          </Link>
        }
        className={cx(" h-full w-fit xl:w-28 flex-1 flex flex-col gap-4 px-0 rounded-lg")}
      >
        {page === "dashboard" && (
          <DashboardMenu collapsed={collapsed} handleNav={handleNav} activeTab={activeTab}/>
        )}
        {page === "build" && (
          <BuildMenu collapsed={collapsed} handleNav={handleNav} activeTab={activeTab}/>
        )}
      </WidgetCard>

      <div className="mt-4">
        <ThemeToggle />
      </div>
    </div>
  );
};


export default SideNav;
