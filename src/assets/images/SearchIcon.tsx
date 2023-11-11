import { SVGProps } from "@/types/assets";
import theme from "@/styles/theme";

const SearchIcon = ({ css }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      css={css}
    >
      <path
        d="M13.3334 13.334L16 16.0007"
        stroke={theme.color.white}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 9.33333C14.6667 12.2789 12.2789 14.6667 9.33333 14.6667C6.38781 14.6667 4 12.2789 4 9.33333C4 6.38781 6.38781 4 9.33333 4C12.2789 4 14.6667 6.38781 14.6667 9.33333Z"
        stroke={theme.color.white}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default SearchIcon;
