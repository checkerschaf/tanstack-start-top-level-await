export async function generateAppleClientSecret() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return "env.APPLE_CLIENT_SECRET";
}