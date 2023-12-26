import { profileIconPath } from "@/assets";
import StarIcon from "@/assets/images/StarIcon";
import theme from "@/styles/theme";
import styled from "@emotion/styled";

interface DiaryReviewProps {
  review?: {
    profileUrl?: string;
    nickname?: string;
    rating?: string | number;
    content?: string;
    images?: string[];
    date?: string;
  };
}

const DiaryReview = ({ review }: DiaryReviewProps) => {
  const { profileUrl, nickname, rating, content, images, date } = review;

  console.log(review);
  const displayRating = Array.from(
    { length: Number(rating) },
    (_, index) => index + 1
  );

  return (
    <Container>
      <StyledLayout columnGap="0.5rem" maxWidth="11.5rem">
        <StyledProfileImage
          src={profileUrl ?? profileIconPath}
          alt="ProfileImage"
        />
        <StyledLayout column maxWidth="8.3125rem">
          {nickname}
          <StyledLayout>
            {displayRating.map((star) => (
              <StyledIcon key={star} />
            ))}
          </StyledLayout>
        </StyledLayout>
      </StyledLayout>
      <StyledLayout column maxWidth="44.1875rem" rowGap="1.25rem">
        <StyledText>{content}</StyledText>
        {images.length !== 0 && (
          <StyledLayout columnGap="0.5rem">
            {images.map((img, _) => (
              <StyledReviewImg key={_} src={img} />
            ))}
          </StyledLayout>
        )}
        <StyledText color={theme.color.black50}>{date}</StyledText>
      </StyledLayout>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid ${theme.color.black35};
  border-width: 1px 0;
  padding: 1.875rem 1.25rem;
  display: flex;
  column-gap: 1.25rem;

  + div {
    border-top: none;
  }
`;

const StyledLayout = styled.div<{
  column?: boolean;
  maxWidth?: string;
  columnGap?: string;
  rowGap?: string;
}>`
  display: flex;
  flex-direction: ${({ column }) => column && "column"};
  column-gap: ${({ columnGap }) => columnGap && columnGap};
  row-gap: ${({ rowGap }) => rowGap && rowGap};
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
`;

const StyledProfileImage = styled.img`
  width: 2.75rem;
  height: 2.75rem;
`;

const StyledIcon = styled(StarIcon)`
  width: 1.125rem;
  height: 1.125rem;
  fill: ${theme.color.purple};
`;

const StyledText = styled.p<{ color?: string }>`
  color: ${({ color }) => color ?? theme.color.black89};
  font-size: 0.875rem;
`;

const StyledReviewImg = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 0.5rem;
`;

export default DiaryReview;
