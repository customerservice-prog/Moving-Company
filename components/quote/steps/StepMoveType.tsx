"use client";

import { cn } from "@/lib/utils/cn";
import { MOVE_TYPE_OPTIONS } from "@/components/quote/quoteTypes";

interface StepMoveTypeProps {
  moveType: string;
  onChange: (value: string) => void;
}

/**
 * Step 3: move size, shown as tappable visual cards rather than a plain
 * dropdown select. Large touch targets keep this comfortable on mobile,
 * and the selected card is clearly highlighted.
 */
export function StepMoveType({ moveType, onChange }: StepMoveTypeProps) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-neutral-900">
        What best describes your move?
      </h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {MOVE_TYPE_OPTIONS.map((option) => {
          const selected = option.value === moveType;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={selected}
              className={cn(
                "flex flex-col items-start rounded-xl border p-4 text-left transition-colors",
                selected
                  ? "border-brand-600 bg-brand-50 ring-2 ring-brand-500"
                  : "border-neutral-200 bg-white hover:border-neutral-300"
              )}
            >
              <span className="font-medium text-neutral-900">{option.label}</span>
              <span className="mt-1 text-sm text-neutral-600">{option.description}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
