import LinkText from "./LinkText";
import { MENU_ITEM } from "@/utils/menus";
import { PATH } from "@/utils/routes";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

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
          <LinkText
            color={theme.color.black90}
            to={`${menu.path}`}
            text={menu.title}
          />
          {menu.path === PATH.JOIN && <span>/</span>}
        </li>
      ))}
    </MenuItem>
  );
};

const MenuItem = styled.ul`
  display: flex;

  li {
    display: flex;
    list-style: none;
    align-items: center;
    font-size: 1rem;
    font-style: normal;
    line-height: normal;

    a {
      margin-top: 0;
    }
  }

  span {
    margin: 0 3px;
    font-size: 1rem;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
  }
`;
export default Menu;
