export interface ButtonProps {
  label: string;
  onClick?: VoidFunction;
  type?: "button" | "submit";
  isDisabled?: boolean;
  size?: "medium" | "large";
  variant?: "primary" | "secondary";
}
