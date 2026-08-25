"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { QuoteProgressBar } from "@/components/quote/QuoteProgressBar";
import { StepLocations, StepDate } from "@/components/quote/steps/StepTripDetails";
import { StepMoveType } from "@/components/quote/steps/StepMoveType";
import { StepOriginAccess, StepDestinationAccess } from "@/components/quote/steps/StepAccessDetails";
import { StepInventory } from "@/components/quote/steps/StepInventory";
import { StepPhotos, StepAdditionalServices } from "@/components/quote/steps/StepPhotosAndServices";
import { StepContactInfo, StepEstimateResult } from "@/components/quote/steps/StepContactAndResult";
import {
  INITIAL_QUOTE_STATE,
  QUOTE_STEPS,
  QUOTE_WIZARD_STORAGE_KEY,
  isStepComplete,
  type QuoteWizardState,
} from "@/components/quote/quoteTypes";

function loadSavedState(): QuoteWizardState {
  if (typeof window === "undefined") return INITIAL_QUOTE_STATE;
  try {
    const raw = window.localStorage.getItem(QUOTE_WIZARD_STORAGE_KEY);
    if (!raw) return INITIAL_QUOTE_STATE;
    const parsed = JSON.parse(raw);
    return { ...INITIAL_QUOTE_STATE, ...parsed };
  } catch {
    return INITIAL_QUOTE_STATE;
  }
}

/**
 * The multi-step quote wizard shell. Handles step navigation, progress
 * persistence (see spec: unfinished quotes must survive a page refresh),
 * and prefilling from the homepage hero form via query params. The actual
 * pricing math lives in lib/pricing, and each step is its own component
 * under components/quote, so this file stays focused on orchestration.
 */
function QuoteWizard() {
  const searchParams = useSearchParams();
  const [state, setState] = useState<QuoteWizardState>(INITIAL_QUOTE_STATE);
  const [stepIndex, setStepIndex] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = loadSavedState();
    const fromParam = searchParams.get("from");
    const toParam = searchParams.get("to");
    const dateParam = searchParams.get("date");

    setState({
      ...saved,
      fromAddress: fromParam
        ? { ...saved.fromAddress, street: saved.fromAddress.street || fromParam }
        : saved.fromAddress,
      toAddress: toParam
        ? { ...saved.toAddress, street: saved.toAddress.street || toParam }
        : saved.toAddress,
      moveDate: saved.moveDate || dateParam || "",
    });
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(QUOTE_WIZARD_STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const currentStep = (QUOTE_STEPS[stepIndex] ?? QUOTE_STEPS[0])!;
  const canGoNext = isStepComplete(currentStep.key, state);
  const isLastStep = stepIndex === QUOTE_STEPS.length - 1;

  function goNext() {
    if (!canGoNext || isLastStep) return;
    setStepIndex((i) => Math.min(i + 1, QUOTE_STEPS.length - 1));
  }

  function goBack() {
    setStepIndex((i) => Math.max(i - 1, 0));
  }

  function renderStep() {
    switch (currentStep.key) {
      case "locations":
        return (
          <StepLocations
            fromAddress={state.fromAddress}
            toAddress={state.toAddress}
            onChangeFrom={(fromAddress) => setState((s) => ({ ...s, fromAddress }))}
            onChangeTo={(toAddress) => setState((s) => ({ ...s, toAddress }))}
          />
        );
      case "date":
        return (
          <StepDate
            moveDate={state.moveDate}
            moveDateFlexible={state.moveDateFlexible}
            onChangeDate={(moveDate) => setState((s) => ({ ...s, moveDate }))}
            onChangeFlexible={(moveDateFlexible) => setState((s) => ({ ...s, moveDateFlexible }))}
          />
        );
      case "move-type":
        return (
          <StepMoveType
            moveType={state.moveType}
            onChange={(moveType) => setState((s) => ({ ...s, moveType }))}
          />
        );
      case "origin-access":
        return (
          <StepOriginAccess
            access={state.originAccess}
            onChange={(originAccess) => setState((s) => ({ ...s, originAccess }))}
          />
        );
      case "destination-access":
        return (
          <StepDestinationAccess
            access={state.destinationAccess}
            onChange={(destinationAccess) => setState((s) => ({ ...s, destinationAccess }))}
          />
        );
      case "inventory":
        return (
          <StepInventory
            counts={state.inventoryCounts}
            onChange={(inventoryCounts) => setState((s) => ({ ...s, inventoryCounts }))}
          />
        );
      case "photos":
        return (
          <StepPhotos
            photoCount={state.photoCount}
            onChange={(photoCount) => setState((s) => ({ ...s, photoCount }))}
          />
        );
      case "additional-services":
        return (
          <StepAdditionalServices
            selected={state.additionalServices}
            onChange={(additionalServices) => setState((s) => ({ ...s, additionalServices }))}
          />
        );
      case "contact":
        return (
          <StepContactInfo
            contact={state.contact}
            onChange={(contact) => setState((s) => ({ ...s, contact }))}
          />
        );
      case "result":
        return <StepEstimateResult state={state} />;
      default:
        return null;
    }
  }

  return (
    <div className="container-page py-12">
      <div className="mx-auto max-w-3xl">
        <QuoteProgressBar currentStepIndex={stepIndex} />
        <div className="mb-8">{renderStep()}</div>
        {!isLastStep ? (
          <div className="flex items-center justify-between">
            <Button type="button" variant="ghost" onClick={goBack} disabled={stepIndex === 0}>
              Back
            </Button>
            <Button type="button" onClick={goNext} disabled={!canGoNext}>
              Continue
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-start">
            <Button type="button" variant="outline" onClick={goBack}>
              Back
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={null}>
      <QuoteWizard />
    </Suspense>
  );
}
