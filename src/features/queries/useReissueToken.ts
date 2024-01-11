import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToken } from "../hooks/useToken";
import { PATH } from "@/utils/routes";
import { reissueToken } from "@/apis/auth";
import { useInfo } from "../hooks/useInfo";

export const useReissueToken = () => {
  const queryClient = useQueryClient();
  const { updateToken, resetToken } = useToken();
  const { removeUserInfo } = useInfo();
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
      removeUserInfo();
      window.location.href = PATH.HOME;
    },
  });

  return { mutateSendTokenReissue: mutate };
};
