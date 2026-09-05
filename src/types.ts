export type CategoryTag = 'Navagraha' | 'Shiva / Chola' | 'Vishnu / Divya Desam' | 'Devi / Amman' | 'Remedial Shrine';

export interface Temple {
  id: string;
  nameTamil: string;
  nameEnglish: string;
  nameHindi?: string;
  packageId: 1 | 2 | 3;
  note: string;
  noteTamil?: string;
  noteHindi?: string;
  deity: string;
  deityTamil?: string;
  deityHindi?: string;
  rulingPlanetOrFeature: string;
  rulingPlanetTamil?: string;
  rulingPlanetHindi?: string;
  pariharam: string;
  pariharamTamil?: string;
  pariharamHindi?: string;
  highlights: string[];
  highlightsTamil?: string[];
  highlightsHindi?: string[];
  location: string;
  locationTamil?: string;
  locationHindi?: string;
  categoryTag: CategoryTag;
  imageUrl?: string;
}

export interface PackageMeta {
  id: 1 | 2 | 3;
  title: string;
  titleTamil: string;
  titleHindi?: string;
  badge: string;
  badgeTamil?: string;
  badgeHindi?: string;
  description: string;
  descriptionTamil?: string;
  descriptionHindi?: string;
  highlightText: string;
  highlightTextTamil?: string;
  highlightTextHindi?: string;
}

export type ServiceTierId = 'economy' | 'premium' | 'elite';

export interface ServiceTier {
  id: ServiceTierId;
  name: string;
  nameTamil?: string;
  nameHindi?: string;
  badge?: string;
  badgeTamil?: string;
  badgeHindi?: string;
  vehicle: string;
  vehicleTamil?: string;
  vehicleHindi?: string;
  stay: string;
  stayTamil?: string;
  stayHindi?: string;
  food: string;
  foodTamil?: string;
  foodHindi?: string;
  specialPerk: string;
  specialPerkTamil?: string;
  specialPerkHindi?: string;
  priceNote: string;
  priceNoteTamil?: string;
  priceNoteHindi?: string;
  recommended?: boolean;
}

export interface JourneyOptions {
  selectedTempleIds: string[];
  packageId: 1 | 2 | 3;
  tier: ServiceTierId;
  travelDate: string;
  groupSize: number;
  needVehicle: boolean;
  needStay: boolean;
  needSatvicFood: boolean;
  specialAssistance: {
    seniorCitizenFriendly: boolean;
    wheelchairAssistance: boolean;
    archanaDarshanCoordination: boolean;
    familyFriendlyPacing: boolean;
  };
  specialNotes: string;
}
