import { HTMLAttributes } from "react";
import { Status } from "../../utils/types/enums";

export interface InputFieldProps<T> extends HTMLAttributes<HTMLInputElement>{
  label?: string;
  size?: "medium" | "large";
  value?: string;
  status?: Status;
  description?: string;
  isDisable?: boolean;
  maxLength?: number;
}
export interface SearchInputProps<T> extends InputFieldProps<T> {
  incomingArray?: string[];
 
}
