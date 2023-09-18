/** @jsxImportSource @emotion/react */
import theme from "../src/styles/theme";
import { ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react";
import React from "react";
import GlobalStyle from "../src/styles/GlobalStyle";

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: (a, b) =>
        a.title === b.title
          ? 0
          : a.title.localeCompare(b.title, undefined, { alphabetical: true }),
    },
    docs: {
      autodocs: true,
      defaultName: "Documentation",
    },
    parameters: {
      controls: { expanded: true },
      design: {
        type: "figma",
        url: "https://www.figma.com/file/PQ1U2oWvoMpTTX1oosDut0/%5B%EA%B8%B0%ED%9A%8D%5D-%EC%97%AC%EA%B8%B0%EC%95%BC?type=design&node-id=295%3A3391&mode=design&t=L9HCvoYCH0snfjh3-1",
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
