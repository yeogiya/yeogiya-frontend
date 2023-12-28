const MOCKS_URL = {
  SIGN_UP: `/mock/members/sign-up`,
  CHECK_EMAIL: `mock/email-exists`,
  CHECK_ID: `mock/id-exists`,
  CHECK_NICKNAME: `mock/nickname-exists`,
  FIND_ID: `mock/find-id`,
  LOGIN: `mock/members/login`,
  SEARCH: `mock/search`,
  RESTAURANT: `/mock/restaurant`,
};

export const MOCK = {
  ...MOCKS_URL,
} as const;
