import React, { useState, useEffect } from "react";
import CountryCodes from "./mappedData/CountryCodes.json";
import { sortingMethods } from "./utils/sortingMethods";
import { sortCountries } from "./utils/sortCountries";
import { filterCountries } from "./utils/filterCountries";
import TimezoneClock from "./TimezoneClock/TimezoneClock";
import {
  getFavorites,
  addFavoriteCountry,
  removeFavoriteCountry,
} from "../../LocalStorage/LocalStorage";
import "./CountriesCheckboxes.css";

const CountriesCheckboxes = ({ selectedCountries, handleCountryChange }) => {
  const [sortMethod, setSortMethod] = useState(sortingMethods.ALPHABETICAL);
  const [filterQuery, setFilterQuery] = useState("");
  const [favoriteCountries, setFavoriteCountries] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favorites = await getFavorites();
        const myCountries = favorites.categories.find(
          (cat) => cat.category_name === "My Countries"
        );
        if (myCountries) {
          setFavoriteCountries(myCountries.items);
        }
      } catch (error) {
        console.error("Failed to fetch favorites:", error);
      }
    };
    fetchFavorites();
  }, []);

  const handleFavoriteToggle = async (countryCode) => {
    if (
      favoriteCountries.some((country) => country.country_code === countryCode)
    ) {
      await removeFavoriteCountry(countryCode);
      setFavoriteCountries((prev) =>
        prev.filter((country) => country.country_code !== countryCode)
      );
    } else {
      await addFavoriteCountry(countryCode);
      const countryData = CountryCodes.find(
        (country) => country.country_code === countryCode
      );
      setFavoriteCountries((prev) => [...prev, countryData]);
    }
  };

  const sortedCountries = sortCountries(CountryCodes, sortMethod);
  const filteredCountries = filterCountries(sortedCountries, filterQuery, sortMethod);

  const renderFavoriteIcon = (countryCode) => {
    return favoriteCountries.some((country) => country.country_code === countryCode) ? (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-check" onClick={() => handleFavoriteToggle(countryCode)}>
        <circle cx="12" cy="12" r="10" className="primary" />
        <path className="secondary" d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-add-circle" onClick={() => handleFavoriteToggle(countryCode)}>
        <circle cx="12" cy="12" r="10" className="primary" />
        <path className="secondary" d="M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4z" />
      </svg>
    );
  };

  return (
    <div>
      {/* User Favorites section */}
      <fieldset className="favorites-container">
        <legend>My Favorite Countries</legend>
        {favoriteCountries.map(({ country_code, description }) => (
          <div key={country_code} className="country-label-and-checkbox-container">
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-close-circle">
              <circle cx="12" cy="12" r="10" className="primary" onClick={() => handleFavoriteToggle(country_code)} />
              <path className="secondary" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z" />
            </svg>
          </div>
        ))}
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
                      {renderFavoriteIcon(country_code)}
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
                      {renderFavoriteIcon(country_code)}
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
                {timezone}   <TimezoneClock timezone={timezone} className="timestamp" />
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
                      {renderFavoriteIcon(country_code)}
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
                {renderFavoriteIcon(country_code)}
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
                {renderFavoriteIcon(country_code)}
              </div>
            ))}
          </div>
        )}
      </fieldset>
    </div>
  );
};

export default CountriesCheckboxes;