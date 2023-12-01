import { SVGProps } from "@/types/assets";
import theme from "@/styles/theme";

const BgCloseIcon = ({ css }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      css={css}
    >
      <circle cx="8" cy="8" r="8" fill={theme.color.black30} />
      <path
        d="M5 5L11 11"
        stroke={theme.color.white}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 5L5 11"
        stroke={theme.color.white}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BgCloseIcon;
