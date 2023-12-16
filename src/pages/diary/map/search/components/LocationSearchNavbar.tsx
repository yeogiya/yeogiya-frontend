import Header from "../../../../../components/@common/Header";
import { LeftArrowIcon } from "@/assets";
import Title from "@/components/@common/Title";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useNavigate } from "react-router-dom";

const LocationSearchNavbar = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <Header css={{ justifyContent: "space-between" }}>
      <Nav>
        <Button onClick={handleBackButton}>
          <LeftArrowIcon />
        </Button>
        <Title as="h2" css={{ color: theme.color.black89 }}>
          위치 검색
        </Title>
      </Nav>
    </Header>
  );
};

export default LocationSearchNavbar;

const Nav = styled.nav`
  max-width: 53.75%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
`;
