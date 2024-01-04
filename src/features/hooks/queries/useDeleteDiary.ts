import { deleteDiary } from "@/apis/diary";
import { PATH } from "@/utils/routes";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useDeleteDiary = (
  diaryId: number,
  options?: UseMutationOptions<unknown, unknown, unknown, unknown>
) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => deleteDiary(diaryId),
    onSuccess: () => navigate(PATH.DIARY_LIST),
    ...options,
  });
};
