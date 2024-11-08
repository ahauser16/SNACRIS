import { sortingMethods } from "./sortingMethods";

export const filterCountries = (countries, query, sortMethod) => {
  if (!query) return countries;
  const lowerCaseQuery = query.toLowerCase();

  if (sortMethod === sortingMethods.COUNTRY_CODE || sortMethod === sortingMethods.ALPHABETICAL) {
    return countries.filter(({ country_code, description }) =>
      country_code.toLowerCase().includes(lowerCaseQuery) ||
      description.toLowerCase().includes(lowerCaseQuery)
    );
  } else if (sortMethod === sortingMethods.CONTINENT || sortMethod === sortingMethods.SUBREGION || sortMethod === sortingMethods.TIMEZONE) {
    return Object.keys(countries).reduce((acc, key) => {
      const filteredCountries = countries[key].filter(({ description }) =>
        description.toLowerCase().includes(lowerCaseQuery)
      );
      if (filteredCountries.length) acc[key] = filteredCountries;
      return acc;
    }, {});
  } else {
    return countries.filter(({ description }) =>
      description.toLowerCase().includes(lowerCaseQuery)
    );
  }
};