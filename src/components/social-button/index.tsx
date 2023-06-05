import { ButtonHTMLAttributes, forwardRef } from "react";
import { LogoFacebook, LogoGoogle, LogoTwitter } from "./social-logo";

const logos = {
  google: () => (
    <LogoGoogle className="h-5 w-5 fill-neutral-600 dark:fill-neutral-100" />
  ),
  twitter: () => (
    <LogoTwitter className="h-5 w-5 fill-neutral-600 dark:fill-neutral-100" />
  ),
  facebook: () => (
    <LogoFacebook className="h-5 w-5 fill-neutral-600 dark:fill-neutral-100" />
  ),
};

type SocialButtonProps = {
  logo: keyof typeof logos;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const SocialButton = forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ children, logo, className, ...rest }, ref) => {
    const LogoSocial = logos[logo];

    return (
      <button
        ref={ref}
        className={`w-full flex items-center justify-between py-2 px-3 border border-neutral-500 dark:border-neutral-100 rounded-lg ${className}`}
        {...rest}
      >
        <span className="fill-neutral-500">
          <LogoSocial />
        </span>
        <span className="flex-1 font-semibold text-sm text-neutral-600 dark:text-neutral-100">
          {children}
        </span>
      </button>
    );
  }
);
