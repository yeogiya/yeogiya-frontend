import HeadingText from "@/components/@common/HeadingText";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

const ContentHeading = styled(HeadingText)`
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  color: ${theme.color.black89};
  line-height: normal;
  letter-spacing: -0.09rem;
`;

export default ContentHeading;
