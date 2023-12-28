import { useAppDispatch } from "@/features/hooks/useAppDispatch";
import usePageNavigation from "@/features/hooks/usePageNavigation";
import { useToken } from "@/features/hooks/useToken";
import { createUser } from "@/store/userSlice";
import axios from "axios";
import { useEffect } from "react";
import { CheckDuplicationProps } from "@/types/users";

const KakaoLogin = () => {
  const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID as string;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI as string;
  const CLIENT_SECRET = import.meta.env.VITE_KAKAO_CLIENT_SECRET as string;

  const { navigate } = usePageNavigation();

  const dispatch = useAppDispatch();

  const { updateToken } = useToken();

  const searchParams = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("code");
  };

  const getKakaoOauthToken = async (code: string) => {
    const data = new URLSearchParams({
      code,
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      client_secret: CLIENT_SECRET,
    }).toString();

    try {
      return await axios.post("https://kauth.kakao.com/oauth/token", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const getKakaoUserInfo = async (token: string) => {
    const data = {
      client_secret: CLIENT_SECRET,
    };

    try {
      return await axios.post("https://kapi.kakao.com/v2/user/me", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      });
    } catch (apiError) {
      console.error(apiError);
    }
  };

  useEffect(() => {
    const code = searchParams();
    if (code) {
      getKakaoOauthToken(code)
        .then(async (res) => {
          const { access_token: accessToken, refresh_token: refreshToken } =
            res.data;
          const { data } = await getKakaoUserInfo(accessToken);
          const { kakao_account: user } = data;
          dispatch(
            createUser({
              email: user.email,
              id: data.id,
              nickname: user.nickname,
              profileImg: user.profile_image_url,
            })
          );

          // TODO: token, navigate
        })
        .catch((error) => console.error(error));
    } else {
      console.error("searchParams error");
    }
  }, []);
};

export default KakaoLogin;
