"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center bg-card px-4 py-20">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gsp-navy">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">Page not found</p>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-border"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Link href="/">
            <Button className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] transition-all duration-300 hover:-translate-y-0.5">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
