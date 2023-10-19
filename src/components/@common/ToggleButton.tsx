import theme from "@/styles/theme";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

export interface ToggleBtnProps {
  isActive: boolean;
}

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleBtn = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <ToggleBtnStyled>
      <CheckBox type="checkbox" id="toggleBtn" onChange={handleToggleBtn} />
      <BtnLabel htmlFor="toggleBtn" isActive={isActive} />
    </ToggleBtnStyled>
  );
};

export default ToggleButton;

const ToggleBtnStyled = styled.div`
  display: flex;
  max-width: 53px;
  min-height: 26px;
  z-index: 0;
`;

const CheckBox = styled.input`
  display: none;
`;

const BtnLabel = styled.label<ToggleBtnProps>`
  display: flex;
  width: 100%;
  border-radius: 2em;
  background-color: ${theme.color.black20};
  z-index: 10;
`;
