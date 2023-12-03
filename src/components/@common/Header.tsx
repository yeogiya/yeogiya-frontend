import styled, { CSSObject } from "@emotion/styled";

import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
  css?: CSSObject;
}

const Header = ({ children, ...props }: HeaderProps) => {
  return <Layout {...props}>{children}</Layout>;
};

const Layout = styled.header`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: 1.43rem 0;
  height: 4.37rem;
  display: flex;
  align-items: center;
`;

export default Header;
