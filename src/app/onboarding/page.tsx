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
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      // Not logged in — they need to click the invite link in their email first
      setError("Please use the link in your invitation email to set up your account.");
      setLoading(false);
      return;
    }

    // Update password
    const { error: pwError } = await supabase.auth.updateUser({ password });
    if (pwError) {
      setError(pwError.message);
      setLoading(false);
      return;
    }

    // Update name if provided
    if (fullName) {
      await supabase.from("profiles").update({ full_name: fullName }).eq("id", user.id);
    }

    setLoading(false);
    router.push("/dashboard");
    router.refresh();
  };

  return (
    <section className="flex flex-1 items-center justify-center bg-card px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Set up your account
          </p>
        </div>

        <Card className="border-border">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gsp-navy">
              Welcome to GSP
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSetup} className="space-y-4" noValidate>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">
                  Set Password <span className="text-gsp-danger">*</span>
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  autoComplete="new-password"
                />
                <p className="text-xs text-muted-foreground">
                  Minimum 8 characters
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">
                  Confirm Password <span className="text-gsp-danger">*</span>
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  autoComplete="new-password"
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
                    Setting up...
                  </>
                ) : (
                  "Complete Setup"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-gsp-terracotta underline hover:no-underline">
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}
