import { postAuthResetPw } from "@/apis/user";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

export const useAuthResetPw = (
  options?: UseMutationOptions<unknown, unknown, unknown, unknown>
) => {
  return useMutation({
    mutationFn: ({ password }) => postAuthResetPw(password),
    ...options,
  });
};
