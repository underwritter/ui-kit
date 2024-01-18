import {Story} from "../../../.storybook/types/story.types";
import {ButtonProps} from "./button.types";
import {Meta} from "@storybook/react";
import {Button} from "./button";
import React from "react";

export default {
  title: "UI-KIT/Button",
  component: Button,
} as Meta<typeof Button>;

export const Secondary: Story<typeof Button> = (arg: ButtonProps) => (
  <Button {...arg} />
);

export const Primary: Story<typeof Button> = (arg: ButtonProps) => (
  <Button {...arg} />
);

export const Disabled: Story<typeof Button> = (arg: ButtonProps) => (
  <Button {...arg} />
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
  size: "large",
  isDisabled: true,
};
