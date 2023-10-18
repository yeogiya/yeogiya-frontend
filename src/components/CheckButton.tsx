import styled from "@emotion/styled";
import theme from "@/styles/theme";

export interface CheckButtonProps {
  isActive: boolean;
  type: "button" | "submit" | "reset";
  text: string;
  onClick: () => void;
}

const CheckButton = ({ isActive, text, ...props }: CheckButtonProps) => {
  return (
    <CheckButtonStyle isActive={isActive} {...props}>
      {text}
    </CheckButtonStyle>
  );
};

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
