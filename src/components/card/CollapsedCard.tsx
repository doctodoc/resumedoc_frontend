import {
  lightCardBg,
  pryTextColor,
  secBgColor,
  secTextColor,
} from "@/assets/css/tailwindcss";
import { Delete, DeleteOutline, KeyboardArrowDown } from "@mui/icons-material";
import React, { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

type Props = {
  collapsed?: boolean;
  children: ReactNode;
  collapsedComp?: (T?: any) => ReactNode;
  activateCard?: (T?: any) => void;
  title?: string;
  subtitle?: string;
  collapsedCompProps?: any;
  handleDelete?: ((T?: any) => void) | null;
  enableDelete?: boolean;
};

export type Context = {
  activeCards: Array<number>;
  activateCard?: ((id: number) => void) | null;
  collapseCard?: ((id: number) => void) | null;
  toggleCard?: ((id: number) => void) | null;
  setActiveCards?: React.Dispatch<React.SetStateAction<number[]>>;
};

export const CollapsedContext = createContext<Context | null>({
  activeCards: [0],
});

export const useCardContext = () => useContext(CollapsedContext);

const useCollapseHook = () => {
  const [activeCards, setActiveCards] = useState<Array<number>>([0]);

  const collapseCard = (id: number) => {
    setActiveCards(activeCards.filter((card) => card !== id));
  };

  const activateCard = (id: number) => {
    const isActive = activeCards.findIndex((card) => card === id);
    if (isActive < 0) {
      setActiveCards([...activeCards, id]);
    }
  };

  const toggleCard = (id: number) => {
    const isActive = activeCards.findIndex((card) => card === id);
    if (isActive < 0) {
      setActiveCards([...activeCards, id]);
    } else {
      setActiveCards(activeCards.filter((card) => card !== id));
    }
  };

  return {
    collapseCard,
    activateCard,
    toggleCard,
    activeCards,
    setActiveCards,
  };
};

export const CollapsedProvider = ({
  children,
}: {
  children: ReactNode | Array<ReactNode>;
}) => {
  const {
    activeCards,
    activateCard,
    collapseCard,
    toggleCard,
    setActiveCards,
  } = useCollapseHook();

  return (
    <CollapsedContext.Provider
      value={{
        activeCards,
        activateCard,
        collapseCard,
        toggleCard,
        setActiveCards,
      }}
    >
      {children}
    </CollapsedContext.Provider>
  );
};

const CollapsedCard = ({
  collapsed,
  collapsedComp: CollapsedComp,
  activateCard,
  children,
  title,
  subtitle,
  collapsedCompProps,
  handleDelete,
  enableDelete,
}: Props) => {
  return collapsed ? (
    <div
      className={`flex flex-col gap-4 w-full ${pryTextColor} ${lightCardBg} p-2 rounded-lg hover:bg-opacity-80`}
    >
      {!CollapsedComp ? (
        <div className={`w-full flex  gap-2 px-3 `}>
          {handleDelete && enableDelete && (
            <button
              onClick={() => {
                if (handleDelete) handleDelete();
              }}
              className="text-sm text-red-400 "
            >
              <DeleteOutline />
            </button>
          )}
          <button
            className="flex flex-1 gap-3 w-full justify-center"
            onClick={activateCard}
          >
            <p className=" truncate flex-1">{title}</p>
            <div className="text-primary flex items-center gap-2">
              <p>show</p>
              <KeyboardArrowDown />
            </div>
            {/* <p className="flex-1 truncate">{subtitle}</p> */}
          </button>

          {/* <div className={`flex gap-3 justify-center w-full  text-primary`}>
            <p>View</p>
            
          </div> */}
        </div>
      ) : (
        <CollapsedComp {...collapsedCompProps} />
      )}
    </div>
  ) : (
    <div className="w-full">{children}</div>
  );
};

export default CollapsedCard;
