const STATIC = {
  HOME: "/",
  LOGIN: "/login",
  JOIN: "/join",
};

const DYNAMIC = {};

export const PATH = {
  ...STATIC,
  ...DYNAMIC,
} as const;
