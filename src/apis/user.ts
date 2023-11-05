import { JoinProps } from "@/pages/join/JoinPage";
import axios from "axios";

export const BASE_URL = "http://13.209.150.130:8080/api/public/v1.0.0";

export const joinApi = async (
  params: Partial<JoinProps> & { loginType: string }
) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/members/sign-up`, params);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const checkEmailApi = async (email: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/members/email-exists`, {
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
    const { data } = await axios.get(`${BASE_URL}/members/id-exists`, {
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
    const { data } = await axios.get(`${BASE_URL}/members/nickname-exists`, {
      params: {
        nickname,
      },
    });
    return data.body;
  } catch (e) {
    console.log(e);
  }
};
