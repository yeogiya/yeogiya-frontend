import { JoinProps } from "@/pages/join/JoinPage";
import { URL } from "@/apis/apiUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const joinAPI = async (
  params: Partial<JoinProps> & { loginType: string }
) => {
  try {
    const { data } = await axios.post(URL.SIGN_UP, params);
    return data;
  } catch (e) {
    console.log(e);
  }
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

export const loginAPI = async ({ id, password }: Partial<JoinProps>) => {
export const loginAPI = async ({ id, password }: Partial<JoinProps>) => {
  const navigate = useNavigate();
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
      axios.defaults.headers.common["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
      localStorage.setItem("ACCESS_TOKEN", ACCESS_TOKEN);
      localStorage.setItem("REFRESH_TOKEN", REFRESH_TOKEN);
      localStorage.setItem("token", ACCESS_TOKEN);
      navigate("/");
    }
  } catch (e) {
    console.log(e);
  }
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
