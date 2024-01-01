import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Router from "./utils/Router.tsx";
import { createRoot } from "react-dom/client";
import { store } from "./store/store.ts";
import { worker } from "./mocks/browser.ts";
import { TokenProvider } from "./contexts/TokenProvider.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 1000,
    },
  },
});

if (process.env.NODE_ENV === "development") {
  worker.start({
    onUnhandledRequest: "bypass",
  });
}
const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <TokenProvider>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </TokenProvider>
);
