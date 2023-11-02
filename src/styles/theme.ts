const color = {
  white: "#FFFFFF",
  white10: "#f1f2f3",
  black30: "#D9D9D9",
  black40: "#B8B5C9",
  black50: "#747474",
  black70: "#868686",
  black89: "#191919",
  black90: "#111111",
  black: "#000000",
  blue: "#1736D9",
  red: "#D93F2E",
  red10: "#B80808",
  purple: "#614AD3",
} as const;

const font = {
  body: '"Noto Sans KR", system-ui, -apple-system, BlinkMacSystemFont, "Open Sans", "Helvetica Neue", sans-serif',
} as const;

const theme = { color, font };

export default theme;
