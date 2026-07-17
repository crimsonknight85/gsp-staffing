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
        width={180}
        height={51}
        className="h-auto w-auto max-h-[40px] w-auto"
        priority
      />
    </Link>
  );
}
