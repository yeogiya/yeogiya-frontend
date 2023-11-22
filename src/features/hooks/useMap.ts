import { useCallback, useEffect, useRef, useState } from "react";

import { Map } from "@/types/map";
import markerIcon from "../../assets/images/svg/marker.svg";

export const useMap = () => {
  const [map, setMap] = useState<Map>();
  const [position, setPosition] = useState({
    latitude: 37.5759,
    longitude: 126.9768,
  });
  const [isClick, setIsClick] = useState<boolean>(false);

  const mapRef = useRef<HTMLDivElement>();
  const KEY = import.meta.env.VITE_KAKAO_MAP_JS_KEY;
  const SRC = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KEY}&libraries=services&autoload=false`;

  const onLoadSdk = () => {
    const mapScript = document.createElement("script");
    mapScript.type = "text/javascript";
    mapScript.src = SRC;
    document.head.appendChild(mapScript);
    return mapScript;
  };

  const handleClick = useCallback(async () => {
    setIsClick(true);
  }, [setIsClick]);

  const handleMapContainer = useCallback(async () => {
    if (!mapRef.current) return;

    try {
      const currentPosition = await getCurrentLocation();
      const options = {
        center: currentPosition,
        level: 3,
        draggable: false,
        zoomable: false,
        disableDoubleClickZoom: true,
      };
      const newMap = new window.kakao.maps.Map(mapRef.current, options);
      const marker = await displayMarker();

      if (isClick) {
        console.log("isClick", currentPosition);
        console.log(currentPosition);
        marker.setPosition(currentPosition);
        newMap.setCenter(currentPosition);
      }
      if (!isClick) {
        console.log("!isClick", newMap);
        marker.setMap(newMap);
      }

      return newMap;
    } catch (error) {
      console.error(error);
    }
  }, [isClick, mapRef, position.latitude, position.longitude]);

  const displayMarker = useCallback(async () => {
    try {
      const markerPosition = await getCurrentLocation();
      const markerSize = new window.kakao.maps.Size(51, 68.83);
      const markerImage = new window.kakao.maps.MarkerImage(
        markerIcon,
        markerSize
      );
      const marker = new window.kakao.maps.Marker({
        map: map,
        draggable: false,
        position: markerPosition,
        image: markerImage,
      });
      return marker;
    } catch (error) {
      console.error(error);
    }
  }, [map]);

  const getCurrentLocation = async () => {
    try {
      if (!isClick) {
        const initialLocation = new window.kakao.maps.LatLng(
          position.latitude,
          position.longitude
        );
        return initialLocation;
      }
      if (isClick && navigator.geolocation) {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (current) => {
              const { latitude, longitude } = current.coords;
              setPosition({ latitude, longitude });
              const currentLocation = new window.kakao.maps.LatLng(
                latitude,
                longitude
              );
              resolve(currentLocation);
            },
            (error) => {
              reject(error);
            }
          );
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const onLoadMap = async () => {
      await window.kakao.maps.load(handleMapContainer);
    };
    onLoadSdk().addEventListener("load", onLoadMap);
  }, [mapRef]);

  useEffect(() => {
    const updateMap = async () => {
      if (isClick) {
        await handleMapContainer();
      }
    };
    updateMap();
  }, [isClick, handleMapContainer]);

  return { mapRef, position, handleClick, isClick };
};
