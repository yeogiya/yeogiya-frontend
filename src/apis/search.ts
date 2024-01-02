import { URL } from "@/constants/url";
import { httpClient } from "@/apis/httpClient";
import { MOCK } from "@/mocks/mocksUrl";

export const getPlaceSearchList = (keyword: string) => {
  return httpClient.get(`${URL.PLACE_SEARCH}?keyword=${keyword}`);
};

export const getRestaurant = () => {
  return httpClient.get(`${MOCK.RESTAURANT}`);
};
