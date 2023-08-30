import theme from "../src/styles/theme";
import { ThemeProvider } from "styled-components";
import type { Preview } from "@storybook/react";
import React from "react";
import GlobalStyle from "../src/components/@common/GlobalStyle";

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
