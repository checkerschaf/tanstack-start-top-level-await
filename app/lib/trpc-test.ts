import { auth } from "~/lib/auth";

export const createTRPCContext = async (opts: {
    headers: Headers;
    method: string;
  }) => {
    return {
      session: await auth.api.getSession({
        headers: opts.headers,
      }),
      ...opts,
    };
  };