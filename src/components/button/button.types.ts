
export interface ButtonProps {
  label: string;
  onClick: VoidFunction;
  type: "button" | "submit";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
}
