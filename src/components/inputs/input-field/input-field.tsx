import React, {useState, ChangeEventHandler} from "react";
import cn from "classnames";
import {useInputFocus} from "../../../utils/hooks/use-input-focus";
import {InputFieldProps} from "../input.types";
import "./input-field-styles.sass";
import "../general-input-styles.sass";

export const InputField = <T extends object>({
  label,
  size = "medium",
  value,
  status,
  description,
  isDisable = false,
  maxLength,
  style,
  ...props
}: InputFieldProps<T>) => {
  const [inputValue, setInputValue] = useState(value || "");
  const {isFocused, onFocus, onBlur} = useInputFocus();

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

  const spanStatusMessage = description ? (
    <span className={`span_status_message  ${status}`}>{description}</span>
  ) : null;

  const spanLabel = label ? label.toUpperCase() : "";

  return (
    <div className="wrapper_input_field" style={style}>
      {label && <span className="span_label">{spanLabel}</span>}
      <div className={`wrapper_field ${isFocused && "focus"}`}>
        <input
          value={inputValue}
          onChange={handleInputChange}
          className={cn("input_field", size)}
          disabled={isDisable}
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
      {spanStatusMessage}
    </div>
  );
};
