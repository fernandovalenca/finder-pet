import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

type AnchorLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const AnchorLink = ({
  children,
  className,
  ...rest
}: AnchorLinkProps) => {
  return (
    <Link
      className={`font-semibold text-xs text-primary hover:text-primary-hover ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
};
