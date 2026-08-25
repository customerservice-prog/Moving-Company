import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Same-Day Moving in Syracuse & Central New York | Moving Company",
  description:
    "Need to move today? Request same-day moving availability across Syracuse and Central New York, subject to crew and truck availability.",
};

const BENEFITS = [
  {
    title: "Fast response",
    description:
      "Submit a same-day request and our team will follow up quickly to confirm whether a crew is available.",
  },
  {
    title: "No pressure if unavailable",
    description:
      "If same-day is not possible, we will offer the next available date instead of leaving you without a plan.",
  },
  {
    title: "Same trained crews",
    description:
      "Same-day moves are handled by the same trained, insured crews used for every other move we book.",
  },
  {
    title: "Clear communication",
    description:
      "We will let you know honestly whether we can accommodate your timeline before you commit to anything.",
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Submit your request",
    description:
      "Tell us your addresses, rough inventory, and that you need same-day service.",
  },
  {
    step: "2",
    title: "We check availability",
    description:
      "Our team checks current crew and truck availability and follows up as quickly as possible.",
  },
  {
    step: "3",
    title: "Confirm your move",
    description:
      "If a crew is available, we confirm the details and get your crew on the way.",
  },
  {
    step: "4",
    title: "Move day",
    description:
      "Your crew arrives, loads, transports, and unloads your belongings just like any other move.",
  },
];

const FAQS = [
  {
    question: "Is same-day moving always available?",
    answer:
      "Same-day availability depends on current crew and truck schedules. Request same-day availability and we will confirm as quickly as we can.",
  },
  {
    question: "What if you cannot fit my move in today?",
    answer:
      "We will offer you the next available date and time so your move is still handled quickly.",
  },
  {
    question: "Does same-day moving cost more?",
    answer:
      "Same-day requests may carry a rush fee depending on timing. Your estimate will show any applicable fees clearly.",
  },
  {
    question: "Can I request same-day labor-only help?",
    answer:
      "Yes, same-day requests can include labor-only help for loading or unloading a truck you already have.",
  },
];

const RELATED_SERVICES = [
  { href: "/services/local-moving", title: "Local Moving" },
  { href: "/services/labor-only", title: "Labor Only" },
  { href: "/services/furniture-delivery", title: "Furniture Delivery" },
];

export default function SameDayMovingPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-medium text-brand-600">Same-Day Moving</p>

          <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Same-day moving across Syracuse & Central New York
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Need to move today? Request same-day availability and our team
            will follow up quickly to let you know if a crew can be there.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-600 px-6 text-base font-medium text-white hover:bg-brand-700"
            >
              Request Same-Day Availability
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
            [REAL PHOTO GOES HERE: crew quickly loading a truck]
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Why request same-day service</h2>

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
          <h2 className="section-title text-center">How same-day requests work</h2>

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
          <div className="mx-auto max-w-2xl rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center">
            <h2 className="text-xl font-semibold text-neutral-900">
              Live same-day availability is not shown online
            </h2>
            <p className="helper-text mt-2">
              Same-day openings change throughout the day based on current
              jobs. Request same-day availability and our team will confirm
              directly with you rather than showing an unreliable online
              schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Same-day moving FAQs</h2>
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
            Need to move today?
          </h2>
          <p className="mt-2 text-brand-50">Request same-day availability and we will follow up quickly.</p>
          <Link
            href="/quote"
            className="mt-6 inline-flex h-14 items-center justify-center rounded-lg bg-white px-8 text-base font-medium text-brand-600 hover:bg-brand-50"
          >
            Request Same-Day Availability
          </Link>
        </div>
      </section>
    </>
  );
}
