import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { ReactNode } from "react";

export interface ValidateMessageProps {
  color: "default" | "success" | "error";
  children?: ReactNode;
}

const ValidateMessage = ({ color, children }: ValidateMessageProps) => {
  return <ValidateMessageStyle color={color}>{children}</ValidateMessageStyle>;
};

const ValidateMessageStyle = styled.p<ValidateMessageProps>`
  margin-top: 10px;
  font-size: 0.75rem;
  color: ${({ color }) =>
    color === "error"
      ? `${theme.color.red}`
      : color === "success"
      ? `${theme.color.blue}`
      : `${theme.color.black70}`};
`;

export default ValidateMessage;
