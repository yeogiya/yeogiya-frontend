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
