import { MENU_ITEM, MenuItemProps, USER_MENU_ITEM } from "@/constants/menus";
import LinkText from "./LinkText";
import { PATH } from "@/utils/routes";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useEffect } from "react";
import { useToken } from "@/features/hooks/useToken";
import { useReissueToken } from "@/features/queries/useReissueToken";
import { profileIconPath } from "@/assets/index";
import { useUserInfo } from "@/features/queries/useUserInfo";
import { users } from "@/constants/queryKey";
import { useNavigate } from "react-router-dom";
import { useInfo } from "@/features/hooks/useInfo";

const Menu = () => {
  const { accessToken, refreshToken, updateToken, resetToken } = useToken();
  const { nickname, profile, updateUserInfo, removeUserInfo } = useInfo();
  const navigate = useNavigate();
  const { mutateSendTokenReissue } = useReissueToken();
  const { data: userInfo } = useUserInfo({
    queryKey: users.info,
    enabled: !!accessToken,
  });

  useEffect(() => {
    if (!accessToken) {
      resetToken();
      removeUserInfo();

      navigate(PATH.HOME);
      return;
    }

    if (userInfo) {
      updateUserInfo(userInfo.body.nickname, userInfo.body.profileImageUrl);
    }

    updateToken(accessToken || "", refreshToken || "");
    mutateSendTokenReissue();
  }, [accessToken, refreshToken, userInfo]);

  const handleClickLogout = () => {
    resetToken();
    removeUserInfo();
    navigate(PATH.LOGIN);
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
      {nickname
        ? handleNavMenu(USER_MENU_ITEM(nickname) as MenuItemProps[])
        : handleNavMenu(MENU_ITEM as MenuItemProps[])}

      {profile && <img src={profile || profileIconPath} />}
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
