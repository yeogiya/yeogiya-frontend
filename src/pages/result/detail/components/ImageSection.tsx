import Carousel from "./Carousel";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

interface ImageSectionProps {
  images: string[];
}

const ImageSection = ({ images }: ImageSectionProps) => {
  return (
    <Layout>
      <ImageWrapper>
        {images ? (
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
