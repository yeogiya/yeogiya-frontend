import { css } from "styled-components";

const globalStyle = css`
  button {
    border: none;
    background-color: #888;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Noto Sans KR;
  }

  html {
    font-size: 16px;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }
`;

export default globalStyle;
