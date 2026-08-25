/**
 * Shared types, constants, and validation helpers for the multi-step quote
 * wizard. Centralizing these here keeps the individual step components
 * focused on presentation, and keeps the wizard shell's step logic simple.
 */

export interface QuoteAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface QuoteAccessDetails {
  floor: number;
  hasElevator: boolean;
  hasStairs: boolean;
  longCarry: boolean;
  parkingNotes: string;
}

export interface QuoteContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  smsConsent: boolean;
}

export interface QuoteWizardState {
  fromAddress: QuoteAddress;
  toAddress: QuoteAddress;
  moveDate: string;
  moveDateFlexible: boolean;
  moveType: string;
  originAccess: QuoteAccessDetails;
  destinationAccess: QuoteAccessDetails;
  inventoryCounts: Record<string, number>;
  photoCount: number;
  wantsPacking: boolean;
  additionalServices: string[];
  contact: QuoteContactInfo;
}

export const EMPTY_ADDRESS: QuoteAddress = {
  street: "",
  city: "",
  state: "",
  zip: "",
};

export const EMPTY_ACCESS: QuoteAccessDetails = {
  floor: 1,
  hasElevator: false,
  hasStairs: false,
  longCarry: false,
  parkingNotes: "",
};

export const INITIAL_QUOTE_STATE: QuoteWizardState = {
  fromAddress: { ...EMPTY_ADDRESS },
  toAddress: { ...EMPTY_ADDRESS },
  moveDate: "",
  moveDateFlexible: false,
  moveType: "",
  originAccess: { ...EMPTY_ACCESS },
  destinationAccess: { ...EMPTY_ACCESS },
  inventoryCounts: {},
  photoCount: 0,
  wantsPacking: false,
  additionalServices: [],
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    smsConsent: false,
  },
};

export const QUOTE_WIZARD_STORAGE_KEY = "movingco.quoteWizard.v1";

export interface MoveTypeOption {
  value: string;
  label: string;
  description: string;
}

export const MOVE_TYPE_OPTIONS: MoveTypeOption[] = [
  { value: "STUDIO", label: "Studio", description: "A studio or single room" },
  { value: "ONE_BEDROOM", label: "1 Bedroom", description: "One bedroom apartment or home" },
  { value: "TWO_BEDROOM", label: "2 Bedroom", description: "Two bedroom apartment or home" },
  { value: "THREE_BEDROOM", label: "3 Bedroom", description: "Three bedroom home" },
  { value: "FOUR_BEDROOM", label: "4 Bedroom", description: "Four bedroom home" },
  { value: "FIVE_PLUS_BEDROOM", label: "5+ Bedroom", description: "Five or more bedrooms" },
  { value: "PARTIAL_MOVE", label: "Partial Move", description: "A portion of a home's contents" },
  { value: "STORAGE", label: "Storage Move", description: "Moving into or out of storage" },
  { value: "OFFICE", label: "Office", description: "Commercial or office move" },
  { value: "SINGLE_ITEM", label: "Single Item", description: "One large item, like a couch or piano" },
  { value: "LABOR_ONLY", label: "Labor Only", description: "Loading, unloading, or rearranging help" },
];

export interface InventoryCategory {
  key: string;
  label: string;
  sampleItems: string;
}

export const INVENTORY_CATEGORIES: InventoryCategory[] = [
  { key: "livingRoom", label: "Living Room", sampleItems: "Sofas, chairs, TV, tables" },
  { key: "bedroom", label: "Bedroom", sampleItems: "Beds, dressers, nightstands" },
  { key: "kitchen", label: "Kitchen", sampleItems: "Table, chairs, small appliances" },
  { key: "diningRoom", label: "Dining Room", sampleItems: "Table, chairs, hutch" },
  { key: "office", label: "Office", sampleItems: "Desks, chairs, filing cabinets" },
  { key: "basement", label: "Basement", sampleItems: "Storage bins, shelving, tools" },
  { key: "garage", label: "Garage", sampleItems: "Tools, bikes, seasonal items" },
  { key: "outdoor", label: "Outdoor", sampleItems: "Patio furniture, grills, planters" },
  { key: "appliances", label: "Appliances", sampleItems: "Washer, dryer, refrigerator" },
  { key: "boxes", label: "Boxes", sampleItems: "Packed boxes of any size" },
  { key: "specialtyItems", label: "Specialty Items", sampleItems: "Piano, safe, pool table, art" },
];

export interface AdditionalServiceOption {
  value: string;
  label: string;
  description: string;
}

export const ADDITIONAL_SERVICE_OPTIONS: AdditionalServiceOption[] = [
  { value: "packing", label: "Full Packing", description: "Our crew packs your belongings before the move" },
  { value: "unpacking", label: "Unpacking", description: "We unpack boxes at your new home" },
  { value: "storage", label: "Short-Term Storage", description: "Keep your items safe between moves" },
  { value: "junk-removal", label: "Junk Removal", description: "Haul away items you no longer need" },
  { value: "furniture-disassembly", label: "Furniture Disassembly", description: "Take apart and reassemble large furniture" },
];

export type QuoteStepKey =
  | "locations"
  | "date"
  | "move-type"
  | "origin-access"
  | "destination-access"
  | "inventory"
  | "photos"
  | "additional-services"
  | "contact"
  | "result";

export interface QuoteStepMeta {
  key: QuoteStepKey;
  title: string;
}

export const QUOTE_STEPS: QuoteStepMeta[] = [
  { key: "locations", title: "Locations" },
  { key: "date", title: "Moving Date" },
  { key: "move-type", title: "Move Size" },
  { key: "origin-access", title: "Origin Access" },
  { key: "destination-access", title: "Destination Access" },
  { key: "inventory", title: "Inventory" },
  { key: "photos", title: "Photos" },
  { key: "additional-services", title: "Extra Services" },
  { key: "contact", title: "Contact Info" },
  { key: "result", title: "Your Estimate" },
];

function isAddressComplete(address: QuoteAddress): boolean {
  return (
    address.street.trim().length > 0 &&
    address.city.trim().length > 0 &&
    address.state.trim().length > 0 &&
    address.zip.trim().length > 0
  );
}

/**
 * Returns whether the given step's required fields are filled in. Used by
 * the wizard shell to decide whether the "Next" button should be enabled.
 * Steps not listed with extra checks below are always optional, since the
 * spec calls for photos and additional services to be skippable.
 */
export function isStepComplete(key: QuoteStepKey, state: QuoteWizardState): boolean {
  switch (key) {
    case "locations":
      return isAddressComplete(state.fromAddress) && isAddressComplete(state.toAddress);
    case "date":
      return state.moveDate.trim().length > 0 || state.moveDateFlexible;
    case "move-type":
      return state.moveType.trim().length > 0;
    case "contact":
      return (
        state.contact.firstName.trim().length > 0 &&
        state.contact.lastName.trim().length > 0 &&
        state.contact.email.trim().length > 0 &&
        state.contact.phone.trim().length > 0
      );
    default:
      return true;
  }
}
