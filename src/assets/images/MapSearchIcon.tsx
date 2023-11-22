import { SVGProps } from "@/types/assets";
import theme from "@/styles/theme";

const MapSearchIcon = ({ css }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      css={css}
    >
      <circle
        cx="9"
        cy="9"
        r="8.25"
        fill="white"
        stroke={theme.color.black89}
        strokeWidth="1.5"
      />
      <line
        x1="15.0607"
        y1="16"
        x2="18"
        y2="18.9393"
        stroke={theme.color.black89}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MapSearchIcon;
