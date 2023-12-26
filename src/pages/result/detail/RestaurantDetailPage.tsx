import ImageSection from "./components/ImageSection";
import Layout from "@/components/@common/Layout";
import RestaurantTitle from "./components/RestaurantTitle";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useState } from "react";
import ResultDetailNav from "./components/ResultDetailNav";
import { RESTAURANT_DETAIL_NAV } from "@/constants/menus";
import ResultDetailContent from "./components/ResultDetailContent";
import DiaryReview from "./components/ResultDetailReview";
import { DIARY_REVIEW } from "@/constants/diary";
import { useParams } from "react-router-dom";

export type RestaurantDetailNavType =
  (typeof RESTAURANT_DETAIL_NAV)[keyof typeof RESTAURANT_DETAIL_NAV];

const RestaurantDetailPage = () => {
  const [data, setDate] = useState({
    placeName: "PlaceName",
    rating: 0,
    restaurantType: "RestaurantType",
    DiaryReview: [...DIARY_REVIEW],
  });
  const [activeNav, setActiveNav] = useState<RestaurantDetailNavType>(
    RESTAURANT_DETAIL_NAV.NAVER
  );

  const { searchDetail } = useParams();

  console.log(searchDetail);

  const handleActiveNav = (nav: RestaurantDetailNavType) => {
    setActiveNav(nav);

    // TODO activeNav에 따라 api
  };

  return (
    <Layout paddingTop="0">
      <ImageSection />
      <Layout maxWidth="60rem" paddingTop="3.5rem">
        <RestaurantTitle
          placeName={data.placeName}
          rating={data.rating}
          restaurantType={data.restaurantType}
        />
        <StyledBorder />
        <ResultDetailNav
          activeNav={activeNav}
          activeNavHandler={handleActiveNav}
        />
        <ResultDetailContent />
        <DiaryReview review={data.DiaryReview} />
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
