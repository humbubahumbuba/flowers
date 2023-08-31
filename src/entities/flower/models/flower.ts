export interface Flower {
  blooming_season: string;
  common_name: string;
  cover_image: string;
  depth: {
    numberInt: string;
  };
  height: {
    numberInt: string;
  }[];
  latin_name: string;
  notes: string;
  soil: string[];
  spacing: {
    numberInt: string;
  };
  sun: boolean;
}
