"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";
import { createClient } from "@/lib/supabase/client";
import { Loader2, AlertCircle } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";
  const errorMessage = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(
    errorMessage === "no_membership"
      ? "Your account has no active memberships. Please contact your administrator."
      : null,
  );
  const [resetSent, setResetSent] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
      return;
    }

    router.push(redirect);
    router.refresh();
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError("Enter your email first, then click reset password.");
      return;
    }
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/onboarding`,
    });
    setLoading(false);
    if (error) {
      setError("Could not send reset email. Please try again.");
    } else {
      setResetSent(true);
    }
  };

  return (
    <Card className="border-border">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-gsp-navy">
          Welcome back
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {resetSent ? (
          <div className="rounded-lg border border-gsp-success/30 bg-gsp-success/5 p-4 text-center">
            <p className="text-sm text-muted-foreground">
              If an account exists for <strong>{email}</strong>, a password
              reset link has been sent.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setResetSent(false)}
            >
              Back to login
            </Button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4" noValidate>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            {error && (
              <p
                className="text-sm text-gsp-danger flex items-center gap-2"
                role="alert"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gsp-navy text-white hover:bg-gsp-navy/90"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>

            <button
              type="button"
              onClick={handleResetPassword}
              disabled={loading}
              className="w-full text-center text-sm text-muted-foreground hover:text-gsp-terracotta transition-colors"
            >
              Forgot password?
            </button>
          </form>
        )}

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Invite-only access
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
      </CardContent>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <section className="flex flex-1 items-center justify-center bg-card px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Sign in to access your dashboard
          </p>
        </div>

        <Suspense fallback={
          <Card className="border-border">
            <CardContent className="p-8 text-center">
              <Loader2 className="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
            </CardContent>
          </Card>
        }>
          <LoginForm />
        </Suspense>
      </div>
    </section>
  );
}
