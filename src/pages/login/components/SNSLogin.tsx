import usePageNavigation from "@/features/hooks/usePageNavigation";
import { useToken } from "@/features/hooks/useToken";
import { PATH } from "@/utils/routes";
import { useEffect } from "react";
import { useAppDispatch } from "@/features/hooks/useAppDispatch";
import { useUserInfo } from "@/features/hooks/queries/useUserInfo";
import { createUser } from "@/store/userSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useReissueToken } from "@/features/hooks/queries/useReissueToken";
import { getUserInfo } from "@/apis/user";

const SNSLogin = () => {
  const { updateToken } = useToken();

  const dispatch = useAppDispatch();

  const queryClient = useQueryClient();

  const { navigate } = usePageNavigation();

  const { data: userInfo } = useUserInfo();

  const searchAccessToken = new URLSearchParams(window.location.search).get(
    "accessToken"
  );

  const searchRefreshToken = new URLSearchParams(window.location.search).get(
    "refreshToken"
  );

  const handleToken = async (accessToken: string, refreshToken: string) => {
    await updateToken(accessToken, refreshToken);
  };

  const handleUpdate = async (userInfo) => {
    if (!userInfo && !userInfo?.body) return;

    await dispatch(
      createUser({
        email: userInfo.body.email,
        id: userInfo.body.id,
        nickname: userInfo.body.nickname,
        profileImg: userInfo.body.profileImageUrl,
      })
    );
  };

  useEffect(() => {
    if (!searchAccessToken || !searchRefreshToken) return;
    handleToken(searchAccessToken, searchRefreshToken);
    handleUpdate(userInfo);
    queryClient.invalidateQueries();
    navigate(PATH.HOME);
  }, []);

  return <>SNSLoginPage</>;
};

export default SNSLogin;
