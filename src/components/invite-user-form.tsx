"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, AlertCircle, CheckCircle2, UserPlus } from "lucide-react";

const ROLES = [
  { value: "admin", label: "Admin" },
  { value: "hr", label: "HR / Recruiter" },
  { value: "client", label: "Client" },
  { value: "applicant", label: "Applicant" },
  { value: "contractor", label: "Contractor" },
  { value: "finance", label: "Finance" },
];

export function InviteUserForm({
  organizations,
}: {
  organizations: { id: string; name: string }[];
}) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [orgId, setOrgId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/admin/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, fullName, role, organizationId: orgId }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to send invitation.");
      } else {
        setSuccess(`Invitation sent to ${email}.`);
        setEmail("");
        setFullName("");
        setRole("");
        setOrgId("");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Card className="border-gsp-success/30 bg-gsp-success/5">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <CheckCircle2
              className="h-6 w-6 shrink-0 text-gsp-success"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-gsp-navy">{success}</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSuccess(null)}
              >
                Invite another
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gsp-navy">
          <UserPlus className="h-5 w-5" aria-hidden="true" />
          Invite Team Member
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jane Smith"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-gsp-danger">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="role">
                Role <span className="text-gsp-danger">*</span>
              </Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  {ROLES.map((r) => (
                    <SelectItem key={r.value} value={r.value}>
                      {r.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="org">
                Organization <span className="text-gsp-danger">*</span>
              </Label>
              <Select value={orgId} onValueChange={setOrgId}>
                <SelectTrigger id="org">
                  <SelectValue placeholder="Select organization" />
                </SelectTrigger>
                <SelectContent>
                  {organizations.map((org) => (
                    <SelectItem key={org.id} value={org.id}>
                      {org.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {error && (
            <p
              className="flex items-center gap-2 text-sm text-gsp-danger"
              role="alert"
            >
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading || !email || !role || !orgId}
            className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F]"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                Sending invitation...
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-4 w-4" aria-hidden="true" />
                Send Invitation
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
