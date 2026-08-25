import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Senior Moving Services in Syracuse & Central New York | Moving Company",
  description:
    "Compassionate senior moving and downsizing services across Syracuse and Central New York, coordinated with family and senior communities.",
};

const BENEFITS = [
  {
    title: "Patient, compassionate crews",
    description:
      "Our movers take the time to work at a comfortable pace and treat sentimental belongings with extra care.",
  },
  {
    title: "Downsizing support",
    description:
      "Moving to a smaller home or senior community often means downsizing. We help plan what goes, stays, or is donated.",
  },
  {
    title: "Family coordination",
    description:
      "We can coordinate move details with family members or care coordinators, not just the person moving.",
  },
  {
    title: "Experience with senior communities",
    description:
      "We are familiar with move-in requirements and timing at many local senior living and assisted living communities.",
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Plan the move together",
    description:
      "We talk with you and your family about the new space, timing, and what needs to be downsized.",
  },
  {
    step: "2",
    title: "Reserve your move date",
    description:
      "Pick a date that works for your family and the receiving community, and reserve online with a deposit.",
  },
  {
    step: "3",
    title: "Moving day",
    description:
      "Our crew arrives on time, works at a comfortable pace, and handles belongings with extra care.",
  },
  {
    step: "4",
    title: "Settle into your new home",
    description:
      "We unload and place furniture in your new space so it feels like home right away.",
  },
];

const FAQS = [
  {
    question: "Can you help with downsizing before the move?",
    answer:
      "Yes, we can talk through what to keep, donate, or pass along to family before moving day.",
  },
  {
    question: "Can family members be involved in planning the move?",
    answer:
      "Absolutely. We are happy to coordinate details with adult children or other family members alongside the person moving.",
  },
  {
    question: "Do you work with assisted living or senior communities?",
    answer:
      "Yes, we are familiar with move-in windows and requirements at many local senior living communities.",
  },
  {
    question: "Can you move at a slower, more careful pace?",
    answer:
      "Yes, we can plan extra time so the move feels calm rather than rushed.",
  },
];

const RELATED_SERVICES = [
  { href: "/services/packing", title: "Packing Services" },
  { href: "/services/local-moving", title: "Local Moving" },
  { href: "/services/storage-moves", title: "Storage Moves" },
];

export default function SeniorMovingPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-medium text-brand-600">Senior Moving</p>

          <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Compassionate senior moving across Syracuse & Central New York
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Moving later in life comes with its own pace and priorities. Our
            crews work patiently with you and your family to make the move
            as smooth and comfortable as possible.
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
            [REAL PHOTO GOES HERE: mover carefully carrying a labeled box for a senior move]
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Why families choose us</h2>

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
          <h2 className="section-title text-center">How a senior move works</h2>

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
          <h2 className="section-title text-center">Senior moving pricing</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center helper-text">
            Senior moves are generally priced by crew hours plus a truck fee,
            with extra time built in for a comfortable pace. The example
            below is illustrative demo pricing and does not reflect final
            rates. Your online estimate will show a real range based on your
            details.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">Studio / 1 Bedroom</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$450&ndash;$700*</p>
              <p className="helper-text mt-2">2 movers, roughly 3&ndash;5 hours</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">2 Bedroom</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$700&ndash;$1,000*</p>
              <p className="helper-text mt-2">3 movers, roughly 4&ndash;6 hours</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">3+ Bedroom</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$1,000&ndash;$1,500*</p>
              <p className="helper-text mt-2">4 movers, roughly 5&ndash;7 hours</p>
            </Card>
          </div>
          <p className="mt-4 text-center text-xs text-neutral-400">
            *Demo pricing for development purposes only. Not a real quote.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Senior moving FAQs</h2>
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
            Ready to plan your senior move?
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
