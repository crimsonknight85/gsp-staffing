import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Eye,
  ShieldCheck,
  Gauge,
  Users,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Clients — Hire with Visibility and Accountability",
  description:
    "Hiring pain solved: quality candidates, transparent process, and ongoing accountability. See the client journey and what dashboard visibility looks like.",
  alternates: { canonical: "/for-clients" },
};

const painPoints = [
  {
    icon: Users,
    title: "Quality",
    description:
      "Candidates who are vetted for role fit, communication, culture, and reliability — not just keyword matches on a resume.",
  },
  {
    icon: Gauge,
    title: "Speed",
    description:
      "A structured process that keeps things moving. No more waiting weeks for an update or wondering where things stand.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear visibility into every stage of the pipeline. You always know who is being considered and what happens next.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description:
      "A dedicated partner who owns the outcome — not a recruiter who disappears after sending a batch of resumes.",
  },
];

const journey = [
  {
    step: "01",
    title: "Tell us what you need",
    description:
      "Share your hiring requirements — roles, timeline, team size, and must-haves. We listen first.",
  },
  {
    step: "02",
    title: "We source and screen",
    description:
      "Our team actively recruits candidates through targeted outreach, then screens each one through a structured process.",
  },
  {
    step: "03",
    title: "Review your shortlist",
    description:
      "You receive a curated shortlist with full candidate profiles, interview notes, and assessment results.",
  },
  {
    step: "04",
    title: "Interview and select",
    description:
      "We coordinate interviews, gather feedback, and help you move efficiently to offer and placement.",
  },
  {
    step: "05",
    title: "Ongoing support",
    description:
      "For managed staffing, we provide continued coordination, time visibility, and performance reporting after placement.",
  },
];

const dashboardFeatures = [
  "Active job openings and pipeline progress",
  "Candidates by stage with status tracking",
  "Interview schedules and feedback requests",
  "Assigned contractors and project information",
  "Hours worked and timesheet status",
  "Weekly and monthly status reports",
];

export default function ForClientsPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            For Clients
          </p>
          <h1 className="text-4xl font-bold text-gsp-navy sm:text-5xl text-balance">
            Hire with confidence and visibility
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We address the real pain points of hiring remote talent — quality,
            speed, transparency, and ongoing accountability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-gsp-navy/20 text-gsp-navy hover:bg-gsp-navy/5"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-card py-20 lg:py-28" aria-labelledby="pain-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="pain-heading" className="sr-only">
            How we solve common hiring challenges
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((p) => (
              <Card key={p.title} className="border-border text-center">
                <CardContent className="p-8">
                  <div
                    className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gsp-navy/5"
                    aria-hidden="true"
                  >
                    <p.icon className="h-7 w-7 text-gsp-navy" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-gsp-navy">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Journey */}
      <section className="bg-background py-20 lg:py-28" aria-labelledby="journey-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
              The Client Journey
            </p>
            <h2
              id="journey-heading"
              className="text-3xl font-bold text-gsp-navy sm:text-4xl"
            >
              From requirement to placement and beyond
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {journey.map((j) => (
              <Card key={j.step} className="border-border">
                <CardContent className="p-6">
                  <span
                    className="mb-3 block text-xs font-bold text-gsp-terracotta"
                    aria-hidden="true"
                  >
                    Step {j.step}
                  </span>
                  <h3 className="mb-2 text-base font-semibold text-gsp-navy">
                    {j.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {j.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Visibility Preview */}
      <section className="bg-card py-20 lg:py-28" aria-labelledby="visibility-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
                Dashboard Visibility
              </p>
              <h2
                id="visibility-heading"
                className="text-3xl font-bold text-gsp-navy sm:text-4xl text-balance"
              >
                See your hiring pipeline at a glance
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                When the platform launches, clients will have a dedicated
                dashboard to track candidates, review contractor engagement, and
                see status updates — all in one place.
              </p>
              <ul className="mt-6 space-y-3" role="list">
                {dashboardFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <ClipboardCheck
                      className="mt-0.5 h-5 w-5 shrink-0 text-gsp-success"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Abstract dashboard illustration (non-functional) */}
            <div className="rounded-2xl border border-border bg-background p-6" aria-hidden="true">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 rounded bg-muted" />
                  <div className="h-3 w-16 rounded bg-muted" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-lg border border-border bg-card p-3">
                      <div className="mb-2 h-2 w-12 rounded bg-muted" />
                      <div className="h-6 w-16 rounded bg-gsp-navy/10" />
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((row) => (
                    <div
                      key={row}
                      className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
                    >
                      <div className="h-8 w-8 rounded-full bg-muted" />
                      <div className="flex-1">
                        <div className="mb-1.5 h-2.5 w-32 rounded bg-muted" />
                        <div className="h-2 w-20 rounded bg-muted/50" />
                      </div>
                      <div className="h-6 w-16 rounded-full bg-gsp-success/10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsp-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
            Ready to start hiring?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Book a call to share your requirements and learn how we can help.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
