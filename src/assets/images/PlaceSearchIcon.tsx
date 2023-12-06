import { SVGProps } from "@/types/assets";

const PlaceSearchIcon = ({ css }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      css={css}
    >
      <path
        d="M31.7778 31.7793L38.0001 38.0015"
        stroke="#614AD3"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.8889 22.4444C34.8889 29.3174 29.3174 34.8889 22.4444 34.8889C15.5716 34.8889 10 29.3174 10 22.4444C10 15.5716 15.5716 10 22.4444 10C29.3174 10 34.8889 15.5716 34.8889 22.4444Z"
        stroke="#614AD3"
        strokeWidth="3"
      />
    </svg>
  );
};

export default PlaceSearchIcon;
