import theme from "@/styles/theme";
import { Container, TextLayout, Text } from "./InfoItem.style";
import { GoogleRatingIcon, RightArrowIcon, StarIcon } from "@/assets";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import { PATH } from "@/utils/routes";
import { SearchDefaultImage } from "@/assets/index";
import { useAppDispatch } from "@/features/hooks/useAppDispatch";
import { createPlace } from "@/store/placeSlice";
import { URL as URLS } from "@/constants/url";

const InfoItem = ({ data }) => {
  const {
    placeName,
    address,
    googleRating,
    googlePlaceId,
    photoReference,
    yeogiyaRating,
  } = data;

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const googleImage = `${URLS.GOOGLE_PLACE}${photoReference}&key=${
    import.meta.env.VITE_GOOGLE_PLACE_KEY
  }`;

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (e.currentTarget.onclick) {
      dispatch(
        createPlace({
          placeName,
          placeId: googlePlaceId,
          keyword: placeName,
          yeogiyaRating: yeogiyaRating,
          googleImage: photoReference && googleImage,
        })
      );
      navigate(
        PATH.SEARCH_RESULT_DETAIL +
          `/placeId=${googlePlaceId}&keyword=${placeName}`
      );
    }
  };

  return (
    <Container onClick={handleClick}>
      <img
        src={photoReference ? googleImage : SearchDefaultImage}
        alt="InfoImage"
      />
      <TextLayout
        column
        height="14.875rem"
        padding="0"
        justifyContent="space-between"
      >
        <TextLayout column padding="0">
          <Text>
            {placeName}
            <span>
              <StarIcon />
              {yeogiyaRating ?? 0}
            </span>
          </Text>
          <Text color={theme.color.black50} fontSize="1rem">
            {address}
          </Text>
          <TextLayout
            padding="0"
            alignItems="center"
            columnGap="0.75rem"
            marginTop="0.75rem"
          >
            <GoogleRatingIcon />
            <Text
              color={theme.color.black}
              fontSize="0.875rem"
              maxWidth="7.25rem"
            >
              구글지도 평점
              <strong>{googleRating}</strong>
            </Text>
          </TextLayout>
        </TextLayout>
        <Text
          fontSize="1rem"
          color={theme.color.black50}
          maxWidth="100%"
          justifyContent="flex-end"
        >
          {placeName} 더 보기
          <RightArrowIcon />
        </Text>
      </TextLayout>
    </Container>
  );
};

export default InfoItem;
