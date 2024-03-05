import React from "react";
import {InputField} from "./input-field";
import "../general-input-styles.sass";

export const InputFieldAll = () => {
  return (
    <div className="all">
      <InputField label="Enter you text" />
      <span className="span_storybook">Label</span>
      <InputField isDisable={true} />
      <span className="span_storybook">Disabled</span>

      <InputField placeholder="Введите текст..." />
      <span className="span_storybook">Placeholder</span>
      <InputField size="large" />
      <span className="span_storybook">Size large</span>
      <InputField maxLength={20} />
      <span className="span_storybook">Max length</span>
    </div>
  );
};
