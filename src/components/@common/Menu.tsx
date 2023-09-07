import LinkText from "./LinkText";
import { MENU_ITEM } from "@/utils/menu";
import styled from "@emotion/styled";

interface MenuProps {
  gridGap?: `${number}px`;
}

const Menu = ({ ...props }: MenuProps) => {
  return (
    <MenuItem>
      {MENU_ITEM.map((menu) => {
        return (
          <LinkText
            key={`${menu} + ${menu.path}`}
            to={`${menu.path}`}
            {...props}
          >
            {menu.title}
          </LinkText>
        );
      })}
    </MenuItem>
  );
};

const MenuItem = styled.ul<MenuProps>`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  grid-gap: ${({ gridGap }) => gridGap || "50px"};

  a {
    color: #111;
  }
`;
export default Menu;
