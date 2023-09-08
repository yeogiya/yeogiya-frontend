import theme from "@/styles/theme";
import LinkText from "./LinkText";
import { MENU_ITEM } from "@/utils/menu";
import { PATH } from "@/utils/routes";
import styled from "@emotion/styled";

const Menu = () => {
  const getLinkStyles = (menuPath: string) => {
    const matchPath = menuPath === PATH.JOIN || menuPath === PATH.LOGIN;
    return {
      fontWeight: matchPath ? 700 : 400,
      marginRight: matchPath ? "0" : "50px",
    };
  };

  return (
    <MenuItem>
      {MENU_ITEM.map((menu, index) => (
        <>
          <LinkText
            key={`${menu} + ${menu.path}`}
            to={`${menu.path}`}
            css={getLinkStyles(menu.path)}
          >
            {menu.title}
          </LinkText>
          {index < MENU_ITEM.length - 1 &&
            (menu.path === PATH.JOIN || menu.path === PATH.LOGIN) && (
              <span>/</span>
            )}
        </>
      ))}
    </MenuItem>
  );
};

const MenuItem = styled.ul`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;

  a {
    color: ${theme.color.black90};
  }

  span {
    font-weight: 400;
    margin: 0 3px;
  }
`;
export default Menu;
