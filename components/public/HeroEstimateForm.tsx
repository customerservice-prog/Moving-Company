"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function HeroEstimateForm() {
const router = useRouter();
const [from, setFrom] = useState("");
const [to, setTo] = useState("");
const [date, setDate] = useState("");

function handleSubmit(event: FormEvent<HTMLFormElement>) {
event.preventDefault();
const params = new URLSearchParams();
if (from) params.set("from", from);
if (to) params.set("to", to);
if (date) params.set("date", date);
router.push(`/quote?${params.toString()}`);
}

return (
<form
onSubmit={handleSubmit}
className="w-full rounded-xl border border-neutral-200 bg-white p-5 shadow-card sm:p-6"
>
<div className="grid gap-4 sm:grid-cols-2">
<Input
label="Moving from"
placeholder="Enter your moving-from address"
value={from}
onChange={(event) => setFrom(event.target.value)}
/>
<Input
label="Moving to"
placeholder="Enter your destination address"
value={to}
onChange={(event) => setTo(event.target.value)}
/>
</div>
<div className="mt-4">
<Input
label="Moving date"
type="date"
value={date}
onChange={(event) => setDate(event.target.value)}
/>
</div>
<Button type="submit" size="lg" fullWidth className="mt-5">
Get My Price
</Button>
</form>
);
}
