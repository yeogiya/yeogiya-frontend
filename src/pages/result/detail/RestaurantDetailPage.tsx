import ImageSection from "./components/ImageSection";
import Layout from "@/components/@common/Layout";
import RestaurantTitle from "./components/RestaurantTitle";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useCallback, useEffect, useState } from "react";
import ResultDetailNav from "./components/ResultDetailNav";
import { RESTAURANT_DETAIL_NAV } from "@/constants/menus";
import ResultDetailContent from "./components/ResultDetailContent";
import DiaryReview from "./components/ResultDetailReview";
import { DIARY_REVIEW } from "@/constants/diary";
import { useParams } from "react-router-dom";
import { getRestaurant } from "@/apis/search";
import { useRestaurant } from "@/features/hooks/queries/useRestaurant";

export type RestaurantDetailNavType =
  (typeof RESTAURANT_DETAIL_NAV)[keyof typeof RESTAURANT_DETAIL_NAV];

const RestaurantDetailPage = () => {
  const { data: mockData } = useRestaurant();

  const [data, setData] = useState<{
    placeName?: string;
    rating?: number;
    restaurantType?: string;
    diaryReview?: object[];
  }>(mockData);
  const [activeNav, setActiveNav] = useState<RestaurantDetailNavType>(
    RESTAURANT_DETAIL_NAV.NAVER
  );

  const { searchDetail } = useParams();

  const handleActiveNav = (nav: RestaurantDetailNavType) => {
    setActiveNav(nav);

    // TODO activeNav에 따라 api
  };

  useEffect(() => {
    setData(mockData);
  }, [mockData]);

  return (
    <Layout paddingTop="0">
      <ImageSection />
      <Layout maxWidth="60rem" paddingTop="3.5rem">
        <RestaurantTitle
          placeName={searchDetail}
          rating={data ? data.rating : undefined}
          restaurantType={data?.restaurantType}
        />
        <StyledBorder />
        <ResultDetailNav
          activeNav={activeNav}
          activeNavHandler={handleActiveNav}
        />
        <ResultDetailContent />
        <DiaryReview review={data?.diaryReview} />
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

export default RestaurantDetailPage;
