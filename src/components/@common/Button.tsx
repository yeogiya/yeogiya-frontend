import React from "react";
import { styled } from "styled-components";

export interface ButtonProps {
  type: string;
  text?: string;
  $background: string;
  color?: string;
  $gridGap?: string;
  icon?: React.ReactNode;
  $border?: string;
  padding?: string;
  display?: string;
  alignItems?: string;
  $justifyContent?: string;
}

const Button = ({ type, text, icon, ...props }: ButtonProps) => {
  return (
    <ButtonWrapper type={type} {...props}>
      {icon}
      {text}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button<ButtonProps>`
  cursor: pointer;
  width: 100%;
  border-radius: 7px;
  font-weight: 400;
  font-size: 1rem;
  background: ${(props) => props?.$background};
  border: ${(props) => props?.$border};
  grid-gap: ${(props) => props?.$gridGap || "62px"};
  color: ${(props) => props?.color || "#fff"};
  padding: ${(props) => props.padding || "12px 0px"};
  display: ${(props) => props.display || "flex"};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.$justifyContent};
`;
