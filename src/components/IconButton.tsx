import Button from "./@common/Button";
import { CSSObject } from "@emotion/styled";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { MouseEventHandler } from "react";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

export interface IconButtonProps {
  type: "submit" | "button" | "reset";
  icon: EmotionJSX.Element;
  text?: string;
  background?: string;
  border?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  css?: CSSObject;
}

const IconButton = ({
  type,
  text,
  icon,
  background,
  border,
  onClick,
  ...props
}: IconButtonProps) => {
  return (
    <IconButtonStyle
      type={type}
      text={text}
      icon={icon}
      background={background}
      border={border}
      onClick={onClick}
      {...props}
    />
  );
};

const IconButtonStyle = styled(Button)<IconButtonProps>`
  margin-top: 20px;
  padding: 14px 18px;
  color: ${theme.color.black90};
  grid-gap: 80px;
`;

export default IconButton;
