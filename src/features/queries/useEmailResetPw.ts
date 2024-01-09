import { postEmailResetPw } from "@/apis/user";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

export const useEmailResetPw = (
  options?: UseMutationOptions<unknown, unknown, unknown, unknown>
) => {
  return useMutation({
    mutationFn: ({ password, token }) => postEmailResetPw({ password, token }),
    ...options,
  });
};
