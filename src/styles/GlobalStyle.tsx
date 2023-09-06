import { Global, css } from "@emotion/react";

import theme from "./theme";

const global = () => css`
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
    font-family: ${theme.font.body};
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

const GlobalStyle = () => {
  return <Global styles={global} />;
};

export default GlobalStyle;
