import styled, { CSSObject } from "@emotion/styled";
import { Link } from "react-router-dom";
import { PATH } from "@/utils/routes";
import theme from "@/styles/theme";

interface LinkTextProps {
  to: (typeof PATH)[keyof typeof PATH];
  text: string;
  css?: CSSObject;
  color?: (typeof theme.color)[keyof typeof theme.color];
  fontSize?: number;
  top?: number;
  onClick?: () => void;
}

const LinkText = ({ to, text, css, onClick, ...props }: LinkTextProps) => {
  return (
    <StyledLinkButton to={to} onClick={onClick} {...props}>
      {text}
    </StyledLinkButton>
  );
};

export default LinkText;

const StyledLinkButton = styled(Link)<Omit<LinkTextProps, "to" | "text">>`
  cursor: pointer;
  text-decoration-line: none;
  display: flex;
  justify-content: center;
  color: ${({ color }) => color ?? theme.color.black50};
  margin-top: ${({ top }) => `${top ?? 1.125}rem`};
  font-size: ${({ fontSize }) => `${fontSize ?? 0.875}rem`};

  ${({ css }) => css && css}
`;
