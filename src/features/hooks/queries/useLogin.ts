import { JoinProps } from "@/pages/join/JoinPage";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useToken } from "../useToken";
import { postLogin } from "@/apis/user";
import { AxiosResponseHeaders } from "axios";
import { PATH } from "@/utils/routes";

export const useLogin = (
  options?: UseMutationOptions<unknown, unknown, Partial<JoinProps>, unknown>
) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { updateToken } = useToken();

  return useMutation({
    mutationFn: postLogin,
    onSuccess: (data: AxiosResponseHeaders) => {
      const accessToken = data.headers.get("Authorization");
      const refreshToken = data.headers.get("Authorization-Refresh");

      updateToken(accessToken || "", refreshToken || "");

      queryClient.invalidateQueries();
      navigate(PATH.HOME);
    },
    ...options,
  });
};
