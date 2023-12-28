import { rest } from "msw";
import { MOCK } from "./mocksUrl";
import { SearchBarProps } from "@/components/SearchBar";
import { JoinProps } from "@/pages/join/JoinPage";
import { DIARY_REVIEW } from "@/constants/diary";

interface JoinReqBody {
  id: string;
  password: string;
  nickname: string;
  email: string;
  loginType: string;
}

export const handlers = [
  rest.get<Pick<JoinReqBody, "email">>(
    `${MOCK.CHECK_EMAIL}`,
    async (req, res, ctx) => {
      const email = new URL(req.url).searchParams.get("email");

      if (email === "aaa@gmail.com") {
        return res(
          ctx.json({
            msw: true,
            status: "OK",
            body: {
              duplicated: true,
            },
          })
        );
      }

      return res(
        ctx.json({
          msw: true,
          status: "OK",
          body: {
            duplicated: false,
          },
        })
      );
    }
  ),

  rest.get<Pick<JoinReqBody, "id">>(
    `${MOCK.CHECK_ID}`,
    async (req, res, ctx) => {
      const id = new URL(req.url).searchParams.get("id");

      if (id === "aaa") {
        return res(
          ctx.status(200),
          ctx.json({
            msw: true,
            status: "OK",
            body: {
              duplicated: true,
            },
          })
        );
      }

      return res(
        ctx.json({
          msw: true,
          status: "OK",
          body: {
            duplicated: false,
          },
        })
      );
    }
  ),

  rest.get<Pick<JoinReqBody, "nickname">>(
    `${MOCK.CHECK_NICKNAME}`,
    async (req, res, ctx) => {
      const nickname = new URL(req.url).searchParams.get("nickname");

      if (nickname === "닉네임") {
        return res(
          ctx.status(200),
          ctx.json({
            msw: true,
            status: "OK",
            body: {
              duplicated: true,
            },
          })
        );
      }

      return res(
        ctx.json({
          msw: true,
          status: "OK",
          body: {
            duplicated: false,
          },
        })
      );
    }
  ),

  rest.post<JoinReqBody>(`${MOCK.SIGN_UP}`, async (req, res, ctx) => {
    const { id, password, nickname, email, loginType } = req.body;

    return res(
      ctx.status(200),
      ctx.json({
        msw: true,
        id: id,
        password: password,
        nickname: nickname,
        email: email,
        loginType: loginType,
      })
    );
  }),

  rest.post<Partial<JoinProps>>(`${MOCK.LOGIN}`, async (req, res, ctx) => {
    const { id, password } = await req.json();

    return res(
      ctx.status(200),
      ctx.json({
        loginRequest: {
          id: id,
          password: password,
        },
        jwt: "example_token",
      })
    );
  }),

  rest.get<SearchBarProps>(`${MOCK.SEARCH}`, async (req, res, ctx) => {
    const query = req.url.searchParams.get("query");

    const results = { data: [`Result for ${query}`] };
    return res(ctx.status(200), ctx.json(results));
  }),

  rest.get(`${MOCK.RESTAURANT}`, async (req, res, ctx) => {
    return res(
      ctx.json({
        placeName: "mockAPI - PlaceName",
        rating: 0,
        restaurantType: "mockAPI - restaurantType",
        diaryReview: DIARY_REVIEW,
      })
    );
  }),
];
