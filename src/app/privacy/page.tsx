import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Global Staffing Partners collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <header>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            Legal
          </p>
          <h1 className="text-3xl font-bold text-gsp-navy sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {new Date().getFullYear()}
          </p>
        </header>

        <div className="space-y-6">
          <div className="prose prose-sm max-w-none">
            <div className="rounded-lg border border-gsp-warning/30 bg-gsp-warning/5 p-4">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> This is a template privacy policy. It
                must be reviewed and finalized by qualified legal counsel before
                relying on it for compliance purposes.
              </p>
            </div>
          </div>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              1. Information we collect
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We collect information you provide directly to us, such as your
              name, email address, company, and message when you fill out our
              contact form. For applicants and contractors, we may collect
              resumes, profile information, and documents necessary for
              recruitment and assignment purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              2. How we use your information
            </h2>
            <ul className="ml-4 list-disc space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>To respond to your enquiries and schedule calls</li>
              <li>To process applications and manage recruitment</li>
              <li>To coordinate contractor assignments and timesheets</li>
              <li>To provide client reporting and pipeline visibility</li>
              <li>To send service-related communications</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              3. How we share your information
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We do not sell your personal information. We share information only
              as necessary to provide our services — for example, sharing
              applicant profiles with clients during the recruitment process, or
              with service providers who help us operate our platform. All
              sharing is governed by appropriate data agreements.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              4. Data security
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We use administrative, technical, and physical safeguards to
              protect your information. Access to personal data is restricted to
              authorized personnel who need it to perform their duties. However,
              no method of transmission or storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              5. Your rights
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              You may request access to, correction of, or deletion of your
              personal information. You may also withdraw consent for
              processing. To exercise any of these rights, contact us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-gsp-terracotta underline hover:no-underline"
              >
                {SITE.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              6. Automated decisions
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We do not use applicant data for automated hiring decisions
              without explicit legal and product approval. Human review is
              always required for hiring decisions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              7. Contact
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you have questions about this Privacy Policy, contact us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-gsp-terracotta underline hover:no-underline"
              >
                {SITE.email}
              </a>
              .
            </p>
          </section>
        </div>

        <div className="border-t border-border pt-8">
          <Link
            href="/"
            className="text-sm text-gsp-terracotta underline hover:no-underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </article>
  );
}
