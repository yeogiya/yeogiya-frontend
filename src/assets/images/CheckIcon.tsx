import { SVGProps } from "@/types/assets";

const CheckIcon = ({ css }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      css={css}
    >
      <circle cx="15" cy="15" r="15" fill="url(#paint0_linear_852_1873)" />
      <path
        d="M9 15.6136L12.4689 18.9478C12.5414 19.0173 12.6588 19.0175 12.7313 18.9478L21 11"
        fill="url(#paint1_linear_852_1873)"
      />
      <path
        d="M9 15.6136L12.4689 18.9478C12.5414 19.0173 12.6588 19.0175 12.7313 18.9478L21 11"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_852_1873"
          x1="0"
          y1="15"
          x2="30"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C56CD6" />
          <stop offset="1" stopColor="#3425AF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_852_1873"
          x1="9"
          y1="15"
          x2="21"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C56CD6" />
          <stop offset="1" stopColor="#3425AF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CheckIcon;
