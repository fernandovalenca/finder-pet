import { SVGAttributes, forwardRef } from "react";

export const LogoFacebook = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10.488 3.788A5.25 5.25 0 0114.2 2.25h2.7a.75.75 0 01.75.75v3.6a.75.75 0 01-.75.75h-2.7a.15.15 0 00-.15.15v1.95h2.85a.75.75 0 01.728.932l-.9 3.6a.75.75 0 01-.728.568h-1.95V21a.75.75 0 01-.75.75H9.7a.75.75 0 01-.75-.75v-6.45H7a.75.75 0 01-.75-.75v-3.6A.75.75 0 017 9.45h1.95V7.5a5.25 5.25 0 011.538-3.712zM14.2 3.75a3.75 3.75 0 00-3.75 3.75v2.7a.75.75 0 01-.75.75H7.75v2.1H9.7a.75.75 0 01.75.75v6.45h2.1V13.8a.75.75 0 01.75-.75h2.114l.525-2.1H13.3a.75.75 0 01-.75-.75V7.5a1.65 1.65 0 011.65-1.65h1.95v-2.1H14.2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
});
