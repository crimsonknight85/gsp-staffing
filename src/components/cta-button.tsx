import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "lg" | "sm";
  className?: string;
  withArrow?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  withArrow = false,
}: CTAButtonProps) {
  return (
    <Link href={href}>
      <Button
        size={size}
        className={cn(
          variant === "primary" &&
            "bg-gsp-terracotta text-white hover:bg-[#7A5E3F] shadow-md hover:shadow-lg",
          variant === "secondary" &&
            "bg-white text-gsp-navy hover:bg-slate-100 font-semibold shadow-md",
          "transition-all duration-300 hover:-translate-y-0.5",
          className
        )}
      >
        {children}
        {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
    </Link>
  );
}
