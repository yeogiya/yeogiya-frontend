import styled, { CSSObject } from "@emotion/styled";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  css?: CSSObject;
  paddingTop?: string;
  paddingBottom?: string;
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <LayoutContainer>
      <LayoutWrapper {...props}>{children}</LayoutWrapper>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  max-width: 100%;
  height: calc(100vh - 92px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const LayoutWrapper = styled.div<LayoutProps>`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: ${({ paddingTop }) => (paddingTop && paddingTop) || "120px"};
  padding-bottom: ${({ paddingBottom }) =>
    (paddingBottom && paddingBottom) || "165px"};

  ${({ css }) => css};
`;

export default Layout;
