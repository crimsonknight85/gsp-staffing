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
import {
  Loader2,
  AlertCircle,
  CheckCircle2,
  Mail,
  Lock,
  ArrowLeft,
} from "lucide-react";

type Mode = "signin" | "forgot" | "reset";

/* ─────────────────────── Error helpers ─────────────────────── */

const CALLBACK_ERRORS: Record<string, string> = {
  auth_callback: "The sign-in link was invalid or expired. Please try again.",
  callback_failed: "Authentication failed. Please try signing in again.",
  no_role:
    "Your account is not assigned to any organization yet. Please contact your administrator.",
};

/* ─────────────────────── Sign In Form ─────────────────────── */

function SignInForm({
  onForgotPassword,
  initialError,
}: {
  onForgotPassword: (email: string) => void;
  initialError?: string | null;
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(
    initialError ? CALLBACK_ERRORS[initialError] ?? initialError : null,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);
    setError(null);

    // Race the Supabase call against a timeout so the form can't hang forever
    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("TIMEOUT")), 15000),
    );

    try {
      // createClient() can throw if env vars are missing/misconfigured
      const supabase = createClient();

      const { error: signInError } = (await Promise.race([
        supabase.auth.signInWithPassword({ email, password }),
        timeout,
      ])) as Awaited<ReturnType<typeof supabase.auth.signInWithPassword>>;

      if (signInError) {
        setError("Invalid email or password. Please try again.");
        setLoading(false);
        return;
      }

      // Success — router.refresh() picks up the new cookie from middleware
      router.refresh();
      router.push("/dashboard");
    } catch (err: unknown) {
      const msg =
        err instanceof Error && err.message === "TIMEOUT"
          ? "The request timed out. Please check your connection and try again."
          : "Unable to connect to the authentication service. Please try again later.";
      setError(msg);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            required
            autoComplete="email"
            className="pl-9"
            aria-describedby={error ? "signin-error" : undefined}
            aria-invalid={!!error}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(null);
            }}
            required
            autoComplete="current-password"
            className="pl-9"
            aria-describedby={error ? "signin-error" : undefined}
            aria-invalid={!!error}
          />
        </div>
      </div>

      {error && (
        <p
          id="signin-error"
          className="text-sm text-gsp-danger flex items-center gap-2"
          role="alert"
        >
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
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
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Signing in...
          </>
        ) : (
          "Sign in"
        )}
      </Button>

      <button
        type="button"
        onClick={() => onForgotPassword(email)}
        disabled={loading}
        className="w-full text-center text-sm text-muted-foreground hover:text-gsp-terracotta transition-colors"
      >
        Forgot password?
      </button>
    </form>
  );
}

/* ──────────────────── Forgot Password Form ──────────────────── */

function ForgotPasswordForm({
  initialEmail,
  onBack,
}: {
  initialEmail: string;
  onBack: () => void;
}) {
  const [email, setEmail] = useState(initialEmail);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo: `${window.location.origin}/auth/callback?next=/onboarding`,
      },
    );

    setLoading(false);

    // Always show success message to prevent account enumeration
    setSent(true);
    // If there was a real error, we still show success (Supabase behavior)
    void resetError;
  };

  if (sent) {
    return (
      <div className="rounded-lg border border-gsp-success/30 bg-gsp-success/5 p-6 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gsp-success/10">
          <CheckCircle2
            className="h-6 w-6 text-gsp-success"
            aria-hidden="true"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          If an account exists for <strong>{email}</strong>, a password reset
          link has been sent. Check your inbox and follow the link to set a new
          password.
        </p>
        <Button variant="outline" className="mt-6" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to sign in
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="space-y-2">
        <Label htmlFor="reset-email">Email</Label>
        <div className="relative">
          <Mail
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="reset-email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            required
            autoComplete="email"
            className="pl-9"
            aria-describedby={error ? "reset-error" : undefined}
            aria-invalid={!!error}
          />
        </div>
      </div>

      {error && (
        <p
          id="reset-error"
          className="text-sm text-gsp-danger flex items-center gap-2"
          role="alert"
        >
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
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
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Sending reset link...
          </>
        ) : (
          "Send reset link"
        )}
      </Button>

      <button
        type="button"
        onClick={onBack}
        className="w-full text-center text-sm text-muted-foreground hover:text-gsp-terracotta transition-colors"
      >
        Back to sign in
      </button>
    </form>
  );
}

/* ─────────────────────── Login Page ─────────────────────── */

function LoginContent() {
  const searchParams = useSearchParams();
  const errorParam = searchParams.get("error");
  const initialMode: Mode =
    searchParams.get("mode") === "forgot" ? "forgot" : "signin";

  const [mode, setMode] = useState<Mode>(initialMode);
  const [prefillEmail, setPrefillEmail] = useState("");

  return (
    <>
      {errorParam === "no_role" && (
        <div
          className="mb-4 rounded-lg border border-gsp-warning/30 bg-gsp-warning/5 p-4"
          role="alert"
        >
          <div className="flex items-start gap-3">
            <AlertCircle
              className="mt-0.5 h-5 w-5 shrink-0 text-gsp-warning"
              aria-hidden="true"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gsp-navy">
                Account setup incomplete
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {CALLBACK_ERRORS.no_role}
              </p>
              <button
                type="button"
                onClick={async () => {
                  const supabase = createClient();
                  await supabase.auth.signOut();
                  window.location.href = "/login";
                }}
                className="mt-3 text-sm text-gsp-terracotta underline hover:no-underline"
              >
                Sign out and try a different account
              </button>
            </div>
          </div>
        </div>
      )}

      <Card className="border-border">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold text-gsp-navy">
            {mode === "signin" && "Welcome back"}
            {mode === "forgot" && "Reset your password"}
          </CardTitle>
        </CardHeader>
      <CardContent className="space-y-4">
        {mode === "signin" && (
          <SignInForm
            initialError={errorParam}
            onForgotPassword={(email) => {
              setPrefillEmail(email);
              setMode("forgot");
            }}
          />
        )}

        {mode === "forgot" && (
          <ForgotPasswordForm
            initialEmail={prefillEmail}
            onBack={() => setMode("signin")}
          />
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
          <Link
            href="/contact"
            className="text-gsp-terracotta underline hover:no-underline"
          >
            Contact us
          </Link>{" "}
          to get started.
        </p>
      </CardContent>
      </Card>
    </>
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

        <Suspense
          fallback={
            <Card className="border-border">
              <CardContent className="p-8 text-center">
                <Loader2
                  className="mx-auto h-6 w-6 animate-spin text-muted-foreground"
                  aria-hidden="true"
                />
              </CardContent>
            </Card>
          }
        >
          <LoginContent />
        </Suspense>
      </div>
    </section>
  );
}
