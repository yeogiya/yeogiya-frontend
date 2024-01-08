import { URL } from "@/constants/url";
import { httpClient } from "@/apis/httpClient";

export const getPlaceSearchList = (keyword: string) => {
  return httpClient.get(`${URL.PLACE_SEARCH}?keyword=${keyword}`);
};

export const getSearchDetail = (placeId: string, keyword: string) => {
  return httpClient.get(
    `${URL.SEARCH_DETAIL}?placeId=${placeId}&keyword=${keyword}`
  );
};

export const getLocationSearch = (
  keyword: string,
  lat: number,
  lng: number,
  page: number,
  size: number
) => {
  return httpClient.get(
    `${URL.LOCATION_SEARCH}?keyword=${keyword}&lat=${lat}&lng=${lng}&page=${page}&size=${size}`
  );
};
