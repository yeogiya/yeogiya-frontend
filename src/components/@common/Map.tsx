import { useEffect, useRef, useState } from "react";

import styled from "@emotion/styled";

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
  const [size, setSize] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });
  const [markerPositions, setMarkerPositions] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });
  const mapRef = useRef<HTMLDivElement>();
  const KEY = import.meta.env.VITE_KAKAO_MAP_JS_KEY;
  const SRC = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KEY}&autoload=false`;

  const onLoadSdk = () => {
    const mapScript = document.createElement("script");
    mapScript.type = "text/javascript";
    mapScript.src = SRC;
    document.head.appendChild(mapScript);

    return mapScript;
  };

  const MapContainer = () => {
    const options = {
      center: new window.kakao.maps.LatLng(size.lat, size.lng),
      level: 3,
    };

    const map = new window.kakao.maps.Map(mapRef.current, options);

    map.setDraggable(false);
  };

  useEffect(() => {
    onLoadSdk();

    const onLoadMap = () => {
      window.kakao.maps.load(MapContainer);
    };

    onLoadSdk().addEventListener("load", onLoadMap);
  }, []);

  return (
    <StyledMap>
      <section
        ref={mapRef}
        style={{ width: `${width}`, height: `${height}` }}
      />
    </StyledMap>
  );
};

export default Map;

const StyledMap = styled.main`
  display: flex;
  width: 100%;
`;
