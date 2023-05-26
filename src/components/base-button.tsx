import { classNames } from "@/utils/funtions";
import { ButtonHTMLAttributes, forwardRef } from "react";

type BaseButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          "bg-primary w-11/12 py-7 rounded-lg text-white text-2xl font-semibold",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default BaseButton;
