import { betterAuth, BetterAuthOptions } from "better-auth";
import { generateAppleClientSecret } from "./async-secret-demo";

const options = {
    socialProviders: {
        apple: {
            clientId: "env.APPLE_CLIENT_ID",
            clientSecret: await generateAppleClientSecret(),
        },
    },
} satisfies BetterAuthOptions;

export const auth = betterAuth({...options});
