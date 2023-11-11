import { SearchIcon, YeogiyaLogo } from "@/assets";

import { Link } from "react-router-dom";
import Menu from "@/components/@common/Menu";
import { PATH } from "@/utils/routes";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useState } from "react";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue === "") return;

    // API
  };

  return (
    <Container>
      <Wrapper>
        <Link to={PATH.HOME}>
          <YeogiyaLogo />
        </Link>
        <Link to={PATH.SEARCH}>
          <StyledSearch>
            <SearchIcon />
          </StyledSearch>
        </Link>
      </Wrapper>
      <Menu />
    </Container>
  );
};

const Container = styled.nav`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: 1.43rem 0;
  height: 4.37rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1.25rem;
  align-items: center;

  a {
    display: flex;
  }
`;

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.purple};
  padding: 0.25rem;
  border-radius: 0.875rem;
`;

export default Navbar;
