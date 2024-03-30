import { Disclosure } from "@headlessui/react";
// import { ArrowDown, CloseGreyIcon } from "../../assets/svg";
// import { NavLinksProps } from "../nav_bar/Links";
import TextWithIcon from "@/components/texts/TextWithIcon";
import { ExpandMore } from "@mui/icons-material";
import { CloseIcon } from "@/assets/svg";
import { NavLinksPropsType } from "@/data/linksData/navLinksData";
// import NavLinkButton from "../nav_bar/NavLinkButton";
// import { AppRoutes } from "../../routes/AppRoutes";
// import { Link } from "react-router-dom";
// import TutorIcon from "../../assets/comps/TutorIcon";
// import ExamIcon from "../../assets/comps/ExamIcon";
// import StatIcon from "../../assets/comps/StatIcon";
// import DashboardIcon from "../../assets/comps/DashboardIcon";
// import SettingsIcon from "../../assets/comps/SettingsIcon";

type DropDownNavPropType = {
  isOpen?: boolean;
  navLinks: NavLinksPropsType[];
  handleNav: (link: string) => void;
  currentPath?: string;
  handleClose: () => void;
};

const DropDownNav = ({
  isOpen,
  navLinks,
  handleNav,
  currentPath,
  handleClose,
}: DropDownNavPropType) => {
  return (
    <div
      className={`md:hidden  fixed top-0 h-screen z-drop_down_menu bg-light_bg dark:bg-primary_dark flex flex-col gap-4 md:gap-1 items-start overflow-y-auto scroll-m-0 md:overflow-none
         w-full  md:w-fit  md:bg-light_nav_bg/[19%] 
        `}
    >
      <div className="p-3 w-full sticky top-0 bg-light_bg dark:bg-primary_dark z-floater">
        <button onClick={handleClose}>
          <CloseIcon />
        </button>
      </div>

      {/* MENU CONTENTS */}
      <section className="w-full flex flex-col gap-3 p-3">
        {/* RESOURCES */}
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-primary/10 px-4 py-2 text-left text-sm font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                <TextWithIcon
                  text={"Our Resources"}
                  icon={ExpandMore}
                  width={4}
                  height={4}
                  imageClassName={
                    open
                      ? "-rotate-180 transform transition-all"
                      : "transform transition-all"
                  }
                  flexPositions="justify-between items-center"
                  buttonClassName="w-full"
                />
              </Disclosure.Button>
              <Disclosure.Panel className="flex flex-col gap-3 px-4 pt-4 pb-2 text-sm text-gray-500">
                <h1 className="font-medium text-lg">
                  Explore our Learning Resources and Features
                </h1>
                <div className="flex flex-col justify-start items-start gap-2">
                  {/* <MenuCard link={AppRoutes.classesAndResources.classes} title='Classes and Tutorial' description='Learn with the best resources.' Icon={TutorIcon} handleClose= {handleClose} />
                    <MenuCard link={AppRoutes.examination.index} title='Examination Simulator' description='Assess yourself with our Examination simulator.' Icon={ExamIcon} handleClose= {handleClose}/>
                    <MenuCard link={AppRoutes.statistics.registration.setup} title='Oracle' description='Check your chances of admission.' Icon={StatIcon} handleClose= {handleClose}/> */}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* PERSONALIZATION */}
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-primary/10 px-4 py-2 text-left text-sm font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                <TextWithIcon
                  text={"Personalization"}
                  icon={ExpandMore}
                  width={4}
                  height={4}
                  imageClassName={
                    open
                      ? "-rotate-180 transform transition-all"
                      : "transform transition-all"
                  }
                  flexPositions="justify-between items-center"
                  buttonClassName="w-full"
                />
              </Disclosure.Button>
              <Disclosure.Panel className="flex flex-col gap-3 px-4 pt-4 pb-2 text-sm text-gray-500">
                <h1 className="font-medium text-lg">
                  Personalize your experience
                </h1>
                {/* <div className="flex flex-col justify-start items-start gap-2">
                    <MenuCard link={AppRoutes.dashboard.index} title='Dashboard' description='Set goals, targets and View performance.' Icon={DashboardIcon} handleClose= {handleClose}/>
                    <MenuCard link={AppRoutes.settings.index} title='Setting' description='Personalize the feel and experience.' Icon={SettingsIcon} handleClose= {handleClose}/>

                  </div> */}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* SUPPORT */}
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-primary/10 px-4 py-2 text-left text-sm font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                <TextWithIcon
                  text={"Support"}
                  icon={ExpandMore}
                  width={4}
                  height={4}
                  imageClassName={
                    open
                      ? "-rotate-180 transform transition-all"
                      : "transform transition-all"
                  }
                  flexPositions="justify-between items-center"
                  buttonClassName="w-full"
                />
              </Disclosure.Button>
              <Disclosure.Panel className="flex flex-col gap-3 px-4 pt-4 pb-2 text-sm text-gray-500">
                <h1 className="font-medium text-lg">We love to help</h1>
                {/* <div className="flex flex-col justify-start items-start gap-2">
                    <MenuCard link={''} title='Consultancy' description='Hear from a Professional.' Icon={DashboardIcon} handleClose= {handleClose}/>
                    <MenuCard link={''} title='Customer Support' description='How can we assist you today?' Icon={SettingsIcon} handleClose= {handleClose} />

                  </div> */}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* {navLinks()?.map(({ name, alias, link, Icon }) => {
          const isActive = currentPath === link;
          return (
            <NavLinkButton
              link={link}
              isActive={isActive}
              key={name}
              handleNav={handleNav}
              Icon={Icon}
              title={name}
              alias={alias}
            />
          );
        })} */}

        <section className="w-full flex flex-col justify-center items-center px-6 mt-6">
          <button className="flex justify-center items-center border-[1.6px] text-sm border-light_font p-2 font-semibold w-[90%] dark:text-dark_primary_text">
            View Pricing
          </button>
        </section>
      </section>
    </div>
  );
};

export default DropDownNav;
