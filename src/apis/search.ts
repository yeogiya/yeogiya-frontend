import { URL } from "@/constants/url";
import { httpClient } from "@/apis/httpClient";

export const getLocationSearchList = (keyword: string) => {
  return httpClient.get(`${URL.LOCATION_SEARCH}?keyword=${keyword}`);
};
