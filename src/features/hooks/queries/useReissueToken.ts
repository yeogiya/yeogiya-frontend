import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToken } from "../useToken";
import { PATH } from "@/utils/routes";
import { reissueToken } from "@/apis/auth";

export const useReissueToken = () => {
  const queryClient = useQueryClient();
  const { updateToken, resetToken } = useToken();
  const { mutate } = useMutation({
    mutationFn: reissueToken,
    onSuccess: (data) => {
      const accessToken = data.headers.get("Authorization");
      const refreshToken = data.headers.get("Authorization-Refresh");

      updateToken(accessToken || "", refreshToken || "");

      queryClient.invalidateQueries();
    },
    onError: () => {
      resetToken();
      window.location.href = PATH.HOME;
    },
  });

  return { mutateSendTokenReissue: mutate };
};
