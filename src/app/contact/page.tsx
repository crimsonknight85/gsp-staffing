"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { SITE } from "@/lib/utils";

const hiringTimelines = [
  { value: "immediate", label: "Immediately (within 2 weeks)" },
  { value: "1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "Within 1–3 months" },
  { value: "exploring", label: "Just exploring options" },
];

const teamSizes = [
  { value: "1", label: "1 hire" },
  { value: "2-5", label: "2–5 hires" },
  { value: "6-20", label: "6–20 hires" },
  { value: "20+", label: "20+ hires" },
];

const servicesNeeded = [
  { value: "permanent", label: "Permanent Recruitment" },
  { value: "contract", label: "Contract / Temporary" },
  { value: "managed", label: "Managed Team" },
  { value: "not-sure", label: "Not sure yet" },
];

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    rolesToHire: "",
    timeline: "",
    teamSize: "",
    serviceNeeded: "",
    message: "",
    consent: false,
  });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Your name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us a bit about what you need.";
    }
    if (!formData.consent) {
      newErrors.consent = "Please acknowledge the privacy policy to continue.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    // Placeholder: server action will be wired up in a later step.
    // Currently demonstrates the form flow without a backend.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="flex flex-1 items-center justify-center bg-card py-20">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gsp-success/10">
              <CheckCircle2 className="h-10 w-10 text-gsp-success" aria-hidden="true" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gsp-navy">Thank you!</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We&apos;ve received your message and will get back to you shortly.
            In the meantime, feel free to explore how our process works.
          </p>
          <div className="mt-8">
            <a href="/how-it-works">
              <Button
                variant="outline"
                className="border-gsp-navy/20 text-gsp-navy hover:bg-gsp-navy/5"
              >
                See How It Works
              </Button>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            Book a Call
          </p>
          <h1 className="text-4xl font-bold text-gsp-navy sm:text-5xl text-balance">
            Let&apos;s start a conversation
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Tell us about your hiring needs. We&apos;ll get back to you with next
            steps.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="flex-1 bg-card py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gsp-navy/5"
                        aria-hidden="true"
                      >
                        <Mail className="h-5 w-5 text-gsp-navy" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gsp-navy">Email</p>
                        <a
                          href={`mailto:${SITE.email}`}
                          className="mt-1 block text-sm text-muted-foreground hover:text-gsp-terracotta transition-colors break-all"
                        >
                          {SITE.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-gsp-navy">
                  <CardContent className="p-6">
                    <p className="text-sm font-medium text-white">
                      What happens next
                    </p>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      After you submit this form, our team reviews your
                      requirements and reaches out to schedule a call. We listen
                      first, then recommend the right approach.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Name + Email */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Full Name <span className="text-gsp-danger">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                          }
                          placeholder="Jane Smith"
                          required
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-xs text-gsp-danger flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" aria-hidden="true" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Work Email <span className="text-gsp-danger">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, email: e.target.value }))
                          }
                          placeholder="jane@company.com"
                          required
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-xs text-gsp-danger flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" aria-hidden="true" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, company: e.target.value }))
                        }
                        placeholder="Acme Inc."
                      />
                    </div>

                    {/* Roles to Hire */}
                    <div className="space-y-2">
                      <Label htmlFor="roles">Role(s) to Hire</Label>
                      <Input
                        id="roles"
                        value={formData.rolesToHire}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, rolesToHire: e.target.value }))
                        }
                        placeholder="e.g., Senior Developer, Virtual Assistant, Project Manager"
                      />
                    </div>

                    {/* Timeline + Team Size */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Hiring Timeline</Label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, timeline: value }))
                          }
                        >
                          <SelectTrigger id="timeline">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            {hiringTimelines.map((t) => (
                              <SelectItem key={t.value} value={t.value}>
                                {t.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="teamSize">Number of Hires</Label>
                        <Select
                          value={formData.teamSize}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, teamSize: value }))
                          }
                        >
                          <SelectTrigger id="teamSize">
                            <SelectValue placeholder="Select quantity" />
                          </SelectTrigger>
                          <SelectContent>
                            {teamSizes.map((s) => (
                              <SelectItem key={s.value} value={s.value}>
                                {s.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Service Type */}
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <Select
                        value={formData.serviceNeeded}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, serviceNeeded: value }))
                        }
                      >
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {servicesNeeded.map((s) => (
                            <SelectItem key={s.value} value={s.value}>
                              {s.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-gsp-danger">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, message: e.target.value }))
                        }
                        placeholder="What roles are you hiring for? Any specific requirements?"
                        rows={5}
                        required
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-xs text-gsp-danger flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" aria-hidden="true" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Privacy Consent */}
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({ ...prev, consent: checked === true }))
                          }
                          aria-invalid={!!errors.consent}
                          aria-describedby={errors.consent ? "consent-error" : undefined}
                        />
                        <Label htmlFor="consent" className="text-sm leading-relaxed font-normal cursor-pointer">
                          I agree that Global Staffing Partners may contact me
                          about my enquiry. I have read and agree to the{" "}
                          <a href="/privacy" className="text-gsp-terracotta underline hover:no-underline">
                            Privacy Policy
                          </a>
                          .
                        </Label>
                      </div>
                      {errors.consent && (
                        <p id="consent-error" className="text-xs text-gsp-danger flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" aria-hidden="true" />
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-gsp-terracotta hover:bg-[#7A5E3F] text-white sm:w-auto"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
