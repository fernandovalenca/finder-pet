export const Spinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <circle
        cx="10"
        cy="10"
        r="8.75"
        stroke="#F6F8FB"
        strokeWidth="2.5"
      ></circle>
      <mask
        id="mask0_5271_1786"
        style={{ maskType: "alpha" }}
        width="20"
        height="20"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <circle
          cx="10"
          cy="10"
          r="8.75"
          stroke="#FF4869"
          strokeWidth="2.5"
        ></circle>
      </mask>
      <g mask="url(#mask0_5271_1786)">
        <mask id="path-3-inside-1_5271_1786" fill="#fff">
          <path d="M0 10A10 10 0 0110 0v2.5A7.5 7.5 0 002.5 10H0z"></path>
        </mask>
        <path
          stroke="#FF4869"
          strokeWidth="5"
          d="M0 10A10 10 0 0110 0v2.5A7.5 7.5 0 002.5 10H0z"
          mask="url(#path-3-inside-1_5271_1786)"
        ></path>
      </g>
    </svg>
  );
};
