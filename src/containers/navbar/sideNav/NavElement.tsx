import { activeTab, pryTextColor } from "@/assets/css/tailwindcss";
import MenuDisclosure from "@/components/disclosures/MenuDisclosure";
import { ReactNode } from "react";
import { Button } from "@mui/material";
import { cn } from "@/utils";

type ResumeCrumbProp = {
  contents?: Array<{ alias: string; name: string; link: string }>;
  title: string;
  collapsed?: boolean;
  icon?: (P: any) => ReactNode;
  name?: string;
  handleNav?: (P: string) => void;
  isActive?: boolean;
};

export const NavEle = ({
  contents,
  title,
  collapsed,
  icon: Icon,
  name,
  handleNav,
  isActive,
}: ResumeCrumbProp) => {
  return contents ? (
    <MenuDisclosure
      defaultOpen
      title={
        <div className={`${pryTextColor} flex gap-2 items-center w-20`}>
          {Icon && (
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-500">
              <Icon />
            </div>
          )}
          {!collapsed && <p className="">{title}</p>}
        </div>
      }
    >
      <div className={"flex flex-col gap-3"}>
        {contents.map((content, i) => (
          <Button key={`${i}`} className="text-base dark:font-light ">
            <div className="w-full flex items-center gap-2 group crumb-button capitalize">
              <p>{content.alias}</p>
              {/* <Visibility className=" text-transparent text-base font-semibold group-hover-[.crumb-button]:text-banner_purple delay-150 duration-200 ease-in-out" /> */}
            </div>
          </Button>
        ))}
      </div>
    </MenuDisclosure>
  ) : (
    <button
      className={cn(
        `text-base dark:font-light capitalize p-3 ${pryTextColor} w-full rounded-md ${
          isActive && `${activeTab} `
        }`
      )}
      onClick={() => {
        handleNav && name && handleNav(name);
      }}
    >
      <div
        className={`${pryTextColor} flex flex-col gap-1 md:gap-2 items-center justify-center w-full opacity-85 hover:opacity-100  transition-all`}
      >
        {Icon && (
          <div className="h-5 w-5 sm:w-7 sm:h-7 xl:w-10 xl:h-10">
            <Icon />
          </div>
        )}
        {
          <p className="text-xs sm:text-sm xl:text-base text-nowrap  ">
            {title}
          </p>
        }
      </div>
    </button>
  );
};
