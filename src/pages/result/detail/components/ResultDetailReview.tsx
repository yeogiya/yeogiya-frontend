import HeadingText from "@/components/@common/HeadingText";
import Layout from "@/components/@common/Layout";
import styled from "@emotion/styled";
import DiaryReview from "./DiaryReview";
import { DIARY_REVIEW } from "@/constants/diary";

interface ResultDetailReviewProps {
  review?: object[];
}

const ResultDetailReview = ({ review }: ResultDetailReviewProps) => {
  return (
    <Container paddingTop="6.25rem">
      <HeadingText
        as="h2"
        css={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}
      >
        일기 리뷰
      </HeadingText>
      {review.map((review, _) => (
        <DiaryReview key={_} review={review} />
      ))}
    </Container>
  );
};

const Container = styled(Layout)`
  width: 100%;
`;

export default ResultDetailReview;
