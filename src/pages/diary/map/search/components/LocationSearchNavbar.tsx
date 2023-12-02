import { Fragment } from "react";
import Header from "../../../../../components/@common/Header";
import { LeftArrowIcon } from "@/assets";
import Title from "@/components/@common/Title";
import styled from "@emotion/styled";

const LocationSearchNavbar = () => {
  return (
    <Header css={{ justifyContent: "space-between" }}>
      <Nav>
        <LeftArrowIcon />
        <Title as="h2">위치 검색</Title>
      </Nav>
    </Header>
  );
};

export default LocationSearchNavbar;

const Nav = styled.nav`
  max-width: 32.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
