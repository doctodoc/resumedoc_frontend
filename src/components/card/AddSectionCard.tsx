import {
  Delete,
  DeleteOutline,
  KeyboardArrowUp,
  Remove,
} from "@mui/icons-material";
import React, { ReactElement } from "react";
import CollapsedCard from "./CollapsedCard";
import { secTextColor } from "@/assets/css/tailwindcss";

type AddSectionCardPropTypes = {
  totalCard: number;
  handleDeleteEntry: (id: string) => void;
  id: string;
  children?: ReactElement[] | ReactElement | string;
  className?: string;
  collapsed?: boolean;
  activateCard?: (id: number) => void;
  title?: string;
  subtitle?: string;
  collapse?: (id?: number) => void;
};

const AddSectionCard = ({
  totalCard,
  handleDeleteEntry,
  id,
  children,
  className,
  collapsed,
  activateCard,
  title,
  subtitle,
  collapse,
}: AddSectionCardPropTypes) => {
  const triggerCollapse = () => {
    if (collapse) collapse();
  };
  return (
    <CollapsedCard
      collapsed={collapsed}
      // collapsedComp={}
      activateCard={activateCard}
      title={title}
      subtitle={subtitle}
      handleDelete={() => handleDeleteEntry(id)}
      enableDelete={totalCard > 1}
    >
      <div className="w-full flex flex-col gap-3 bg-light_gray_widget dark:bg-secondary_dark/50 rounded-3xl p-4">
        <div className={`flex justify-between`}>
          {totalCard > 1 && (
            <button
              className={`text-red-400 flex gap-2 text-sm items-center`}
              onClick={() => handleDeleteEntry(id)}
            >
              <DeleteOutline />
              <p className="whitespace-nowrap">Remove Entry</p>
            </button>
          )}
          <div className="w-full flex justify-end text-sm">
            <button
              onClick={triggerCollapse}
              className={`${secTextColor} flex gap-1 items-center`}
            >
              <p>Collapse</p>
              <KeyboardArrowUp />
            </button>
          </div>
        </div>

        <section className={`${className}`}>{children}</section>
      </div>
    </CollapsedCard>
  );
};

export default AddSectionCard;
