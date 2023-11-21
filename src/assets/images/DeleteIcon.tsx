import { SVGProps } from "@/types/assets";

const DeleteIcon = ({ css }: SVGProps) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={css}
    >
      <path
        d="M15 3L3 15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 3L15 15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DeleteIcon;
