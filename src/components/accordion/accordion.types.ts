import React from "react";
import {ReactNode} from "react";

export interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  customArrow?: ReactNode;
  onToggle?: (isOpen: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  transitionDuration?: number;
  otherAccordionProps?: React.BaseHTMLAttributes<HTMLDivElement>;
  contentHeight?: string;
}
