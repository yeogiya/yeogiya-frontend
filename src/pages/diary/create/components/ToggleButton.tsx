import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useState } from "react";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <ToggleBtn>
      <CheckBox
        type="checkbox"
        checked={isActive}
        onChange={() => setIsActive(!isActive)}
      />
      <ToggleSlider />
    </ToggleBtn>
  );
};
export default ToggleButton;

const ToggleBtn = styled.label`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 53px;
  height: 100%;
  min-height: 26px;
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.color.white10};
  -webkit-transition: 0.3s;
  transition: 0.4s;
  border-radius: 12px;

  &:before {
    position: absolute;
    content: "";
    width: 26px;
    height: 26px;
    background-color: ${theme.color.black80};
    -webkit-transition: 0.3s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ToggleSlider}:before {
    background-color: ${theme.color.purple};
  }

  &:checked + ${ToggleSlider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
