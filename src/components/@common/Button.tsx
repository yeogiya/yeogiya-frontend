import { ButtonHTMLAttributes } from "react";

import styled from "@emotion/styled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "reset" | "submit" | undefined;
  text?: string;
  background?: string;
  color?: string;
  gridGap?: string;
  icon?: React.ReactNode;
  border?: string;
  padding?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
}

const Button = ({ type, icon, text, ...props }: ButtonProps) => {
  return (
    <StyledButton type={type} {...props}>
      {icon}
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  width: 100%;
  border-radius: 7px;
  font-weight: 400;
  font-size: 1rem;
  background: ${({ background }) => (background && background) || "inherit"};
  border: ${({ border }) => border && border};
  grid-gap: ${({ gridGap }) => gridGap || "62px"};
  color: ${({ color }) => color || "#fff"};
  padding: ${({ padding }) => padding || "12px 0px"};
  display: ${({ display }) => display || "flex"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export default Button;
