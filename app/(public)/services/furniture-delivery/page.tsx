import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Furniture Delivery in Syracuse & Central New York | Moving Company",
  description:
    "White-glove furniture delivery across Syracuse and Central New York for single items, store purchases, and online orders.",
};

const BENEFITS = [
  {
    title: "White-glove handling",
    description:
      "Your furniture is wrapped, carried, and placed exactly where you want it, with no scuffs or scratches.",
  },
  {
    title: "Great for store purchases",
    description:
      "Bought a sofa, mattress, or dining set that will not fit in your car? We pick up and deliver it for you.",
  },
  {
    title: "Two-person delivery teams",
    description:
      "Every delivery includes at least two movers so large or heavy items are handled safely.",
  },
  {
    title: "Assembly available",
    description:
      "Need a piece assembled or placed in a specific room? We can handle basic assembly on delivery.",
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Tell us about your item",
    description:
      "Share the item, pickup location, delivery address, and any stairs or elevator details.",
  },
  {
    step: "2",
    title: "Schedule your delivery",
    description:
      "Pick a delivery window that works for you and reserve online with a deposit.",
  },
  {
    step: "3",
    title: "Pickup and transport",
    description:
      "Our crew picks up your item from the store, warehouse, or seller and transports it carefully.",
  },
  {
    step: "4",
    title: "Delivery and placement",
    description:
      "We deliver, unwrap, and place the item exactly where you want it in your home.",
  },
];

const FAQS = [
  {
    question: "Can you pick up furniture from a store or online seller?",
    answer:
      "Yes, we can pick up from furniture stores, warehouses, or private sellers and deliver directly to your home.",
  },
  {
    question: "Do you deliver mattresses and large appliances?",
    answer:
      "Yes, mattresses, large appliances, and bulky furniture are all common furniture delivery jobs for us.",
  },
  {
    question: "Can you assemble the furniture after delivery?",
    answer:
      "Basic assembly is available for many items. Let us know what you need assembled when you book.",
  },
  {
    question: "Is there a minimum delivery fee?",
    answer:
      "Yes, furniture delivery has a minimum fee that covers the pickup, transport, and placement of your item.",
  },
];

const RELATED_SERVICES = [
  { href: "/services/labor-only", title: "Labor Only" },
  { href: "/services/local-moving", title: "Local Moving" },
  { href: "/services/commercial-moving", title: "Commercial Moving" },
];

export default function FurnitureDeliveryPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-medium text-brand-600">Furniture Delivery</p>

          <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Furniture delivery across Syracuse & Central New York
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Bought furniture that will not fit in your car? Our crews pick up
            and deliver single items with white-glove care, from sofas to
            dining sets.
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
            [REAL PHOTO GOES HERE: two movers carrying a wrapped sofa into a home]
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Why choose our delivery service</h2>

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
          <h2 className="section-title text-center">How furniture delivery works</h2>

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
          <h2 className="section-title text-center">Furniture delivery pricing</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center helper-text">
            Furniture delivery is generally priced per item plus distance.
            The example below is illustrative demo pricing and does not
            reflect final rates. Your online estimate will show a real range
            based on your details.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">Single item</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$120&ndash;$220*</p>
              <p className="helper-text mt-2">Sofa, mattress, or similar</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">Multiple items</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">$220&ndash;$400*</p>
              <p className="helper-text mt-2">Living room or bedroom set</p>
            </Card>
            <Card className="text-center">
              <p className="text-sm font-medium text-brand-600">With assembly</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">+$50&ndash;$100*</p>
              <p className="helper-text mt-2">Basic assembly add-on</p>
            </Card>
          </div>
          <p className="mt-4 text-center text-xs text-neutral-400">
            *Demo pricing for development purposes only. Not a real quote.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16">
          <h2 className="section-title text-center">Furniture delivery FAQs</h2>
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
            Ready to schedule your delivery?
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
