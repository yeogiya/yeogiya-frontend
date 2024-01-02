import { URL } from "@/constants/url";
import { httpClient } from "./httpClient";

export const getDiaryList = (year: string, month: string) => {
  return httpClient.get(`${URL.DIARY_LIST}?year=${year}&month=${month}`);
};

export const getDiaryDetail = async (dairyId: number) => {
  return await httpClient.get(`${URL.DIARY_LIST}/${dairyId}`);
};
