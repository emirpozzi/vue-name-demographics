export async function getAge(name): Promise<number> {
  const result = await fetch(`https://api.agify.io/?name=${name}`);
  const data = await result.json();
  const age = data.age;
  return age;
}

export async function getGender(name: string): Promise<string> {
  const result = await fetch(`https://api.genderize.io/?name=${name}`);
  const data = await result.json();
  const gender = data.gender;
  return gender;
}

export async function getNationality(name: string) {
  const result = await fetch(`https://api.nationalize.io/?name=${name}`);
  const data = await result.json();
  const countryList = data.country;
  return countryList;
}

export function formatProbabilities(countryList) {
  return countryList.map(
    (country: { country_id: string; probability: number }) => {
      return {
        country_id: country.country_id,
        probability: Math.round(country.probability * 10000) / 100 + "%",
      };
    }
  );
}
