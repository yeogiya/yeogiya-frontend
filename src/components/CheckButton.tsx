import styled from "@emotion/styled";
import theme from "@/styles/theme";
import * as React from "react";

export interface CheckButtonProps {
  isActive: boolean;
  type: "button" | "submit" | "reset" | "text" | "checkbox";
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onChange?: React.MouseEventHandler<HTMLButtonElement>;
}

const CheckButton = React.forwardRef(
  ({ isActive, text, ...props }: CheckButtonProps, ref) => {
    return (
      <CheckButtonStyle isActive={isActive} {...props} ref={ref}>
        {text}
      </CheckButtonStyle>
    );
  }
);

const CheckButtonStyle = styled.button<Pick<CheckButtonProps, "isActive">>`
  cursor: pointer;
  border: 1px solid
    ${({ isActive }) =>
      isActive ? `${theme.color.black}` : `${theme.color.black30}`};
  color: ${({ isActive }) =>
    isActive ? `${theme.color.black}` : `${theme.color.black30}`};
  background: #fff;
  border-radius: 16px;
  width: 69px;
  height: 28px;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CheckButton;
