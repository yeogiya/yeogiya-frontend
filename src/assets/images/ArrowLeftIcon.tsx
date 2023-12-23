import { SVGProps } from "@/types/assets";

const ArrowLeftIcon = ({ css }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="60"
      viewBox="0 0 30 60"
      fill="none"
      css={css}
    >
      <g clipPath="url(#clip0_106_10163)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.2012 0.876914C23.3178 -0.292317 21.8874 -0.292317 21.0062 0.876914L2.32342 25.6676C0.558858 28.0091 0.558858 31.8076 2.32342 34.149L21.1415 59.1226C22.0159 60.2799 23.4285 60.2949 24.3141 59.1526C25.2201 57.9864 25.2288 56.0646 24.3386 54.8804L7.11531 32.0294C6.23189 30.8572 6.23189 28.9594 7.11531 27.7872L24.2012 5.11613C25.0846 3.9469 25.0846 2.04615 24.2012 0.876914Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_106_10163">
          <rect width="30" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowLeftIcon;
