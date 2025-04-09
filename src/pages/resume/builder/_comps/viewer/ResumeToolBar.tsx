import { secTextColor } from "@/assets/css/tailwindcss";
import AppearanceIcon from "@/assets/svg/AppearanceIcon";
import { Tooltip } from "@/components/ui/ToolTip";
import { cn } from "@/utils";
import {
  IconZoomReset,
  IconZoomIn,
  IconZoomOut,
  IconFileDownload,
} from "@tabler/icons-react";
import { ListDashes } from "@phosphor-icons/react";

type Props = {
  resetZoom: (T: any) => void;
  zoomIn?: (T: any) => void;
  zoomOut?: (T: any) => void;
  download?: (T: any) => void;
  customize?: (T: any) => void;
  // orderSection?: (T: any) => void;
  className?: string;
  expanded?: boolean;
};

const ResumeToolBar = ({
  resetZoom,
  zoomIn,
  zoomOut,
  download,
  customize,
  className,
  expanded,
  // orderSection,
}: Props) => {
  return (
    <div
      className={cn(
        `flex gap-3 xl:gap-6 items-center shadow-sm rounded-[1.5rem] m-2 p-3 w-fit ${secTextColor} text-sm ${className}`
      )}
    >
      {/* {
        <Tooltip content={"section order"}>
          <button onClick={orderSection} className={"hover:text-primary/60"}>
            <ListDashes size={28} weight="bold" />
          </button>
        </Tooltip>
      } */}
      {expanded && (
        <Tooltip content={"reset zoom"}>
          <button onClick={resetZoom} className={"hover:text-primary/60"}>
            <IconZoomReset />
          </button>
        </Tooltip>
      )}
      <Tooltip content={"zoom in"}>
        <button onClick={zoomIn} className={"hover:text-primary/60"}>
          <IconZoomIn />
        </button>
      </Tooltip>

      <Tooltip content={"customization"}>
        <button onClick={customize} className={"hover:text-primary/60 w-6"}>
          <AppearanceIcon className="w-4 h-4" />
        </button>
      </Tooltip>

      <Tooltip content={"download"}>
        <button onClick={download} className={"hover:text-primary/60"}>
          <IconFileDownload />
        </button>
      </Tooltip>
    </div>
  );
};

export default ResumeToolBar;
