
export interface CustomButtonProps {
  label: string;
  onClick: VoidFunction;
  type: "button" | "submit";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
}
