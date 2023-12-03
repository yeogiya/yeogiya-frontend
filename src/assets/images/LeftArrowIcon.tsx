import { SVGProps } from "@/types/assets";
import theme from "@/styles/theme";

const LeftArrowIcon = ({ css }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      css={css}
    >
      <rect width="44" height="44" fill={theme.color.white} />
      <path
        d="M13.4697 21.4697C13.1768 21.7626 13.1768 22.2374 13.4697 22.5303L18.2426 27.3033C18.5355 27.5962 19.0104 27.5962 19.3033 27.3033C19.5962 27.0104 19.5962 26.5355 19.3033 26.2426L15.0607 22L19.3033 17.7574C19.5962 17.4645 19.5962 16.9896 19.3033 16.6967C19.0104 16.4038 18.5355 16.4038 18.2426 16.6967L13.4697 21.4697ZM30 21.25L14 21.25L14 22.75L30 22.75L30 21.25Z"
        fill={theme.color.black}
      />
    </svg>
  );
};

export default LeftArrowIcon;
