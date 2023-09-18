import theme from "@/styles/theme";
import LinkText from "./LinkText";
import { MENU_ITEM } from "@/utils/menus";
import { PATH } from "@/utils/routes";
import styled from "@emotion/styled";

const Menu = () => {
  const getLinkStyles = (type: string) => {
    const matchPath = type === "member";
    return {
      fontWeight: matchPath ? 700 : 400,
      marginRight: matchPath ? "0" : "50px",
    };
  };

  return (
    <MenuItem>
      {MENU_ITEM.map((menu) => (
        <li key={`${menu.type}_${menu.title}`} css={getLinkStyles(menu.type)}>
          <LinkText to={`${menu.path}`}>{menu.title}</LinkText>
          {menu.path === PATH.JOIN && <span>/</span>}
        </li>
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

  li {
    display: flex;
    list-style: none;
    align-items: center;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
  }

  a {
    color: ${theme.color.black90};
  }

  span {
    font-weight: 400;
    margin: 0 3px;
  }
`;
export default Menu;
