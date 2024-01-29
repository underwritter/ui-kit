import {SVGAttributes} from "react";

export type SVGIcon = React.FC<React.SVGProps<SVGSVGElement>>;

export enum IconSize {
  Small = 16,
  Medium = 24,
  MediumPlus = 36,
  Large = 48,
}

export enum DynamicProp {
  Width = "--width",
  Height = "--height",
  Fill = "--fill",
  Stroke = "--stroke",
}

export interface IconProps extends Omit<SVGAttributes<SVGElement>, "name"> {
  size?: number | IconSize;
  color?: string;
  stroke?: string;
  viewBox?: string;
  onClick?: VoidFunction;
}

export enum IconName {
  CloseClear = "CloseClear",
  ArrowRight = "ArrowRight",
  ArrowUp = "ArrowUp",
  ArrowLeft = "ArrowLeft",
  ArrowDown = "ArrowDown",
  Check = "Check",
  Show = "Show",
  Hide = "Hide",
  Info = "Info",
  Moon = "Moon",
  Sun = "Sun",
}

export interface IconInnerProps extends IconProps {
  name: IconName;
}
