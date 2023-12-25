const color = {
  white: "#FFFFFF",
  white5: "#F9F9F9",
  white7: "#f7f7f7",
  white10: "#f1f2f3",
  white15: "#fafafa",
  black10: "#DBDBDB",
  black20: "#DDD",
  black30: "#D9D9D9",
  black35: "#cccccc",
  black40: "#B8B5C9",
  black50: "#747474",
  black70: "#868686",
  black80: "#999999",
  black89: "#191919",
  black90: "#111111",
  black: "#000000",
  blue: "#1736D9",
  red: "#D93F2E",
  red10: "#B80808",
  purple: "#614AD3",
  purple10: "#c56cd6",
  navy: "#3425af",
  yellow: "#FEE500",
} as const;

const font = {
  body: '"Noto Sans KR", system-ui, -apple-system, BlinkMacSystemFont, "Open Sans", "Helvetica Neue", sans-serif',
  number: "'Inter', sans-serif",
} as const;

const theme = { color, font };

export default theme;
