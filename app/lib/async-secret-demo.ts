export async function generateAppleClientSecret() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return "env.APPLE_CLIENT_SECRET";
}