import {Options} from "@popperjs/core/lib";
import {ReactNode} from "react";

export interface TooltipProps {
  content?: string;
  children?: ReactNode;
  isOpenByClick?: boolean;
  position: "top" | "bottom" | "left" | "right";
  otherPopupProps?: Options;
}
