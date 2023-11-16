import { SVGProps } from "@/types/assets";

const PlaceImage = ({ css }: SVGProps) => {
  return (
    <svg
      width="389"
      height="389"
      viewBox="0 0 389 389"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      css={css}
    >
      <rect
        x="245"
        width="203"
        height="346"
        rx="100"
        transform="rotate(45 245 0)"
        fill="#E0F5F8"
      />
      <path
        d="M261.531 274.083C261.537 278.539 230.087 282.198 191.283 282.256C152.48 282.314 121.019 278.748 121.012 274.292C121.005 269.835 152.456 266.176 191.259 266.118C230.063 266.061 261.524 269.626 261.531 274.083Z"
        fill="#BFABAA"
        fillOpacity="0.15"
      />
      <rect
        x="272.353"
        y="87"
        width="40"
        height="40"
        transform="rotate(15 272.353 87)"
        fill="url(#pattern0)"
      />
      <rect x="235" y="18" width="60" height="60" fill="url(#pattern1)" />
      <rect x="80" y="48" width="230" height="230" fill="url(#pattern2)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_353_2001" transform="scale(0.000976562)" />
        </pattern>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image1_353_2001" transform="scale(0.000976562)" />
        </pattern>
        <pattern
          id="pattern2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image2_353_2001" transform="scale(0.000666667)" />
        </pattern>
        <image
          id="image0_353_2001"
          width="1024"
          height="1024"
        />
        <image
          id="image1_353_2001"
          width="1024"
          height="1024"
        />
        <image
          id="image2_353_2001"
          width="1500"
          height="1500"
        />
      </defs>
    </svg>
  );
};

export default PlaceImage;