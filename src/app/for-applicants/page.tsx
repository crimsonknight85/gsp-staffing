import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  UserPlus,
  FileText,
  Eye,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Applicants — Opportunities & Application Process",
  description:
    "Explore opportunities with Global Staffing Partners. Learn about the application process, requirements, status visibility, and our anti-scam notice.",
  alternates: { canonical: "/for-applicants" },
};

const applicationSteps = [
  {
    step: "01",
    title: "Submit your profile",
    description:
      "Complete your profile and upload your resume. Tell us about your skills, experience, and the roles you are interested in.",
  },
  {
    step: "02",
    title: "Application review",
    description:
      "Our team reviews your application against current and upcoming roles. We assess role fit, skills, and communication.",
  },
  {
    step: "03",
    title: "Screening",
    description:
      "If your profile matches a role, we conduct a structured screening — which may include an interview and skills assessment.",
  },
  {
    step: "04",
    title: "Status visibility",
    description:
      "You can view your application status and next steps through your applicant dashboard when available.",
  },
  {
    step: "05",
    title: "Interview",
    description:
      "If shortlisted, we coordinate interviews with the hiring client and gather feedback throughout the process.",
  },
  {
    step: "06",
    title: "Decision and onboarding",
    description:
      "We communicate the outcome clearly — whether hired, not selected, or kept on file for future roles.",
  },
];

const requirements = [
  "Updated resume or CV",
  "Accurate contact information",
  "Details about your skills and experience",
  "Right-to-work information if applicable",
  "Professional references upon request",
];

export default function ForApplicantsPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            For Applicants
          </p>
          <h1 className="text-4xl font-bold text-gsp-navy sm:text-5xl text-balance">
            Build your career with the right team
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We connect skilled professionals with remote opportunities at
            growing companies. Here&apos;s what to expect when you apply.
          </p>
        </div>
      </section>

      {/* Application Steps */}
      <section className="bg-card py-20 lg:py-28" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
              Application Process
            </p>
            <h2
              id="process-heading"
              className="text-3xl font-bold text-gsp-navy sm:text-4xl"
            >
              How applying works
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applicationSteps.map((s) => (
              <Card key={s.step} className="border-border">
                <CardContent className="p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-gsp-navy/5"
                      aria-hidden="true"
                    >
                      <span className="text-sm font-bold text-gsp-terracotta">
                        {s.step}
                      </span>
                    </div>
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

      {/* Requirements + Status */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-gsp-terracotta" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-gsp-navy">
                  What you&apos;ll need
                </h2>
              </div>
              <ul className="space-y-4" role="list">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-gsp-success"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-3">
                <Eye className="h-6 w-6 text-gsp-terracotta" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-gsp-navy">
                  Your privacy matters
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Your application information is used solely for recruitment
                purposes. We do not share your data with third parties without
                your consent, and we do not use applicant data for automated
                hiring decisions — human review is always involved.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                You can request access to, correction of, or deletion of your
                data at any time by contacting us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Scam Notice */}
      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-gsp-warning/30 bg-gsp-warning/5">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gsp-warning/10"
                  aria-hidden="true"
                >
                  <ShieldAlert className="h-6 w-6 text-gsp-warning" />
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-bold text-gsp-navy">
                    Anti-scam notice
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Global Staffing Partners <strong>never charges
                    applicants</strong> to apply, interview, or secure a
                    position. We will never ask you for payment, banking
                    details for &ldquo;registration,&rdquo; or sensitive
                    personal information via unsolicited messages. All
                    legitimate communication from us comes from our official
                    domain. If you receive a suspicious message claiming to be
                    from GSP, please report it to us immediately.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsp-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
            Ready to apply?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Submit your profile and our team will reach out when a role matches
            your skills.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Apply for Opportunities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                className="bg-white text-gsp-navy hover:bg-slate-100 px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Applicant Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
