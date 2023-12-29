import { URL } from "@/constants/url";
import { JoinProps } from "@/pages/join/JoinPage";
import { httpClient } from "./httpClient";
import { postRestPw } from "@/pages/my/password/UpdateMyPwPage";
import { WithdrawalReasonsProps } from "@/types/users";

export const postJoin = (data: Partial<JoinProps> & { loginType: string }) => {
  return httpClient.post(URL.SIGN_UP, data);
};

export const postLogin = ({ id, password }: Partial<JoinProps>) => {
  return httpClient.post(URL.LOGIN, { id, password });
};

export const getUserInfo = () => {
  return httpClient.get(URL.USER_INFO);
};

export const getCheckEmail = (email: string) => {
  return httpClient.get(`${URL.CHECK_EMAIL}?email=${email}`);
};

export const getCheckId = (id: string) => {
  return httpClient.get(`${URL.CHECK_ID}?id=${id}`);
};

export const getCheckNickname = (nickname: string) => {
  return httpClient.get(`${URL.CHECK_NICKNAME}?nickname=${nickname}`);
};

export const getFindId = (email: string) => {
  return httpClient.get(`${URL.FIND_ID}?email=${email}`);
};

export const postFindPwd = ({ id, email }: Partial<JoinProps>) => {
  return httpClient.post(URL.FIND_PW, { email, id });
};

export const patchNickname = (nickname: Pick<JoinProps, "nickname">) => {
  return httpClient.patch(URL.CHANGE_NICKNAME, nickname);
};

export const postResetPwd = ({ password, token }: postRestPw) => {
  return httpClient.post(URL.RESET_PW, { password, token });
};

export const postWithdraw = ({
  reason,
  detailedReason,
}: WithdrawalReasonsProps) => {
  return httpClient.post(URL.USER_WITHDRAW, { reason, detailedReason });
};

export const postCheckPw = (password: string) => {
  return httpClient.post(URL.CHECK_PW, { password });
};

export const postAuthResetPw = (password: string) => {
  return httpClient.post(URL.AUTH_RESET_PW, { password });
};
