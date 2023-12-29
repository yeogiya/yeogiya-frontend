import { Global, css } from "@emotion/react";

import theme from "./theme";

const global = () => css`
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

  body {
    overflow-y: scroll;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }

  button {
    border: none;
  }

  a {
    text-decoration: none;
  }

  :root {
    --max-width: 60rem;
  }
`;

const GlobalStyle = () => {
  return <Global styles={global} />;
};

export default GlobalStyle;
