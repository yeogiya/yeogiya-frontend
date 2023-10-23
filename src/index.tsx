import ReactDOM from "react-dom/client";
import Router from "./utils/Router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { worker } from "./mocks/browser.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

if (process.env.NODE_ENV === "development") {
  worker.start({
    onUnhandledRequest: "bypass",
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    {/* <React.StrictMode> */}
    <Router />
    <ReactQueryDevtools initialIsOpen={false} />
    {/* </React.StrictMode> */}
  </QueryClientProvider>
);
