import { useMap } from "@/features/hooks/useMap";
import Map from "@/pages/diary/map/components/Map";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useEffect } from "react";

const ResultDetailContent = () => {
  return (
    <Container>
      <PlaceInfo></PlaceInfo>
      <MapWrapper>
        <Map width="26.125rem" height="27rem" />
        <MapButton>길 찾기</MapButton>
      </MapWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 1.875rem;
  display: flex;
  column-gap: 1.25rem;
`;

const PlaceInfo = styled.div`
  width: 32.625rem;
  height: 25.9375rem;
  border-radius: 0.875rem;
  border: 1px solid ${theme.color.black35};
`;

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 26.125rem;
  height: 25.9375rem;

  section {
    border-radius: 10px 10px 0 0;
  }
`;

const MapButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 10px 10px;
  background: ${theme.color.purple};
  color: ${theme.color.white};
  font-size: 0.875rem;
  font-weight: 500;
`;

export default ResultDetailContent;
