import { postFindPwd } from "@/apis/user";
import { FindPwProps } from "@/pages/find/pw/FindPwPage";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

export const useFindPw = (
  options?: UseMutationOptions<unknown, unknown, FindPwProps, unknown>
) => {
  return useMutation({
    mutationFn: ({ email, id }: FindPwProps) => postFindPwd({ email, id }),
    ...options,
  });
};
