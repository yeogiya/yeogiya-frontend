import { getKakaoToken } from "@/apis/auth";

import usePageNavigation from "@/features/hooks/usePageNavigation";
import { PATH } from "@/utils/routes";

import { useEffect } from "react";

const KakaoLogin = () => {
  const code = new URLSearchParams(window.location.search).get("code");

  const { navigate } = usePageNavigation();

  const fetchKakaoToken = async (code: string) => {
    if (!code) return;
    try {
      const { access_token: accessToken, refresh_token: refreshToken } =
        await getKakaoToken(code);
    } catch (error) {
      throw error(error);
    }
  };

  useEffect(() => {
    if (code) {
      fetchKakaoToken(code);
    }
  }, []);

  return <div>Loading...</div>;
};

export default KakaoLogin;
