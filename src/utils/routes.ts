const STATIC = {
  HOME: "/",
  LOGIN: "/login",
  JOIN: "/join",
  CATEGORY: "/category",
};

const DYNAMIC = {};

export const PATH = {
  ...STATIC,
  ...DYNAMIC,
} as const;
