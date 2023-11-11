const STATIC = {
  HOME: "/",
  SEARCH: "/search",
  LOGIN: "/login",
  JOIN: "/join",
  DIARY_CREATE: "/diary/create",
  DIARY_LIST: "/diary/list",
  FIND_ID: "/find/id",
  FIND_PW: "/find/pw",
  RESET_PASSWORD: "/reset",
  DIARY_MAP: "/diary/map",
};

const DYNAMIC = {};

export const PATH = {
  ...STATIC,
  ...DYNAMIC,
} as const;
