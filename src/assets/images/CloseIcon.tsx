import { SVGProps } from "@/types/assets";
import theme from "@/styles/theme";

const CloseIcon = ({ css }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      css={css}
    >
      <path
        d="M1 1L15 15"
        stroke={theme.color.black89}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 1L1 15"
        stroke={theme.color.black89}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseIcon;
