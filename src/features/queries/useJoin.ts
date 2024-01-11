import { postJoin } from "@/apis/user";
import { JoinProps } from "@/pages/join/JoinPage";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

export const useJoin = (
  options?: UseMutationOptions<
    unknown,
    unknown,
    Partial<JoinProps> & { loginType: string },
    unknown
  >
) => {
  return useMutation({
    mutationFn: postJoin,
    ...options,
  });
};
