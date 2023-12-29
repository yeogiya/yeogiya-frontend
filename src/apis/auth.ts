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
