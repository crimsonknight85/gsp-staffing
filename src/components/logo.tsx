import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

/**
 * GSP official logo.
 * - variant="dark" (default): for light backgrounds — uses transparent primary logo
 * - variant="light": for dark backgrounds — uses white/monochrome version
 *
 * Logo aspect ratio is ~3.5:1. Sized at 220x70 intrinsic, then constrained
 * by CSS: ~34px on mobile, ~40px on small screens, ~44px on desktop.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center rounded-md", className)}
      aria-label="Global Staffing Partners — Home"
    >
      <Image
        src={
          variant === "light"
            ? "/brand/gsp/gsp-primary-horizontal-white.png"
            : "/brand/gsp/gsp-primary-horizontal.png"
        }
        alt="Global Staffing Partners"
        width={220}
        height={70}
        className="h-[34px] w-auto sm:h-10 md:h-11"
        priority
      />
    </Link>
  );
}
