import { TOKEN } from "@/constants/token";

const postHeaders = (data: unknown) => {
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

  post: async (url: RequestInfo | URL, data?: unknown) => {
    const response = await fetch(url, {
      method: "POST",
      ...postHeaders(data),
    } as unknown as RequestInit);

    if (!response.ok) {
      throw response;
    }

    return response;
  },

  patch: async (url: RequestInfo | URL, data: unknown) => {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(TOKEN.ACCESS_TOKEN)}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw response;
    }

    return response;
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
