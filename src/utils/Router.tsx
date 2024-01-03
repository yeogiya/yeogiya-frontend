import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "@/App";
import DiaryCreatePage from "@/pages/diary/create/DiaryCreatePage";
import DiaryListPage from "@/pages/diary/list/DiaryListPage";
import FindIdPage from "@/pages/find/id/FindIdPage";
import FindPwPage from "@/pages/find/pw/FindPwPage";
import GlobalStyle from "@/styles/GlobalStyle";
import JoinPage from "@/pages/join/JoinPage";
import LandingPage from "@/pages/home/LandingPage";
import LoginPage from "@/pages/login/LoginPage";
import MapPage from "@/pages/diary/map/MapPage";
import MapSearchPage from "@/pages/diary/map/search/MapSearchPage";
import MyPage from "@/pages/my/MyPage";
import MyPassword from "@/pages/my/password/MyPwPage";
import { PATH } from "./routes";
import ResetPwPage from "@/pages/reset/ResetPwPage";
import RestaurantDetailPage from "@/pages/result/detail/RestaurantDetailPage";
import ResultListPage from "@/pages/result/list/ResultListPage";
import SearchPage from "@/pages/search/SearchPage";
import { ThemeProvider } from "@emotion/react";
import UpdateMyPwPage from "@/pages/my/password/UpdateMyPwPage";
import WithdrawalPage from "@/pages/my/withdrawal/WithdrawalPage";
import theme from "@/styles/theme";
import ConfirmWithdrawalPage from "@/pages/my/withdrawal/ConfirmWithdrawalPage";
import ScrollToTop from "@/components/@common/ScrollToTop";
import SNSLogin from "@/pages/login/components/SNSLogin";
import NotFoundPage from "@/pages/404/NotFoundPage";
import DiaryDetailPage from "@/pages/diary/detail/DiaryDetailPage";

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <App layout="default" />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: PATH.NOT_FOUND,
        element: <NotFoundPage />,
      },
      { path: PATH.SEARCH, element: <SearchPage /> },
      {
        path: PATH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PATH.SNS_LOGIN,
        element: <SNSLogin />,
      },
      {
        path: PATH.JOIN,
        element: (
          <>
            <ScrollToTop />
            <JoinPage />
          </>
        ),
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
        path: PATH.DIARY_LIST,
        element: <DiaryListPage />,
      },
      {
        path: PATH.RESET_PASSWORD,
        element: <ResetPwPage />,
      },
    ],
  },
  {
    element: <App layout="login" />,
    children: [
      {
        path: PATH.DIARY_CREATE_DATE,
        element: <DiaryCreatePage />,
      },
      {
        path: PATH.DIARY_DETAIL,
        element: <DiaryDetailPage />,
      },
      {
        path: PATH.MY,
        element: <MyPage />,
      },
      {
        path: PATH.MY_PASSWORD,
        element: <MyPassword />,
      },
      {
        path: PATH.MY_PASSWORD_UPDATE,
        element: <UpdateMyPwPage />,
      },
      {
        path: PATH.MY_WITHDRAWAL,
        element: <WithdrawalPage />,
      },
      {
        path: PATH.CONFIRM_MY_WITHDRAWAL,
        element: <ConfirmWithdrawalPage />,
      },
    ],
  },
  {
    path: PATH.DIARY_CREATE_MAP,
    element: <App layout="diaryMap" />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <MapPage />,
      },
    ],
  },
  {
    path: PATH.DIARY_MAP_SEARCH,
    element: <App layout="locationSearch" />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <MapSearchPage />,
      },
    ],
  },
  {
    path: PATH.SEARCH_RESULT_DETAIL,
    element: <App layout="placeSearch" />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: PATH.RESULT_LIST,
        element: <ResultListPage />,
      },
      {
        path: PATH.RESULT_DETAIL,
        element: <RestaurantDetailPage />,
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
