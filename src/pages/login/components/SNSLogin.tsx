import usePageNavigation from "@/features/hooks/usePageNavigation";
import { useToken } from "@/features/hooks/useToken";
import { PATH } from "@/utils/routes";
import { useEffect } from "react";
import { useUserInfo } from "@/features/hooks/queries/useUserInfo";
import { useQueryClient } from "@tanstack/react-query";
import { TOKEN } from "@/constants/token";
import { useInfo } from "@/features/hooks/useInfo";

const SNSLogin = () => {
  const { updateToken } = useToken();

  const { navigate } = usePageNavigation();
  const { updateUserInfo } = useInfo();
  const { data: userInfo } = useUserInfo();

  const searchAccessToken = new URLSearchParams(window.location.search).get(
    TOKEN.ACCESS_TOKEN
  );

  const searchRefreshToken = new URLSearchParams(window.location.search).get(
    TOKEN.REFRESH_TOKEN
  );

  const handleToken = async (accessToken: string, refreshToken: string) => {
    await updateToken(accessToken, refreshToken);
  };

  const handleUpdate = async () => {
    if (userInfo) {
      await updateUserInfo(
        userInfo.body.nickname,
        userInfo.body.profileImageUrl
      );
    }
  };

  useEffect(() => {
    if (!searchAccessToken || !searchRefreshToken) return;
    handleToken(searchAccessToken, searchRefreshToken);
    handleUpdate();

    navigate(PATH.HOME);
  }, []);

  return <>SNSLoginPage</>;
};

export default SNSLogin;
