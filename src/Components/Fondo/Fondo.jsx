import { memo } from "react";

const Fondo = (props) => {
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 521 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M521 270C521 419.117 404.37 540 260.5 540C116.63 540 0 419.117 0 270C0 120.883 116.63 0 260.5 0C404.37 0 521 120.883 521 270Z"
        fill="url(#paint0_linear_32_17)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_32_17"
          x1="65.4972"
          y1="611.743"
          x2="605.448"
          y2="506.616"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0446436" stopColor="#F9DC5C" stopOpacity={0.66} />
          <stop offset="0.828203" stopColor="#F9EE30" stopOpacity={0.327405} />
          <stop offset="1" stopColor="#FAFF04" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Memo = memo(Fondo);
export { Memo as Fondo };
