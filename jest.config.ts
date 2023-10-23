import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./jest.setup.ts"],
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    testMatch: ["**/test/**/*.test.(jsx|tsx)"],
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
  };
};
