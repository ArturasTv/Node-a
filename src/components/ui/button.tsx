import { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/common";

type ButtonVariants = "primary" | "secondary" | "accent";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  isFullWidth?: boolean;
}

function Button({ className, variant, isFullWidth, ...props }: Props) {
  return (
    <button
      className={cn(
        "btn",
        {
          "btn-primary": variant === "primary",
          "btn-secondary": variant === "secondary",
          "btn-accent": variant === "accent",
        },
        {
          "btn-block": isFullWidth,
        },
        className
      )}
      {...props}
    />
  );
}

export default Button;
