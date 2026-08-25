"use client";

import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import type { QuoteAccessDetails } from "@/components/quote/quoteTypes";

interface AccessFormProps {
  title: string;
  helperText: string;
  access: QuoteAccessDetails;
  onChange: (access: QuoteAccessDetails) => void;
}

/**
 * Shared form used by both the origin and destination access steps. Keeping
 * this in one place avoids duplicating the same set of fields twice.
 */
function AccessForm({ title, helperText, access, onChange }: AccessFormProps) {
  return (
    <Card>
      <h3 className="mb-1 text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="helper-text mb-4">{helperText}</p>
      <div className="flex flex-col gap-4 sm:max-w-md">
        <Input
          type="number"
          min={0}
          label="Floor number"
          value={access.floor}
          onChange={(e) => onChange({ ...access, floor: Number(e.target.value) })}
        />
        <label className="flex items-center gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            checked={access.hasElevator}
            onChange={(e) => onChange({ ...access, hasElevator: e.target.checked })}
            className="h-4 w-4 rounded border-neutral-300"
          />
          There is an elevator
        </label>
        <label className="flex items-center gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            checked={access.hasStairs}
            onChange={(e) => onChange({ ...access, hasStairs: e.target.checked })}
            className="h-4 w-4 rounded border-neutral-300"
          />
          There are stairs with no elevator
        </label>
        <label className="flex items-center gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            checked={access.longCarry}
            onChange={(e) => onChange({ ...access, longCarry: e.target.checked })}
            className="h-4 w-4 rounded border-neutral-300"
          />
          Long carry from parking to the door (over 75 feet)
        </label>
        <Input
          label="Parking notes (optional)"
          placeholder="e.g. street parking only, narrow driveway"
          value={access.parkingNotes}
          onChange={(e) => onChange({ ...access, parkingNotes: e.target.value })}
        />
      </div>
    </Card>
  );
}

interface StepAccessProps {
  access: QuoteAccessDetails;
  onChange: (access: QuoteAccessDetails) => void;
}

/** Step 4: access details at the pickup location. */
export function StepOriginAccess({ access, onChange }: StepAccessProps) {
  return (
    <AccessForm
      title="Access at your current place"
      helperText="This helps our crew plan the right truck, equipment, and timing."
      access={access}
      onChange={onChange}
    />
  );
}

/** Step 5: access details at the drop-off location. */
export function StepDestinationAccess({ access, onChange }: StepAccessProps) {
  return (
    <AccessForm
      title="Access at your new place"
      helperText="The same details for where everything is being delivered."
      access={access}
      onChange={onChange}
    />
  );
}
