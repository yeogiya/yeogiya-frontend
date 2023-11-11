import { PATH } from "./routes";

export type MenuItemType = "diary" | "member";

interface MenuItem {
  type: MenuItemType;
  title: string;
  path: string;
}

export const MENU_ITEM: MenuItem[] = [
  { type: "diary", title: "공간일기 쓰기", path: PATH.DIARY_CREATE },
  { type: "member", title: "회원가입", path: PATH.JOIN },
  { type: "member", title: "로그인", path: PATH.LOGIN },
];
