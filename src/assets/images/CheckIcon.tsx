import { SVGProps } from "@/types/assets";
import theme from "@/styles/theme";

const CheckIcon = ({ css }: SVGProps) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={css}
    >
      <circle cx="15" cy="15" r="15" fill={theme.color.purple} />
      <path
        d="M9 15.6136L12.4689 18.9478C12.5414 19.0173 12.6588 19.0175 12.7313 18.9478L21 11"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
