import { ArrowLeftIcon, WhiteImage } from "@/assets";
import { useEffect, useState } from "react";

import IconButton from "@/components/IconButton";
import Image from "@/components/@common/Image";
import styled from "@emotion/styled";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [carouselImages, setCarouselImages] = useState<string[]>([...images]);
  const [imageIdx, setImageIdx] = useState<number>(0);

  const getDisplayedImages = (): string[] => {
    if (carouselImages.length < 5) {
      const adjustedImages = [
        WhiteImage,
        ...carouselImages,
        ...Array(4 - images.length).fill(WhiteImage),
      ];
      return adjustedImages;
    }
    return Array.from({ length: 5 }, (_, i) => {
      const index = (imageIdx + i) % images.length;
      return images[index] || "";
    });
  };

  const handlePrev = (): void => {
    if (images.length < 5) return;
    setImageIdx((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = (): void => {
    if (images.length < 5) return;
    setImageIdx((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    setCarouselImages(getDisplayedImages());
  }, [imageIdx, images]);

  return (
    <StyledCarousel>
      <ImageWrapper>
        {carouselImages.map((image, index) => (
          <Image
            key={index}
            url={image}
            blackFilter={index === 0 || index === 4}
          />
        ))}
      </ImageWrapper>
      <ButtonWrapper>
        <StyledIconBtn
          type="button"
          icon={<ArrowLeftIcon />}
          onClick={handlePrev}
        />
        <StyledIconBtn
          type="button"
          icon={<ArrowLeftIcon />}
          css={{ transform: "rotate(180deg)" }}
          onClick={handleNext}
        />
      </ButtonWrapper>
    </StyledCarousel>
  );
};

export default Carousel;

const StyledCarousel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  overflow: hidden;

  img {
    width: 18rem;
    height: 18rem;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 61.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 58.0625rem;
  z-index: 2;

  button {
    height: 3.75rem;
  }
`;

const StyledIconBtn = styled(IconButton)`
  padding: 0;
  margin-top: 0;
`;
