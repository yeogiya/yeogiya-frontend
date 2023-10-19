import { rest } from "msw";

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
];
