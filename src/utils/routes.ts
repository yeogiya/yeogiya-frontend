const STATIC = {
  HOME: "/",
  LOGIN: "/login",
  JOIN: "/join",
  DIARY_WRITING: "/diary/writing",
  DIARY_READING: "/diary/reading",
  FIND_ID: "/find/id",
  FIND_PW: "/find/pw",
  RESET_PASSWORD: "/reset",
};

const DYNAMIC = {};

export const PATH = {
  ...STATIC,
  ...DYNAMIC,
} as const;
