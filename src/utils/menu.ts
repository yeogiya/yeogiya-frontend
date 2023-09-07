import { PATH } from "./routes";

interface MenuItemType {
  title: string;
  path: string;
}

export const MENU_ITEM: MenuItemType[] = [
  { title: "카테고리1", path: PATH.CATEGORY },
  { title: "카테고리2", path: PATH.CATEGORY },
  { title: "카테고리3", path: PATH.CATEGORY },
  { title: "회원가입/로그인", path: PATH.LOGIN },
];
