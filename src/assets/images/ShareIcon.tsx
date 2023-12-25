import { SVGProps } from "@/types/assets";

const ShareIcon = ({ css }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      css={css}
    >
      <path
        d="M19 12.875V17.25C19 18.2165 18.2165 19 17.25 19H6.75C5.7835 19 5 18.2165 5 17.25V12.875"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8.5L12 5M12 5L8.5 8.5M12 5V15.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShareIcon;
