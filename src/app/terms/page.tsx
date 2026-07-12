import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing use of the Global Staffing Partners website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <header>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            Legal
          </p>
          <h1 className="text-3xl font-bold text-gsp-navy sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {new Date().getFullYear()}
          </p>
        </header>

        <div className="rounded-lg border border-gsp-warning/30 bg-gsp-warning/5 p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This is a template terms of service. It must
            be reviewed and finalized by qualified legal counsel before relying
            on it for compliance purposes.
          </p>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              1. Acceptance of terms
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              By accessing or using this website, you agree to be bound by these
              Terms of Service. If you do not agree, please do not use the site.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              2. Use of the website
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This website provides information about Global Staffing Partners
              and our services. You agree to use it lawfully and not to misuse,
              disrupt, or attempt to gain unauthorized access to any part of the
              site or its systems.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              3. No guarantee of outcomes
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              While we strive to provide high-quality recruitment and staffing
              services, we do not guarantee specific hiring outcomes, timelines,
              or contractor performance. Engagement terms are defined in
              separate agreements.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              4. Intellectual property
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              All content on this website — including text, graphics, logos, and
              design — is the property of {SITE.name} or its licensors and is
              protected by intellectual property laws. You may not reproduce or
              distribute it without permission.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              5. Limitation of liability
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {SITE.name} is not liable for any indirect, incidental, or
              consequential damages arising from your use of this website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              6. Changes to these terms
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may update these Terms from time to time. Continued use of the
              site after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              7. Contact
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Questions about these Terms? Contact us at{" "}
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
