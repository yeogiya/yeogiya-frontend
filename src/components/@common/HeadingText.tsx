import styled, { css } from "styled-components";

interface HeadingTextProps {
  as: string;
}

const HeadingText = styled.h1<HeadingTextProps>`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 1.25rem;
      font-weight: 500;
    `}

  /* ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 0.8rem;
      font-weight: 500;
    `}
    
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 0.6rem;
      font-weight: 600;
      text-align: center;
    `} */

  line-height: 1.4;
`;

export default HeadingText;
