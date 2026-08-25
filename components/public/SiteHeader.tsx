"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

const NAV_LINKS = [
{ href: "/services", label: "Services" },
{ href: "/moving-cost-calculator", label: "Pricing" },
{ href: "/how-it-works", label: "How It Works" },
{ href: "/reviews", label: "Reviews" },
{ href: "/service-areas", label: "Service Areas" },
{ href: "/about", label: "About" },
{ href: "/faq", label: "FAQ" },
];

const COMPANY_PHONE_DISPLAY = "(315) 555-0100";
const COMPANY_PHONE_HREF = "tel:+13155550100";

const ctaClasses =
"inline-flex h-11 items-center justify-center rounded-lg bg-brand-600 px-5 text-sm font-medium text-white hover:bg-brand-700";

export function SiteHeader() {
const [menuOpen, setMenuOpen] = useState(false);

return (
<header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
<div className="container-page flex h-16 items-center justify-between">
<Link href="/" className="text-lg font-semibold text-neutral-900">
Moving Company
</Link>

<nav className="hidden items-center gap-6 lg:flex">
{NAV_LINKS.map((link) => (
<Link
key={link.href}
href={link.href}
className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
>
{link.label}
</Link>
))}
</nav>

<div className="hidden items-center gap-4 lg:flex">
<a
href={COMPANY_PHONE_HREF}
className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
>
{COMPANY_PHONE_DISPLAY}
</a>
<Link href="/quote" className={ctaClasses}>
Get My Price
</Link>
</div>

<button
type="button"
className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-neutral-700 lg:hidden"
aria-expanded={menuOpen}
aria-label="Toggle menu"
onClick={() => setMenuOpen((open) => !open)}
>
<span className="sr-only">Toggle menu</span>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path
d="M4 7h16M4 12h16M4 17h16"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
/>
</svg>
</button>
</div>

{menuOpen ? (
<nav className="border-t border-neutral-200 bg-white lg:hidden">
<div className="container-page flex flex-col gap-1 py-3">
{NAV_LINKS.map((link) => (
<Link
key={link.href}
href={link.href}
className="rounded-lg px-3 py-3 text-base font-medium text-neutral-800 hover:bg-neutral-50"
onClick={() => setMenuOpen(false)}
>
{link.label}
</Link>
))}
<a
href={COMPANY_PHONE_HREF}
className="rounded-lg px-3 py-3 text-base font-medium text-neutral-800 hover:bg-neutral-50"
>
Call {COMPANY_PHONE_DISPLAY}
</a>
<div className="px-3 pt-2">
<Link href="/quote" className={cn(ctaClasses, "w-full")}>
Get My Price
</Link>
</div>
</div>
</nav>
) : null}
</header>
);
}
