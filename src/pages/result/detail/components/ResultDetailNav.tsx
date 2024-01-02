import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { SEARCH_DETAIL_NAV } from "@/constants/menus";
import { SearchDetailPageNavType } from "@/pages/result/detail/SearchDetailPage";
import { ShareIcon } from "@/assets";
import { useLocation } from "react-router-dom";

interface ResultDetailNavProps {
  activeNav: SearchDetailPageNavType;
  activeNavHandler: (nav: SearchDetailPageNavType) => void;
}

const ResultDetailNav = ({
  activeNav,
  activeNavHandler,
}: ResultDetailNavProps) => {
  const location = useLocation();

  const handleCopy = async () => {
    const copyUrl = window.location.origin + location.pathname;
    try {
      await navigator.clipboard.writeText(copyUrl);
      // ! deploy test
      console.log("URL COPY TEST ::", copyUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <div>
        <StyledButton
          isActive={activeNav === SEARCH_DETAIL_NAV.NAVER}
          onClick={() => {
            activeNavHandler(SEARCH_DETAIL_NAV.NAVER);
          }}
        >
          {SEARCH_DETAIL_NAV.NAVER}
        </StyledButton>
        <StyledButton
          isActive={activeNav === SEARCH_DETAIL_NAV.KAKAO}
          onClick={() => {
            activeNavHandler(SEARCH_DETAIL_NAV.KAKAO);
          }}
        >
          {SEARCH_DETAIL_NAV.KAKAO}
        </StyledButton>
        <StyledButton
          isActive={activeNav === SEARCH_DETAIL_NAV.GOOGLE}
          onClick={() => {
            activeNavHandler(SEARCH_DETAIL_NAV.GOOGLE);
          }}
        >
          {SEARCH_DETAIL_NAV.GOOGLE}
        </StyledButton>
      </div>
      <div>
        <StyledButton onClick={handleCopy}>
          {SEARCH_DETAIL_NAV.SHARE}
          <ShareIcon />
        </StyledButton>
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
