import { greyText } from "@/assets/css/tailwindcss";
import TextButton from "@/components/buttons/TextButton";
import DropMenuContainer from "@/containers/dropDowns/DropMenuContainer";
import usePopUpMenu from "@/shared/hooks/usePopUpMenu";
import {
  CheckCircleOutline,
  Error,
  FilterList,
  RadioButtonUncheckedOutlined,
} from "@mui/icons-material";
import React from "react";

export type FilterCrumbsProp = {
  activeFilterId: string;
  handleFilterCrumbs: ({ id }: { id: string }) => void;
};

const filtersList = [
  {
    id: "empty",
    alias: "Empty",
    icon: <RadioButtonUncheckedOutlined className={`${greyText}`} />,
  },
  {
    id: "validated",
    alias: "Validated",
    icon: <CheckCircleOutline className="text-primary" />,
  },
  {
    id: "error",
    alias: "Error",
    icon: <Error className={"text-red-700"} />,
  },
];

const FilterCrumbs = ({
  activeFilterId,
  handleFilterCrumbs,
}: FilterCrumbsProp) => {
  const {
    openPopUp: openFilterMenu,
    closePopUp: closeFilterMenu,
    popUpState: isFilterMenuOpen,
    togglePopUp: toggleFilterMenu,
    popUpRef: popUpFilterRef,
  } = usePopUpMenu();

  const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    handleFilterCrumbs({ id });
  };

  return (
    <div className={"relative"}>
      <DropMenuContainer
        title={<FilterList />}
        toggleMenu={toggleFilterMenu}
        openMenu={openFilterMenu}
        closeMenu={closeFilterMenu}
        isOpen={isFilterMenuOpen}
        dropDownRef={popUpFilterRef}
        containerClass={"bg-secondary_text/20"}
        withoutIcon
      >
        <div className="flex flex-col gap-3 ">
          {filtersList.map(({ id, alias, icon: Icon }) => (
            <TextButton
              key={id}
              icon={Icon}
              id={id}
              onClick={handleFilter}
              isActive={id === activeFilterId}
            >
              <p>{alias}</p>
            </TextButton>
          ))}
        </div>
      </DropMenuContainer>
    </div>
  );
};

export default FilterCrumbs;
