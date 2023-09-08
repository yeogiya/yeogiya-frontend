import YeogiyaLogo from "@/assets/YeogiyaLogo";
import styled from "@emotion/styled";
import Menu from "@/components/@common/Menu";
import Search from "@/components/Search";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledWrapper>
        <YeogiyaLogo />
        <Search />
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
