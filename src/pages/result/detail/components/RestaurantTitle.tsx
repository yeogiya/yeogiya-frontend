import HeadingText from "@/components/@common/HeadingText";
import StarIcon from "@/assets/images/StarIcon";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

interface RestaurantTitleProps {
  placeName?: string;
  rating?: number;
  restaurantType?: string;
}

const RestaurantTitle = ({
  placeName,
  rating,
  restaurantType,
}: RestaurantTitleProps) => {
  return (
    <Layout>
      <Title>
        <HeadingText as="h1" css={{ fontSize: "1.875rem" }}>
          {placeName}
        </HeadingText>
        <Rating>
          <StarIcon />
          {rating}
        </Rating>
      </Title>
      <StyledType>음식점 &gt; {restaurantType}</StyledType>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const Rating = styled.div`
  height: 2.5rem;
  fill: ${theme.color.purple};
  color: ${theme.color.purple};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  font-weight: 500;
  column-gap: 0.25rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    margin-top: 0.625rem;
  }
`;

const StyledType = styled.div`
  color: ${theme.color.black50};
  font-size: 1.125rem;
`;

export default RestaurantTitle;
