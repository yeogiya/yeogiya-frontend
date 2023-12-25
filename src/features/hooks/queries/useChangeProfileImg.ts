import { patchProfile } from "@/apis/user";
import { users } from "@/constants/queryKey";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

export const useChangeProfileImg = (
  options?: UseMutationOptions<unknown, unknown, unknown>
) => {
  return useMutation({
    mutationKey: users.infoProfile,
    mutationFn: patchProfile,
    ...options,
  });
};
