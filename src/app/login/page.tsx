import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Log in",
  description: "Secure authentication entry for GSP clients, staff, applicants, and contractors.",
  alternates: { canonical: "/login" },
  robots: { index: false },
};

export default function LoginPage() {
  return (
    <section className="flex flex-1 items-center justify-center bg-card px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Sign in to access your dashboard
          </p>
        </div>

        <Card className="border-border">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gsp-navy">
              Welcome back
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Authentication will be wired up with Supabase Auth in Phase 2 */}
            <Button
              className="w-full bg-gsp-navy hover:bg-gsp-navy/90 text-white"
              size="lg"
              disabled
            >
              <Lock className="mr-2 h-4 w-4" />
              Sign in (coming soon)
            </Button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Secure authentication
                </span>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              Don&apos;t have access?{" "}
              <Link href="/contact" className="text-gsp-terracotta underline hover:no-underline">
                Contact us
              </Link>{" "}
              to get started.
            </p>

            <div className="rounded-lg border border-border bg-background p-4 text-center">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Forgot your password or having trouble signing in?{" "}
                <Link href="/contact" className="text-gsp-terracotta underline hover:no-underline">
                  Reach out for help
                </Link>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
