import { URL } from "@/apis/apiUrl";
import axios from "axios";
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { JoinProps } from "@/pages/join/JoinPage";

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

export const useLogin = (
  options?: UseMutationOptions<unknown, unknown, Partial<JoinProps>, unknown>
) => {
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
    onSuccess: async () => {
      if (!user) return null;
      await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
    },
    ...options,
  });
};

export const useUserInfo = () => {
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  try {
    const { data } = await axios.get(URL.USER_INFO, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return data.body;
  } catch (e) {
    console.log(e);
  }
};

// const navigate = useNavigate();
// try {
//   const res = await axios({
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     withCredentials: true,
//     url: URL.LOGIN,
//     data: {
//       id,
//       password,
//     },
//   });

//   const ACCESS_TOKEN = res.headers["authorization"];
//   let REFRESH_TOKEN = res.headers["refresh"];

//   if (res.status === 200) {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
//     localStorage.setItem("ACCESS_TOKEN", ACCESS_TOKEN);
//     localStorage.setItem("REFRESH_TOKEN", REFRESH_TOKEN);
//     navigate("/");
//   }
// } catch (e) {
//   console.log(e);
// }

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
