import { JoinProps } from "@/pages/join/JoinPage";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useToken } from "../hooks/useToken";
import { postLogin } from "@/apis/user";
import { AxiosResponseHeaders } from "axios";
import { PATH } from "@/utils/routes";

export const useLogin = (
  options?: UseMutationOptions<unknown, unknown, Partial<JoinProps>, unknown>
) => {
  const navigate = useNavigate();
  const { updateToken } = useToken();

  return useMutation({
    mutationFn: postLogin,
    onSuccess: (data: AxiosResponseHeaders) => {
      const accessToken = data.headers.get("Authorization");
      const refreshToken = data.headers.get("Authorization-Refresh");

      updateToken(accessToken || "", refreshToken || "");

      navigate(PATH.HOME);
    },
    ...options,
  });
};
