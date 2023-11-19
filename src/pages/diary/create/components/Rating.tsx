import StarIcon from "@/assets/images/StarIcon";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useState } from "react";

const Rating = () => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleClickStar = (index: number) => {
    let clickedStar = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickedStar[i] = i <= index ? true : false;
    }
    setClicked(clickedStar);
  };

  const STARS = [0, 1, 2, 3, 4];

  return (
    <Stars>
      {STARS.map((star, idx) => {
        return (
          <StarIcon
            key={idx}
            onClick={() => handleClickStar(star)}
            className={clicked[star] && "fillStar"}
          />
        );
      })}
    </Stars>
  );
};

const Stars = styled.div`
  display: inline-block;
  max-width: fit-content;
  margin-bottom: 16px;

  svg {
    fill: ${theme.color.black30};
    cursor: pointer;
    padding-right: 4px;
  }

  :hover svg {
    fill: ${theme.color.purple};
  }

  svg:hover ~ svg {
    fill: ${theme.color.black30};
  }

  .fillStar {
    fill: ${theme.color.purple};
  }
`;

export default Rating;
