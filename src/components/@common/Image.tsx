import { CSSObject } from "@emotion/react";
import styled from "@emotion/styled";

type ImageProps = {
  url: string;
  alt?: string;
  blackFilter?: boolean;
  css?: CSSObject;
};

const Image = ({
  url = "https://dummyimage.com/288x288/614ad3/ffffff",
  alt = "image",
  ...props
}: ImageProps) => {
  return <StyledImg src={url} alt={alt} {...props} />;
};

const StyledImg = styled.img<Pick<ImageProps, "blackFilter">>`
  filter: ${({ blackFilter }) => blackFilter && "brightness(50%)"};
`;

export default Image;
