import { CountryProbability, CountryFormatted, Gender } from "../src/types";

export async function getAge(name: string): Promise<number> {
  const result = await fetch(`https://api.agify.io/?name=${name}`);
  const data = await result.json();
  const age = data.age;
  return age;
}

export async function getGender(name: string): Promise<Gender> {
  const result = await fetch(`https://api.genderize.io/?name=${name}`);
  const data = await result.json();
  const gender = data.gender;
  return gender;
}

export async function getNationality(
  name: string
): Promise<CountryProbability[]> {
  const result = await fetch(`https://api.nationalize.io/?name=${name}`);
  const data = await result.json();
  const countryList = data.country;
  return countryList;
}
