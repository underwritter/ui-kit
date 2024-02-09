import React, {ChangeEventHandler, useEffect, useRef, useState} from "react";
import cn from "classnames";
import useOutsideClick from "../../../utils/hooks/use-outside-click";
import {useInputFocus} from "../../../utils/hooks/use-input-focus";
import {SearchInputProps} from "../input.types";
import {Icon} from "../../icons/icon";
import "./style.sass";

export const SearchInput = <T extends object>({
  label,
  size = "medium",
  value,
  status,
  description,
  incomingArray,
  ...props
}: SearchInputProps<T>) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => {
    setShowDropdown(false);
  });

  const {isFocused, onFocus, onBlur} = useInputFocus();

  const handleInputClick = () => setShowDropdown(true);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    setShowDropdown(newValue.length > 0);
    setInputValue(newValue);
  };

  const spanStatusMessage = description ? (
    <span className={`span_status_message  ${status}`}>{description}</span>
  ) : null;

  const spanLabel = label ? label.toUpperCase() : "";

  useEffect(() => {
    if (incomingArray.length) {
      const filtered = incomingArray.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  }, [inputValue, incomingArray]);

  return (
    <div className="input_wrapper">
      {label && <span className="span_label">{spanLabel}</span>}
      <div className="dropdown_wrapper">
        <div className={`search_input_wrapper ${isFocused && "focus"}`}>
          <Icon.IconSearch className="icons" />
          <input
            value={inputValue}
            onChange={handleInputChange}
            className={cn("input", "search_input", size)}
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

      {spanStatusMessage}
    </div>
  );
};
