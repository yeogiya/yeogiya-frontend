import { useRef, useState } from "react";

import { Map } from "@/types/map";
import { createDiary } from "@/store/diarySlice";
import markerIcon from "@/assets/images/svg/marker.svg";
import { useAppDispatch } from "./useAppDispatch";

export const useMap = () => {
  const dispatch = useAppDispatch();
  const [map, setMap] = useState<Map>(null);

  const mapRef = useRef<HTMLElement>(null);

  const displayMarker = async (markerPosition) => {
    try {
      const markerSize = new window.kakao.maps.Size(51, 68.83);
      const markerImage = new window.kakao.maps.MarkerImage(
        markerIcon,
        markerSize
      );
      return new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getCurrentLocation = async (isClickPos, latitude, longitude) => {
    try {
      if (!isClickPos) {
        return new window.kakao.maps.LatLng(latitude, longitude);
      }
      if (isClickPos && navigator.geolocation) {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (current) => {
              const { latitude, longitude } = current.coords;
              dispatch(
                createDiary({
                  latitude: latitude,
                  longitude: longitude,
                })
              );
              resolve(new window.kakao.maps.LatLng(latitude, longitude));
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

  return {
    map,
    setMap,
    mapRef,
    displayMarker,
    getCurrentLocation,
  };
};
