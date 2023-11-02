import CloseIcon from "@/assets/CloseIcon";
import LocationIcon from "@/assets/LocationIcon";
import MapSearchIcon from "@/assets/MapSearchIcon";
import Title from "./@common/Title";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

const MapHeader = () => {
  return (
    <StyledMapHeader>
      <CloseIcon />
      <Title as="h1">지도</Title>
      <StyledIcon>
        <LocationIcon />
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
  padding: 13px 0;

  h3 {
    color: ${theme.color.black89};
  }

  svg {
    height: 20px;
    cursor: pointer;
  }
`;

const StyledIcon = styled.div`
  display: flex;
  column-gap: 1.56rem;
`;
