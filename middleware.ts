import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = [
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
];

export default withClerkMiddleware((req: NextRequest) => {
  console.log(req.nextUrl.pathname);
  return NextResponse.next();
});

export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};

