import ImageSection from "./components/ImageSection";
import Layout from "@/components/@common/Layout";
import RestaurantTitle from "./components/RestaurantTitle";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useEffect, useState } from "react";
import ResultDetailNav from "./components/ResultDetailNav";
import { SEARCH_DETAIL_NAV } from "@/constants/menus";
import ResultDetailContent from "./components/ResultDetailContent";
import { useParams } from "react-router-dom";
import { useSearchDetail } from "@/features/hooks/queries/useSearchDetail";
import { useAppSelector } from "@/features/hooks/useAppDispatch";
import { place } from "@/store/placeSlice";

export type SearchDetailPageNavType =
  (typeof SEARCH_DETAIL_NAV)[keyof typeof SEARCH_DETAIL_NAV];

const SearchDetailPagePage = () => {
  const placeState = useAppSelector(place);

  const { data: detailInfo } = useSearchDetail(
    placeState.placeId,
    placeState.keyword
  );

  const [activeNav, setActiveNav] = useState<SearchDetailPageNavType>(
    SEARCH_DETAIL_NAV.NAVER
  );

  const { searchDetail } = useParams();

  const handleActiveNav = (nav: SearchDetailPageNavType) => {
    setActiveNav(nav);

    // TODO activeNav에 따라 api
  };

  return (
    <Layout paddingTop="0">
      <ImageSection />
      <Layout maxWidth="60rem" paddingTop="3.5rem">
        <RestaurantTitle
          placeName={searchDetail}
          rating={placeState.yeogiyaRating}
          restaurantType={detailInfo?.body?.category}
        />
        <StyledBorder />
        <ResultDetailNav
          activeNav={activeNav}
          activeNavHandler={handleActiveNav}
        />
        <ResultDetailContent />
        {/* <DiaryReview review={data?.diaryReview} /> */}
      </Layout>
    </Layout>
  );
};

const StyledBorder = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: ${theme.color.black35};
  margin-top: 1.5rem;
`;

export default SearchDetailPagePage;
