const STATIC = {
  HOME: "/",
  LOGIN: "/login",
  JOIN: "/join",
  DIARY_WRITE: "/diary/write",
  DIARY_LIST: "/diary/list",
  FIND_ID: "/find/id",
  FIND_PW: "/find/pw",
  RESET_PASSWORD: "/reset",
};

const DYNAMIC = {};

export const PATH = {
  ...STATIC,
  ...DYNAMIC,
} as const;
