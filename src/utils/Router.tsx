import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PATH } from "./routes";
import App from "@/App";
import theme from "@/styles/theme";
import ErrorPage from "@/pages/ErrorPage";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import GlobalStyle from "@/components/@common/GlobalStyle";

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: PATH.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
]);

const Router = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    <GlobalStyle />
  </ThemeProvider>
);

export default Router;
