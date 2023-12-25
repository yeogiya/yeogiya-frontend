import { getDiaryList } from "@/apis/diary";
import { diary } from "@/constants/queryKey";
import { DiaryListProps } from "@/pages/diary/list/DiaryListPage";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useDiaryList = (
  year: number,
  month: number,
  options?: UseQueryOptions<DiaryListProps, AxiosError>
) => {
  const { data } = useQuery({
    queryKey: diary.list,
    queryFn: () => getDiaryList(year, month),
    ...options,
  });
  return { data };
};
