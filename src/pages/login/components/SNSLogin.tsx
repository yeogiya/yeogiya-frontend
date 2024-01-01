import usePageNavigation from "@/features/hooks/usePageNavigation";
import { useToken } from "@/features/hooks/useToken";
import { PATH } from "@/utils/routes";
import { useEffect } from "react";
import { useAppDispatch } from "@/features/hooks/useAppDispatch";
import { useUserInfo } from "@/features/hooks/queries/useUserInfo";
import { useQueryClient } from "@tanstack/react-query";

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
