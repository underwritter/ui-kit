import React from "react";
import {CustomButton} from "./button";
import {Meta} from "@storybook/react";
import {Story} from "../../../.storybook/types/story.types";
import {CustomButtonProps} from "./button.types";

export default {
  title: "UI-KIT/Button",
  component: CustomButton,
} as Meta<typeof CustomButton>;

export const Secondary: Story<typeof CustomButton> = (arg: CustomButtonProps) => (
  <CustomButton {...arg} />
);

export const Primary: Story<typeof CustomButton> = (arg: CustomButtonProps) => (
  <CustomButton {...arg} />
);

export const Disabled: Story<typeof CustomButton> = (arg: CustomButtonProps) => (
  <CustomButton {...arg} />
);

Secondary.args = {
  label: "button",
  variant: "secondary",
  size: "medium",
};

Primary.args = {
  label: "button",
  variant: "primary",
  size: "medium",
};

Disabled.args = {
  label: "button",
  size: "small",
  disabled: true,
};
