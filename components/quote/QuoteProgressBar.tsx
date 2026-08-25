"use client";

import { QUOTE_STEPS } from "@/components/quote/quoteTypes";

interface QuoteProgressBarProps {
  currentStepIndex: number;
}

/**
 * Shows overall progress through the quote wizard. Intentionally simple:
 * a step count, the current step's title, and a filled track. Does not
 * try to cram all step labels onto the screen at once, which would be
 * unreadable on mobile.
 */
export function QuoteProgressBar({ currentStepIndex }: QuoteProgressBarProps) {
  const total = QUOTE_STEPS.length;
  const current = QUOTE_STEPS[currentStepIndex] ?? QUOTE_STEPS[0]!;
  const percent = Math.round(((currentStepIndex + 1) / total) * 100);

  return (
    <div className="mb-8 w-full">
      <div className="mb-2 flex items-center justify-between text-sm text-neutral-600">
        <span>
          Step {currentStepIndex + 1} of {total}
        </span>
        <span className="font-medium text-neutral-900">{current.title}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
        <div
          className="h-full rounded-full bg-brand-600 transition-all"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
