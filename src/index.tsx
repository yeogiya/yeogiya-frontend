import ReactDOM from "react-dom/client";
import Router from "./utils/Router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { worker } from "./mocks/browser.ts";

const queryClient = new QueryClient();

if (process.env.NODE_ENV === "development") {
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </QueryClientProvider>
);
