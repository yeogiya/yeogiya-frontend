import { patchNickname } from "@/apis/user";
import { users } from "@/constants/queryKey";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import usePageNavigation from "../usePageNavigation";
import { PATH } from "@/utils/routes";

export const useChangeNickname = (
  options?: UseMutationOptions<unknown, unknown, unknown>
) => {
  const queryClient = useQueryClient();
  const { navigate } = usePageNavigation();

  return useMutation({
    mutationKey: users.infoNickname,
    mutationFn: patchNickname,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: users.infoNickname });
      navigate(PATH.HOME);
    },
    ...options,
  });
};
