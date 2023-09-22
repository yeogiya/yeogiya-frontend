import styled from "@emotion/styled";
import Button, { ButtonProps } from "./Button";

const DefaultButton = styled(Button)<
  Pick<ButtonProps, "gridGap" | "color" | "justifyContent">
>`
  min-width: 328px;
  margin-top: 20px;
  padding: 13px 18px;
  grid-gap: ${({ gridGap }) => gridGap || "80px"};
  color: ${({ color }) => color || "#fff"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
`;

export default DefaultButton;
