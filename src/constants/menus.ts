import { PATH } from "../utils/routes";

export type MenuItemType = "diary" | "member" | "login";
export interface MenuItemProps {
  type: MenuItemType;
  title: string;
  path: string;
}

export const MENU_ITEM: MenuItemProps[] = [
  { type: "diary", title: "공간일기 쓰기", path: PATH.DIARY_LIST },
  { type: "member", title: "회원가입", path: PATH.JOIN },
  { type: "member", title: "로그인", path: PATH.LOGIN },
] as const;

export const USER_MENU_ITEM = (nickname: string): MenuItemProps[] =>
  [
    { type: "diary", title: "공간일기 쓰기", path: PATH.DIARY_LIST },
    { type: "login", title: "로그아웃", path: PATH.HOME },
    { type: "login", title: `${nickname} 님`, path: PATH.MY },
  ] as const;

export const RESTAURANT_DETAIL_NAV = {
  NAVER: "네이버",
  KAKAO: "카카오",
  GOOGLE: "구글",
  SHARE: "공유하기",
} as const;
