import { MENU_ITEM, MenuItemProps, USER_MENU_ITEM } from "@/constants/menus";
import LinkText from "./LinkText";
import { PATH } from "@/utils/routes";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useEffect, useState } from "react";
import { useToken } from "@/features/hooks/useToken";
import { useUserInfo } from "@/features/hooks/queries/useUserInfo";
import usePageNavigation from "@/features/hooks/usePageNavigation";
import { useReissueToken } from "@/features/hooks/queries/useReissueToken";
import { profileIconPath } from "@/assets/index";
import { fetchGoogleUserInfo } from "@/apis/auth";

interface GoogleUserProps {
  name: string;
  picture: string;
}

const Menu = () => {
  const { accessToken, refreshToken, updateToken, resetToken } = useToken();
  const { data: userInfo } = useUserInfo();
  const { navigate } = usePageNavigation();
  const { mutateSendTokenReissue } = useReissueToken();
  const googleToken = localStorage.getItem("access_token");
  const [googleUserInfo, setGoogleUserInfo] = useState<GoogleUserProps>({
    name: "",
    picture: "",
  });

  const getGoogleUserInfo = async (googleToken: string) => {
    const { name, picture } = (await fetchGoogleUserInfo(
      googleToken
    )) as GoogleUserProps;

    setGoogleUserInfo(() => {
      return {
        name,
        picture,
      };
    });
    console.log(name, "res>>>", picture);
  };

  useEffect(() => {
    if (!googleToken) return;

    getGoogleUserInfo(googleToken);
  }, [googleToken]);

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
      {accessToken || googleToken
        ? (userInfo?.body?.nickname &&
            handleNavMenu(USER_MENU_ITEM(userInfo.body.nickname))) ??
          (googleUserInfo.name &&
            handleNavMenu(USER_MENU_ITEM(googleUserInfo.name)))
        : handleNavMenu(MENU_ITEM)}
      {accessToken && userInfo && googleToken && (
        <img
          src={
            userInfo.body.profileImageUrl ??
            googleUserInfo.picture ??
            profileIconPath
          }
        />
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
