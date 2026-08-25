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
