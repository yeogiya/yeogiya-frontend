import "@testing-library/jest-dom";

import { handlers } from "./src/mocks/handlers";
import { setupServer } from "msw/node";

export const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
