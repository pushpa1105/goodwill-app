import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    "/api/webhook",
    "/api/webhooks/user",
    "/",
    "/api/uploadthing",
    "/api/webinars/:slug/subscribe",
    "/api/blogs/:id/views",
    "/blogs",
    "/blogs/:slug",
    "/products",
    "/webinars",
    "/webinars/:slug",
    "/account-opening",
    "/courses",
    "/courses/:slug",
    "/about-us",
    "/privacy-policy",
    "/terms",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
