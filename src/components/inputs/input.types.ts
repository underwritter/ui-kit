import React, { HTMLAttributes } from "react";
import {FieldErrors} from "react-hook-form";

export interface InputFieldProps<T> extends HTMLAttributes<HTMLInputElement>{
  label?: string;
  size?: "medium" | "large";
  value?: string;
  name?: keyof T;
  errors?: FieldErrors<T>;
  isDisable?: boolean;
  maxLength?: number;
  
}


export interface SearchInputProps<T> extends InputFieldProps<T> {
  incomingArray?: string[];
 
}