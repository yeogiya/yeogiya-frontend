import { URL } from "@/apis/apiUrl";
import axios from "axios";
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { JoinProps } from "@/pages/join/JoinPage";
import usePageNavigation from "@/features/hooks/usePageNavigation";
import { PATH } from "@/utils/routes";
import { users } from "./queryKey";

export const useJoin = (
  options?: UseMutationOptions<
    unknown,
    unknown,
    Partial<JoinProps> & { loginType: string },
    unknown
  >
) => {
  return useMutation({
    mutationFn: async (data: Partial<JoinProps> & { loginType: string }) => {
      await axios(URL.SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { ...data },
      });
    },
    ...options,
  });
};

export const useLogin = (
  options?: UseMutationOptions<unknown, unknown, Partial<JoinProps>, unknown>
) => {
  const { navigate } = usePageNavigation();

  return useMutation({
    mutationFn: async ({ id, password }: Partial<JoinProps>) => {
      const res = await axios({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        url: URL.LOGIN,
        data: {
          id,
          password,
        },
      });

      const ACCESS_TOKEN = res.headers["authorization"];
      localStorage.setItem("ACCESS_TOKEN", ACCESS_TOKEN);
    },
    onSuccess: () => {
      navigate(PATH.HOME);
    },
    ...options,
  });
};

export const useUserInfo = (options?: UseQueryOptions) => {
  return useQuery({
    queryKey: users.info,
    queryFn: async () => {
      const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
      if (!ACCESS_TOKEN) return;

      const { data } = await axios({
        url: URL.USER_INFO,
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
      return data.body;
    },
    ...options,
  });
};

export const checkEmailAPI = async (email: string) => {
  try {
    const { data } = await axios.get(URL.CHECK_EMAIL, {
      params: {
        email,
      },
    });
    return data.body;
  } catch (e) {
    console.log(e);
  }
};

export const checkIdAPI = async (id: string) => {
  try {
    const { data } = await axios.get(URL.CHECK_ID, {
      params: {
        id,
      },
    });
    return data.body;
  } catch (e) {
    console.log(e);
  }
};

export const checkNicknameAPI = async (nickname: string) => {
  try {
    const { data } = await axios.get(URL.CHECK_NICKNAME, {
      params: {
        nickname,
      },
    });
    return data.body;
  } catch (e) {
    console.log(e);
  }
};

export const findIdAPI = async (email: string) => {
  try {
    const { data } = await axios.get(URL.FIND_ID, {
      params: {
        email,
      },
    });
    return data.body;
  } catch (e) {
    console.log(e);
  }
};

export const findPwAPI = async ({ email, id }: Partial<JoinProps>) => {
  try {
    const res = await axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: URL.FIND_PW,
      data: {
        email,
        id,
      },
    });
    return res.data;
  } catch (e) {}
};

export const userInfoAPI = (params, options: UseQueryOptions) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () =>
      axios({
        url: URL.USER_INFO,
        params,
      }),
    ...options,
  });
};

export const dairyListAPI = async () => {
  try {
    const { data } = await axios.get(URL.DIARY_LIST, {
      params: {
        year: 2023,
        month: 10,
      },
    });
    return data.body;
  } catch (e) {
    console.log(e);
  }
};
