import React from "react";
import {Meta} from "@storybook/react";
import {Story} from "../../../.storybook/types/story.types";
import { TooltipProps } from "./tooltip.types";
import Tooltip from "./tooltip";

export default {
  title: "UI-KIT/Tooltip",
  component: Tooltip,
} as Meta<typeof Tooltip>;

export const Default: Story<typeof Tooltip> = (arg: TooltipProps) => (
  <Tooltip {...arg} />
);
export const OpenByOnClick: Story<typeof Tooltip> = (arg: TooltipProps) => (
  <Tooltip {...arg} />
);

Default.args = {
  children: <div>наведи на меня</div>,
  position: "bottom",
  content: "соси хуй",
};

OpenByOnClick.args = {
  children: <div>нажми на меня</div>,
  position: "bottom",
  content: "соси хуй",
  isOpenByClick: true,
};
