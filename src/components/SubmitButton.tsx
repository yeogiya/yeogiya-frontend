import styled, { CSSObject } from "@emotion/styled";

import { ButtonHTMLAttributes } from "react";
import theme from "@/styles/theme";

export interface SubmitButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  isValid: boolean;
  text: string;
  onClick?: () => void;
  css?: CSSObject;
}

const SubmitButton = ({ isValid, text, ...props }: SubmitButtonProps) => {
  return (
    <SubmitButtonStyle isValid={isValid} {...props}>
      {text}
    </SubmitButtonStyle>
  );
};

const SubmitButtonStyle = styled.button<Partial<SubmitButtonProps>>`
  min-width: 328px;
  margin-top: 16px;
  padding: 13px 80px;
  font-size: 16px;
  border-radius: 7px;
  cursor: pointer;
  color: ${theme.color.white};
  justify-content: center;
  background-color: ${({ isValid }) =>
    isValid ? `${theme.color.purple}` : `${theme.color.black30}`};

  ${({ css }) => css && css}
`;

export default SubmitButton;
