const STATIC = {
  HOME: "/",
  LOGIN: "/login",
  JOIN: "/join",
  DIARY_WRITING: "/diary/writing",
  DIARY_READING: "/diary/reading",
};

const DYNAMIC = {};

export const PATH = {
  ...STATIC,
  ...DYNAMIC,
} as const;
