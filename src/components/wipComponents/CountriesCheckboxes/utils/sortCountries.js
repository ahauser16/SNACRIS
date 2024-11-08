import { sortingMethods } from "../utils/sortingMethods";
import {
    groupCountriesByContinent,
    groupCountriesBySubregion,
    groupCountriesByTimezone
} from "./groupCountries";

export const sortCountries = (countries, method) => {
    switch (method) {
        case sortingMethods.CONTINENT:
            const groupedByContinent = groupCountriesByContinent(countries);
            Object.keys(groupedByContinent).forEach((continent) => {
                groupedByContinent[continent].sort((a, b) => a.description.localeCompare(b.description));
            });
            return groupedByContinent;
        case sortingMethods.SUBREGION:
            const groupedBySubregion = groupCountriesBySubregion(countries);
            Object.keys(groupedBySubregion).forEach((subregion) => {
                groupedBySubregion[subregion].sort((a, b) => a.description.localeCompare(b.description));
            });
            return groupedBySubregion;
        case sortingMethods.TIMEZONE:
            const groupedByTimezone = groupCountriesByTimezone(countries);
            Object.keys(groupedByTimezone).forEach((timezone) => {
                groupedByTimezone[timezone].sort((a, b) => a.description.localeCompare(b.description));
            });
            return groupedByTimezone;
        case sortingMethods.COUNTRY_CODE:
            return [...countries].sort((a, b) => a.country_code.localeCompare(b.country_code));
        case sortingMethods.ALPHABETICAL:
        default:
            return [...countries].sort((a, b) => a.description.localeCompare(b.description));
    }
};