import { TOKEN } from "@/constants/token";

const postHeaders = (body: unknown) => {
  if (body instanceof FormData)
    return {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem(TOKEN.ACCESS_TOKEN)}`,
      },
      body: body,
      withCredentials: true,
    };

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(TOKEN.ACCESS_TOKEN)}`,
    },
    body: JSON.stringify(body),
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

  post: async (url: RequestInfo | URL, data: unknown) => {
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
      ...postHeaders(data),
    } as unknown as RequestInit);
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
