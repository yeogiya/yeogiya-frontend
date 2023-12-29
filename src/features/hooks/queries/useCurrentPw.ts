import { postCheckPw } from "@/apis/user";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

export const useCurrentPw = (
  options?: UseMutationOptions<unknown, unknown, string, unknown>
) => {
  return useMutation({
    mutationFn: (password) => postCheckPw(password),
    ...options,
  });
};
