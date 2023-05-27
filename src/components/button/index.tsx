import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = {
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children }, ref) => {
    return (
      <button
        ref={ref}
        className="w-full bg-primary hover:bg-primary-hover rounded-lg text-white font-semibold text-sm p-3"
      >
        {children}
      </button>
    );
  }
);

export default Button;
