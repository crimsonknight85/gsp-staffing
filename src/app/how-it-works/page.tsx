import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  FileCheck,
  UserCheck,
  Handshake,
  Rocket,
  ShieldCheck,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works — Our Recruitment Process",
  description:
    "A transparent, structured recruitment process: discovery, role definition, sourcing, screening, shortlist, interviews, placement, onboarding, and managed support.",
  alternates: { canonical: "/how-it-works" },
};

const recruitmentSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, team dynamics, and what success looks like in the role. Culture fit matters as much as technical skill.",
  },
  {
    icon: Users,
    step: "02",
    title: "Role Definition",
    description:
      "We work with you to define the role clearly — responsibilities, requirements, must-haves, and nice-to-haves — so sourcing is targeted from the start.",
  },
  {
    icon: Search,
    step: "03",
    title: "Sourcing",
    description:
      "We tap our network, specialized channels, and direct outreach to find candidates who match your requirements — not just keyword matches.",
  },
  {
    icon: FileCheck,
    step: "04",
    title: "Screening",
    description:
      "Every candidate goes through resume review, a structured phone screen, and a technical or skills assessment before they reach your desk.",
  },
  {
    icon: UserCheck,
    step: "05",
    title: "Shortlist",
    description:
      "You receive a curated shortlist with full candidate profiles, interview notes, and assessment results. No resume spam — just qualified people.",
  },
  {
    icon: Handshake,
    step: "06",
    title: "Client Interviews",
    description:
      "We coordinate interviews between you and candidates, gather structured feedback, and keep the process moving efficiently.",
  },
  {
    icon: UserCheck,
    step: "07",
    title: "Offer & Placement",
    description:
      "We support you through the offer process and help coordinate a smooth placement — clarifying terms and next steps for both sides.",
  },
  {
    icon: Rocket,
    step: "08",
    title: "Onboarding",
    description:
      "We stay involved through onboarding to ensure a smooth transition, clear expectations, and early alignment between hire and team.",
  },
  {
    icon: ShieldCheck,
    step: "09",
    title: "Managed Support",
    description:
      "For managed staffing engagements, we provide ongoing coordination, time tracking, and performance visibility after placement.",
  },
];

const managedSteps = [
  {
    icon: Users,
    title: "Team Setup",
    description:
      "We build your dedicated remote team based on your tech stack, workflows, and communication preferences. You choose the structure.",
  },
  {
    icon: Clock,
    title: "Time Visibility",
    description:
      "Contractors log hours through our platform. You see timesheet submissions, weekly summaries, and engagement status.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Support",
    description:
      "We handle coordination, check-ins, and relationship management — so you get the benefits of global talent without the operational overhead.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/how-it-works.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gsp-navy/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
              Our Process
            </p>
            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-tight text-white sm:text-5xl text-balance"
            >
              How recruitment should work
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              A transparent, structured process designed to get you the right
              people — with full visibility at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Recruitment Steps */}
      <section className="bg-background py-20 lg:py-28" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
              Recruitment Process
            </p>
            <h2
              id="process-heading"
              className="text-3xl font-bold text-gsp-navy sm:text-4xl text-balance"
            >
              A clear path from requirement to placement
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every engagement follows the same structured process. We clarify
              responsibilities and next steps at each stage — without promising
              fixed timelines, since every role is different.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recruitmentSteps.map((s) => (
              <Card
                key={s.step}
                className="group relative overflow-hidden border-border transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-7">
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-lg bg-gsp-navy/5 transition-colors group-hover:bg-gsp-terracotta/10"
                      aria-hidden="true"
                    >
                      <s.icon className="h-5 w-5 text-gsp-navy transition-colors group-hover:text-gsp-terracotta" />
                    </div>
                    <span className="text-xs font-bold text-gsp-terracotta" aria-hidden="true">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gsp-navy">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Staffing */}
      <section className="bg-card py-20 lg:py-28" aria-labelledby="managed-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
              Managed Staffing
            </p>
            <h2
              id="managed-heading"
              className="text-3xl font-bold text-gsp-navy sm:text-4xl text-balance"
            >
              Remote teams with full visibility
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We build and manage dedicated teams for you — so you get the
              benefits of global talent without the operational overhead.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {managedSteps.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-background p-8 text-center"
              >
                <div
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gsp-navy/5"
                  aria-hidden="true"
                >
                  <s.icon className="h-7 w-7 text-gsp-navy" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gsp-navy">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsp-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
            Let&apos;s talk about your hiring needs
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Whether you need one key hire or a full managed team, we&apos;ll
            walk you through exactly how we&apos;d approach it.
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
        <div className="sr-only">
          <Link href="/how-it-works">How it works</Link>
        </div>
      </section>
    </>
  );
}
