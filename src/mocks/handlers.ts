import { rest } from "msw";

interface JoinReqBody {
  id: string;
  password: string;
  nickname: string;
  email: string;
  loginType: string;
}

export const handlers = [
  rest.get("/mock/members/email-exists", async (req, res, ctx) => {
    const data = await ctx.fetch(req);

    return res(
      ctx.json({
        ...data,
        status: "OK",
        body: {
          duplicated: true,
        },
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
