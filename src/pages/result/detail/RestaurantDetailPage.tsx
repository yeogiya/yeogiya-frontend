import ImageSection from "./components/ImageSection";
import Layout from "@/components/@common/Layout";
import RestaurantTitle from "./components/RestaurantTitle";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useState } from "react";

const RestaurantDetailPage = () => {
  const [data, setDate] = useState({
    placeName: "PlaceName",
    rating: 0,
    restaurantType: "RestaurantType",
  });

  return (
    <Layout maxWidth="100%" paddingTop="0">
      <ImageSection />
      <Layout maxWidth="60rem" paddingTop="3.5rem">
        <RestaurantTitle
          placeName={data.placeName}
          rating={data.rating}
          restaurantType={data.restaurantType}
        />
        <StyledBorder />
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
