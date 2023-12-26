import { CATEGORY } from "./category";

const PUBLIC_BASE_URL = `${import.meta.env.VITE_PUBLIC_URL_KEY}`;

const URLS = {
  // Public
  SIGN_UP: `${import.meta.env.VITE_PUBLIC_URL_KEY}${CATEGORY.MEMBERS}/sign-up`, // 회원가입
  CHECK_EMAIL: `${import.meta.env.VITE_PUBLIC_URL_KEY}${
    CATEGORY.MEMBERS
  }/email-exists`, // 이메일 중복 확인
  CHECK_ID: `${import.meta.env.VITE_PUBLIC_URL_KEY}${
    CATEGORY.MEMBERS
  }/id-exists`, // 아이디 중복 확인
  CHECK_NICKNAME: `${import.meta.env.VITE_PUBLIC_URL_KEY}${
    CATEGORY.MEMBERS
  }/nickname-exists`, // 닉네임 중복 확인
  FIND_ID: `${import.meta.env.VITE_PUBLIC_URL_KEY}${CATEGORY.MEMBERS}/find-id`, // 아이디 찾기
  LOGIN: `${import.meta.env.VITE_PUBLIC_URL_KEY}${CATEGORY.MEMBERS}/login`, // 로그인
  FIND_PW: `${import.meta.env.VITE_PUBLIC_URL_KEY}${
    CATEGORY.MEMBERS
  }/send-password-reset-email`, // 비밀번호 재설정 이메일 발송

  // Auth
  DIARY_LIST: `${import.meta.env.VITE_AUTH_URL_KEY}/diaries`, // 일기 목록
  USER_INFO: `${import.meta.env.VITE_AUTH_URL_KEY}${CATEGORY.MEMBERS}`, // 회원정보
  CHANGE_NICKNAME: `${import.meta.env.VITE_AUTH_URL_KEY}${
    CATEGORY.MEMBERS
  }/change-nickname`, // 닉네임 변경

  // search
  LOCATION_SEARCH: `${import.meta.env.VITE_PUBLIC_URL_KEY}/search/places`,
};

export const URL = {
  PUBLIC_BASE_URL,
  ...URLS,
} as const;
