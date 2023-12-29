import { getKakaoToken } from "@/apis/auth";
import {
  useAppDispatch,
  useAppSelector,
} from "@/features/hooks/useAppDispatch";

import usePageNavigation from "@/features/hooks/usePageNavigation";
import { createToken, token } from "@/store/tokenSlice";
import { PATH } from "@/utils/routes";

import { useEffect } from "react";

const KakaoLogin = () => {
  const code = new URLSearchParams(window.location.search).get("code");

  const { navigate } = usePageNavigation();

  const dispatch = useAppDispatch();
  const tokenState = useAppSelector(token);

  const fetchKakaoToken = async (code: string) => {
    if (!code) return;
    try {
      const { access_token: accessToken, refresh_token: refreshToken } =
        await getKakaoToken(code);
      dispatch(createToken({ accessToken }));
      console.log(tokenState.accessToken);
      navigate(PATH.LOGIN_SNS);
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
