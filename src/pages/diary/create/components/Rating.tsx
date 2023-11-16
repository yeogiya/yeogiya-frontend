import StarIcon from "@/assets/images/StarIcon";
import styled from "@emotion/styled";
import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (value: number) => {
    setRating(value);
  };

  return (
    <RatingStyle>
      <StarIcon value={1} onClick={() => handleStarClick(1)} rating={rating} />
      <StarIcon value={2} onClick={() => handleStarClick(2)} rating={rating} />
      <StarIcon value={3} onClick={() => handleStarClick(3)} rating={rating} />
      <StarIcon value={4} onClick={() => handleStarClick(4)} rating={rating} />
      <StarIcon value={5} onClick={() => handleStarClick(5)} rating={rating} />
    </RatingStyle>
  );
};

const RatingStyle = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
`;

export default Rating;
