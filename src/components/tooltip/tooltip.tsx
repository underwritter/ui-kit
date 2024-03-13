import React, {FC, useState, useRef, useEffect} from "react";
import ReactDOM from "react-dom";
import cn from "classnames";
import {usePopper} from "react-popper";
import {createPopper} from "@popperjs/core";
import {TooltipProps} from "./tooltip.types";
import {modifiers} from "./tooltip.constants";
import {useAutoCloseOnScroll} from "../../utils/hooks/use-auto-close-on-scroll";
import useOutsideClick from "../../utils/hooks/use-outside-click";
import "./tooltip-styles.sass";

const Tooltip: FC<TooltipProps> = ({
  content,
  children,
  isOpenByClick = false,
  position,
  otherPopupProps,
}) => {
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipInstance, setTooltipInstance] = useState<any>(null);
  const [arrow, setArrow] = useState(null);
  const referenceElement = useRef<HTMLDivElement | null>(null);
  const popperElement = useRef(null);

  const {styles, attributes} = usePopper(
    referenceElement.current,
    popperElement.current,
    {
      modifiers: [
        {
          name: "arrow",
          options: {
            element: arrow,
          },
        },
      ],
    }
  );

  useEffect(() => {
    if (referenceElement.current && popperElement.current) {
      setTooltipInstance(
        createPopper(referenceElement.current, popperElement.current, {
          ...otherPopupProps,
          placement: position,
          modifiers,
        })
      );
    }

    return () => {
      tooltipInstance?.destroy?.();
    };
  }, [
    position,
    referenceElement.current?.clientHeight,
    popperElement.current?.clientHeight,
  ]);

  useOutsideClick(referenceElement, () => {
    setTooltipOpen(false);
  });

  useAutoCloseOnScroll(() => {
    setTooltipOpen(false);
  }, []);

  const handleMouseEnter = () => {
    if (isOpenByClick) return;
    setTooltipOpen(true);
  };

  const handleMouseLeave = () => {
    if (isOpenByClick) return;
    setTooltipOpen(false);
  };

  const handleClick = () => {
    if (isOpenByClick) {
      setTooltipOpen(!isTooltipOpen);
    }
  };

  return (
    <div
      ref={referenceElement}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="tooltip_wrapper"
    >
      <div className={cn({["children"]: isOpenByClick})}>{children}</div>

      {isTooltipOpen &&
        ReactDOM.createPortal(
          <div
            className="tooltip"
            ref={popperElement}
            style={{...styles.popper}}
            {...attributes.popper}
          >
            {content}
            <div
              data-popper-arrow
              ref={setArrow}
              style={styles.arrow}
              className="arrow"
            ></div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Tooltip;
