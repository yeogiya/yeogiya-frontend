import styled, { StyledComponent } from "@emotion/styled";
import Button, { ButtonProps } from "./@common/Button";

const BasicButton = styled(Button)<StyledComponent<ButtonProps>>`
  margin-top: 20px;
  padding: 13px 18px;
`;

export default BasicButton;
