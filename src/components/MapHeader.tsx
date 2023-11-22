import { CloseIcon, LocationIcon, MapSearchIcon } from "@/assets";

import Title from "./@common/Title";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useMap } from "@/features/hooks/useMap";

const MapHeader = () => {
  const { handleClick, isClick } = useMap();

  console.log("click", isClick);

  return (
    <StyledMapHeader>
      <CloseIcon />
      <Title as="h1">지도</Title>
      <StyledIcon>
        <StyledButton onClick={handleClick}>
          <LocationIcon />
        </StyledButton>
        <MapSearchIcon />
      </StyledIcon>
    </StyledMapHeader>
  );
};

export default MapHeader;

const StyledMapHeader = styled.nav`
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 0.8125rem 0;

  h3 {
    color: ${theme.color.black89};
  }
`;

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
