import React from "react";
import CountryCodes from "../CountriesCheckboxes/mappedData/CountryCodes.json";
import { countriesMappedToTimezones } from "../CountriesCheckboxes/mappedData/CountriesMappedToTimezones";
import TimezoneClock from "../CountriesCheckboxes/TimezoneClock/TimezoneClock";

const CountrySelect = ({
  selectedCountry,
  handleCountrySelectChange,
  disabled,
}) => {
  const capitalizeDescription = (description) => {
    return (
      description.charAt(0).toUpperCase() + description.slice(1).toLowerCase()
    );
  };

  const getTimezone = (countryCode) => {
    // Get the first timezone for the country (simplified for now)
    return countriesMappedToTimezones[countryCode]?.[0] || "UTC";
  };

  return (
    <div className="countries-select-container">
      <label htmlFor="countries-select">Select a Country:</label>
      <select
        id="countries-select"
        name="country"
        value={selectedCountry || ""} // Set value to an empty string if no country is selected
        onChange={(e) => handleCountrySelectChange(e.target.value)}
        disabled={disabled} // Disable when multiple countries are selected
      >
        {/* Show special text for multiple selected countries */}
        {selectedCountry === "multiple" ? (
          <option value="">You Selected Multiple Countries</option>
        ) : (
          <option value="">Select a Country</option>
        )}

        {/* Display each country with its current time */}
        {CountryCodes.map((country) => {
          const timezone = getTimezone(country.country_code);
          return (
            <option key={country.country_code} value={country.country_code}>
              {capitalizeDescription(country.description)} -{" "}
              <TimezoneClock timezone={timezone} className="time-display" />
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CountrySelect;
