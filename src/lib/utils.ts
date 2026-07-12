import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Global Staffing Partners",
  shortName: "GSP",
  description:
    "Global Staffing Partners helps companies hire, manage, and scale high-performing remote talent through seamless recruitment and managed staffing support.",
  email: "info@globalstaffingpartners.work",
  countriesServed: ["USA"],
  url: "https://globalstaffingpartners.work",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Clients", href: "/for-clients" },
  { label: "For Applicants", href: "/for-applicants" },
  { label: "For Contractors", href: "/for-contractors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
