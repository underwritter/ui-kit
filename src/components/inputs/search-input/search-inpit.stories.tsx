import {Story} from "../../../../.storybook/types/story.types";
import {SearchInputProps} from "../input.types";
import {SearchInput} from "./search-input";
import {Meta} from "@storybook/react";
import React from "react";

export default {
  title: "UI-KIT/Inputs/SearchInput",
  component: SearchInput,
} as Meta<typeof SearchInput>;

export const Default: Story<typeof SearchInput> = <T extends object>(
  arg: SearchInputProps<T>
) => <SearchInput {...arg} />;

Default.args = {
  placeholder: "поиск города в россии",
  size: "medium",
};
