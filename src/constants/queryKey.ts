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

export const location = {
  search: (
    keyword: string,
    lat: number,
    lng: number,
    page: number,
    size: number
  ) => ["location", keyword, lat, lng, page, size],
};
