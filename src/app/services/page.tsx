import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  UserCheck,
  Handshake,
  Rocket,
  Clock,
  BarChart3,
  Users,
  ArrowRight,
  Phone,
  FileText,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Recruitment, Screening & Managed Staffing",
  description:
    "End-to-end recruitment, candidate sourcing and screening, interview coordination, contractor onboarding, managed support, time tracking, and client communication.",
  alternates: { canonical: "/services" },
};

const services = [
  { icon: Search, title: "End-to-End Recruitment", desc: "From role intake to placement. We handle sourcing, screening, shortlisting, and offer coordination." },
  { icon: UserCheck, title: "Candidate Sourcing & Screening", desc: "Active outreach, skills assessments, reference checks, and structured interviews before candidates reach you." },
  { icon: Handshake, title: "Interview Coordination", desc: "We schedule interviews, gather feedback, and keep the process moving efficiently." },
  { icon: Rocket, title: "Contractor Onboarding", desc: "We help contractors get set up with tools, access, and clear expectations from day one." },
  { icon: ShieldCheck, title: "Managed Contractor Support", desc: "Ongoing coordination, check-ins, and relationship management throughout the engagement." },
  { icon: Clock, title: "Time Tracking & Reporting", desc: "Contractors log hours. You see timesheet submissions, summaries, and engagement status." },
  { icon: Users, title: "Client Communication Support", desc: "A dedicated point of contact for updates, feedback, and issue resolution." },
];

const workflow = [
  { num: "01", icon: Phone, title: "Discovery Call", desc: "We understand the role, business needs, budget, timeline, and success criteria." },
  { num: "02", icon: FileText, title: "Role Intake", desc: "We define job requirements, must-have and nice-to-have skills, work schedule, and hiring process." },
  { num: "03", icon: Search, title: "Candidate Search", desc: "We source, screen, and shortlist qualified candidates." },
  { num: "04", icon: Users, title: "Client Review", desc: "You review shortlisted candidates and choose who to interview." },
  { num: "05", icon: Handshake, title: "Interview Coordination", desc: "We help coordinate interviews and gather feedback." },
  { num: "06", icon: Rocket, title: "Offer & Onboarding", desc: "We assist with offer alignment, onboarding, and contractor setup." },
  { num: "07", icon: BarChart3, title: "Ongoing Support", desc: "We monitor contractor performance, communication, attendance, and reporting." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">Our Services</p>
          <h1 className="text-4xl font-bold text-gsp-navy sm:text-5xl text-balance">
            Everything you need to hire and manage remote talent
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            From finding the right candidate to ongoing performance support — we handle the full lifecycle.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-card py-20 lg:py-28" aria-labelledby="services-detail-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="services-detail-heading" className="sr-only">Services in detail</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="border-border">
                <CardContent className="p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gsp-navy/5" aria-hidden="true">
                    <s.icon className="h-6 w-6 text-gsp-navy" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-gsp-navy">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-background py-20 lg:py-28" aria-labelledby="workflow-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">How We Work</p>
            <h2 id="workflow-heading" className="text-3xl font-bold text-gsp-navy sm:text-4xl">A clear path from discovery to ongoing support</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step) => (
              <Card key={step.num} className="border-border">
                <CardContent className="p-7">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gsp-navy/5" aria-hidden="true">
                      <step.icon className="h-5 w-5 text-gsp-navy" />
                    </div>
                    <span className="text-xs font-bold text-gsp-terracotta" aria-hidden="true">{step.num}</span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-gsp-navy">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsp-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">Ready to get started?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Book a discovery call and we&apos;ll walk you through the process.
          </p>
          <div className="mt-10">
            <Link href="/contact#book">
              <Button size="lg" className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
