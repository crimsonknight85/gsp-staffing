import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  FileText,
  UserCheck,
  Handshake,
  ArrowRight,
  Briefcase,
  ClipboardList,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Applicants — Opportunities & Application Process",
  description:
    "Explore roles with Global Staffing Partners. Learn how to apply, what to prepare, and what to expect.",
  alternates: { canonical: "/for-applicants" },
};

const roles = [
  { icon: Briefcase, title: "Virtual Assistants", desc: "Admin support, scheduling, email management, customer service." },
  { icon: Briefcase, title: "Developers & Engineers", desc: "Frontend, backend, full-stack, QA, and DevOps roles." },
  { icon: Briefcase, title: "Marketing & Creative", desc: "Social media, content writing, graphic design, SEO." },
  { icon: Briefcase, title: "Operations & Finance", desc: "Project coordinators, bookkeepers, data analysts." },
];

const steps = [
  { num: "01", icon: FileText, title: "Browse Open Jobs", desc: "Check our Jobs page for roles that match your skills and experience." },
  { num: "02", icon: Mail, title: "Apply", desc: "Send your resume and a short note about why you're a good fit." },
  { num: "03", icon: UserCheck, title: "Screening", desc: "If you're a match, we'll reach out for a screening call and skills assessment." },
  { num: "04", icon: Handshake, title: "Interview & Decision", desc: "We coordinate interviews with the client and keep you informed throughout." },
];

const prepare = [
  "Updated resume in PDF format",
  "A brief introduction about yourself",
  "Portfolio or work samples (if applicable)",
  "Availability and preferred work schedule",
  "Reliable internet and a quiet workspace",
];

export default function ForApplicantsPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">For Applicants</p>
          <h1 className="text-4xl font-bold text-gsp-navy sm:text-5xl text-balance">
            Find your next remote role
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We connect skilled professionals with growing companies. Here&apos;s what to expect.
          </p>
          <div className="mt-8">
            <Link href="/jobs">
              <Button size="lg" className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                View Open Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Role Types */}
      <section className="bg-card py-20 lg:py-28" aria-labelledby="roles-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">Types of Roles</p>
            <h2 id="roles-heading" className="text-3xl font-bold text-gsp-navy sm:text-4xl">
              Roles we typically recruit for
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {roles.map((r) => (
              <Card key={r.title} className="border-border text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gsp-navy/5" aria-hidden="true">
                    <r.icon className="h-5 w-5 text-gsp-navy" />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-gsp-navy">{r.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{r.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background py-20 lg:py-28" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">How to Apply</p>
            <h2 id="process-heading" className="text-3xl font-bold text-gsp-navy sm:text-4xl">
              The application process
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <Card key={s.num} className="border-border">
                <CardContent className="p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gsp-navy/5" aria-hidden="true">
                      <s.icon className="h-5 w-5 text-gsp-navy" />
                    </div>
                    <span className="text-xs font-bold text-gsp-terracotta" aria-hidden="true">{s.num}</span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-gsp-navy">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prepare */}
      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">Be Ready</p>
            <h2 className="text-3xl font-bold text-gsp-navy sm:text-4xl">What to prepare</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {prepare.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-gsp-terracotta" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsp-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
            Ready to apply?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/jobs">
              <Button size="lg" className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                View Open Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-gsp-navy hover:bg-slate-100 px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
