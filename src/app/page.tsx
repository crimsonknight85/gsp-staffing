import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Search,
  UserCheck,
  Handshake,
  Rocket,
  Clock,
  BarChart3,
  Users,
  Eye,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { CALENDLY_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hire Reliable Remote Talent — Recruitment & Managed Staffing",
  description:
    "Global Staffing Partners helps businesses recruit, onboard, and manage high-performing remote professionals with clear visibility, support, and accountability.",
  alternates: { canonical: "/" },
};

/* ──────────────────────── Hero ──────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-home.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gsp-navy/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            Global Staffing Partners
          </p>
          <h1 id="hero-heading" className="text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-6xl drop-shadow-lg text-balance">
            Hire reliable remote talent without the operational guesswork.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 drop-shadow">
            Global Staffing Partners helps businesses recruit, onboard, and manage
            high-performing remote professionals with clear visibility, support,
            and accountability.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link href="/services">
              <Button size="lg" className="bg-white text-gsp-navy hover:bg-slate-100 px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Services Summary ──────────────────── */
function ServicesSummary() {
  const services = [
    { icon: Search, title: "End-to-End Recruitment", desc: "From role intake to placement — we source, screen, and shortlist." },
    { icon: UserCheck, title: "Candidate Screening", desc: "Skills assessments, reference checks, and structured interviews." },
    { icon: Rocket, title: "Onboarding Support", desc: "We help contractors get set up, aligned, and productive quickly." },
    { icon: Clock, title: "Managed Support", desc: "Time tracking, attendance monitoring, and performance reporting." },
  ];

  return (
    <section className="bg-card py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">What We Do</p>
          <h2 id="services-heading" className="text-3xl font-bold text-gsp-navy sm:text-4xl text-balance">
            Recruitment and staffing, handled end-to-end
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.title} className="border-border text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gsp-navy/5" aria-hidden="true">
                  <s.icon className="h-6 w-6 text-gsp-navy" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-gsp-navy">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services">
            <Button variant="outline" className="border-gsp-navy/20 text-gsp-navy hover:bg-gsp-navy/5">
              Explore all services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Who We Help ──────────────────── */
function WhoWeHelp() {
  const audiences = [
    { icon: Users, title: "Business Owners", desc: "Scale your team without hiring full-time HR staff." },
    { icon: BarChart3, title: "Hiring Managers", desc: "Get pre-vetted shortlists instead of hundreds of resumes." },
    { icon: Eye, title: "Operations Leaders", desc: "Maintain visibility into contractor performance and time." },
  ];

  return (
    <section className="bg-background py-20 lg:py-28" aria-labelledby="who-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">Who We Help</p>
          <h2 id="who-heading" className="text-3xl font-bold text-gsp-navy sm:text-4xl">Built for teams hiring remote talent</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gsp-navy/5" aria-hidden="true">
                <a.icon className="h-6 w-6 text-gsp-navy" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-gsp-navy">{a.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Simple Process ──────────────────── */
function SimpleProcess() {
  const steps = [
    { num: "01", title: "Discovery Call", desc: "We learn your role, needs, budget, and timeline." },
    { num: "02", title: "Candidate Search", desc: "We source, screen, and shortlist qualified candidates." },
    { num: "03", title: "Interview & Hire", desc: "You review, we coordinate interviews, and assist with onboarding." },
    { num: "04", title: "Ongoing Support", desc: "We monitor performance, time, and reporting after placement." },
  ];

  return (
    <section className="bg-card py-20 lg:py-28" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">How It Works</p>
          <h2 id="process-heading" className="text-3xl font-bold text-gsp-navy sm:text-4xl">A clear, simple process</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Card key={s.num} className="border-border">
              <CardContent className="p-7">
                <span className="mb-3 block text-xs font-bold text-gsp-terracotta" aria-hidden="true">{s.num}</span>
                <h3 className="mb-2 text-base font-semibold text-gsp-navy">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Why GSP ──────────────────── */
function WhyGSP() {
  const points = [
    "Dedicated recruitment partner for every engagement",
    "Pre-vetted candidates — not resume spam",
    "Clear visibility into pipeline and contractor time",
    "Post-placement support and performance monitoring",
    "Hands-on coordination throughout the engagement",
    "Relationship-focused, long-term partnership",
  ];

  return (
    <section className="bg-background py-20 lg:py-28" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">Why Work With GSP</p>
            <h2 id="why-heading" className="text-3xl font-bold text-gsp-navy sm:text-4xl text-balance">
              We&apos;re not a resume factory. We&apos;re your staffing partner.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We take the time to understand your business and what success looks
              like — then deliver people who fit. You get visibility and support
              throughout the engagement, not just at placement.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <ul className="space-y-4" role="list">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gsp-success" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Final CTA ──────────────────── */
function FinalCTA() {
  return (
    <section className="bg-gsp-navy py-20 lg:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="cta-heading" className="text-3xl font-bold text-white sm:text-4xl text-balance">
          Ready to hire with confidence?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
          Book a discovery call. We&apos;ll learn about your needs and walk you
          through how it works.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <Link href="/services">
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8">
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── Page ──────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSummary />
      <WhoWeHelp />
      <SimpleProcess />
      <WhyGSP />
      <FinalCTA />
    </>
  );
}
