import { countriesMappedToContinents } from "../mappedData/CountriesMappedToContinents";
import { countriesMappedToSubcontinents } from "../mappedData/CountriesMappedToSubcontinents";
import { countriesMappedToTimezones } from "../mappedData/CountriesMappedToTimezones";

export const groupCountriesByContinent = (countries) => {
    return countries.reduce((acc, country) => {
        const continent = countriesMappedToContinents[country.country_code] || "Other";
        if (!acc[continent]) {
            acc[continent] = [];
        }
        acc[continent].push(country);
        return acc;
    }, {});
};

export const groupCountriesBySubregion = (countries) => {
    return countries.reduce((acc, country) => {
        const subregion = countriesMappedToSubcontinents[country.country_code] || "Other";
        if (!acc[subregion]) {
            acc[subregion] = [];
        }
        acc[subregion].push(country);
        return acc;
    }, {});
};

export const groupCountriesByTimezone = (countries) => {
    return countries.reduce((acc, country) => {
        const timezones = countriesMappedToTimezones[country.country_code] || [];
        timezones.forEach((timezone) => {
            if (!acc[timezone]) {
                acc[timezone] = [];
            }
            acc[timezone].push(country);
        });
        return acc;
    }, {});
};