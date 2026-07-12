import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Target,
  Handshake,
  Eye,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Mission & Operating Philosophy",
  description:
    "Global Staffing Partners is a hands-on recruitment and workforce partner built around visibility, accountability, quality, and ongoing support.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: Target,
    title: "Client trust before visual novelty",
    description:
      "We prioritize clarity, reliability, and results over flashy presentations. Trust is earned through consistent delivery.",
  },
  {
    icon: Eye,
    title: "Operational visibility before analytics",
    description:
      "Before complex dashboards, we make sure you can always see what is happening with your hiring and your team.",
  },
  {
    icon: Handshake,
    title: "Simple workflows before automation",
    description:
      "We start with clear, human-driven processes. Automation enhances — never replaces — informed decision-making.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            About Us
          </p>
          <h1 className="text-4xl font-bold text-gsp-navy sm:text-5xl text-balance">
            A hands-on recruitment and workforce partner
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Global Staffing Partners is built around visibility, accountability,
            quality, and ongoing support — not volume.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-card py-20 lg:py-28" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
              Our Mission
            </p>
            <h2
              id="mission-heading"
              className="text-3xl font-bold text-gsp-navy sm:text-4xl text-balance"
            >
              Help companies hire, manage, and scale high-performing remote talent
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              We help companies hire, manage, and scale high-performing remote
              talent through seamless recruitment and managed staffing support.
              We are not a cheap outsourcing marketplace or resume factory — we
              are a partner who takes ownership of the outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-background py-20 lg:py-28" aria-labelledby="principles-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
              How We Work
            </p>
            <h2
              id="principles-heading"
              className="text-3xl font-bold text-gsp-navy sm:text-4xl"
            >
              Our operating principles
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gsp-navy/5"
                  aria-hidden="true"
                >
                  <p.icon className="h-6 w-6 text-gsp-navy" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gsp-navy">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
              Our Operating Model
            </p>
            <h2 className="text-3xl font-bold text-gsp-navy sm:text-4xl text-balance">
              End-to-end recruitment with managed support
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              We handle sourcing, vetting, coordination, and placement — and for
              managed staffing engagements, we stay involved with time tracking,
              performance visibility, and ongoing coordination.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Clients see progress rather than chase updates. Candidates are
              assessed for role, culture, communication, and reliability. The
              relationship continues after placement where managed staffing
              applies.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership placeholder */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gsp-navy">Our team</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Leadership and team information will be added as it is approved for
            publication.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsp-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
            Want to learn more?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Book a call to meet the team and discuss how we can help.
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
