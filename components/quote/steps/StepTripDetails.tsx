"use client";

import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import type { QuoteAddress } from "@/components/quote/quoteTypes";

interface StepLocationsProps {
  fromAddress: QuoteAddress;
  toAddress: QuoteAddress;
  onChangeFrom: (address: QuoteAddress) => void;
  onChangeTo: (address: QuoteAddress) => void;
}

/**
 * Step 1: where the move starts and ends. Two matching address forms,
 * side-by-side on larger screens and stacked on mobile.
 */
export function StepLocations({
  fromAddress,
  toAddress,
  onChangeFrom,
  onChangeTo,
}: StepLocationsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <Card>
        <h3 className="mb-4 text-lg font-semibold text-neutral-900">Moving From</h3>
        <div className="flex flex-col gap-4">
          <Input
            label="Street address"
            value={fromAddress.street}
            onChange={(e) => onChangeFrom({ ...fromAddress, street: e.target.value })}
          />
          <div className="grid grid-cols-3 gap-3">
            <Input
              label="City"
              className="col-span-2"
              value={fromAddress.city}
              onChange={(e) => onChangeFrom({ ...fromAddress, city: e.target.value })}
            />
            <Input
              label="State"
              value={fromAddress.state}
              onChange={(e) => onChangeFrom({ ...fromAddress, state: e.target.value })}
            />
          </div>
          <Input
            label="ZIP code"
            value={fromAddress.zip}
            onChange={(e) => onChangeFrom({ ...fromAddress, zip: e.target.value })}
          />
        </div>
      </Card>
      <Card>
        <h3 className="mb-4 text-lg font-semibold text-neutral-900">Moving To</h3>
        <div className="flex flex-col gap-4">
          <Input
            label="Street address"
            value={toAddress.street}
            onChange={(e) => onChangeTo({ ...toAddress, street: e.target.value })}
          />
          <div className="grid grid-cols-3 gap-3">
            <Input
              label="City"
              className="col-span-2"
              value={toAddress.city}
              onChange={(e) => onChangeTo({ ...toAddress, city: e.target.value })}
            />
            <Input
              label="State"
              value={toAddress.state}
              onChange={(e) => onChangeTo({ ...toAddress, state: e.target.value })}
            />
          </div>
          <Input
            label="ZIP code"
            value={toAddress.zip}
            onChange={(e) => onChangeTo({ ...toAddress, zip: e.target.value })}
          />
        </div>
      </Card>
    </div>
  );
}

interface StepDateProps {
  moveDate: string;
  moveDateFlexible: boolean;
  onChangeDate: (value: string) => void;
  onChangeFlexible: (value: boolean) => void;
}

/**
 * Step 2: preferred moving date. Intentionally does not show a live
 * availability calendar, since no real scheduling data exists yet. The
 * flexible-date checkbox lets a customer proceed without a fixed date.
 */
export function StepDate({
  moveDate,
  moveDateFlexible,
  onChangeDate,
  onChangeFlexible,
}: StepDateProps) {
  return (
    <Card>
      <h3 className="mb-4 text-lg font-semibold text-neutral-900">When are you moving?</h3>
      <div className="flex flex-col gap-4 sm:max-w-sm">
        <Input
          type="date"
          label="Preferred moving date"
          value={moveDate}
          onChange={(e) => onChangeDate(e.target.value)}
          disabled={moveDateFlexible}
        />
        <label className="flex items-center gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            checked={moveDateFlexible}
            onChange={(e) => onChangeFlexible(e.target.checked)}
            className="h-4 w-4 rounded border-neutral-300"
          />
          My date is flexible
        </label>
        <p className="helper-text">
          We do not show live scheduling slots here yet. After you finish
          this estimate, our team will confirm real availability for your
          date.
        </p>
      </div>
    </Card>
  );
}
