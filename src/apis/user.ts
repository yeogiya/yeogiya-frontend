import { JoinProps } from "@/pages/join/JoinPage";
import { URL } from "@/utils/routesPath";
import axios from "axios";

export const joinApi = async (
  params: Partial<JoinProps> & { loginType: string }
) => {
  try {
    const { data } = await axios.post(URL.SIGN_UP, params);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const checkEmailApi = async (email: string) => {
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

export const checkIdApi = async (id: string) => {
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

export const checkNicknameApi = async (nickname: string) => {
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

export const findIdApi = async (email: string) => {
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

export const loginApi = async ({ id, password }) => {
  try {
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
    let REFRESH_TOKEN = res.headers["refresh"];

    if (res.status === 200) {
      localStorage.setItem("token", ACCESS_TOKEN);
    }
  } catch (e) {
    console.log(e);
  }
};
