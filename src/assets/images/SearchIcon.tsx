import { SVGProps } from "@/types/assets";
import theme from "@/styles/theme";

const SearchIcon = ({ css }: SVGProps) => {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={css}
    >
      <rect width="37" height="37" rx="18.5" fill={theme.color.purple} />
      <rect
        width="18.5"
        height="18.5"
        transform="translate(9 10)"
        fill={theme.color.purple}
      />
      <path
        d="M16.7083 23.1042C19.6884 23.1042 22.1042 20.6884 22.1042 17.7083C22.1042 14.7283 19.6884 12.3125 16.7083 12.3125C13.7283 12.3125 11.3125 14.7283 11.3125 17.7083C11.3125 20.6884 13.7283 23.1042 16.7083 23.1042Z"
        stroke={theme.color.white}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5625 21.5625L25.1875 26.1875"
        stroke={theme.color.white}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
