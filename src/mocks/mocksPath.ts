const MOCKS_PATH = {
  SIGN_UP: `/mock/members/sign-up`,
  CHECK_EMAIL: `mock/email-exists`,
  CHECK_ID: `mock/id-exists`,
  CHECK_NICKNAME: `mock/nickname-exists`,
  FIND_ID: `mock/find-id`,
  LOGIN: `mock/members/login`,
  SEARCH: `mock/search`,
};

export const MOCK = {
  ...MOCKS_PATH,
} as const;
