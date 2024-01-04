import ImageSection from "./components/ImageSection";
import Layout from "@/components/@common/Layout";
import RestaurantTitle from "./components/RestaurantTitle";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useEffect, useState } from "react";
import ResultDetailNav from "./components/ResultDetailNav";
import ResultDetailContent from "./components/ResultDetailContent";
import { useSearchDetail } from "@/features/hooks/queries/useSearchDetail";
import { useAppSelector } from "@/features/hooks/useAppDispatch";
import { place } from "@/store/placeSlice";
import { detail } from "@/constants/queryKey";
import {
  SEARCH_LABEL,
  SEARCH_TYPE,
  SearchDetailNavType,
} from "@/constants/menus";

const SearchDetailPagePage = () => {
  const placeState = useAppSelector(place);

  const [query, getQuery] = useState<{
    placeId: string;
    keyword: string;
  }>({
    placeId: null,
    keyword: null,
  });

  const [activeNav, setActiveNav] = useState<SearchDetailNavType>({
    label: SEARCH_LABEL.GOOGLE,
    type: SEARCH_TYPE.GOOGLE,
  });

  const handleActiveNav = (nav: SearchDetailNavType) => {
    setActiveNav(nav);
  };

  const { data: detailInfo } = useSearchDetail(query.placeId, query.keyword, {
    queryKey: detail.search(query.placeId, query.keyword),
    enabled: !!query.placeId && !!query.keyword,
  });

  const findQuery = (url: string) => {
    if (!url) return;
    const match = url.match(/\/placeId=(.*?)&keyword=(.*)/);

    if (match) {
      const placeId = match[1];
      const keyword = match[2];

      getQuery({ placeId, keyword });
    }
  };

  useEffect(() => {
    findQuery(decodeURIComponent(window.location.pathname));
  }, []);

  return (
    <Layout paddingTop="0">
      <ImageSection
        images={placeState.googleImage && [placeState.googleImage]}
      />
      <Layout maxWidth="60rem" paddingTop="3.5rem">
        <RestaurantTitle
          placeName={placeState.keyword}
          rating={placeState.yeogiyaRating}
          restaurantType={detailInfo?.body?.category}
        />
        <StyledBorder />
        <ResultDetailNav
          activeNav={activeNav}
          activeNavHandler={handleActiveNav}
        />
        <ResultDetailContent activeNav={activeNav} data={detailInfo?.body} />
        {/* <DiaryReview review={data?.body?.diaryReview} /> */}
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
