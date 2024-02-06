import { useInputFocus } from "../../../utils/hooks/use-input-focus";
import React, {
  useState,
  ChangeEventHandler,
  ReactNode,
} from "react";
import {InputFieldProps} from "../input.types";
import {FieldErrors} from "react-hook-form";
import cn from "classnames";
import "./style.sass";

export const InputField = <T extends object>({
  label,
  size = "medium",
  value,
  name,
  errors,
  isDisable = false,
  maxLength,
  ...props
}: InputFieldProps<T>) => {
  const [inputValue, setInputValue] = useState(value || "");
  const { isFocused, onFocus, onBlur } = useInputFocus()

  const remainingChars = maxLength ? maxLength - inputValue.length : undefined;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= (maxLength || Infinity)) {
      setInputValue(newValue);
      if (props.onChange) {
        props.onChange(e);
      }
    }
  };

  const spanErrMessage =
    errors && errors[name as keyof FieldErrors<T>] ? (
      <span className="span_error_message">
        {errors[name as keyof FieldErrors<T>].message as ReactNode}
      </span>
    ) : null;

  const spanLabel = label ? label.toUpperCase() : "";

  return (
    <div className='wrapper_input_field'>
      {label && <span className="span_label">{spanLabel}</span>}
      <div className={`wrapper_field ${isFocused && 'focus'}`}>
        <input
          value={inputValue}
          onChange={handleInputChange}
          className={cn("input", size)}
          disabled={isDisable}
          name={name as string}
          onFocus={onFocus}
          onBlur={onBlur}
          {...props}
        />
      </div>

      {maxLength && (
        <div className="char_count">
          {`${inputValue.length}/${maxLength}`}
          {remainingChars !== undefined}
        </div>
      )}
      {spanErrMessage}
    </div>
  );
};
