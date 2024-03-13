import React, {FC, useEffect, useRef, useState} from "react";
import cn from "classnames";
import {AccordionProps} from "./accordion.types";
import {Icon} from "../icons/icon";
import "./accordion-styles.sass";

export const Accordion: FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  customArrow,
  onToggle,
  className,
  style,
  disabled,
  transitionDuration = 0.8,
  otherAccordionProps,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [contentHeight, setContentHeight] = useState(
    defaultOpen ? "auto" : "0px"
  );

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (onToggle) {
        onToggle(!isOpen);
      }
    }
  };

  const rotateWhithIsOpen = isOpen ? "rotate(180deg)" : "rotate(0deg)";

  return (
    <div
      style={{cursor: disabled ? "not-allowed" : "pointer", ...style}}
      className={cn(className, "accordion_wrapper", {["disabled"]: disabled})}
      {...otherAccordionProps}
      onClick={handleToggle}
    >
      <div className="content_wrapper">
        <div className="wrapper_title_and_arrow">
          <div className="title"> {title}</div>

          <div
            className="arrow_wrapper"
            style={{
              transition: `transform ${transitionDuration}s ease`,
              transform: `translate(-50%, -50%) ${rotateWhithIsOpen}`,
            }}
          >
            {customArrow || <Icon.IconArrowDown className="icons" />}
          </div>
        </div>
        <div
          className="children"
          style={{
            maxHeight: contentHeight,
            transition: `max-height ${transitionDuration}s ease`,
          }}
        >
          <div ref={contentRef}>{children}</div>
        </div>
      </div>
    </div>
  );
};
