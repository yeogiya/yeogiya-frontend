import { Link } from "react-router-dom";
import React from "react";
import styled from "@emotion/styled";

interface LinkTextProps {
  to: string;
  children?: React.ReactNode;
}

const LinkText = ({ to, children, ...props }: LinkTextProps) => {
  return (
    <Text to={to} {...props}>
      {children}
    </Text>
  );
};

export default LinkText;

const Text = styled(Link)<{ color?: string; fontSize?: string }>`
  cursor: pointer;
  color: ${(props) => props.color || "#747474"};
  font-size: ${(props) => props.color || "14px"};
  text-decoration-line: none;
`;
