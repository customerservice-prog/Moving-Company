import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
title: "Local Moving in Syracuse & Central New York | Moving Company",
description:
"Professional local moving services across Syracuse and Central New York. Hourly crews, transparent estimates, and careful handling for your home move.",
};

const BENEFITS = [
{
title: "Priced by the hour",
description:
"Local moves are billed by crew hours, not a flat guess, so you only pay for the time your move actually takes.",
},
{
title: "Local neighborhood knowledge",
description:
"Our crews know Syracuse-area streets, parking rules, and building requirements, so moving day goes smoothly.",
},
{
title: "Right-sized crews and trucks",
description:
"We match your crew size and truck to your inventory so nothing is rushed and nothing sits idle.",
},
{
title: "Careful handling",
description:
"Furniture pads, straps, and dollies are standard on every local move, not an upsell.",
},
];

const PROCESS = [
{
step: "1",
title: "Get your estimate",
  description:
    "Tell us your two addresses, move date, and rough inventory to see an estimated price range.",
},
  {
    step: "2",
    title: "Reserve your crew",
    description:
      "Pick your date and reserve online with a deposit to lock in your crew and truck.",
  },
  {
    step: "3",
    title: "Moving day",
    description:
      "Your crew arrives on time, protects your furniture and floors, and loads efficiently.",
  },
  {
    step: "4",
    title: "Unload & settle in",
    description:
      "We unload, place furniture where you want it, and confirm everything arrived safely.",
  },
  ];

const FAQS = [
  {
    question: "How is a local move priced?",
    answer:
      "Local moves are typically priced by the hour, based on the number of movers and truck size your move needs.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking as soon as you have a move date, especially near the end of the month.",
  },
  {
    question: "Do you move within apartments and buildings with stairs or elevators?",
    answer:
      "Yes. Let us know about stairs, elevators, and parking in your estimate so we can plan the right crew size.",
  },
  {
    question: "What should I do before the crew arrives?",
    answer:
      "Clear walkways, set aside anything you are taking yourself, and make sure boxes are labeled.",
  },
  ];

const RELATED_SERVICES = [
  { href: "/services/apartment-moving", title: "Apartment Moving" },
  ];
export default function LocalMovingPage() {
  return (
    <>
    
    <section className="border-b border-neutral-200 bg-white">
    <div className="container-page py-16 lg:py-20">
    <p className="text-sm font-medium text-brand-600">Local Moving</p>
    
    <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
    Local moving across Syracuse & Central New York
    </h1>

      <p className="mt-4 max-w-2xl text-lg text-neutral-600">
      Moving across town should not mean a full day of stress. Our local
      crews handle the loading, driving, and unloading so you can focus on
      settling into your new place.
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
    [REAL PHOTO GOES HERE: local crew loading a moving truck in Syracuse]

    </div>
    </div>
    </section>
    
    <section className="border-b border-neutral-200 bg-white">
    <div className="container-page py-16">
    <h2 className="section-title text-center">Why choose us for a local move</h2>
    
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

