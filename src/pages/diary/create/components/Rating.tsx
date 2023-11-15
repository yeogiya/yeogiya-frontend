import StarIcon from "@/assets/images/StarIcon";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useState } from "react";

const Rating = () => {
  return (
    <RatingStyle>
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </RatingStyle>
  );
};

const RatingStyle = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
`;

export default Rating;
