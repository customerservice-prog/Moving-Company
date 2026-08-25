import {
BASE_HOURS_BY_MOVE_TYPE,
  BASE_TRAVEL_FEE,
  CREW_HOURLY_RATES,
  ELEVATOR_TIME_ADDITION_MINUTES,
  ESTIMATE_RANGE_SPREAD_PERCENT,
  LONG_CARRY_SURCHARGE,
  MINIMUM_BILLABLE_HOURS,
  PRICING_CONFIG_IS_DEMO,
  RECOMMENDED_CREW_BY_MOVE_TYPE,
  STAIR_FLIGHT_SURCHARGE,
  } from "@/lib/pricing/pricingConfig";

export interface MoveAccessInput {
  floor: number;
hasElevator: boolean;
hasStairs: boolean;
longCarry: boolean;
}

export interface MoveEstimateInput {
  moveType: string;
inventoryItemCount: number;
originAccess: MoveAccessInput;
destinationAccess: MoveAccessInput;
wantsPacking?: boolean;
}

export interface MoveEstimateResult {
  recommendedCrewSize: number;
recommendedTrucks: number;
estimatedDurationMinutes: number;
priceLow: number;
priceHigh: number;
isDemoPricing: boolean;
}

function estimateStairFlights(access: MoveAccessInput): number {
  if (access.hasElevator) return 0;
if (!access.hasStairs) return 0;
// Without exact flight counts yet, assume one flight when stairs are flagged.
return 1;
}

/**
 * Produces a rough, clearly-labeled estimate. This intentionally uses a
 * simple, transparent model rather than a black box, so it is easy to
 * reason about and to replace with real business pricing later.
   */
export function calculateMoveEstimate(
input: MoveEstimateInput
): MoveEstimateResult {
  const baseHours = BASE_HOURS_BY_MOVE_TYPE[input.moveType] ?? 3;
const crewSize = RECOMMENDED_CREW_BY_MOVE_TYPE[input.moveType] ?? 2;
const hourlyRate = CREW_HOURLY_RATES[crewSize] ?? CREW_HOURLY_RATES[2]!;

const inventoryAdjustmentHours = Math.min(input.inventoryItemCount / 20, 3);

const stairFlights =
estimateStairFlights(input.originAccess) +
  estimateStairFlights(input.destinationAccess);

const elevatorMinutes =
(input.originAccess.hasElevator ? ELEVATOR_TIME_ADDITION_MINUTES : 0) +
  (input.destinationAccess.hasElevator ? ELEVATOR_TIME_ADDITION_MINUTES : 0);

const longCarryHours =
(input.originAccess.longCarry ? 0.5 : 0) +
  (input.destinationAccess.longCarry ? 0.5 : 0);

const packingHours = input.wantsPacking ? 1.5 : 0;

const totalHours = Math.max(
MINIMUM_BILLABLE_HOURS,
baseHours +
inventoryAdjustmentHours +
stairFlights * 0.25 +
elevatorMinutes / 60 +
longCarryHours +
packingHours
);

const laborCost = totalHours * hourlyRate;
const surcharges =
stairFlights * STAIR_FLIGHT_SURCHARGE +
(input.originAccess.longCarry ? LONG_CARRY_SURCHARGE : 0) +
(input.destinationAccess.longCarry ? LONG_CARRY_SURCHARGE : 0);

const midpoint = BASE_TRAVEL_FEE + laborCost + surcharges;
const spread = midpoint * ESTIMATE_RANGE_SPREAD_PERCENT;

const recommendedTrucks = crewSize >= 4 ? 2 : 1;

return {
  recommendedCrewSize: crewSize,
  recommendedTrucks,
  estimatedDurationMinutes: Math.round(totalHours * 60),
  priceLow: Math.round(midpoint - spread),
  priceHigh: Math.round(midpoint + spread),
  isDemoPricing: PRICING_CONFIG_IS_DEMO,
  };
}
