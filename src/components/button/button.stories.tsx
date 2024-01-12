import React from "react";
import {Button} from "./button";
import {Meta} from "@storybook/react";
import {Story} from "../../../.storybook/types/story.types";
import {ButtonProps} from "./button.types";

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
  size: "small",
  disabled: true,
};
