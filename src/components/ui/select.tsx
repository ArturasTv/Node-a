import { OptionHTMLAttributes, SelectHTMLAttributes } from "react";
import { cn } from "../../utils/common";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

function Select({ className, ...props }: SelectProps) {
  return <select className={cn("select", className)} {...props} />;
}

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

function Option({ ...props }: OptionProps) {
  return <option {...props} />;
}

Select.Option = Option;

export default Select;
