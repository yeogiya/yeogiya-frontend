import { getDiaryDetail } from "@/apis/diary";
import { diary } from "@/constants/queryKey";
import { DiaryDetailProps } from "@/pages/diary/detail/DiaryDetailPage";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useDiaryDetail = (
  diaryId: number,
  options?: UseQueryOptions<DiaryDetailProps, AxiosError>
) => {
  const { data } = useQuery({
    queryKey: [diary.detail, diaryId],
    queryFn: () => getDiaryDetail(diaryId),
    ...options,
  });
  return data;
};
