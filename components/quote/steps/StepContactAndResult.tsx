"use client";

import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { calculateMoveEstimate } from "@/lib/pricing/calculateMoveEstimate";
import {
  MOVE_TYPE_OPTIONS,
  type QuoteContactInfo,
  type QuoteWizardState,
} from "@/components/quote/quoteTypes";

interface StepContactInfoProps {
  contact: QuoteContactInfo;
  onChange: (contact: QuoteContactInfo) => void;
}

/**
 * Step 9: contact details. Intentionally the last required step before
 * showing a result -- the wizard does not ask for personal contact
 * information any earlier than necessary.
 */
export function StepContactInfo({ contact, onChange }: StepContactInfoProps) {
  return (
    <Card>
      <h3 className="mb-1 text-lg font-semibold text-neutral-900">
        Almost done -- how can we reach you?
      </h3>
      <p className="helper-text mb-4">
        We use this to send your estimate and follow up about scheduling. We
        will not share your information with anyone else.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="First name"
          value={contact.firstName}
          onChange={(e) => onChange({ ...contact, firstName: e.target.value })}
        />
        <Input
          label="Last name"
          value={contact.lastName}
          onChange={(e) => onChange({ ...contact, lastName: e.target.value })}
        />
        <Input
          type="email"
          label="Email address"
          value={contact.email}
          onChange={(e) => onChange({ ...contact, email: e.target.value })}
        />
        <Input
          type="tel"
          label="Phone number"
          value={contact.phone}
          onChange={(e) => onChange({ ...contact, phone: e.target.value })}
        />
      </div>
      <label className="mt-4 flex items-start gap-2 text-sm text-neutral-700">
        <input
          type="checkbox"
          checked={contact.smsConsent}
          onChange={(e) => onChange({ ...contact, smsConsent: e.target.checked })}
          className="mt-0.5 h-4 w-4 rounded border-neutral-300"
        />
        It is okay to text me updates about my move.
      </label>
    </Card>
  );
}

interface StepEstimateResultProps {
  state: QuoteWizardState;
}

/**
 * Step 10: the final estimate. Uses the shared pricing engine so the
 * numbers shown here always match the same logic used elsewhere in the
 * app, and clearly labels the result as demo pricing until real business
 * pricing is entered (see lib/pricing/pricingConfig.ts).
 */
export function StepEstimateResult({ state }: StepEstimateResultProps) {
  if (!state.moveType) {
    return (
      <Card>
        <p className="text-neutral-700">
          We need a bit more information before we can put together an
          estimate. Please go back and finish the previous steps.
        </p>
      </Card>
    );
  }

  const totalItems = Object.values(state.inventoryCounts).reduce((sum, n) => sum + n, 0);

  const result = calculateMoveEstimate({
    moveType: state.moveType,
    inventoryItemCount: totalItems,
    originAccess: state.originAccess,
    destinationAccess: state.destinationAccess,
    wantsPacking: state.additionalServices.includes("packing"),
  });

  const moveTypeLabel =
    MOVE_TYPE_OPTIONS.find((option) => option.value === state.moveType)?.label ?? state.moveType;

  const estimatedHours = Math.round((result.estimatedDurationMinutes / 60) * 10) / 10;

  return (
    <div className="flex flex-col gap-6">
      <Card className="text-center">
        {result.isDemoPricing ? (
          <p className="mb-3 inline-block rounded-full bg-warning-50 px-3 py-1 text-xs font-medium text-warning-700">
            Demo pricing -- not a final quote
          </p>
        ) : null}
        <p className="text-sm text-neutral-600">Estimated price range</p>
        <p className="mt-1 text-4xl font-bold text-neutral-900">
          ${result.priceLow.toLocaleString()} - ${result.priceHigh.toLocaleString()}
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          Based on a {moveTypeLabel} move with a recommended crew of{" "}
          {result.recommendedCrewSize} and {result.recommendedTrucks} truck
          {result.recommendedTrucks === 1 ? "" : "s"}.
        </p>
      </Card>

      <Card>
        <h3 className="mb-3 text-lg font-semibold text-neutral-900">Your move summary</h3>
        <dl className="grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-neutral-500">From</dt>
            <dd className="text-neutral-900">
              {state.fromAddress.city || "Not set"}{state.fromAddress.state ? `, ${state.fromAddress.state}` : ""}
            </dd>
          </div>
          <div>
            <dt className="text-neutral-500">To</dt>
            <dd className="text-neutral-900">
              {state.toAddress.city || "Not set"}{state.toAddress.state ? `, ${state.toAddress.state}` : ""}
            </dd>
          </div>
          <div>
            <dt className="text-neutral-500">Date</dt>
            <dd className="text-neutral-900">
              {state.moveDateFlexible ? "Flexible" : state.moveDate || "Not set"}
            </dd>
          </div>
          <div>
            <dt className="text-neutral-500">Move size</dt>
            <dd className="text-neutral-900">{moveTypeLabel}</dd>
          </div>
          <div>
            <dt className="text-neutral-500">Estimated duration</dt>
            <dd className="text-neutral-900">{estimatedHours} hours</dd>
          </div>
          <div>
            <dt className="text-neutral-500">Extra services</dt>
            <dd className="text-neutral-900">
              {state.additionalServices.length > 0 ? state.additionalServices.join(", ") : "None selected"}
            </dd>
          </div>
        </dl>
      </Card>

      <Card>
        <h3 className="mb-2 text-lg font-semibold text-neutral-900">What happens next</h3>
        <p className="text-sm text-neutral-700">
          A member of our team will review your details and reach out to{" "}
          {state.contact.email || "the email you provided"} to confirm real
          availability and finalize your booking. Nothing is booked or
          charged yet.
        </p>
        <Button type="button" className="mt-4" fullWidth>
          Request to Book This Move
        </Button>
      </Card>
    </div>
  );
}
