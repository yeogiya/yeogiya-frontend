import styled from "@emotion/styled";
import Button from "./@common/Button";
import theme from "@/styles/theme";

interface CheckButtonProps {
  activeColor: string;
}

const CheckButton = styled(Button)<CheckButtonProps>`
  border: 1px solid
    ${({ activeColor }) => activeColor || `${theme.color.black30}`};
  color: ${({ activeColor }) => activeColor || `${theme.color.black30}`};
  border-radius: 16px;
  width: 69px;
  height: 28px;
  font-size: 0.75rem;
  justify-content: center;
  position: relative;
  left: 350px;
  bottom: 40px;
  margin-bottom: -28px;
`;

export default CheckButton;
