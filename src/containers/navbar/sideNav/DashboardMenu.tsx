import AddDocumentIcon from "@/assets/svg/AddDocumentIcon";
import MoreTemplatesIcon from "@/assets/svg/MoreTemplatesIcon";
import CurvedButton from "@/components/buttons/CurvedButton";
import { Settings } from "@mui/icons-material";
import AccountIcon from "@/assets/svg/AccountIcon";
import DashboardIcon from "@/assets/svg/DashboardIcon";
import { ReactNode } from "react";
import { NavEle } from "./NavElement";

type NavLinksType = Array<{
  name: string;
  alias: string;
  contents?: Array<{ alias: string; name: string; link: string }>;
  icon?: (P: any) => ReactNode;
}>;
const navLinks: NavLinksType = [
  { name: "dashboard", alias: "My Dashboard", icon: DashboardIcon },
  {
    name: "exploreTemplates",
    alias: "Explore",
    icon: MoreTemplatesIcon,
  },
  { name: "account", alias: "Account", icon: AccountIcon },
];

export type NavMenuProps = {
  collapsed?: boolean;
  handleNav?: (P: string) => void;
  activeTab?: string;
};

const DashboardMenu = ({ collapsed, handleNav, activeTab }: NavMenuProps) => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <CurvedButton
          className={`flex gap-2 items-center bg-black text-white font-semibold ${
            collapsed ? "px-1 " : "px-8"
          } w-fit whitespace-nowrap`}
          px={collapsed ? 2 : 3}
          py={collapsed ? 2 : 3}
          style={{ borderRadius: collapsed ? "100%" : "" }}
        >
          <div className="text-white w-5 h-5  md:w-6 md:h-6">
            <AddDocumentIcon />
          </div>
          {!collapsed && <p>Create New Resume</p>}
        </CurvedButton>
      </div>

      <div className=" flex flex-col flex-1 h-full xl:mt-4">
        <section className="w-full flex flex-col gap-5 xl:gap-6 pt-3 flex-1 relative ">
          {navLinks.map((navLink) => (
            <NavEle
              title={navLink.alias}
              contents={navLink.contents}
              key={navLink.name}
              icon={navLink.icon}
              collapsed={collapsed}
              name={navLink.name}
              handleNav={handleNav}
              isActive={navLink.name === activeTab}
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
    </div>
  );
};

export default DashboardMenu;
