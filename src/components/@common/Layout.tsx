import styled, { CSSObject } from "@emotion/styled";

import { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
  css?: CSSObject;
  paddingTop?: string;
  paddingBottom?: string;
  maxWidth?: string;
  backgroundColor?: string;
}

const Layout = ({ children, backgroundColor, ...props }: LayoutProps) => {
  return (
    <LayoutContainer backgroundColor={backgroundColor}>
      <LayoutWrapper {...props}>{children}</LayoutWrapper>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.main<Pick<LayoutProps, "backgroundColor">>`
  max-width: 100%;
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
`;

const LayoutWrapper = styled.div<LayoutProps>`
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: ${({ paddingTop }) => (paddingTop && paddingTop) || "120px"};
  padding-bottom: ${({ paddingBottom }) =>
    (paddingBottom && paddingBottom) || "165px"};

  ${({ css }) => css && css};
`;

export default Layout;
