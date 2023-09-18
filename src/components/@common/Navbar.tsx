import YeogiyaLogo from "@/assets/YeogiyaLogo";
import styled from "@emotion/styled";
import Menu from "@/components/@common/Menu";
import SearchBar from "@/components/SearchBar";
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 46px 80px 46px 155px;
  height: 37px;
`;

const StyledWrapper = styled.div`
  display: flex;
  grid-gap: 20px;
  align-items: center;
`;

export default Navbar;
