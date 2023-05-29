import { SVGAttributes, forwardRef } from "react";

export const LogoGoogle = forwardRef<
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
        d="M2.25 12c0-5.384 4.366-9.75 9.75-9.75 2.57 0 4.9 1.002 6.64 2.623a.75.75 0 01.018 1.08l-2.545 2.545a.75.75 0 01-1.029.03A4.621 4.621 0 0012 7.35a4.65 4.65 0 000 9.3 4.637 4.637 0 003.883-2.1H12a.75.75 0 01-.75-.75v-3.6a.75.75 0 01.75-.75h8.825a.75.75 0 01.736.604A10.2 10.2 0 0121.75 12c0 5.384-4.366 9.75-9.75 9.75S2.25 17.384 2.25 12zM12 3.75a8.25 8.25 0 108.185 7.2H12.75v2.1h4.336a.75.75 0 01.707 1A6.148 6.148 0 015.85 12 6.15 6.15 0 0112 5.85c1.313 0 2.527.415 3.524 1.116l1.499-1.5A8.187 8.187 0 0012 3.75z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
});
