import { postResetPwd } from "@/apis/user";
import { PostRestPwProps } from "@/pages/my/password/UpdateMyPwPage";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

export const useResetPw = (
  options?: UseMutationOptions<unknown, unknown, PostRestPwProps, unknown>
) => {
  return useMutation({
    mutationFn: ({ password, token }: PostRestPwProps) =>
      postResetPwd({ password, token }),
    ...options,
  });
};
