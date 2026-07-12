import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ClipboardList,
  Clock,
  FileCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Contractors — Assignments, Time & Support",
  description:
    "Learn about contractor assignments with GSP: onboarding, expectations, time entry, timesheets, support, and payment information boundaries.",
  alternates: { canonical: "/for-contractors" },
};

const assignments = [
  {
    icon: ClipboardList,
    title: "Your Assignment",
    description:
      "Once matched with a client, you receive a clear assignment with defined scope, deliverables, and reporting structure.",
  },
  {
    icon: FileCheck,
    title: "Onboarding",
    description:
      "We guide you through onboarding — documentation, tools access, team introductions, and alignment on expectations.",
  },
  {
    icon: ShieldCheck,
    title: "Tasks & Goals",
    description:
      "Your assignment includes clear tasks, goals, and deliverables so you always know what success looks like.",
  },
  {
    icon: Clock,
    title: "Time Entry",
    description:
      "Log your hours through the platform. Track time against specific tasks or projects for accurate reporting.",
  },
];

const expectations = [
  "Professional communication with the client and GSP team",
  "Reliable time tracking for all billable hours",
  "Timely submission of weekly timesheets",
  "Proactive communication about blockers or changes",
  "Delivery of agreed-upon tasks and milestones",
];

const supportItems = [
  "A dedicated GSP support contact for questions and issues",
  "Weekly timesheet submission and approval workflow",
  "Clear status updates — draft, submitted, approved, or returned",
  "Resubmission path if a timesheet is returned for correction",
];

export default function ForContractorsPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            For Contractors
          </p>
          <h1 className="text-4xl font-bold text-gsp-navy sm:text-5xl text-balance">
            Clear assignments, transparent process
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Working as a contractor with GSP means structured assignments,
            reliable support, and clear expectations at every step.
          </p>
        </div>
      </section>

      {/* Assignment Cards */}
      <section className="bg-card py-20 lg:py-28" aria-labelledby="assignment-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="assignment-heading" className="sr-only">
            Contractor assignments overview
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {assignments.map((a) => (
              <Card key={a.title} className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gsp-navy/5"
                      aria-hidden="true"
                    >
                      <a.icon className="h-6 w-6 text-gsp-navy" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-gsp-navy">
                        {a.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {a.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations + Support */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gsp-navy">
                What we expect
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                These expectations help ensure a smooth working relationship
                and consistent delivery for our clients.
              </p>
              <ul className="space-y-4" role="list">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gsp-terracotta"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-gsp-navy">
                Support you receive
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                We don&apos;t just place you and disappear. You have ongoing
                support throughout your assignment.
              </p>
              <ul className="space-y-4" role="list">
                {supportItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ShieldCheck
                      className="mt-0.5 h-5 w-5 shrink-0 text-gsp-success"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Boundary */}
      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gsp-navy/5"
                  aria-hidden="true"
                >
                  <FileCheck className="h-6 w-6 text-gsp-navy" />
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-bold text-gsp-navy">
                    About payment information
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Contractors are engaged based on the terms of their specific
                    assignment. Payment processing, schedules, and amounts are
                    handled through separate agreements — not through this
                    website. We do not guarantee continuous or indefinite work.
                    Assignment availability depends on client demand and your
                    performance.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    For questions about payment status or terms, contact your
                    GSP support representative directly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsp-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
            Questions about contracting with GSP?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Reach out and our team will be happy to help.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
