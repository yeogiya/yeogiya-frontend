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
import { createDiary } from "@/store/diarySlice";

interface InfoItemProps {
  type: "place" | "location";
  placeName: string;
  address: string;
  imageUrl: string;
  yeogiyaRating: number;
  googleRating?: number;
  googlePlaceId?: string;
  kakaoId?: number;
  lat?: number;
  lng?: number;
}

const InfoItem = ({
  type,
  placeName,
  address,
  imageUrl,
  yeogiyaRating,
  googlePlaceId,
  googleRating,
  kakaoId,
  lat,
  lng,
}: InfoItemProps) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const googleImage =
    type === "place" &&
    `${URLS.GOOGLE_PLACE}${imageUrl}&key=${
      import.meta.env.VITE_GOOGLE_PLACE_KEY
    }`;

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (type === "place" && e.currentTarget.onclick) {
      dispatch(
        createPlace({
          placeName,
          placeId: googlePlaceId,
          keyword: placeName,
          yeogiyaRating,
          googleImage: imageUrl && googleImage,
        })
      );
      navigate(
        PATH.SEARCH_RESULT_DETAIL +
          `/placeId=${googlePlaceId}&keyword=${placeName}`
      );
    }

    if (type === "location" && e.currentTarget.onclick) {
      dispatch(
        createDiary({
          latitude: lat,
          longitude: lng,
          address,
          kakaoId,
          name: placeName,
        })
      );

      // !! 글작성으로 이동
    }
  };

  return (
    <Container onClick={handleClick}>
      <img
        src={
          imageUrl
            ? (type === "place" && googleImage) ||
              (type === "location" && imageUrl)
            : SearchDefaultImage
        }
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
