import { URL } from "@/constants/url";
import { httpClient } from "./httpClient";

export const getDiaryList = (year: string, month: string) => {
  return httpClient.get(`${URL.DIARY_LIST}?year=${year}&month=${month}`);
};
