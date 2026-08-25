import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Commercial Moving in Syracuse & Central New York | Moving Company",
  description:
    "Office and commercial moving services across Syracuse and Central New York. Evening and weekend scheduling to minimize business downtime.",
};

const BENEFITS = [
  {
    title: "Minimal downtime",
    description:
      "We schedule evening, overnight, or weekend moves so your business can reopen with as little disruption as possible.",
  },
  {
    title: "Office furniture experience",
    description:
      "Desks, cubicles, filing cabinets, and conference room furniture are disassembled, moved, and reassembled efficiently.",
  },
  {
    title: "Careful with equipment",
    description:
      "Computers, monitors, and office electronics are packed and transported with extra protection.",
  },
  {
    title: "Organized floor plans",
    description:
      "We can coordinate placement by floor plan or desk labeling so your team is set up at the new space quickly.",
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Walk through your space",
    description:
      "Tell us about your current and new office, including furniture, equipment, and any IT considerations.",
  },
  {
    step: "2",
    title: "Plan the schedule",
    description:
      "We help plan an evening, overnight, or weekend move to reduce impact on your business hours.",
  },
  {
    step: "3",
    title: "Moving day",
    description:
      "Our crew works efficiently through your office, labeling and protecting furniture and equipment.",
  },
  {
    step: "4",
    title: "Set up at the new office",
    description:
      "We place furniture and equipment according to your floor plan so your team can get back to work quickly.",
  },
];

const FAQS = [
  {
    question: "Can you move our office on evenings or weekends?",
    answer:
      "Yes, we regularly schedule commercial moves outside of business hours to minimize downtime.",
  },
  {
    question: "Do you handle IT equipment like computers and monitors?",
    answer:
      "Yes, we pack and transport computers, monitors, and other office electronics with extra protective care.",
  },
  {
    question: "Can you follow a floor plan for furniture placement?",
    answer:
      "Yes, share your floor plan or desk labeling and we will place furniture and equipment accordingly at the new office.",
  },
  {
    question: "Do you sign a certificate of insurance for building management?",
    answer:
      "Yes, we can provide a certificate of insurance for your building management or leasing office as needed.",
  },
];

const RELATED_SERVICES = [
  { href: "/services/furniture-delivery", title: "Furniture Delivery" },
  { href: "/services/storage-moves", title: "Storage Moves" },
  { href: "/services/labor-only", title: "Labor Only" },
];

export default function CommercialMovingPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-medium text-brand-600">Commercial Moving</p>

          <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Commercial moving across Syracuse & Central New York
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Office moves need to happen fast and without disrupting your
            business. Our crews work evenings and weekends to get your team
            into the new space with minimal downtime.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-600 px-6 text-base font-medium text-white hover:bg-brand-700"
            >
              Get My Price
            </Link>
            <a
              href="tel:+13155550100"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-neutral-300 px-6 text-base font-medium text-neutral-900 hover:bg-neutral-50"
            >
              Call (315) 555-0100
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="container-page py-16">
          <div className="flex aspect-[16/6] w-full items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-white text-center text-sm text-neutral-500">
            [REAL PHOTO GOES HERE: crew moving office furniture during an evening move]
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Why businesses choose us</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit) => (
              <Card key={benefit.title} className="h-full">
                <p className="text-lg font-semibold text-neutral-900">{benefit.title}</p>
                <p className="helper-text mt-2">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="container-page py-16">
          <h2 className="section-title text-center">How your office move works</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item) => (
              <div key={item.step}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                  {item.step}
                </div>
                <p className="mt-4 text-lg font-semibold text-neutral-900">{item.title}</p>
                <p className="helper-text mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Commercial moving pricing</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center helper-text">
            Commercial moves are generally priced by crew hours plus a truck
            fee, with quotes based on a walkthrough of your space. The
            example below is illustrative demo pricing and does not reflect
            final rates. Your online estimate will show a real range based on
            your details.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">Small office</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$900&ndash;$1,500*</p>
              <p className="helper-text mt-2">3 movers, roughly 5&ndash;7 hours</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">Mid-size office</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$1,800&ndash;$2,800*</p>
              <p className="helper-text mt-2">5 movers, roughly 7&ndash;10 hours</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">Large office</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">Custom quote*</p>
              <p className="helper-text mt-2">Multi-crew, scheduled walkthrough required</p>
            </Card>
          </div>
          <p className="mt-4 text-center text-xs text-neutral-400">
            *Demo pricing for development purposes only. Not a real quote.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Commercial moving FAQs</h2>
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

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Related services</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {RELATED_SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block rounded-xl border border-neutral-200 bg-white p-6 text-center font-medium text-neutral-900 hover:border-neutral-300"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-600">
        <div className="container-page py-16 text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Ready to plan your office move?
          </h2>
          <p className="mt-2 text-brand-50">Get an estimated price range in minutes. No obligation.</p>
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
