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
import { useUserInfo } from "./useUserInfo";
import { useAppDispatch } from "../useAppDispatch";
import { createUser } from "@/store/userSlice";

export const useLogin = (
  options?: UseMutationOptions<unknown, unknown, Partial<JoinProps>, unknown>
) => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { updateToken } = useToken();
  const { data: userInfo } = useUserInfo();

  return useMutation({
    mutationFn: postLogin,
    onSuccess: (data: AxiosResponseHeaders) => {
      const accessToken = data.headers.get("Authorization");
      const refreshToken = data.headers.get("Authorization-Refresh");

      updateToken(accessToken || "", refreshToken || "");

      dispatch(
        createUser({
          email: userInfo.body.email,
          id: userInfo.body.id,
          nickname: userInfo.body.nickname,
          profileImg: userInfo.body.profileImageUrl,
        })
      );

      queryClient.invalidateQueries();
      navigate(PATH.HOME);
    },
    ...options,
  });
};
