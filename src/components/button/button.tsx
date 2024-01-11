import React, {FC, ReactNode, useState} from "react";
import {CustomButtonProps} from "./button.types";
import cn from "classnames";
import "./style.sass";

export const CustomButton: FC<CustomButtonProps> = ({
  label,
  onClick,
  type,
  disabled = false,
  size = "medium",
  variant = "secondary",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn("button", {["disabled"]: disabled}, size, variant)}
    >
      {label}
    </button>
  );
};
