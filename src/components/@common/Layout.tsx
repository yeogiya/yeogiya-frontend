import { ReactNode } from "react";
import { styled } from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <LayoutWrapper>{children}</LayoutWrapper>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LayoutWrapper = styled.div`
  max-width: 100%;
`;

export default Layout;
