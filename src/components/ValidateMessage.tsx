import { ReactNode } from "react";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

export interface ValidateMessageProps {
  color: "default" | "success" | "error";
  children?: ReactNode;
}

const ValidateMessage = ({ color, children }: ValidateMessageProps) => {
  return <ValidateMessageStyle color={color}>{children}</ValidateMessageStyle>;
};

const ValidateMessageStyle = styled.p<ValidateMessageProps>`
  margin-top: 5px;
  margin-bottom: -7px;
  font-size: 0.75rem;

  color: ${({ color }) =>
    color === "error"
      ? `${theme.color.red}`
      : color === "success"
      ? `${theme.color.blue}`
      : `${theme.color.black70}`};
`;

export default ValidateMessage;
