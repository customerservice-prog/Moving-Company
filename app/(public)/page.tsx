import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { HeroEstimateForm } from "@/components/public/HeroEstimateForm";

const TRUST_ITEMS = [
"Licensed & insured",
"Upfront estimates",
"Local professional crews",
"Easy online booking",
];

const HOW_IT_WORKS = [
{
step: "1",
title: "Get your estimate",
description:
"Tell us your addresses, move date, and rough inventory. See an estimated price range in minutes.",
},
{
step: "2",
title: "Confirm details",
description:
"Add photos and access details so your estimate stays accurate and your crew arrives prepared.",
},
{
step: "3",
title: "Reserve your move",
description:
"Pick your date, reserve online, and pay a deposit to lock in your crew and truck.",
},
{
step: "4",
title: "Track & complete",
description:
"Follow your move status on moving day, then pay your remaining balance and leave a review.",
},
];

const SERVICES = [
{ href: "/services/local-moving", title: "Local Moving", description: "Moves across town, handled by a local crew." },
{ href: "/services/apartment-moving", title: "Apartment Moving", description: "Stairs, elevators, and tight hallways, no problem." },
{ href: "/services/house-moving", title: "House Moving", description: "Full household moves, room by room." },
{ href: "/services/packing", title: "Packing", description: "Professional packing and unpacking services." },
{ href: "/services/storage-moves", title: "Storage Moves", description: "Move into or out of a storage unit." },
{ href: "/services/labor-only", title: "Labor Only", description: "Just need muscle? We'll handle the loading and unloading." },
];

const WHY_DIFFERENT = [
{
title: "Transparent estimates",
description: "See your estimated price range before you book, broken down clearly.",
},
{
title: "Convenient online booking",
description: "Reserve your move date and pay your deposit without a single phone call.",
},
{
title: "Move management online",
description: "Update your inventory, upload photos, and review documents from your own portal.",
},
{
title: "Real-time status",
description: "Know when your crew is assigned, en route, and finished.",
},
{
title: "Professional protection",
description: "Furniture pads, floor protection, and careful handling on every move.",
},
{
title: "Human customer service",
description: "A local team you can actually reach when you have questions.",
},
];

const FAQS = [
{
question: "How accurate is my online estimate?",
answer:
"Your online estimate is a range based on the details you provide. It becomes more accurate as you add inventory, photos, and access information, and our team verifies it before your move is booked.",
},
{
question: "Do I have to book online?",
answer:
"No. Online booking is the fastest way to reserve your move, but you're welcome to call us if you'd rather talk through the details first.",
},
{
question: "When do I pay?",
answer:
"A deposit is collected to reserve your move date. The remaining balance is due on or after moving day, once your move is complete.",
},
{
question: "What areas do you serve?",
answer:
"We serve Syracuse and the surrounding Central New York area. Visit our service areas page for a full list of towns.",
},
];

export default function HomePage() {
return (
<>
<section className="border-b border-neutral-200 bg-white">
<div className="container-page grid gap-10 py-12 lg:grid-cols-2 lg:items-center lg:py-20">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
Moving without the guesswork.
</h1>
<p className="mt-4 text-lg text-neutral-600">
See your estimated price, choose your moving date, and reserve
your move online.
</p>
<ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
{TRUST_ITEMS.map((item) => (
<li key={item} className="text-sm font-medium text-neutral-700">
{item}
</li>
))}
</ul>
</div>
<HeroEstimateForm />
</div>
</section>

  <section className="border-b border-neutral-200 bg-neutral-50">
  <div className="container-page py-16">
  <h2 className="section-title text-center">How It Works</h2>
  <p className="section-subtitle mx-auto max-w-2xl text-center">
  From estimate to move-in day, every step happens in one place.
  </p>
  <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {HOW_IT_WORKS.map((item) => (
  <Card key={item.step}>
  <p className="text-sm font-semibold text-brand-600">Step {item.step}</p>
  <p className="mt-2 text-lg font-semibold text-neutral-900">{item.title}</p>
  <p className="helper-text mt-2">{item.description}</p>
  </Card>
  ))}
  </div></section>

    <section className="border-b border-neutral-200 bg-white">
    <div className="container-page py-16">
    <h2 className="section-title text-center">Services</h2>
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((service) => (
  <Link key={service.href} href={service.href} className="block">
  <Card className="h-full hover:border-neutral-300">
  <p className="text-lg font-semibold text-neutral-900">{service.title}</p>
  <p className="helper-text mt-2">{service.description}</p>
  </Card>
  </Link>
  ))}
    </div></section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Why We&apos;re Different</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_DIFFERENT.map((item) => (
  <div key={item.title}>
  <p className="text-lg font-semibold text-neutral-900">{item.title}</p>
  <p className="helper-text mt-2">{item.description}</p>
  </div>
  ))}
        </div>
        </div></section>

      <section className="border-b border-neutral-200 bg-white">
      <div className="container-page py-16">
      <h2 className="section-title text-center">FAQ</h2>
      <div className="mx-auto mt-10 max-w-2xl divide-y divide-neutral-200">
        {FAQS.map((faq) => (
  <details key={faq.question} className="py-4">
  <summary className="cursor-pointer text-base font-medium text-neutral-900">
    {faq.question}
  </summary>
    <p className="helper-text mt-2">{faq.answer}</p>
  </details>
  ))}
      </div>
      </div>
      </section>

      <section className="bg-brand-600">
      <div className="container-page py-16 text-center">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">
      Ready to see your price?
      </h2>
      <p className="mt-2 text-brand-50">
      Get an estimated price range in minutes. No obligation.
</p> 
      <Link
        href="/quote"
        className="mt-6 inline-flex h-14 items-center justify-center rounded-lg bg-white px-8 text-base font-medium text-brand-600 hover:bg-brand-50"
        >
      Get My Price
        </Link>
</div>
</section>
      </>
    );
    }
