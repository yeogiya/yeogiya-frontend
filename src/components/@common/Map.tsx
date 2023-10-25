import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const [map, setMap] = useState<{ kakao } | null>(null);
  const [size, setSize] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });
  const [markerPositions, setMarkerPositions] = useState([]);
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

  const initialMap = () => {
    const options = {
      center: new window.kakao.maps.LatLng(size.lat, size.lng),
      level: 3,
    };

    return new window.kakao.maps.Map(mapRef.current, options);
  };

  useEffect(() => {
    onLoadSdk();

    const onLoadMap = () => {
      window.kakao.maps.load(initialMap);
    };

    onLoadSdk().addEventListener("load", onLoadMap);
  }, []);

  return <main ref={mapRef} style={{ width: "500px", height: "500px" }} />;
};

export default Map;
