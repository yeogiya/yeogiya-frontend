import { MENU_ITEM, MenuItemProps, USER_MENU_ITEM } from "@/constants/menus";
import LinkText from "./LinkText";
import { PATH } from "@/utils/routes";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useEffect, useState } from "react";
import { useToken } from "@/features/hooks/useToken";
import usePageNavigation from "@/features/hooks/usePageNavigation";
import { useReissueToken } from "@/features/hooks/queries/useReissueToken";
import { profileIconPath } from "@/assets/index";
import {
  useAppDispatch,
  useAppSelector,
} from "@/features/hooks/useAppDispatch";
import { createUser, initialState, user } from "@/store/userSlice";

const Menu = () => {
  const { accessToken, refreshToken, updateToken, resetToken } = useToken();
  const { navigate } = usePageNavigation();
  const { mutateSendTokenReissue } = useReissueToken();
  const dispatch = useAppDispatch();

  const userState = useAppSelector(user);

  useEffect(() => {
    if (!accessToken) {
      resetToken();
      return;
    }

    updateToken(accessToken || "", refreshToken || "");
    mutateSendTokenReissue();
  }, [accessToken, refreshToken]);

  const handleClickLogout = () => {
    resetToken();
    dispatch(createUser(initialState));
    navigate(PATH.HOME);
  };

  const handleNavMenu = (mapItem: MenuItemProps[]) => {
    return mapItem.map((menu) => (
      <li key={`${menu.type}_${menu.title}`} css={getLinkStyles(menu.type)}>
        <LinkText
          color={theme.color.black90}
          to={`${menu.path}`}
          text={menu.title}
          onClick={menu.title === "로그아웃" && handleClickLogout}
        />
        {menu.path === PATH.JOIN && <span>/</span>}
      </li>
    ));
  };

  const getLinkStyles = (type: string) => {
    const matchPath = type === "member";
    return {
      fontWeight: matchPath ? 700 : 400,
      marginRight: matchPath ? "0" : "1.25rem",
    };
  };

  return (
    <MenuItem>
      {userState.id
        ? handleNavMenu(USER_MENU_ITEM(userState.nickname))
        : handleNavMenu(MENU_ITEM)}

      {userState.id && <img src={userState.profileImg || profileIconPath} />}
    </MenuItem>
  );
};

const MenuItem = styled.ul`
  display: flex;

  li {
    display: flex;
    list-style: none;
    align-items: center;

    a {
      font-size: 1rem;
      font-style: normal;
      line-height: normal;
      margin-top: 0;
    }
  }

  span {
    margin: 0 0.1875rem;
    font-size: 1rem;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export default Menu;
