import useOutsideClick from "../../../utils/hooks/use-outside-click";
import {useInputFocus} from "../../../utils/hooks/use-input-focus";
import React, {
  ChangeEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {SearchInputProps} from "../input.types";
import {FieldErrors} from "react-hook-form";
import {Icon} from "../../icons/icon";
import cn from "classnames";
import "./style.sass";

export const SearchInput = <T extends object>({
  label,
  size = "medium",
  value,
  name,
  errors,
  incomingArray,
  ...props
}: SearchInputProps<T>) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const {isFocused, onFocus, onBlur} = useInputFocus();

  useEffect(() => {
    if (incomingArray.length) {
      const filtered = incomingArray.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  }, [inputValue, incomingArray]);

  useOutsideClick(dropdownRef, () => {
    setShowDropdown(false);
  });

  const handleInputClick = () => {
    setShowDropdown(true);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    setShowDropdown(newValue.length > 0);
    setInputValue(newValue);
  };

  const spanErrMessage =
    errors && errors[name as keyof FieldErrors<T>] ? (
      <span className="span_error_message">
        {errors[name as keyof FieldErrors<T>].message as ReactNode}
      </span>
    ) : null;

  const spanLabel = label ? label.toUpperCase() : "";

  return (
    <div className='input_wrapper'>
      {label && <span className="span_label">{spanLabel}</span>}
      <div className="dropdown_wrapper">
        <div className={`search_input_wrapper ${isFocused && "focus"}`}>
          <Icon.IconSearch className="icons" />
          <input
            value={inputValue}
            onChange={handleInputChange}
            className={cn("input", "search_input", size)}
            name={name as string}
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={handleInputClick}
            {...props}
          />
          <Icon.IconCloseClear
            className={`icons clear`}
            onClick={() => setInputValue("")}
          />
        </div>
        {showDropdown && (
          <div className="dropdown" ref={dropdownRef}>
            {filteredItems?.map((item, index) => {
              return (
                <div
                  className="dropdown_items"
                  key={index}
                  onClick={() => setInputValue(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {spanErrMessage}
    </div>
  );
};
