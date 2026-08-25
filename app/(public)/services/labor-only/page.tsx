import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Labor-Only Moving Help in Syracuse & Central New York | Moving Company",
  description:
    "Hire professional moving labor by the hour for loading, unloading, or rearranging. You bring the truck or POD, we bring the muscle.",
};

const BENEFITS = [
  {
    title: "Pay only for labor",
    description:
      "Already have a rental truck or POD? Hire our crew to load or unload without paying for a truck you do not need.",
  },
  {
    title: "Flexible hourly help",
    description:
      "Book two movers for a couple hours or a full crew for a full day, whatever your project requires.",
  },
  {
    title: "Trained, careful movers",
    description:
      "The same trained crews who handle full moves also handle labor-only jobs, so your belongings are treated with care.",
  },
  {
    title: "Great for more than moving",
    description:
      "Rearranging furniture, unloading a storage unit, or helping with a big delivery are all a great fit for labor-only help.",
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Tell us what you need",
    description:
      "Share the job details: loading, unloading, or rearranging, plus rough inventory and timing.",
  },
  {
    step: "2",
    title: "Book your crew",
    description:
      "Reserve the number of movers and hours you need for your date online with a deposit.",
  },
  {
    step: "3",
    title: "Crew arrives and gets to work",
    description:
      "Your movers show up on time with equipment like dollies and straps, ready to work on your schedule.",
  },
  {
    step: "4",
    title: "Job complete",
    description:
      "We confirm everything is loaded, unloaded, or placed exactly where you wanted before we leave.",
  },
];

const FAQS = [
  {
    question: "Do I need to provide the truck?",
    answer:
      "Yes, labor-only service means you provide the truck, POD, or container and our crew handles the loading or unloading.",
  },
  {
    question: "What is the minimum booking?",
    answer:
      "Labor-only bookings typically have a minimum number of hours per job. Your online estimate will show current minimums.",
  },
  {
    question: "Can you help unload a rental truck at both ends?",
    answer:
      "Yes, we can book crews for loading, unloading, or both at different locations and times.",
  },
  {
    question: "Can labor-only help with just a few large items?",
    answer:
      "Yes, labor-only crews are a great fit for moving heavy furniture or appliances within or between rooms.",
  },
];

const RELATED_SERVICES = [
  { href: "/services/local-moving", title: "Local Moving" },
  { href: "/services/furniture-delivery", title: "Furniture Delivery" },
  { href: "/services/storage-moves", title: "Storage Moves" },
];

export default function LaborOnlyPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-medium text-brand-600">Labor-Only Moving Help</p>

          <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Moving labor by the hour across Syracuse & Central New York
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Already have a truck or POD? Our crews handle the loading,
            unloading, or rearranging so you get the muscle without paying
            for a truck you do not need.
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
            [REAL PHOTO GOES HERE: crew loading a rental truck]
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Why choose labor-only help</h2>

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
          <h2 className="section-title text-center">How labor-only booking works</h2>

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
          <h2 className="section-title text-center">Labor-only pricing</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center helper-text">
            Labor-only help is priced by the hour per mover, with a minimum
            booking. The example below is illustrative demo pricing and does
            not reflect final rates. Your online estimate will show a real
            range based on your details.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">2 Movers</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$120&ndash;$160/hr*</p>
              <p className="helper-text mt-2">Good for small loads or unloads</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">3 Movers</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$170&ndash;$220/hr*</p>
              <p className="helper-text mt-2">Good for most homes</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">4+ Movers</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$220&ndash;$300/hr*</p>
              <p className="helper-text mt-2">Good for large or rushed jobs</p>
            </Card>
          </div>
          <p className="mt-4 text-center text-xs text-neutral-400">
            *Demo pricing for development purposes only. Not a real quote.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Labor-only FAQs</h2>
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
            Ready to book your moving labor?
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
