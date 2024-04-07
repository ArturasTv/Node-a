import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/common";

type Variants = "primary" | "secondary" | "accent" | "success";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variants;
    isFullWidth?: boolean;
}

function Button({ className, variant, isFullWidth, ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                "btn",
                {
                    "btn-primary": variant === "primary",
                    "btn-secondary": variant === "secondary",
                    "btn-accent": variant === "accent",
                    "btn-success": variant === "success",
                },
                {
                    "btn-block": isFullWidth,
                },
                className,
            )}
            {...props}
        />
    );
}

export default Button;
