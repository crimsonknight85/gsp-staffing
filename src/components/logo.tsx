import Link from "next/link";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

/**
 * GSP provisional logo — briefcase icon in a rounded square.
 * Designed to be easily replaced when a final logo is approved.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  const iconBg = variant === "light" ? "bg-white/10" : "bg-gsp-navy";
  const nameColor = variant === "light" ? "text-white" : "text-gsp-navy";

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 rounded-md", className)}
      aria-label="Global Staffing Partners — Home"
    >
      <div className={cn("flex h-9 w-9 items-center justify-center rounded-lg", iconBg)}>
        <Briefcase className="h-5 w-5 text-white" aria-hidden="true" />
      </div>
      <span className="sr-only">Global Staffing Partners</span>
      <span className="flex flex-col" aria-hidden="true">
        <span className={cn("text-sm font-bold leading-tight tracking-tight", nameColor)}>
          Global Staffing
        </span>
        <span className="text-[10px] font-medium leading-tight uppercase tracking-widest text-gsp-terracotta">
          Partners
        </span>
      </span>
    </Link>
  );
}
