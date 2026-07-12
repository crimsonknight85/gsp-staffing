import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Users,
  LineChart,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Globe,
  Search,
  UserCheck,
} from 'lucide-react'

/* ──────────────────────── Hero Section ──────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-home.jpg"
          alt="Professional workspace"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gsp-navy/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            Global Staffing Partners
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
            Hire with confidence.
            <br />
            <span className="text-gsp-terracotta">Not compromise.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200 drop-shadow">
            Premium recruitment for companies that need visibility, accountability,
            and results — not just resumes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gsp-terracotta hover:bg-[#7A5E3F] text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button
                size="lg"
                className="bg-white text-gsp-navy hover:bg-slate-100 px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                How It Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── Core Promise Section ──────────────────── */
function CorePromiseSection() {
  const promises = [
    {
      icon: Users,
      question: 'Who are we hiring?',
      answer:
        'Every candidate is thoroughly vetted through our multi-stage screening process. You see full profiles, interview notes, and assessment scores — not just a resume forwarded to your inbox.',
    },
    {
      icon: LineChart,
      question: 'What progress is being made?',
      answer:
        'Real-time dashboards show exactly where each candidate stands. No more chasing recruiters for updates. You get transparency at every stage of the pipeline.',
    },
    {
      icon: ShieldCheck,
      question: 'Are they producing value?',
      answer:
        'Track deliverables, performance metrics, and engagement through our platform. Know your ROI without extra spreadsheets or status meetings.',
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            Our Promise
          </p>
          <h2 className="text-3xl font-bold text-gsp-navy sm:text-4xl">
            Three questions every client should be able to answer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            If your current staffing partner can't give you clear answers to these,
            it's time for a better approach.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {promises.map((p, i) => (
            <Card
              key={i}
              className="group border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
            >
              <CardContent className="p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gsp-navy/5 transition-all duration-300 group-hover:bg-gsp-terracotta group-hover:scale-110">
                  <p.icon className="h-6 w-6 text-gsp-navy transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gsp-navy">
                  {p.question}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">{p.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── Services Section ──────────────────── */
function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: 'Talent Sourcing',
      description:
        'We actively seek out candidates through targeted outreach, specialized networks, and strategic job postings — not just waiting for applicants to come to us.',
    },
    {
      icon: UserCheck,
      title: 'Candidate Vetting',
      description:
        'Thorough resume review, structured interviews, skills assessments, and reference checks before any candidate reaches your desk.',
    },
    {
      icon: Globe,
      title: 'Permanent Recruitment',
      description:
        'End-to-end hiring for full-time roles. We source, screen, and shortlist candidates who match your culture and technical needs.',
    },
  ]

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            What We Offer
          </p>
          <h2 className="text-3xl font-bold text-gsp-navy sm:text-4xl">
            Recruitment services that fit your business
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gsp-navy/5 transition-all duration-300 group-hover:bg-gsp-terracotta group-hover:scale-110">
                <s.icon className="h-6 w-6 text-gsp-navy transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gsp-navy">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── Credibility Section ──────────────────── */
function CredibilitySection() {
  const stats = [
    { value: '500+', label: 'Placements Made' },
    { value: '98%', label: 'Client Retention' },
    { value: '14 Days', label: 'Avg. Time to Hire' },
    { value: '12', label: 'Countries Served' },
  ]

  const differentiators = [
    'Dedicated recruitment partner for every client',
    'Real-time candidate tracking dashboard',
    'Rigorous technical and cultural vetting',
    'Transparent pricing — no hidden fees',
    'Post-placement check-ins at 30, 60, 90 days',
    'Flexible engagement terms that work for you',
  ]

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="group text-center transition-all duration-300 hover:-translate-y-1">
              <p className="text-3xl font-bold text-gsp-navy sm:text-4xl transition-colors duration-300 group-hover:text-gsp-terracotta">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Why GSP */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
              Why Global Staffing Partners
            </p>
            <h2 className="text-3xl font-bold text-gsp-navy sm:text-4xl">
              We're not a resume factory. We're your recruitment partner.
            </h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              Most agencies flood you with candidates and disappear. We take the time
              to understand your business, your team, and what success actually looks
              like — then we deliver people who fit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button className="bg-gsp-terracotta hover:bg-[#7A5E3F] text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  Start Hiring
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="mb-6 text-lg font-semibold text-gsp-navy">
              What sets us apart
            </h3>
            <ul className="space-y-4">
              {differentiators.map((d, i) => (
                <li key={i} className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gsp-success transition-transform duration-300 group-hover/item:scale-110" />
                  <span className="text-sm text-slate-600">{d}</span>
                </li>
              ))}
            </ul>
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
          Ready to hire with confidence?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
          Tell us what you're looking for. We'll show you how our process works
          and give you a clear timeline — no pressure, no commitment required.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gsp-terracotta hover:bg-[#7A5E3F] text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/how-it-works">
            <Button
              size="lg"
              className="bg-white text-gsp-navy hover:bg-slate-100 px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              See Our Process
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── Home Page ──────────────────────── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <CorePromiseSection />
      <ServicesSection />
      <CredibilitySection />
      <CTASection />
    </>
  )
}
