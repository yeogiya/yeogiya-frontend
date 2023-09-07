import YeogiyaLogo from "@/assets/YeogiyaLogo";
import styled from "@emotion/styled";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <StyledNavbar>
      <YeogiyaLogo />
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

export default Navbar;
