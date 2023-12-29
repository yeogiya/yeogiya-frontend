import { TOKEN } from "@/constants/token";
import { URL } from "@/constants/url";
import { httpClient } from "./httpClient";

let reissuePromise: Promise<Response> | null = null;

export const reissueToken = async () => {
  if (reissuePromise !== null) {
    return reissuePromise;
  }

  reissuePromise = fetch(URL.PUBLIC_BASE_URL + "/tokens/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization-Refresh": `Bearer ${localStorage.getItem(
        TOKEN.REFRESH_TOKEN
      )}`,
    },
  });

  const response = await reissuePromise;
  reissuePromise = null;

  if (!response.ok) {
    throw new Error("네트워크 통신 중 에러가 발생했습니다.");
  }

  return response;
};

export const getGoogleToken = async (code: string) => {
  return await httpClient.post(
    `https://accounts.google.com/o/oauth2/v2/auth?
  	client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}
  	&redirect_uri=${import.meta.env.VITE_GOOGLE_REDIRECT_URI}
  	&response_type=code
  	&scope=email profile`
  );
};

export const fetchGoogleUserInfo = async () => {
  const accessToken = localStorage.getItem("access_token");

  return await httpClient.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
  );
};
