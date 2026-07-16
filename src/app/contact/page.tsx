"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { SITE } from "@/lib/utils";
import {
  Loader2,
  AlertCircle,
  CheckCircle2,
  Mail,
  Calendar,
  ArrowRight,
} from "lucide-react";

function ContactForm() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [roleNeeded, setRoleNeeded] = useState(subject || "");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError(null);

    // Placeholder: no backend yet — simulate submission
    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <Card className="border-gsp-success/30 bg-gsp-success/5">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gsp-success/10">
            <CheckCircle2 className="h-6 w-6 text-gsp-success" aria-hidden="true" />
          </div>
          <h2 className="text-lg font-semibold text-gsp-navy">Message sent!</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Thanks, {name}. We&apos;ll get back to you within one business day.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {subject && (
            <div className="rounded-lg border border-gsp-terracotta/30 bg-gsp-terracotta/5 p-3">
              <p className="text-sm text-muted-foreground">
                Applying for: <strong className="text-gsp-navy">{subject}</strong>
              </p>
            </div>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name <span className="text-gsp-danger">*</span></Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme Inc." />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email <span className="text-gsp-danger">*</span></Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@company.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="roleNeeded">Hiring need / Role needed</Label>
            <Input id="roleNeeded" value={roleNeeded} onChange={(e) => setRoleNeeded(e.target.value)} placeholder="e.g., Virtual Assistant, Developer" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message <span className="text-gsp-danger">*</span></Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your hiring needs or your experience..."
              rows={5}
              required
            />
          </div>
          {error && (
            <p className="flex items-center gap-2 text-sm text-gsp-danger" role="alert">
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {error}
            </p>
          )}
          <Button type="submit" disabled={loading} className="w-full bg-gsp-terracotta text-white hover:bg-[#7A5E3F] sm:w-auto">
            {loading ? (
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
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">Get in Touch</p>
          <h1 className="text-4xl font-bold text-gsp-navy sm:text-5xl">Book a Discovery Call or Send a Message</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Schedule a call directly on our calendar, or send us a message — whatever works best for you.
          </p>
        </div>
      </section>

      {/* Embedded Calendly Booking */}
      <section id="book" className="bg-card py-16 lg:py-20 scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gsp-terracotta/10" aria-hidden="true">
              <Calendar className="h-7 w-7 text-gsp-terracotta" />
            </div>
            <h2 className="text-2xl font-bold text-gsp-navy sm:text-3xl">
              Book a Discovery Call
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground leading-relaxed">
              Choose a time that works for you and we&apos;ll discuss your hiring
              needs, role requirements, timeline, and next steps.
            </p>
          </div>
          <CalendlyEmbed />
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gsp-navy sm:text-3xl">
              Prefer to send a message?
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Fill out the form below and we&apos;ll get back to you within one business day.
            </p>
          </div>

          <Suspense
            fallback={
              <Card className="border-border">
                <CardContent className="p-8 text-center">
                  <Loader2 className="mx-auto h-6 w-6 animate-spin text-muted-foreground" aria-hidden="true" />
                </CardContent>
              </Card>
            }
          >
            <ContactForm />
          </Suspense>

          <div className="mt-8 text-center">
            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-gsp-terracotta" aria-hidden="true" />
              Or email us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-gsp-terracotta underline hover:no-underline break-all">
                {SITE.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
