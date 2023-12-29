import { TOKEN } from "@/constants/token";

const postHeaders = (data: unknown, code?: string) => {
  if (data === "kakaoLogin") {
    return {
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: import.meta.env.VITE_KAKAO_CLIENT_ID as string,
        code: code,
        redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI as string,
        client_secret: import.meta.env.VITE_KAKAO_CLIENT_SECRET as string,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    };
  }

  if (data instanceof FormData)
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN.ACCESS_TOKEN)}`,
      },
      body: data,
      withCredentials: true,
    };

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(TOKEN.ACCESS_TOKEN)}`,
    },
    body: JSON.stringify(data),
  };
};

export const httpClient = {
  get: async <T>(url: RequestInfo | URL): Promise<T> => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(TOKEN.ACCESS_TOKEN)}`,
      },
    });

    if (!response.ok) {
      throw response;
    }

    return response.json();
  },

  post: async (url: RequestInfo | URL, data?: unknown, code?: string) => {
    const response = await fetch(url, {
      method: "POST",
      ...postHeaders(data, code),
    } as unknown as RequestInit);

    if (!response.ok) {
      throw response;
    }

    return response;
  },

  patch: async (url: RequestInfo | URL, data: unknown) => {
    return await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(TOKEN.ACCESS_TOKEN)}`,
      },
      body: JSON.stringify(data),
    });
  },

  delete: async (url: RequestInfo | URL) => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(TOKEN.ACCESS_TOKEN)}`,
      },
    });

    if (!response.ok) {
      throw response;
    }

    return response;
  },
};
