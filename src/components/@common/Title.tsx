import HeadingText from "./HeadingText";
import styled from "@emotion/styled";

const Title = styled(HeadingText)`
  display: flex;
  justify-content: center;

  ${({ css }) => css}
`;

export default Title;
