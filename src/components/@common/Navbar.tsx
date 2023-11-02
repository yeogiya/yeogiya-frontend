import Menu from "@/components/@common/Menu";
import SearchBar from "@/components/SearchBar";
import YeogiyaLogo from "@/assets/YeogiyaLogo";
import styled from "@emotion/styled";
import { useState } from "react";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue === "") return;

    // API
  };

  return (
    <StyledNavbar>
      <StyledWrapper>
        <YeogiyaLogo />
        <SearchBar
          value={searchValue}
          setValue={setSearchValue}
          onClick={handleSearch}
        />
      </StyledWrapper>
      <Menu />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: 1.43rem 0;
  height: 4.37rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1.25rem;
  align-items: center;
`;

export default Navbar;
