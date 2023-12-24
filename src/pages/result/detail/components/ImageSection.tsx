import { useEffect, useState } from "react";

import Carousel from "./Carousel";
import Image from "@/components/@common/Image";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

const ImageSection = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // TODO getImageAPI
    const getImage = [
      "https://dummyimage.com/288x288/614ad3/614ad3",
      "https://dummyimage.com/288x288/000000/000000",
    ];
    setImages(getImage);
  }, []);

  return (
    <Layout>
      <ImageWrapper>
        {images.length > 0 ? (
          <Carousel images={images} />
        ) : (
          <DefaultImage>등록한 사진이 없습니다.</DefaultImage>
        )}
      </ImageWrapper>
    </Layout>
  );
};

const Layout = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 18rem;
  display: flex;
  justify-content: center;
`;

const DefaultImage = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: ${theme.color.white};
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ImageSection;
