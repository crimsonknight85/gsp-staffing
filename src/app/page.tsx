import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  LineChart,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Globe,
  Search,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hire with Confidence — Recruitment & Managed Staffing",
  description:
    "Global Staffing Partners helps companies hire, manage, and scale high-performing remote talent. Sourcing, vetting, recruitment, and managed staffing support.",
  alternates: { canonical: "/" },
};

/* ──────────────────────── Hero Section ──────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-home.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gsp-navy/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            Global Staffing Partners
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl drop-shadow-lg text-balance"
          >
            Hire with confidence.
            <br />
            <span className="text-gsp-terracotta">Not compromise.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200 drop-shadow">
            Premium recruitment for companies that need visibility,
            accountability, and results — not just resumes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                size="lg"
                className="bg-white text-gsp-navy hover:bg-slate-100 px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Core Promise Section ──────────────────── */
function CorePromiseSection() {
  const promises = [
    {
      icon: Users,
      question: "Who are we hiring?",
      answer:
        "Every candidate is vetted through a structured screening process. You see full profiles, interview notes, and assessment results — not just a resume forwarded to your inbox.",
    },
    {
      icon: LineChart,
      question: "What progress is being made?",
      answer:
        "Clear pipeline visibility shows exactly where each candidate stands. No more chasing recruiters for updates. You get transparency at every stage of the process.",
    },
    {
      icon: ShieldCheck,
      question: "Are they producing value?",
      answer:
        "For managed staffing engagements, track deliverables, time, and engagement through the platform. Know status without extra spreadsheets or status meetings.",
    },
  ];

  return (
    <section className="bg-background py-20 lg:py-28" aria-labelledby="promise-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            Our Promise
          </p>
          <h2
            id="promise-heading"
            className="text-3xl font-bold text-gsp-navy sm:text-4xl text-balance"
          >
            Three questions every client should be able to answer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            If your current staffing partner can&apos;t give you clear answers to
            these, it&apos;s time for a better approach.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {promises.map((p) => (
            <Card
              key={p.question}
              className="group border-border transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8">
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gsp-navy/5 transition-all duration-300 group-hover:bg-gsp-terracotta"
                  aria-hidden="true"
                >
                  <p.icon className="h-6 w-6 text-gsp-navy transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gsp-navy">
                  {p.question}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Services Section ──────────────────── */
function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Talent Sourcing",
      description:
        "We actively seek out candidates through targeted outreach, specialized networks, and strategic job postings — not just waiting for applicants to come to us.",
    },
    {
      icon: UserCheck,
      title: "Candidate Vetting",
      description:
        "Resume review, structured interviews, skills assessments, and reference checks before any candidate reaches your desk.",
    },
    {
      icon: Globe,
      title: "Managed Staffing",
      description:
        "Ongoing support for placed contractors — time tracking, performance visibility, and dedicated coordination after placement.",
    },
  ];

  return (
    <section className="bg-card py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            What We Offer
          </p>
          <h2
            id="services-heading"
            className="text-3xl font-bold text-gsp-navy sm:text-4xl"
          >
            Recruitment services that fit your business
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <Link key={s.title} href="/services" className="group block">
              <div className="h-full rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gsp-navy/5 transition-all duration-300 group-hover:bg-gsp-terracotta"
                  aria-hidden="true"
                >
                  <s.icon className="h-6 w-6 text-gsp-navy transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gsp-navy">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Differentiators Section ──────────────────── */
function DifferentiatorsSection() {
  const differentiators = [
    "Dedicated recruitment partner for every engagement",
    "Structured, transparent candidate pipeline",
    "Rigorous screening for role, culture, and communication",
    "Post-placement support for managed staffing clients",
    "Clear process with defined next steps",
    "Hands-on coordination throughout the engagement",
  ];

  return (
    <section className="bg-background py-20 lg:py-28" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
              Why Global Staffing Partners
            </p>
            <h2
              id="why-heading"
              className="text-3xl font-bold text-gsp-navy sm:text-4xl text-balance"
            >
              We&apos;re not a resume factory. We&apos;re your staffing partner.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Most agencies flood you with candidates and disappear. We take the
              time to understand your business, your team, and what success
              actually looks like — then we deliver people who fit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/for-clients">
                <Button variant="outline" className="border-gsp-navy/20 text-gsp-navy hover:bg-gsp-navy/5">
                  For Clients
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="mb-6 text-lg font-semibold text-gsp-navy">
              What sets us apart
            </h3>
            <ul className="space-y-4" role="list">
              {differentiators.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-gsp-success"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── CTA Section ──────────────────── */
function CTASection() {
  return (
    <section className="bg-gsp-navy py-20 lg:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="cta-heading"
          className="text-3xl font-bold text-white sm:text-4xl text-balance"
        >
          Ready to hire with confidence?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
          Tell us what you need. We&apos;ll walk you through how our process works
          and the next steps — no pressure, no commitment required.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/how-it-works">
            <Button
              size="lg"
              className="bg-white text-gsp-navy hover:bg-slate-100 px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              See How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── Home Page ──────────────────────── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CorePromiseSection />
      <ServicesSection />
      <DifferentiatorsSection />
      <CTASection />
    </>
  );
}
