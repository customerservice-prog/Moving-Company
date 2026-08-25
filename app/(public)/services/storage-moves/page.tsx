import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Storage Moves in Syracuse & Central New York | Moving Company",
  description:
    "Moving into storage, out of storage, or between homes with a storage stop. Short-term and long-term storage move services.",
};

const BENEFITS = [
  {
    title: "Flexible storage timing",
    description:
      "Moving between homes with a gap in dates? We can move your belongings into storage and back out when you are ready.",
  },
  {
    title: "Careful loading for storage",
    description:
      "Items are wrapped and loaded to protect them during time in a storage unit, not just a quick truck ride.",
  },
  {
    title: "Full or partial storage",
    description:
      "Store everything during a transition, or just the items that will not fit in your new place right away.",
  },
  {
    title: "One crew, two trips",
    description:
      "The same crew can handle both the move into storage and the later move out, keeping the process consistent.",
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Tell us your timeline",
    description:
      "Share your move-out date, how long you need storage, and your expected move-in date if known.",
  },
  {
    step: "2",
    title: "Reserve your move and storage",
    description:
      "Book your move into storage online with a deposit, and let us know if you already have a storage unit or need help finding one.",
  },
  {
    step: "3",
    title: "Move into storage",
    description:
      "Our crew loads and carefully packs your belongings into your storage unit or our truck for transport.",
  },
  {
    step: "4",
    title: "Move out of storage",
    description:
      "When you are ready, we schedule your move out of storage and into your new home.",
  },
];

const FAQS = [
  {
    question: "Do I need my own storage unit?",
    answer:
      "You can use your own storage unit, or ask us about local storage options we work with regularly.",
  },
  {
    question: "How long can my belongings stay in storage?",
    answer:
      "Storage moves can support short gaps of a few days or longer-term storage of several months, depending on your needs.",
  },
  {
    question: "Can you move only part of my home into storage?",
    answer:
      "Yes, partial storage is common, especially when downsizing or waiting on space in a new home.",
  },
  {
    question: "Is the same crew used for move-in and move-out of storage?",
    answer:
      "Where possible, we try to keep the same crew for consistency, though this depends on scheduling and timing.",
  },
];

const RELATED_SERVICES = [
  { href: "/services/local-moving", title: "Local Moving" },
  { href: "/services/house-moving", title: "House Moving" },
  { href: "/services/labor-only", title: "Labor Only" },
];

export default function StorageMovesPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-medium text-brand-600">Storage Moves</p>

          <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Storage moves across Syracuse & Central New York
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Dates do not always line up perfectly. Whether you need short-term
            or long-term storage, our crews handle the move in and the move
            out with the same care.
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
            [REAL PHOTO GOES HERE: crew loading boxes into a storage unit]
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Why choose us for storage moves</h2>

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
          <h2 className="section-title text-center">How storage moves work</h2>

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
          <h2 className="section-title text-center">Storage move pricing</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center helper-text">
            Storage moves are generally priced by crew hours for loading and
            unloading, plus any storage unit fees. The example below is
            illustrative demo pricing and does not reflect final rates. Your
            online estimate will show a real range based on your details.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">Move into storage</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$350&ndash;$700*</p>
              <p className="helper-text mt-2">Based on home size and access</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">Move out of storage</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$350&ndash;$700*</p>
              <p className="helper-text mt-2">Based on home size and access</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">Both, bundled</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$650&ndash;$1,300*</p>
              <p className="helper-text mt-2">Bundled discount when booked together</p>
            </Card>
          </div>
          <p className="mt-4 text-center text-xs text-neutral-400">
            *Demo pricing for development purposes only. Not a real quote.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Storage move FAQs</h2>
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
            Ready to plan your storage move?
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
