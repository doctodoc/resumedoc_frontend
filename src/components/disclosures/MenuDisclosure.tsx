import { Disclosure } from "@headlessui/react";
import React, { Children, ElementType, ReactElement } from "react";
import TextWithIcon from "../texts/TextWithIcon";
import { KeyboardArrowDown } from "@mui/icons-material";

type DisclosureProps = {
  defaultOpen?: boolean;
  title: string;
  children?: string | ReactElement;
  className?: string;
  titleClassName?: string;
  as?: ElementType;
};
const MenuDisclosure = ({
  defaultOpen,
  title,
  children,
  className,
  titleClassName,
  as,
}: DisclosureProps) => {
  return (
    <Disclosure defaultOpen={defaultOpen} as={as}>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 bg-secondary_text/20 ${titleClassName}`}
          >
            <TextWithIcon
              text={title}
              icon={KeyboardArrowDown}
              iconClassName={
                open
                  ? "-rotate-180 transform transition-all text-grey_icon"
                  : "transform transition-all"
              }
              buttonClassName="w-full flex justify-between"
            />
          </Disclosure.Button>
          <Disclosure.Panel
            className={`flex flex-col gap-3 px-4 pb-2 text-sm text-gray-500 ${className} dark:text-dark_primary_text`}
          >
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MenuDisclosure;
