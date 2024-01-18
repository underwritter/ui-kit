import {FieldErrors} from "react-hook-form";

export interface InputFieldProps<T> {
  label?: string;
  placeholder?: string;
  size?: "medium" | "large";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name?: keyof T;
  errors?: FieldErrors<T>;
  isDisable?: boolean;
  maxLength?: number;
}
