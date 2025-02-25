import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/signin" || path === "/signup";
  const token = request.cookies.get("accessToken");
  // console.log(token);
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/signin", "/signup", "/dashboard"],
};
