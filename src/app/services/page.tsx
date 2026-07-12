import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  UserCheck,
  Globe,
  Clock,
  BarChart3,
  ArrowRight,
  FileText,
  Handshake,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Recruitment, Vetting & Managed Staffing",
  description:
    "End-to-end recruitment, candidate sourcing and screening, onboarding support, and managed contractor support with time visibility and client reporting.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    icon: Search,
    title: "Candidate Sourcing",
    description:
      "We actively identify and engage candidates through targeted outreach, specialized networks, and strategic job postings — not passive job board waiting.",
    deliverables: [
      "Targeted candidate pipeline",
      "Direct outreach campaigns",
      "Network-based referrals",
    ],
  },
  {
    icon: UserCheck,
    title: "Screening & Vetting",
    description:
      "Structured assessment of every candidate before they reach you — covering role fit, communication, technical skills, and reliability.",
    deliverables: [
      "Resume and background review",
      "Structured interviews",
      "Skills assessments",
      "Reference checks",
    ],
  },
  {
    icon: Handshake,
    title: "Recruitment & Placement",
    description:
      "End-to-end recruitment for permanent and contract roles. We coordinate interviews, gather feedback, and support offer and placement.",
    deliverables: [
      "Curated shortlists with full profiles",
      "Interview coordination",
      "Offer and placement support",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Onboarding Support",
    description:
      "We help smooth the transition for new hires and contractors — ensuring clear expectations, documentation, and early alignment.",
    deliverables: [
      "Onboarding checklists",
      "Documentation coordination",
      "Early engagement check-ins",
    ],
  },
  {
    icon: Clock,
    title: "Managed Contractor Support",
    description:
      "For ongoing engagements, we provide managed staffing support — time tracking, coordination, and dedicated relationship management.",
    deliverables: [
      "Time entry and timesheet coordination",
      "Weekly/monthly status summaries",
      "Dedicated support contact",
    ],
  },
  {
    icon: BarChart3,
    title: "Client Reporting",
    description:
      "Visibility into pipeline progress, contractor engagement, and operational status — so you always know where things stand.",
    deliverables: [
      "Pipeline and stage reporting",
      "Contractor engagement summaries",
      "Custom reporting as needed",
    ],
  },
];

const idealCustomer = [
  "Companies hiring remote or offshore talent",
  "Teams that need vetted, reliable professionals",
  "Organizations scaling beyond their internal recruiting capacity",
  "Businesses that want visibility into the hiring process",
];

const exclusions = [
  "We do not provide legal, tax, or immigration advisory services",
  "We do not guarantee specific time-to-hire outcomes",
  "We do not operate a public candidate marketplace",
  "We do not process payroll or automate contractor payments in the current phase",
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            What We Do
          </p>
          <h1 className="text-4xl font-bold text-gsp-navy sm:text-5xl text-balance">
            End-to-end recruitment and managed staffing
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            From sourcing and screening to placement and ongoing support —
            we handle the full lifecycle of hiring and managing remote talent.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-card py-20 lg:py-28" aria-labelledby="services-detail-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="services-detail-heading" className="sr-only">
            Our services in detail
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="border-border">
                <CardContent className="p-8">
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gsp-navy/5"
                    aria-hidden="true"
                  >
                    <s.icon className="h-6 w-6 text-gsp-navy" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-gsp-navy">
                    {s.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <ul className="space-y-2" role="list">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gsp-terracotta"
                          aria-hidden="true"
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Customer + Exclusions */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gsp-navy">
                Who this is for
              </h2>
              <ul className="space-y-4" role="list">
                {idealCustomer.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Globe
                      className="mt-0.5 h-5 w-5 shrink-0 text-gsp-terracotta"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gsp-navy">
                What we don&apos;t do
              </h2>
              <ul className="space-y-4" role="list">
                {exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FileText
                      className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
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

      {/* CTA */}
      <section className="bg-gsp-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
            Tell us what you need
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Book a call to discuss your hiring requirements and how we can help.
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
