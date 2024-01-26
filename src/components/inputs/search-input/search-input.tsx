import React, {ChangeEventHandler, ReactNode, useEffect, useState} from "react";
import {SearchInputProps} from "../input.types";
import {FieldErrors} from "react-hook-form";
import cn from "classnames";
import "../style.sass";

export const SearchInput = <T extends object>({
  label,
  size = "medium",
  value,
  name,
  errors,
  maxLength,

  ...props
}: SearchInputProps<T>) => {
  const [inputValue, setInputValue] = useState(value || "");
  const remainingChars = maxLength ? maxLength - inputValue.length : undefined;

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

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
    <div className="input_wrapper">
      {label && <span className="span_label">{spanLabel}</span>}
      <input
        value={inputValue}
        onChange={handleInputChange}
        className={cn("input", "search_input", size)}
        name={name as string}
        {...props}
      />
      <div className="clear"></div>
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
