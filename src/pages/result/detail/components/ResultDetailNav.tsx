import theme from "@/styles/theme";
import styled from "@emotion/styled";
import {
  SEARCH_LABEL,
  SEARCH_TYPE,
  SearchDetailNavType,
} from "@/constants/menus";
import { ShareIcon } from "@/assets";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "@/features/hooks/useAppDispatch";
import { place } from "@/store/placeSlice";

interface ResultDetailNavProps {
  activeNav: SearchDetailNavType;
  activeNavHandler: (nav: SearchDetailNavType) => void;
}

const ResultDetailNav = ({
  activeNav,
  activeNavHandler,
}: ResultDetailNavProps) => {
  return (
    <Container>
      <div>
        <StyledButton
          isActive={activeNav.label === SEARCH_LABEL.GOOGLE}
          onClick={() => {
            activeNavHandler({
              label: SEARCH_LABEL.GOOGLE,
              type: SEARCH_TYPE.GOOGLE,
            });
          }}
        >
          {SEARCH_LABEL.GOOGLE}
        </StyledButton>

        <StyledButton
          isActive={activeNav.label === SEARCH_LABEL.KAKAO}
          onClick={() => {
            activeNavHandler({
              label: SEARCH_LABEL.KAKAO,
              type: SEARCH_TYPE.KAKAO,
            });
          }}
        >
          {SEARCH_LABEL.KAKAO}
        </StyledButton>
        <StyledButton
          isActive={activeNav.label === SEARCH_LABEL.NAVER}
          onClick={() => {
            activeNavHandler({
              label: SEARCH_LABEL.NAVER,
              type: SEARCH_TYPE.NAVER,
            });
          }}
        >
          {SEARCH_LABEL.NAVER}
        </StyledButton>
      </div>
      <div>
        {/* <StyledButton onClick={handleCopy}>
          {SEARCH_LABEL.SHARE}
          <ShareIcon />
        </StyledButton> */}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 3.25rem;
  border-radius: 10px;
  background-color: ${theme.color.purple};
  margin-top: 3.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1.25rem;

  div {
    list-style: none;
    display: flex;
    align-items: center;
    height: 100%;
    column-gap: 1.75rem;
  }
`;

const StyledButton = styled.button<{ isActive?: boolean }>`
  font-size: 1rem;
  cursor: pointer;
  color: ${theme.color.white};
  background: transparent;
  font-weight: ${({ isActive }) => (isActive ? 500 : 400)};
  display: flex;
  justify-content: center;
  column-gap: 0.5rem;
`;

export default ResultDetailNav;
