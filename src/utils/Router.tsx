import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "@/App";
import DiaryListPage from "@/pages/diary/list/DiaryListPage";
import ErrorPage from "@/pages/ErrorPage";
import FindIdPage from "@/pages/find/id/FindIdPage";
import FindPwPage from "@/pages/find/pw/FindPwPage";
import GlobalStyle from "@/styles/GlobalStyle";
import JoinPage from "@/pages/join/JoinPage";
import LandingPage from "@/pages/home/LandingPage";
import LoginPage from "@/pages/login/LoginPage";
import MapPage from "@/pages/diary/map/MapPage";
import { PATH } from "./routes";
import ResetPwPage from "@/pages/reset/ResetPwPage";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme";

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <App layout="default" />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      { path: PATH.SEARCH },
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
    ],
  },
  {
    path: PATH.HOME,
    element: <App layout="diaryHeader" />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PATH.DIARY_MAP,
        element: <MapPage />,
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
