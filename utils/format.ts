import { CountryProbability, CountryFormatted } from "../src/types";

export function formatProbabilities(
  countryList: CountryProbability[]
): CountryFormatted[] {
  return countryList.map((country) => {
    return {
      country_id: country.country_id,
      probability: Math.round(country.probability * 10000) / 100 + "%",
    };
  });
}
