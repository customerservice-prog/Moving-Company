import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Apartment Moving in Syracuse & Central New York | Moving Company",
  description:
    "Apartment and condo moving services across Syracuse and Central New York. Experienced with stairs, elevators, and building move-in rules.",
};

const BENEFITS = [
  {
    title: "Built for stairs and elevators",
    description:
      "Our crews are equipped and experienced with walk-ups, narrow stairwells, and elevator reservations so nothing gets held up.",
  },
  {
    title: "Building rule savvy",
    description:
      "We help you plan around move-in windows, certificates of insurance, and loading dock reservations many buildings require.",
  },
  {
    title: "Compact, efficient crews",
    description:
      "Right-sized teams move quickly through hallways and shared spaces without disrupting your neighbors.",
  },
  {
    title: "Careful with tight spaces",
    description:
      "Furniture pads and careful maneuvering protect walls, doorframes, and elevators along the way.",
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Tell us about your building",
    description:
      "Share your floor, elevator or stairs, and any building requirements so we can plan the right crew and timing.",
  },
  {
    step: "2",
    title: "Reserve your move date",
    description:
      "Pick your date and reserve online with a deposit, including any move-in windows your building requires.",
  },
  {
    step: "3",
    title: "Moving day",
    description:
      "Your crew arrives on time, checks in with your building if needed, and gets to work loading carefully.",
  },
  {
    step: "4",
    title: "Unload & settle in",
    description:
      "We unload at your new apartment, place furniture where you want it, and confirm everything arrived safely.",
  },
];

const FAQS = [
  {
    question: "Do you reserve service elevators?",
    answer:
      "We can coordinate with your building's management to reserve a service elevator or loading dock window when required.",
  },
  {
    question: "Does my building need a certificate of insurance?",
    answer:
      "Many buildings require one. Let us know during booking and we can provide a certificate of insurance to your property manager.",
  },
  {
    question: "Can you move me on a weekday during a limited window?",
    answer:
      "Yes. Tell us your building's allowed moving hours when you book and we will schedule your crew around them.",
  },
  {
    question: "What about street parking or loading zones?",
    answer:
      "Let us know about parking permits or loading zone restrictions so we can plan truck placement in advance.",
  },
];

const RELATED_SERVICES = [
  { href: "/services/local-moving", title: "Local Moving" },
  { href: "/services/storage-moves", title: "Storage Moves" },
  { href: "/services/labor-only", title: "Labor Only" },
];

export default function ApartmentMovingPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-medium text-brand-600">Apartment Moving</p>

          <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Apartment moving across Syracuse & Central New York
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Stairs, elevators, and building rules do not have to slow your
            move down. Our crews plan ahead so your apartment move goes
            smoothly from the first box to the last.
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
            [REAL PHOTO GOES HERE: crew moving furniture through an apartment hallway]
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Why choose us for an apartment move</h2>

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
          <h2 className="section-title text-center">How your apartment move works</h2>

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
          <h2 className="section-title text-center">Apartment moving pricing</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center helper-text">
            Apartment moves are generally priced by crew hours plus a truck
            fee. The example below is illustrative demo pricing and does not
            reflect final rates. Your online estimate will show a real range
            based on your details.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">Studio / 1 Bedroom</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$420&ndash;$680*</p>
              <p className="helper-text mt-2">2 movers, roughly 3&ndash;4 hours</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">2 Bedroom</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$650&ndash;$950*</p>
              <p className="helper-text mt-2">3 movers, roughly 4&ndash;5 hours</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">3+ Bedroom</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$950&ndash;$1,400*</p>
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
          <h2 className="section-title text-center">Apartment moving FAQs</h2>
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
            Ready to see your apartment moving price?
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
