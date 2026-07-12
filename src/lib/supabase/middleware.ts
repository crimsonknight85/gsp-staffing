import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  // Public routes that don't require auth
  const publicRoutes = [
    "/",
    "/services",
    "/how-it-works",
    "/for-clients",
    "/for-applicants",
    "/for-contractors",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  const isPublicRoute = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
  const isLoginPage = pathname === "/login";
  const isProtectedRoute =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/hr") ||
    pathname.startsWith("/client") ||
    pathname.startsWith("/applicant") ||
    pathname.startsWith("/contractor") ||
    pathname.startsWith("/finance") ||
    pathname.startsWith("/onboarding");

  // Redirect unauthenticated users to login from protected routes
  if (!user && isProtectedRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  // Redirect authenticated users away from login
  if (user && isLoginPage) {
    // We'll redirect to their dashboard after we know their role.
    // For now, send to a router page that handles role-based redirect.
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    url.searchParams.delete("redirect");
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
