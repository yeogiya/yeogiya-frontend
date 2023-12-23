import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface HeadingTextProps {
  as: string;
}

const HeadingText = styled.h1<HeadingTextProps>`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 1.75rem;
      font-weight: 500;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1.125rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 0.875rem;
      font-weight: 500;
    `}

  line-height: 1.4;
`;

export default HeadingText;
