import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Router from "./utils/Router.tsx";
import { createRoot } from "react-dom/client";
import { worker } from "./mocks/browser.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

if (process.env.NODE_ENV === "development") {
  worker.start({
    onUnhandledRequest: "bypass",
  });
}
const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <QueryClientProvider client={queryClient}>
    <Router />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
