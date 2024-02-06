import {Story} from "../../../../.storybook/types/story.types";
import {InputFieldAll} from "./input-field.all";
import {InputFieldProps} from "../input.types";
import {InputField} from "./input-field";
import {Meta} from "@storybook/react";
import React from "react";

export default {
  title: "UI-KIT/Inputs/InputField",
  component: InputField,
} as Meta<typeof InputField>;

export const Default: Story<typeof InputField> = <T extends object>(
  arg: InputFieldProps<T>
) => <InputField {...arg} />;

export const All: Story<typeof InputField> = () => <InputFieldAll />;

Default.args = {
  placeholder: "Enter text",
  size: "medium",
};

All.args = {};
