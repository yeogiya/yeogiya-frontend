import { URL } from "@/constants/url";
import { httpClient } from "./httpClient";

export const getDiaryList = (year: number, month: number) => {
  return httpClient.get(`${URL.DIARY_LIST}?year=${year}&month=${month}`);
};
