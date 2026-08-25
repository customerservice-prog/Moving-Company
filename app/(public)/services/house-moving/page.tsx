import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "House Moving in Syracuse & Central New York | Moving Company",
  description:
    "Full-service house moving across Syracuse and Central New York. Experienced crews for single-family homes, garages, and basements.",
};

const BENEFITS = [
  {
    title: "Sized for whole-home moves",
    description:
      "We bring the crew size and truck capacity to handle every room, including garages, basements, and attics.",
  },
  {
    title: "Room-by-room organization",
    description:
      "Boxes and furniture are labeled and loaded by room so unloading at your new house is fast and organized.",
  },
  {
    title: "Experienced with large furniture",
    description:
      "Sectionals, dressers, and appliances are disassembled and reassembled with care when needed.",
  },
  {
    title: "Protection for two properties",
    description:
      "We protect floors, doorways, and stair rails at both your old and new home during the move.",
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Walk through your home",
    description:
      "Tell us about your home's size, rooms, and any large or fragile items so we can plan the right crew and truck.",
  },
  {
    step: "2",
    title: "Reserve your move date",
    description:
      "Pick your date and reserve online with a deposit to lock in your crew and truck.",
  },
  {
    step: "3",
    title: "Loading day",
    description:
      "Your crew works room by room, protecting furniture and floors while loading the truck efficiently.",
  },
  {
    step: "4",
    title: "Unload & set up",
    description:
      "We unload at your new house, place furniture where you want it, and reassemble items as needed.",
  },
];

const FAQS = [
  {
    question: "How long does a house move take?",
    answer:
      "Most local house moves take a full day, depending on home size, stairs, and distance between properties.",
  },
  {
    question: "Do you disassemble and reassemble furniture?",
    answer:
      "Yes, our crews can disassemble and reassemble beds, tables, and other furniture as part of your move.",
  },
  {
    question: "Can you move items from the garage and basement?",
    answer:
      "Yes. Let us know about garages, basements, sheds, or attics in your estimate so we can plan accordingly.",
  },
  {
    question: "What if my move-in date is different from my move-out date?",
    answer:
      "We can coordinate a same-day move or help plan short-term storage if your dates do not line up.",
  },
];

const RELATED_SERVICES = [
  { href: "/services/local-moving", title: "Local Moving" },
  { href: "/services/packing", title: "Packing Services" },
  { href: "/services/storage-moves", title: "Storage Moves" },
];

export default function HouseMovingPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-medium text-brand-600">House Moving</p>

          <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            House moving across Syracuse & Central New York
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Whole-home moves take planning. Our crews handle every room,
            garage, and basement so your move to a new house goes smoothly
            from start to finish.
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
            [REAL PHOTO GOES HERE: crew loading furniture from a house into a moving truck]
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Why choose us for a house move</h2>

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
          <h2 className="section-title text-center">How your house move works</h2>

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
          <h2 className="section-title text-center">House moving pricing</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center helper-text">
            House moves are generally priced by crew hours plus a truck fee.
            The example below is illustrative demo pricing and does not
            reflect final rates. Your online estimate will show a real range
            based on your details.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">2&ndash;3 Bedroom House</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$800&ndash;$1,300*</p>
              <p className="helper-text mt-2">3 movers, roughly 5&ndash;7 hours</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">4 Bedroom House</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$1,300&ndash;$1,900*</p>
              <p className="helper-text mt-2">4 movers, roughly 6&ndash;9 hours</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">5+ Bedroom House</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$1,900&ndash;$2,800*</p>
              <p className="helper-text mt-2">5+ movers, roughly 8&ndash;10 hours</p>
            </Card>
          </div>
          <p className="mt-4 text-center text-xs text-neutral-400">
            *Demo pricing for development purposes only. Not a real quote.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">House moving FAQs</h2>
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
            Ready to see your house moving price?
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
