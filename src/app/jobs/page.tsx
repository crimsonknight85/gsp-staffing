import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jobs — Open Positions",
  description:
    "Browse open remote roles at Global Staffing Partners. Apply directly through the website.",
  alternates: { canonical: "/jobs" },
};

interface JobPosting {
  title: string;
  type: string;
  location: string;
  description: string;
  status: "open" | "closing-soon" | "filled";
}

// Static job postings — can be moved to Supabase later
const jobs: JobPosting[] = [
  {
    title: "Virtual Assistant",
    type: "Full-time · Contract",
    location: "Remote (Philippines)",
    description:
      "Support a US-based client with scheduling, email management, data entry, and customer communications. Strong English and organizational skills required.",
    status: "open",
  },
  {
    title: "Frontend Developer",
    type: "Full-time · Contract",
    location: "Remote (Latin America)",
    description:
      "Build and maintain React applications for a growing SaaS company. 3+ years experience with modern JavaScript, TypeScript, and CSS frameworks.",
    status: "closing-soon",
  },
  {
    title: "Social Media Manager",
    type: "Part-time · Contract",
    location: "Remote (Philippines)",
    description:
      "Manage content calendars, create posts, and engage with audiences across LinkedIn, Facebook, and Instagram for multiple clients.",
    status: "open",
  },
  {
    title: "Bookkeeper",
    type: "Full-time · Contract",
    location: "Remote (South Africa)",
    description:
      "Manage accounts payable/receivable, reconcile statements, and prepare monthly reports using QuickBooks. Experience with US clients preferred.",
    status: "filled",
  },
];

const statusConfig = {
  open: { label: "Open", className: "bg-gsp-success/10 text-gsp-success" },
  "closing-soon": { label: "Closing Soon", className: "bg-gsp-warning/10 text-gsp-warning" },
  filled: { label: "Filled", className: "bg-muted text-muted-foreground" },
};

export default function JobsPage() {
  const openJobs = jobs.filter((j) => j.status !== "filled");

  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">Open Positions</p>
          <h1 className="text-4xl font-bold text-gsp-navy sm:text-5xl">Job Openings</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Browse available remote roles. New positions are added regularly.
          </p>
        </div>
      </section>

      {/* Jobs List */}
      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {openJobs.length === 0 && jobs.length > 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-background p-12 text-center">
              <h2 className="text-lg font-semibold text-gsp-navy">No open positions right now</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Check back soon — new roles are posted regularly.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job) => {
                const config = statusConfig[job.status];
                return (
                  <Card key={job.title} className="border-border">
                    <CardContent className="p-8">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                          <div className="mb-2 flex flex-wrap items-center gap-3">
                            <h2 className="text-xl font-semibold text-gsp-navy">{job.title}</h2>
                            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${config.className}`}>
                              {config.label}
                            </span>
                          </div>
                          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Briefcase className="h-4 w-4" aria-hidden="true" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-4 w-4" aria-hidden="true" />
                              {job.location}
                            </span>
                          </div>
                          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                            {job.description}
                          </p>
                        </div>
                        <div className="shrink-0">
                          {job.status === "filled" ? (
                            <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
                              <Clock className="h-4 w-4" aria-hidden="true" />
                              Position filled
                            </span>
                          ) : (
                            <Link href={`/contact?subject=${encodeURIComponent(`Application: ${job.title}`)}`}>
                              <Button className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F]">
                                Apply Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Don't see a fit */}
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-background p-8 text-center">
            <h3 className="text-lg font-semibold text-gsp-navy">
              Don&apos;t see a role that fits?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Send us your resume and we&apos;ll reach out when a matching role opens up.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="mt-4 border-gsp-navy/20 text-gsp-navy hover:bg-gsp-navy/5">
                Submit Your Resume
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
