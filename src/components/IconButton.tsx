import styled from "@emotion/styled";
import Button from "./@common/Button";
import theme from "@/styles/theme";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

export interface IconButtonProps {
  type: "submit" | "button" | "reset";
  icon: EmotionJSX.Element;
  text: string;
  background: string;
  border?: string;
}

const IconButton = ({
  type,
  text,
  icon,
  background,
  border,
}: IconButtonProps) => {
  return (
    <IconButtonStyle
      type={type}
      text={text}
      icon={icon}
      background={background}
      border={border}
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
