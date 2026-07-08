import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Search,
  FileCheck,
  UserCheck,
  Handshake,
  Rocket,
  BarChart3,
  ArrowRight,
  Clock,
  Users,
  ShieldCheck,
} from 'lucide-react'

/* ──────────────────── Process Steps ──────────────────── */
const recruitmentSteps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business, team dynamics, and what success looks like in the role. Culture fit matters as much as technical skill.',
    duration: '1–2 days',
  },
  {
    icon: Users,
    step: '02',
    title: 'Sourcing',
    description:
      'We tap our network, specialized job boards, and direct outreach to find candidates who match your requirements — not just keyword matches.',
    duration: '3–7 days',
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'Screening',
    description:
      'Every candidate goes through resume review, a structured phone screen, and a technical or skills assessment before they ever reach your inbox.',
    duration: '2–3 days',
  },
  {
    icon: UserCheck,
    step: '04',
    title: 'Shortlist',
    description:
      'You receive a curated shortlist with full candidate profiles, interview notes, and assessment scores. No resume spam. Just qualified people.',
    duration: 'Ongoing',
  },
  {
    icon: Handshake,
    step: '05',
    title: 'Interview & Offer',
    description:
      'We coordinate interviews, gather feedback, and help you craft a competitive offer. Our candidates have a 94% offer acceptance rate.',
    duration: '1–2 weeks',
  },
  {
    icon: Rocket,
    step: '06',
    title: 'Onboarding',
    description:
      'We stay involved through the first 90 days with regular check-ins to ensure a smooth transition and early success in the role.',
    duration: '90 days',
  },
]

const managedSteps = [
  {
    icon: ShieldCheck,
    title: 'Team Setup',
    description:
      'We build your dedicated offshore team based on your tech stack, workflows, and communication preferences. You choose the structure.',
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description:
      'Contractors log hours through our platform. You see daily timesheets, weekly summaries, and monthly reports — all in real time.',
  },
  {
    icon: BarChart3,
    title: 'Performance Visibility',
    description:
      'Dashboards show productivity metrics, deliverable status, and blockers. Know exactly what your team is working on without daily standups.',
  },
]

/* ──────────────────── Hero Section ──────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/how-it-works.jpg"
          alt="Organized recruitment workflow"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gsp-navy/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            Our Process
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            How recruitment should work
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            A transparent, structured process designed to get you the right people
            — with full visibility at every stage.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── Recruitment Steps ──────────────────── */
function RecruitmentStepsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            Recruitment Process
          </p>
          <h2 className="text-3xl font-bold text-gsp-navy sm:text-4xl">
            From req to desk in 6 steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Every placement follows the same rigorous process. No shortcuts.
            No surprises.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recruitmentSteps.map((s, i) => (
            <Card
              key={i}
              className="group relative overflow-hidden border-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-7">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gsp-navy/5 transition-colors group-hover:bg-gsp-terracotta/10">
                    <s.icon className="h-5 w-5 text-gsp-navy transition-colors group-hover:text-gsp-terracotta" />
                  </div>
                  <span className="text-xs font-bold text-gsp-terracotta">
                    {s.step}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gsp-navy">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {s.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{s.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── Managed Staffing Section ──────────────────── */
function ManagedStaffingSection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            Managed Staffing
          </p>
          <h2 className="text-3xl font-bold text-gsp-navy sm:text-4xl">
            Offshore teams with full visibility
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            We build and manage dedicated teams for you — so you get the benefits
            of global talent without the operational headaches.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {managedSteps.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gsp-navy/5">
                <s.icon className="h-7 w-7 text-gsp-navy" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gsp-navy">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dashboard Preview Mock */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gsp-navy">
                Your command center
              </h3>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Every client gets access to their own dashboard where you can
                track candidates through the pipeline, review timesheets, approve
                hours, and see productivity metrics — all in one place.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Candidate pipeline with stage tracking',
                  'Timesheet submission and approval workflow',
                  'Contractor productivity dashboard',
                  'Invoice status and payment tracking',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-gsp-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              {/* Mock dashboard UI */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 rounded bg-slate-200" />
                  <div className="h-3 w-16 rounded bg-slate-200" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-white p-3 border border-slate-100">
                    <div className="h-2 w-12 rounded bg-slate-200 mb-2" />
                    <div className="h-6 w-16 rounded bg-gsp-navy/10" />
                  </div>
                  <div className="rounded-lg bg-white p-3 border border-slate-100">
                    <div className="h-2 w-12 rounded bg-slate-200 mb-2" />
                    <div className="h-6 w-16 rounded bg-gsp-success/10" />
                  </div>
                  <div className="rounded-lg bg-white p-3 border border-slate-100">
                    <div className="h-2 w-12 rounded bg-slate-200 mb-2" />
                    <div className="h-6 w-16 rounded bg-gsp-terracotta/10" />
                  </div>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((row) => (
                    <div key={row} className="flex items-center gap-3 rounded-lg bg-white p-3 border border-slate-100">
                      <div className="h-8 w-8 rounded-full bg-slate-100" />
                      <div className="flex-1">
                        <div className="h-2.5 w-32 rounded bg-slate-200 mb-1.5" />
                        <div className="h-2 w-20 rounded bg-slate-100" />
                      </div>
                      <div className="h-6 w-16 rounded-full bg-gsp-success/10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── CTA Section ──────────────────── */
function CTASection() {
  return (
    <section className="bg-gsp-navy py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Let's talk about your hiring needs
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
          Whether you need one key hire or a full managed team, we'll walk you
          through exactly how we'd approach it.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gsp-terracotta hover:bg-gsp-terracotta/90 text-white px-8"
            >
              Schedule a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── Page ──────────────────────── */
export default function HowItWorks() {
  return (
    <>
      <HeroSection />
      <RecruitmentStepsSection />
      <ManagedStaffingSection />
      <CTASection />
    </>
  )
}
