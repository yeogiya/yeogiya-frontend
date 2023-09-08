const STATIC = {
  HOME: "/",
  LOGIN: "/login",
  JOIN: "/join",
  CATEGORY_1: "/category1",
  CATEGORY_2: "/category2",
  CATEGORY_3: "/category3",
};

const DYNAMIC = {};

export const PATH = {
  ...STATIC,
  ...DYNAMIC,
} as const;
