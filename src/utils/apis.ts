const PUBLRIC_URL = "http://dev.yeogiya.shop:8080/api/public/v1.0.0";
const AUTH_URL = "http://dev.yeogiya.shop:8080/api/auth/v1.0.0";

const CATEGORY = {
  MEMBERS: "/members",
};

const URLS = {
  // Public
  SIGN_UP: `${PUBLRIC_URL}${CATEGORY.MEMBERS}/sign-up`,
  CHECK_EMAIL: `${PUBLRIC_URL}${CATEGORY.MEMBERS}/email-exists`,
  CHECK_ID: `${PUBLRIC_URL}${CATEGORY.MEMBERS}/id-exists`,
  CHECK_NICKNAME: `${PUBLRIC_URL}${CATEGORY.MEMBERS}/nickname-exists`,
  FIND_ID: `${PUBLRIC_URL}${CATEGORY.MEMBERS}/find-id`,
  LOGIN: `${PUBLRIC_URL}${CATEGORY.MEMBERS}/login`,

  // LOGIN: `/mock/members/login`,
};

export const URL = {
  ...URLS,
} as const;
