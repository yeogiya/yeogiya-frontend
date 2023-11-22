import { useEffect, useRef, useState } from "react";

import styled from "@emotion/styled";
import { useMap } from "@/features/hooks/useMap";

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  width: string;
  height: string;
}

const Map = ({ width = "960px", height = "830px" }: MapProps) => {
  const { mapRef } = useMap();

  return (
    <StyledMap>
      <section
        ref={mapRef}
        id="map"
        style={{ width: `${width}`, height: `calc(${height} - 3.375rem)` }}
      />
    </StyledMap>
  );
};

export default Map;

const StyledMap = styled.main`
  display: flex;
  width: 100%;
`;
