export interface Temple {
  id: string;
  nameTamil: string;
  nameEnglish: string;
  packageId: 1 | 2 | 3;
  note: string;
  deity: string;
  rulingPlanetOrFeature: string;
  pariharam: string;
  highlights: string[];
  location: string;
  categoryTag: 'Navagraha' | 'Shiva / Chola' | 'Vishnu / Divya Desam' | 'Devi / Amman' | 'Remedial Shrine';
  imageUrl?: string;
}

export interface PackageMeta {
  id: 1 | 2 | 3;
  title: string;
  titleTamil: string;
  badge: string;
  description: string;
  highlightText: string;
}

export type ServiceTierId = 'economy' | 'premium' | 'elite';

export interface ServiceTier {
  id: ServiceTierId;
  name: string;
  badge?: string;
  vehicle: string;
  stay: string;
  food: string;
  specialPerk: string;
  priceNote: string;
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
