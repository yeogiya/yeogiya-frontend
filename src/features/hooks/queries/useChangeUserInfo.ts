import { patchUserInfo } from "@/apis/user";
import { users } from "@/constants/queryKey";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import usePageNavigation from "../usePageNavigation";
import { PATH } from "@/utils/routes";

export const useChangeUserInfo = (
  options?: UseMutationOptions<unknown, unknown, unknown>
) => {
  const queryClient = useQueryClient();
  const { navigate } = usePageNavigation();

  return useMutation({
    mutationKey: users.info,
    mutationFn: patchUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: users.info });
      navigate(PATH.HOME);
    },
    ...options,
  });
};
