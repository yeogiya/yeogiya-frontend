import { CloseIcon, LocationIcon, MapSearchIcon } from "@/assets";

import Header from "./@common/Header";
import { Link } from "react-router-dom";
import { PATH } from "@/utils/routes";
import Title from "./@common/Title";
import { createDiary } from "@/store/diarySlice";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useAppDispatch } from "@/features/hooks/useAppDispatch";

const MapNavbar = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      createDiary({
        isClickPos: true,
      })
    );
  };

  return (
    <Header css={{ justifyContent: "space-between" }}>
      <CloseIcon />
      <Title as="h2">지도</Title>
      <StyledIcon>
        <StyledButton onClick={handleClick}>
          <LocationIcon />
        </StyledButton>
        <Link to={PATH.DIARY_MAP_SEARCH}>
          <MapSearchIcon />
        </Link>
      </StyledIcon>
    </Header>
  );
};

export default MapNavbar;

const StyledIcon = styled.div`
  display: flex;
  column-gap: 1.56rem;
`;

const StyledButton = styled.button`
  background-color: transparent;

  svg {
    height: 20px;
    cursor: pointer;
  }
`;
