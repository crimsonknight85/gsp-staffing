import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Global Staffing Partners uses cookies and similar technologies.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <header>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            Legal
          </p>
          <h1 className="text-3xl font-bold text-gsp-navy sm:text-4xl">
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {new Date().getFullYear()}
          </p>
        </header>

        <div className="rounded-lg border border-gsp-warning/30 bg-gsp-warning/5 p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This is a template cookie policy. It must be
            reviewed and finalized by qualified legal counsel before relying on
            it for compliance purposes.
          </p>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              1. What are cookies?
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Cookies are small text files stored on your device when you visit
              a website. They help the site remember your actions and
              preferences over time.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              2. How we use cookies
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We currently use only essential cookies necessary for the website
              to function correctly — such as maintaining your session if you
              log in. We do not use advertising or third-party tracking cookies
              at this time.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              If we add analytics or non-essential cookies in the future, we
              will update this policy and provide appropriate notice and consent
              mechanisms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              3. Managing cookies
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              You can control and delete cookies through your browser settings.
              Note that disabling essential cookies may affect website
              functionality.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gsp-navy">
              4. Contact
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Questions about cookies? Contact us at{" "}
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
