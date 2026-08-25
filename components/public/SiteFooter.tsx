import Link from "next/link";

const COMPANY_PHONE_DISPLAY = "(315) 555-0100";
const COMPANY_PHONE_HREF = "tel:+13155550100";

const FOOTER_COLUMNS = [
{
title: "Services",
links: [
{ href: "/services/local-moving", label: "Local Moving" },
{ href: "/services/apartment-moving", label: "Apartment Moving" },
{ href: "/services/house-moving", label: "House Moving" },
{ href: "/services/packing", label: "Packing" },
{ href: "/services/storage-moves", label: "Storage Moves" },
],
},
{
title: "Company",
links: [
{ href: "/about", label: "About" },
{ href: "/reviews", label: "Reviews" },
{ href: "/service-areas", label: "Service Areas" },
{ href: "/faq", label: "FAQ" },
{ href: "/contact", label: "Contact" },
],
},
];

export function SiteFooter() {
const year = new Date().getFullYear();

return (
<footer className="border-t border-neutral-200 bg-neutral-50">
<div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
<div>
<p className="text-lg font-semibold text-neutral-900">Moving Company</p>
<p className="helper-text mt-2 max-w-xs">
Licensed, insured, local crews serving Syracuse and Central New
York. Get an upfront estimate and book online.
</p>
<a
href={COMPANY_PHONE_HREF}
className="mt-4 inline-block text-sm font-medium text-brand-600"
>
{COMPANY_PHONE_DISPLAY}
</a>
</div>

{FOOTER_COLUMNS.map((column) => (
<div key={column.title}>
<p className="metadata-text">{column.title}</p>
<ul className="mt-3 space-y-2">
{column.links.map((link) => (
<li key={link.href}>
<Link
href={link.href}
className="text-sm text-neutral-600 hover:text-neutral-900"
>
{link.label}
</Link>
</li>
))}
</ul>
</div>
))}

<div>
<p className="metadata-text">Get Started</p>
<p className="helper-text mt-3">
See your estimated price and reserve your move online in minutes.
</p>
<Link
href="/quote"
className="mt-4 inline-flex h-11 items-center justify-center rounded-lg bg-brand-600 px-5 text-sm font-medium text-white hover:bg-brand-700"
>
Get My Price
</Link>
</div>
</div>

<div className="border-t border-neutral-200 py-6">
<p className="container-page text-xs text-neutral-500">
&copy; {year} Moving Company. All rights reserved.
</p>
</div>
</footer>
);
}
