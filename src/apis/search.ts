import { URL } from "@/constants/url";
import { httpClient } from "@/apis/httpClient";
import { MOCK } from "@/mocks/mocksUrl";

export const getLocationSearchList = (keyword: string) => {
  return httpClient.get(`${URL.LOCATION_SEARCH}?keyword=${keyword}`);
};

export const getRestaurant = () => {
  return httpClient.get(`${MOCK.RESTAURANT}`);
};
