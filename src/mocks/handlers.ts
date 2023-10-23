import { rest } from "msw";

interface JoinReqBody {
  id: string;
  password: string;
  nickname: string;
  email: string;
  loginType: string;
}

export const handlers = [
  rest.get("/mock/check-email", async (req, res, ctx) => {
    const data = await ctx.fetch(req);
    const email = req.url.searchParams.get("email");

    if (email === "aaa@gmail.com") {
      return res(
        ctx.json({
          ...data,
          msw: true,
          status: "OK",
          body: {
            duplicated: true,
          },
        })
      );
    }
    {
      return res(
        ctx.json({
          ...data,
          msw: true,
          status: "OK",
          body: {
            duplicated: false,
          },
        })
      );
    }
  }),

  rest.post<JoinReqBody>("/mock/members/sign-up", async (req, res, ctx) => {
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

  rest.post<JoinReqBody>("/mock/members/sign-up", async (req, res, ctx) => {
    const { id, password, nickname, email, loginType } = req.body;

    return res(
      ctx.status(200),
      ctx.json({
        id: id,
        password: password,
        nickname: nickname,
        email: email,
        loginType: loginType,
      })
    );
  }),

  rest.get("/mock/search", async (req, res, ctx) => {
    const query = req.url.searchParams.get("query");

    const results = { data: [`Result for ${query}`] };
    return res(ctx.status(200), ctx.json(results));
  }),
];
