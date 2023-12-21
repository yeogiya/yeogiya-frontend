import { PATH } from "./routes";

export type MenuItemType = "diary" | "member" | "login";

export interface MenuItem {
  type: MenuItemType;
  title: string;
  path: string;
}

export const MENU_ITEM: MenuItem[] = [
  { type: "diary", title: "공간일기 쓰기", path: PATH.DIARY_LIST },
  { type: "member", title: "회원가입", path: PATH.JOIN },
  { type: "member", title: "로그인", path: PATH.LOGIN },
];

export const USER_MENU_ITEM = (nickname: string): MenuItem[] => [
  { type: "diary", title: "공간일기 쓰기", path: PATH.DIARY_LIST },
  { type: "login", title: `${nickname} 님`, path: PATH.MY },
];
