import { MENU_ITEM, MenuItemProps, USER_MENU_ITEM } from "@/constants/menus";
import LinkText from "./LinkText";
import { PATH } from "@/utils/routes";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useEffect } from "react";
import { useToken } from "@/features/hooks/useToken";
import { useUserInfo } from "@/features/hooks/queries/useUserInfo";
import usePageNavigation from "@/features/hooks/usePageNavigation";
import { useReissueToken } from "@/features/hooks/queries/useReissueToken";
import { profileIconPath } from "@/assets/index";

const Menu = () => {
  const { accessToken, refreshToken, updateToken, resetToken } = useToken();
  const { data: userInfo } = useUserInfo();
  const { navigate } = usePageNavigation();
  const { mutateSendTokenReissue } = useReissueToken();

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
      {accessToken
        ? userInfo?.body?.nickname &&
          handleNavMenu(USER_MENU_ITEM(userInfo.body.nickname))
        : handleNavMenu(MENU_ITEM)}
      {accessToken && userInfo && (
        <img src={userInfo.body.profileImageUrl ?? profileIconPath} />
      )}
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
  }
`;

export default Menu;
