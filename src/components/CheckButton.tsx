import styled from "@emotion/styled";
import Button from "./@common/Button";

const CheckButton = styled(Button)<{ activeColor: string }>`
  border: 1px solid ${({ activeColor }) => activeColor || "#D9D9D9"};
  color: ${({ activeColor }) => activeColor || "#D9D9D9"};
  /* color: #d9d9d9; */
  /* border: 1px solid #d9d9d9; */
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
