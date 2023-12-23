import { useRef, useState } from "react";

import { Map } from "@/types/map";
import { MarkIcon } from "@/assets";
import { createDiary } from "@/store/diarySlice";
import { useAppDispatch } from "./useAppDispatch";

export const useMap = () => {
  const { kakao } = window;
  const [map, setMap] = useState<Map>(null);
  const mapRef = useRef<HTMLElement>(null);

  const dispatch = useAppDispatch();

  const displayMarker = async (markerPosition) => {
    try {
      const markerSize = new kakao.maps.Size(51, 68.83);
      const markerImage = new kakao.maps.MarkerImage(MarkIcon, markerSize);
      return new kakao.maps.Marker({
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
        return new kakao.maps.LatLng(latitude, longitude);
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
              resolve(new kakao.maps.LatLng(latitude, longitude));
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

  const searchDetailAddFromCoords = async (latitude, longitude) => {
    const geocoder = new kakao.maps.services.Geocoder();
    console.log(geocoder);
    geocoder.addressSearch(longitude, latitude, (result, status) => {
      console.log(status);
      // TODO: geocoder
      if (status === kakao.maps.services.Status.OK) {
        if (result[0].road_address) {
          console.log(result[0].road_address.address_name as string);
        }
      }
    });
  };

  return {
    map,
    setMap,
    mapRef,
    displayMarker,
    getCurrentLocation,
    searchDetailAddFromCoords,
  };
};
