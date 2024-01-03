export const users = {
  info: ["users"],
  checkEmail: (email: string) => ["email", email],
};

export const search = {
  result: (keyword: string) => ["search", keyword],
};

export const diary = {
  list: ["diary", "list"],
  detail: ["diary", "detail"],
};

export const detail = {
  search: (placeId: string, keyword: string) => [
    "searchDetail",
    placeId,
    keyword,
  ],
};
