import { SearchIcon, YeogiyaLogo } from "@/assets";
import Header from "./Header";
import { Link } from "react-router-dom";
import Menu from "@/components/@common/Menu";
import { PATH } from "@/utils/routes";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useUserInfo } from "@/apis/user";

const Navbar = () => {
  const { data: userInfo } = useUserInfo();

  return (
    <Header css={{ justifyContent: "space-between" }}>
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
    </Header>
  );
};

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
