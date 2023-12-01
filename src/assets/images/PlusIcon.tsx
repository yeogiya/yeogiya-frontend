import theme from "@/styles/theme";
import { SVGProps } from "@/types/assets";

interface PlusIconProps extends SVGProps {
  fill?: string;
}

const PlusIcon = ({ css, fill }: PlusIconProps) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={css}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2 1.2C16.2 0.537259 15.6627 0 15 0C14.3372 0 13.8 0.537259 13.8 1.2V13.8012L1.2 13.8012C0.537258 13.8012 0 14.3384 0 15.0012C0 15.6639 0.537258 16.2012 1.2 16.2012H13.8V28.8C13.8 29.4627 14.3372 30 15 30C15.6627 30 16.2 29.4627 16.2 28.8V16.2012H28.8C29.4627 16.2012 30 15.6639 30 15.0012C30 14.3384 29.4627 13.8012 28.8 13.8012L16.2 13.8012V1.2Z"
        fill="url(#paint0_linear_852_1966)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_852_1966"
          x1="0"
          y1="15"
          x2="30"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={fill || `${theme.color.purple10}`} />
          <stop offset="1" stopColor={fill || `${theme.color.navy}`} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PlusIcon;
