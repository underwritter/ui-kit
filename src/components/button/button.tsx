import React, {FC} from "react";
import cn from "classnames";
import {ButtonProps} from "./button.types";
import "./button-styles.sass";

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  type,
  isDisabled = false,
  size = "medium",
  variant = "secondary",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      className={cn("button", size, variant)}
    >
      {label}
    </button>
  );
};
