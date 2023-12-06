const PUBLIC_URL = "http://dev.yeogiya.shop:8080/api/public/v1.0.0";
const AUTH_URL = "http://dev.yeogiya.shop:8080/api/auth/v1.0.0";

const CATEGORY = {
  MEMBERS: "/members",
};

const URLS = {
  // Public
  SIGN_UP: `${PUBLIC_URL}${CATEGORY.MEMBERS}/sign-up`, // 회원가입
  CHECK_EMAIL: `${PUBLIC_URL}${CATEGORY.MEMBERS}/email-exists`, // 이메일 중복 확인
  CHECK_ID: `${PUBLIC_URL}${CATEGORY.MEMBERS}/id-exists`, // 아이디 중복 확인
  CHECK_NICKNAME: `${PUBLIC_URL}${CATEGORY.MEMBERS}/nickname-exists`, // 닉네임 중복 확인
  FIND_ID: `${PUBLIC_URL}${CATEGORY.MEMBERS}/find-id`, // 아이디 찾기
  LOGIN: `${PUBLIC_URL}${CATEGORY.MEMBERS}/login`, // 로그인
};

export const URL = {
  ...URLS,
} as const;
