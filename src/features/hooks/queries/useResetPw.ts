import { postResetPwd } from "@/apis/user";
import { postRestPw } from "@/pages/my/password/UpdateMyPwPage";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

export const useResetPw = (
  options?: UseMutationOptions<unknown, unknown, postRestPw, unknown>
) => {
  return useMutation({
    mutationFn: ({ password, token }: postRestPw) =>
      postResetPwd({ password, token }),
    ...options,
  });
};
