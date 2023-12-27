import { PlaceSearchIcon, SearchIcon, YeogiyaLogo } from "@/assets";

import Header from "./Header";
import { Link } from "react-router-dom";
import Menu from "@/components/@common/Menu";
import { PATH } from "@/utils/routes";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import usePlaceSearch from "@/features/hooks/usePlaceSearch";

interface NavbarProps {
  type: "default" | "placeSearch";
}

const Navbar = ({ type }: NavbarProps) => {
  const { value, onChange, onSearch } = usePlaceSearch();

  const getNavType = (type: string) => {
    switch (type) {
      case "placeSearch":
        return (
          <SearchInputWrapper>
            <PlaceSearchIcon />
            <StyledSearchInput
              type="text"
              placeholder="장소 검색"
              value={value}
              onChange={onChange}
              onKeyDown={onSearch}
            />
          </SearchInputWrapper>
        );
      default:
        return (
          <Link to={PATH.SEARCH}>
            <StyledSearch>
              <SearchIcon />
            </StyledSearch>
          </Link>
        );
    }
  };

  return (
    <Header css={{ justifyContent: "space-between" }}>
      <Wrapper>
        <Link to={PATH.HOME}>
          <YeogiyaLogo />
        </Link>
        {getNavType(type)}
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

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 13.75rem;
  height: 100%;
  max-height: 2.5rem;
  border-radius: 0.25rem;
  border: 1px solid ${theme.color.black35};
  padding: 0.8125rem;
  column-gap: 0.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;

    path {
      stroke: ${theme.color.black35};
    }
  }
`;

const StyledSearchInput = styled.input`
  border: none;

  &&::placeholder {
    color: ${theme.color.black50};
    font-size: 0.875rem;
  }
`;

export default Navbar;
