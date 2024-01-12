import {FieldErrors} from 'react-hook-form'

interface inputProps<T> {
  hasLabel: boolean;
  placeholder: string;
  size?: "medium" | "large";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name: keyof T;
  type?: React.HTMLInputTypeAttribute;
  errors: FieldErrors<T>;
}
