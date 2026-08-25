"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils/cn";
import { ADDITIONAL_SERVICE_OPTIONS } from "@/components/quote/quoteTypes";

interface StepPhotosProps {
  photoCount: number;
  onChange: (count: number) => void;
}

/**
 * Step 7: optional photos. Photos are never required to continue, since
 * forcing uploads before a customer trusts the company tends to cause
 * drop-off. No real upload/storage integration exists yet, so this only
 * tracks how many photos the customer has attached so far.
 */
export function StepPhotos({ photoCount, onChange }: StepPhotosProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Card>
      <h3 className="mb-1 text-lg font-semibold text-neutral-900">Add photos (optional)</h3>
      <p className="helper-text mb-4">
        Photos of large or unusual items help our team quote more accurately.
        This step is completely optional -- you can skip it and add photos
        later from your customer dashboard.
      </p>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => onChange(photoCount + (e.target.files?.length ?? 0))}
      />
      <div className="flex items-center gap-4">
        <Button type="button" variant="outline" onClick={() => inputRef.current?.click()}>
          Choose Photos
        </Button>
        <span className="text-sm text-neutral-600">
          {photoCount > 0 ? photoCount + " photo" + (photoCount === 1 ? "" : "s") + " added" : "No photos added yet"}
        </span>
      </div>
    </Card>
  );
}

interface StepAdditionalServicesProps {
  selected: string[];
  onChange: (selected: string[]) => void;
}

/** Step 8: optional add-on services, shown as toggleable cards. */
export function StepAdditionalServices({ selected, onChange }: StepAdditionalServicesProps) {
  function toggle(value: string) {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  }

  return (
    <div>
      <h3 className="mb-1 text-lg font-semibold text-neutral-900">
        Anything else we can help with?
      </h3>
      <p className="helper-text mb-4">Optional. Select any that apply.</p>
      <div className="flex flex-col gap-3">
        {ADDITIONAL_SERVICE_OPTIONS.map((option) => {
          const isSelected = selected.includes(option.value);
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => toggle(option.value)}
              aria-pressed={isSelected}
              className={cn(
                "flex items-center justify-between rounded-xl border p-4 text-left transition-colors",
                isSelected
                  ? "border-brand-600 bg-brand-50 ring-2 ring-brand-500"
                  : "border-neutral-200 bg-white hover:border-neutral-300"
              )}
            >
              <span>
                <span className="block font-medium text-neutral-900">{option.label}</span>
                <span className="block text-sm text-neutral-600">{option.description}</span>
              </span>
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded border",
                  isSelected ? "border-brand-600 bg-brand-600 text-white" : "border-neutral-300"
                )}
                aria-hidden="true"
              >
                {isSelected ? "✓" : ""}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
