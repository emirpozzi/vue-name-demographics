export interface CountryProbability {
  country_id: string;
  probability: number;
}

export interface CountryFormatted {
  country_id: string;
  probability: string;
}

export type Gender = "male" | "female";

export interface NameData {
  age: number;
  gender: Gender | "";
  nationality: CountryFormatted[];
}
