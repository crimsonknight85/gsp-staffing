"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
  Lock,
  Check,
  Eye,
  EyeOff,
} from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError(null);

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setError(
        "Your session has expired. Please use the link from your email again.",
      );
      setLoading(false);
      return;
    }

    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return;
    }

    // Success — go to dashboard
    router.refresh();
    router.push("/dashboard");
  };

  // Password strength indicators
  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return (
    <section className="flex flex-1 items-center justify-center bg-card px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">Set your password</p>
        </div>

        <Card className="border-border">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gsp-navy">
              Welcome to GSP
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="space-y-2">
                <Label htmlFor="password">
                  New Password{" "}
                  <span className="text-gsp-danger" aria-hidden="true">
                    *
                  </span>
                </Label>
                <div className="relative">
                  <Lock
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError(null);
                    }}
                    required
                    minLength={8}
                    autoComplete="new-password"
                    className="pl-9 pr-9"
                    aria-describedby="password-requirements"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gsp-navy"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <ul
                  id="password-requirements"
                  className="mt-2 space-y-1"
                  role="list"
                >
                  <li
                    className={`flex items-center gap-1.5 text-xs ${
                      hasLength ? "text-gsp-success" : "text-muted-foreground"
                    }`}
                  >
                    <Check className="h-3 w-3" aria-hidden="true" />
                    At least 8 characters
                  </li>
                  <li
                    className={`flex items-center gap-1.5 text-xs ${
                      hasUpper ? "text-gsp-success" : "text-muted-foreground"
                    }`}
                  >
                    <Check className="h-3 w-3" aria-hidden="true" />
                    Uppercase letter
                  </li>
                  <li
                    className={`flex items-center gap-1.5 text-xs ${
                      hasNumber ? "text-gsp-success" : "text-muted-foreground"
                    }`}
                  >
                    <Check className="h-3 w-3" aria-hidden="true" />
                    Number
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">
                  Confirm Password{" "}
                  <span className="text-gsp-danger" aria-hidden="true">
                    *
                  </span>
                </Label>
                <div className="relative">
                  <Lock
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <Input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (error) setError(null);
                    }}
                    required
                    autoComplete="new-password"
                    className="pl-9"
                    aria-invalid={!!error}
                    aria-describedby={error ? "onboarding-error" : undefined}
                  />
                </div>
              </div>

              {error && (
                <p
                  id="onboarding-error"
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
                    <Loader2
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                    Setting password...
                  </>
                ) : (
                  "Complete setup"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-gsp-terracotta underline hover:no-underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}
