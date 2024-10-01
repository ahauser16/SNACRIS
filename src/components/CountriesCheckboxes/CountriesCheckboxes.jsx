import React, { useState } from "react";
import CountryCodes from "./mappedData/CountryCodes.json";
import { sortingMethods } from "./utils/sortingMethods";
import { sortCountries } from "./utils/sortCountries";
import { filterCountries } from "./utils/filterCountries";
import TimezoneClock from "./TimezoneClock/TimezoneClock";
import "./CountriesCheckboxes.css";

const CountriesCheckboxes = ({ selectedCountries, handleCountryChange }) => {
  const [sortMethod, setSortMethod] = useState(sortingMethods.ALPHABETICAL);
  const [filterQuery, setFilterQuery] = useState("");

  const sortedCountries = sortCountries(CountryCodes, sortMethod);
  const filteredCountries = filterCountries(sortedCountries, filterQuery, sortMethod);

  return (
    <div>

      {/* User Favorites section */}
      <fieldset className="favorites-container">
        <legend>My Favorite Countries</legend>
      </fieldset>

      {/* Filtering Input */}
      <fieldset className="filtering-container">
        <legend>Filter Countries</legend>
        <input
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          placeholder={`Filter by ${sortMethod === sortingMethods.COUNTRY_CODE
            ? "Country Code"
            : sortMethod === sortingMethods.CONTINENT
              ? "Continent Name"
              : sortMethod === sortingMethods.SUBREGION
                ? "Subregion Name"
                : sortMethod === sortingMethods.TIMEZONE
                  ? "Timezone"
                  : "Country Name"
            }`}
        />
      </fieldset>

      {/* Sorting Radio Buttons */}
      <fieldset className="sorting-method-container">
        <legend>Sort Countries By</legend>
        <label>
          <input
            type="radio"
            name="sortMethod"
            value={sortingMethods.ALPHABETICAL}
            checked={sortMethod === sortingMethods.ALPHABETICAL}
            onChange={() => setSortMethod(sortingMethods.ALPHABETICAL)}
          />
          Alphabetical
        </label>
        <label>
          <input
            type="radio"
            name="sortMethod"
            value={sortingMethods.CONTINENT}
            checked={sortMethod === sortingMethods.CONTINENT}
            onChange={() => setSortMethod(sortingMethods.CONTINENT)}
          />
          Continent
        </label>
        <label>
          <input
            type="radio"
            name="sortMethod"
            value={sortingMethods.COUNTRY_CODE}
            checked={sortMethod === sortingMethods.COUNTRY_CODE}
            onChange={() => setSortMethod(sortingMethods.COUNTRY_CODE)}
          />
          Country Code
        </label>
        <label>
          <input
            type="radio"
            name="sortMethod"
            value={sortingMethods.SUBREGION}
            checked={sortMethod === sortingMethods.SUBREGION}
            onChange={() => setSortMethod(sortingMethods.SUBREGION)}
          />
          Subregions
        </label>
        <label>
          <input
            type="radio"
            name="sortMethod"
            value={sortingMethods.TIMEZONE}
            checked={sortMethod === sortingMethods.TIMEZONE}
            onChange={() => setSortMethod(sortingMethods.TIMEZONE)}
          />
          Timezone
        </label>
      </fieldset>

      {/* Countries Checkboxes */}
      <fieldset className="country-checkboxes-container">
        <legend className="country-checkboxes-legend">Countries</legend>
        {sortMethod === sortingMethods.CONTINENT ? (
          Object.keys(filteredCountries).map((continent) => (
            <div key={continent} className="continent-group">
              <label className="continent-label">{continent}</label>
              <div className="country-grid">
                {filteredCountries[continent].map(
                  ({ country_code, description }) => (
                    <div
                      className="country-label-and-checkbox-container"
                      key={country_code}
                    >
                      <label>
                        <input
                          type="checkbox"
                          name={country_code}
                          value={country_code}
                          checked={selectedCountries.includes(country_code)}
                          onChange={handleCountryChange}
                          aria-label={description}
                        />
                        {description} ({country_code})
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          ))
        ) : sortMethod === sortingMethods.SUBREGION ? (
          Object.keys(filteredCountries).map((subregion) => (
            <div key={subregion} className="continent-group">
              <label className="continent-label">{subregion}</label>
              <div className="country-grid">
                {filteredCountries[subregion].map(
                  ({ country_code, description }) => (
                    <div
                      className="country-label-and-checkbox-container"
                      key={country_code}
                    >
                      <label>
                        <input
                          type="checkbox"
                          name={country_code}
                          value={country_code}
                          checked={selectedCountries.includes(country_code)}
                          onChange={handleCountryChange}
                          aria-label={description}
                        />
                        {description} ({country_code})
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          ))
        ) : sortMethod === sortingMethods.TIMEZONE ? (
          Object.keys(filteredCountries).map((timezone) => (
            <div key={timezone} className="timezone-group">
              <label className="timezone-label">
                {timezone} - <TimezoneClock timezone={timezone} />
              </label>
              <div className="country-grid">
                {filteredCountries[timezone].map(
                  ({ country_code, description }) => (
                    <div
                      className="country-label-and-checkbox-container"
                      key={country_code}
                    >
                      <label>
                        <input
                          type="checkbox"
                          name={country_code}
                          value={country_code}
                          checked={selectedCountries.includes(country_code)}
                          onChange={handleCountryChange}
                          aria-label={description}
                        />
                        {description} ({country_code})
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          ))
        ) : sortMethod === sortingMethods.COUNTRY_CODE ? (
          <div className="country-grid">
            {filteredCountries.map(({ country_code, description }) => (
              <div
                className="country-label-and-checkbox-container"
                key={country_code}
              >
                <label>
                  <input
                    type="checkbox"
                    name={country_code}
                    value={country_code}
                    checked={selectedCountries.includes(country_code)}
                    onChange={handleCountryChange}
                    aria-label={description}
                  />
                  {country_code} ({description})
                </label>
              </div>
            ))}
          </div>
        ) : (
          <div className="country-grid">
            {filteredCountries.map(({ country_code, description }) => (
              <div
                className="country-label-and-checkbox-container"
                key={country_code}
              >
                <label>
                  <input
                    type="checkbox"
                    name={country_code}
                    value={country_code}
                    checked={selectedCountries.includes(country_code)}
                    onChange={handleCountryChange}
                    aria-label={description}
                  />
                  {description} ({country_code})
                </label>
              </div>
            ))}
          </div>
        )}
      </fieldset>
    </div>
  );
};

export default CountriesCheckboxes;