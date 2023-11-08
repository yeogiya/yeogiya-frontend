import { Dispatch, SetStateAction } from "react";

import { SVGProps } from "@/types/assets";
import theme from "@/styles/theme";

interface IconPropsType extends SVGProps {
  confirmPassword?: string;
  passwordType?: string;
  isActive?: boolean;
  setPasswordType?: Dispatch<SetStateAction<string>>;
  setConfirmPassword?: Dispatch<SetStateAction<string>>;
}

const ConcealIcon = ({
  confirmPassword,
  passwordType,
  setConfirmPassword,
  setPasswordType,
  isActive,
  css,
}: IconPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      onClick={() => {
        setPasswordType?.(() =>
          passwordType === "password" ? "text" : "password"
        );
        setConfirmPassword?.(() =>
          confirmPassword === "password" ? "text" : "password"
        );
      }}
      css={css}
    >
      <g opacity="0.8">
        <path
          d="M3.33301 3.33337L16.6663 16.6667"
          stroke={isActive ? `${theme.color.black}` : `${theme.color.black30}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.7503 13.9633C12.6232 14.5705 11.3492 15 10.0003 15C5.39795 15 1.66699 10 1.66699 10C1.66699 10 3.40734 7.66769 5.97703 6.18892M16.2503 12.1947C17.5469 11.0543 18.3337 10 18.3337 10C18.3337 10 14.6027 5 10.0003 5C9.71908 5 9.44108 5.01867 9.16699 5.05373"
          stroke={isActive ? `${theme.color.black}` : `${theme.color.black30}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.1021 11.25C10.8083 11.5094 10.4224 11.6667 9.99967 11.6667C9.0792 11.6667 8.33301 10.9205 8.33301 10C8.33301 9.55045 8.51102 9.14244 8.80041 8.84265"
          stroke={isActive ? `${theme.color.black}` : `${theme.color.black30}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ConcealIcon;
