import { PATH } from "../utils/routes";

export type MenuItemType = "diary" | "member" | "login";

export interface MenuItemProps {
  type: MenuItemType;
  title: string;
  path: string;
}

type SearchLabelType = (typeof SEARCH_LABEL)[keyof typeof SEARCH_LABEL];
type SearchTypeType = (typeof SEARCH_TYPE)[keyof typeof SEARCH_TYPE];

export type SearchDetailNavType = {
  label: SearchLabelType;
  type: SearchTypeType;
};

export const MENU_ITEM: readonly MenuItemProps[] = [
  { type: "diary", title: "공간일기 쓰기", path: PATH.DIARY_LIST },
  { type: "member", title: "회원가입", path: PATH.JOIN },
  { type: "member", title: "로그인", path: PATH.LOGIN },
] as const;

export const USER_MENU_ITEM = (nickname: string): readonly MenuItemProps[] =>
  [
    { type: "diary", title: "공간일기 쓰기", path: PATH.DIARY_LIST },
    { type: "login", title: "로그아웃", path: PATH.HOME },
    { type: "login", title: `${nickname} 님`, path: PATH.MY },
  ] as const;

export const SEARCH_LABEL = {
  NAVER: "네이버",
  KAKAO: "카카오",
  GOOGLE: "구글",
  SHARE: "공유하기",
} as const;

export const SEARCH_TYPE = {
  NAVER: "naver",
  KAKAO: "kakao",
  GOOGLE: "google",
  SHARE: "share",
} as const;

export const SEARCH_DETAIL_NAV: readonly SearchDetailNavType[] = [
  { label: SEARCH_LABEL.NAVER, type: SEARCH_TYPE.NAVER },
  { label: SEARCH_LABEL.KAKAO, type: SEARCH_TYPE.KAKAO },
  { label: SEARCH_LABEL.GOOGLE, type: SEARCH_TYPE.GOOGLE },
  { label: SEARCH_LABEL.SHARE, type: SEARCH_TYPE.SHARE },
] as const;
