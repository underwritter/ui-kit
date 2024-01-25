import React, {useState, useEffect, ChangeEventHandler, ReactNode} from "react";
import {InputFieldProps} from "../input.types";
import {FieldErrors} from "react-hook-form";
import cn from "classnames";
import "../style.sass";

export const InputField = <T extends object>({
  label,
  placeholder,
  size = "medium",
  onChange,
  value,
  name,
  errors,
  isDisable = false,
  maxLength,
}: InputFieldProps<T>) => {
  const [inputValue, setInputValue] = useState(value || "");
  const remainingChars = maxLength ? maxLength - inputValue.length : undefined;

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= (maxLength || Infinity)) {
      setInputValue(newValue);
      if (onChange) {
        onChange(e);
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
        placeholder={placeholder}
        className={cn("input", size)}
        disabled={isDisable}
        name={name as string}
      />
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
