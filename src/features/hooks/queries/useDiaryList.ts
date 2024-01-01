import { getDiaryList } from "@/apis/diary";
import { diary } from "@/constants/queryKey";
import { DiaryListProps } from "@/pages/diary/list/DiaryListPage";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useDiaryList = (
  year: string,
  month: string,
  options?: UseQueryOptions<DiaryListProps, AxiosError>
) => {
  const { data } = useQuery({
    queryKey: [diary.list, month],
    queryFn: () => getDiaryList(year, month),
    ...options,
  });
  return { data };
};
