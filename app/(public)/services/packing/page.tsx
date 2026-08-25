import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Packing Services in Syracuse & Central New York | Moving Company",
  description:
    "Professional packing and unpacking services across Syracuse and Central New York. Full packing, partial packing, and fragile-item specialists.",
};

const BENEFITS = [
  {
    title: "Full or partial packing",
    description:
      "Have our crew pack your entire home, or just the rooms and items you would rather not pack yourself.",
  },
  {
    title: "Trained for fragile items",
    description:
      "Dishes, glassware, artwork, and electronics are wrapped and boxed using the right materials for each item.",
  },
  {
    title: "Quality packing materials",
    description:
      "We bring sturdy boxes, packing paper, bubble wrap, and tape, all included in your packing service.",
  },
  {
    title: "Faster moving day",
    description:
      "Professionally packed homes load and unload faster, since everything is boxed, labeled, and ready to go.",
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Choose your packing level",
    description:
      "Tell us if you want full packing, partial packing of specific rooms, or just help with fragile items.",
  },
  {
    step: "2",
    title: "Schedule your packing day",
    description:
      "Book a packing appointment before your move date, either the day before or earlier in the week.",
  },
  {
    step: "3",
    title: "Packing day",
    description:
      "Our crew arrives with materials and carefully packs and labels boxes by room for an organized move.",
  },
  {
    step: "4",
    title: "Unpacking (optional)",
    description:
      "Add unpacking help at your new home so boxes are emptied and materials removed after the move.",
  },
];

const FAQS = [
  {
    question: "Do you provide the boxes and packing materials?",
    answer:
      "Yes, all boxes, packing paper, tape, and bubble wrap are included as part of our packing service.",
  },
  {
    question: "Can I pack some rooms myself and have you pack the rest?",
    answer:
      "Yes, partial packing is common. Tell us which rooms or items you would like our crew to handle.",
  },
  {
    question: "How far in advance should packing happen?",
    answer:
      "Packing is typically scheduled one to two days before your move, depending on the size of your home.",
  },
  {
    question: "Do you offer unpacking services too?",
    answer:
      "Yes, we offer unpacking at your new home as an add-on so you can settle in faster.",
  },
];

const RELATED_SERVICES = [
  { href: "/services/local-moving", title: "Local Moving" },
  { href: "/services/house-moving", title: "House Moving" },
  { href: "/services/senior-moving", title: "Senior Moving" },
];

export default function PackingPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-medium text-brand-600">Packing Services</p>

          <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Professional packing across Syracuse & Central New York
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Skip the late nights with bubble wrap and boxes. Our crews pack
            your home carefully and efficiently, from fragile dishes to
            entire rooms.
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
            [REAL PHOTO GOES HERE: crew carefully packing dishes into a labeled box]
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Why choose our packing service</h2>

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
          <h2 className="section-title text-center">How packing service works</h2>

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
          <h2 className="section-title text-center">Packing pricing</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center helper-text">
            Packing is generally priced by crew hours plus materials. The
            example below is illustrative demo pricing and does not reflect
            final rates. Your online estimate will show a real range based on
            your details.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">Kitchen or fragile items only</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$180&ndash;$300*</p>
              <p className="helper-text mt-2">2 packers, roughly 2&ndash;3 hours</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">Partial home packing</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$350&ndash;$600*</p>
              <p className="helper-text mt-2">2&ndash;3 packers, roughly 4&ndash;6 hours</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">Full home packing</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$700&ndash;$1,200*</p>
              <p className="helper-text mt-2">3&ndash;4 packers, roughly 6&ndash;9 hours</p>
            </Card>
          </div>
          <p className="mt-4 text-center text-xs text-neutral-400">
            *Demo pricing for development purposes only. Not a real quote.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Packing FAQs</h2>
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
            Ready to see your packing price?
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
