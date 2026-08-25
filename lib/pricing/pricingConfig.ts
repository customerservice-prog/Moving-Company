/**
 * Centralized pricing configuration for the move estimate engine.
  *
   * IMPORTANT: These are DEMO values for local development only. They are not
    * real business pricing. Before this goes live, an operator must review and
     * replace every value here through a future admin pricing screen (see
      * Phase 3 in the project roadmap). Nothing in the UI should imply these are
       * final, binding prices.
        */

        export const PRICING_CONFIG_IS_DEMO = true;

        export const CREW_HOURLY_RATES: Record<number, number> = {
        2: 129,
        3: 169,
        4: 209,
        5: 249,
        };

        export const MINIMUM_BILLABLE_HOURS = 2;

        export const BASE_TRAVEL_FEE = 65;

        export const STAIR_FLIGHT_SURCHARGE = 25;

        export const LONG_CARRY_SURCHARGE = 40;

        export const ELEVATOR_TIME_ADDITION_MINUTES = 20;

        /**
         * Rough baseline labor hours by move size, before adjustments for access,
          * inventory volume, and services. These are intentionally conservative
           * placeholders, not a substitute for a real volumetric pricing model.
            */
            export const BASE_HOURS_BY_MOVE_TYPE: Record<string, number> = {
            STUDIO: 2.5,
            ONE_BEDROOM: 3,
            TWO_BEDROOM: 4,
            THREE_BEDROOM: 5.5,
            FOUR_BEDROOM: 7,
            FIVE_PLUS_BEDROOM: 8.5,
            PARTIAL_MOVE: 2,
            STORAGE: 2,
            OFFICE: 5,
            SINGLE_ITEM: 1.5,
            LABOR_ONLY: 2,
            };

            export const RECOMMENDED_CREW_BY_MOVE_TYPE: Record<string, number> = {
            STUDIO: 2,
            ONE_BEDROOM: 2,
            TWO_BEDROOM: 3,
            THREE_BEDROOM: 3,
            FOUR_BEDROOM: 4,
            FIVE_PLUS_BEDROOM: 5,
            PARTIAL_MOVE: 2,
            STORAGE: 2,
            OFFICE: 4,
            SINGLE_ITEM: 2,
            LABOR_ONLY: 2,
            };

            export const ESTIMATE_RANGE_SPREAD_PERCENT = 0.12;
