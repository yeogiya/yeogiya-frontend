import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";
import FindIdPage from "@/pages/FindIdPage";
import FindPwPage from "@/pages/FindPwPage";
import GlobalStyle from "@/styles/GlobalStyle";
import JoinPage from "@/pages/JoinPage";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import { PATH } from "./routes";
import ResetPwPage from "@/pages/ResetPwPage";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme";
import DiaryListPage from "@/pages/DiaryListPage";
import DiaryWrite from "@/pages/DiaryWrite";

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
      {
        path: PATH.JOIN,
        element: <JoinPage />,
      },
      {
        path: PATH.FIND_ID,
        element: <FindIdPage />,
      },
      {
        path: PATH.FIND_ID,
        element: <FindIdPage />,
      },
      {
        path: PATH.FIND_PW,
        element: <FindPwPage />,
      },
      {
        path: PATH.RESET_PASSWORD,
        element: <ResetPwPage />,
      },
      {
        path: PATH.DIARY_LIST,
        element: <DiaryListPage />,
      },
      {
        path: PATH.DIARY_WRITE,
        element: <DiaryWrite />,
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
