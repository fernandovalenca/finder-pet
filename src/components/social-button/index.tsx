import { ButtonHTMLAttributes, forwardRef } from "react";
import { LogoFacebook, LogoGoogle, LogoTwitter } from "./social-logo";

const logos = {
  google: () => <LogoGoogle className="fill-neutral-600" />,
  twitter: () => <LogoTwitter className="fill-neutral-600" />,
  facebook: () => <LogoFacebook className="fill-neutral-600" />,
};

type SocialButtonProps = {
  logo: keyof typeof logos;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const SocialButton = forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ children, logo, className, ...rest }, ref) => {
    const LogoSocial = logos[logo];

    return (
      <button
        ref={ref}
        className={`w-full flex items-center justify-start py-2 px-3 border border-neutral-500 rounded-lg ${className}`}
        {...rest}
      >
        <span className="h-5 w-5 fill-neutral-500">
          <LogoSocial />
        </span>
        <span className="flex-1 font-semibold text-sm text-neutral-600">
          {children}
        </span>
      </button>
    );
  }
);

export default SocialButton;
