const STATIC = {
  HOME: "/",
  SEARCH: "/search",
  LOGIN: "/login",
  KAKAO_LOGIN: "/login/kakao",
  JOIN: "/join",
  DIARY_CREATE: "/diary/create",
  DIARY_LIST: "/diary/list",
  FIND_ID: "/find/id",
  FIND_PW: "/find/pw",
  RESET_PASSWORD: "/reset",
  DIARY_MAP: "/diary/map",
  DIARY_MAP_SEARCH: "/diary/map/search",
  MY: "/my",
  MY_PASSWORD: "/my/pw",
  MY_PASSWORD_UPDATE: "/my/pw/update",
  MY_WITHDRAWAL: "/my/withdrawal",
};

const DYNAMIC = {};

export const PATH = {
  ...STATIC,
  ...DYNAMIC,
} as const;
