import { SVGProps } from "@/types/assets";
import theme from "@/styles/theme";

const LocationIcon = ({ css }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      css={css}
    >
      <path
        d="M18.9997 11C18.9997 15.4183 15.418 19 10.9997 19C6.58147 19 2.99976 15.4183 2.99976 11C2.99976 6.58171 6.58147 3 10.9997 3C15.418 3 18.9997 6.58171 18.9997 11Z"
        stroke={theme.color.black89}
        strokeWidth="1.5"
      />
      <path
        d="M13.9997 11C13.9997 12.6569 12.6566 14 10.9997 14C9.34285 14 7.99976 12.6569 7.99976 11C7.99976 9.3431 9.34285 8 10.9997 8C12.6566 8 13.9997 9.3431 13.9997 11Z"
        stroke={theme.color.black89}
        strokeWidth="1.5"
      />
      <path
        d="M1 11H3"
        stroke={theme.color.black89}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18.9996 11H20.9996"
        stroke={theme.color.black89}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 3V1"
        stroke={theme.color.black89}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 21V19"
        stroke={theme.color.black89}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LocationIcon;
