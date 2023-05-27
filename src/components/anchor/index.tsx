import { AnchorHTMLAttributes, forwardRef } from "react";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <a
        ref={ref}
        className={`font-semibold text-xs text-primary hover:text-primary-hover ${className}`}
        {...rest}
      >
        {children}
      </a>
    );
  }
);
