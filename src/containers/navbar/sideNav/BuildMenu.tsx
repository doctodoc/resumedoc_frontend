import React, { ReactNode } from "react";
import ContentIcon from "@/assets/svg/ContentIcon";
import CustomizableIcon from "@/assets/svg/CustomizableIcon";
import AppearanceIcon from "@/assets/svg/AppearanceIcon";
import DashboardIcon from "@/assets/svg/DashboardIcon";
import MoreTemplatesIcon from "@/assets/svg/MoreTemplatesIcon";
import { NavMenuProps } from "./DashboardMenu";
import { NavEle } from "./NavElement";

type NavLinksType = Array<{
  name: string;
  alias: string;
  contents?: Array<{ alias: string; name: string; link: string }>;
  icon?: (P: any) => ReactNode;
}>;

const navLinks: NavLinksType = [
  // { name: "dashboard", alias: "Dashboard", icon: ()=><></> },
  { name: "content", alias: "Content", icon: ContentIcon },
  { name: "customization", alias: "Customize", icon: AppearanceIcon },
  {
    name: "templates",
    alias: "Explore",
    icon: MoreTemplatesIcon,
  },
  { name: "dashboard", alias: "My Dashboard", icon: DashboardIcon },
];


const BuildMenu = ({ collapsed, handleNav, activeTab }: NavMenuProps) => {
  return (
    <div className=" flex flex-col flex-1  h-full xl:mt-4">
      <section className="w-full flex flex-col gap-5 xl:gap-8 pt-3 flex-1 relative ">
        {navLinks.map((navLink) => (
          <NavEle
            title={navLink.alias}
            contents={navLink.contents}
            key={navLink.name}
            icon={navLink.icon}
            collapsed={collapsed}
            name={navLink.name}
            handleNav={handleNav}
            isActive={activeTab === navLink.name}
          />
        ))}

        {/* <section className="w-full flex flex-col justify-center items-center px-6 py-2 mt-6 sticky bottom-0 bg-light_gray_widget dark:bg-secondary_dark ">
            <CurvedButton className={`bg-black text-white flex gap-3`} py={"2"}>
              <p>More Sections</p>
              <Add />
            </CurvedButton>
          </section> */}
      </section>
    </div>
  );
};

export default BuildMenu;
