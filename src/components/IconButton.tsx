import styled from "@emotion/styled";
import Button, { ButtonProps } from "./@common/Button";
import theme from "@/styles/theme";

const IconButton = styled(Button)<ButtonProps>`
  margin-top: 20px;
  padding: 13px 18px;
  color: ${theme.color.black90};
  grid-gap: 80px;
`;

export default IconButton;
