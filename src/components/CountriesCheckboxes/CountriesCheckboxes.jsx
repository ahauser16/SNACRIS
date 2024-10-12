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

  const splitCountriesIntoColumns = (countries) => {
    if (!Array.isArray(countries)) return [[], []];
    const midIndex = Math.ceil(countries.length / 2);
    return [countries.slice(0, midIndex), countries.slice(midIndex)];
  };

  const renderCountriesByGroup = (groupedCountries) => {
    const groups = Object.keys(groupedCountries);
    const midIndex = Math.ceil(groups.length / 2);
    const leftGroups = groups.slice(0, midIndex);
    const rightGroups = groups.slice(midIndex);

    return (
      <>
        <div className="countries-column">
          {leftGroups.map((group) => (
            <div key={group} className="group-container">
              <label className="group-label">{group}</label>
              {groupedCountries[group].map(({ country_code, description }) => (
                <div key={country_code} className="single-checkbox--container">
                  <label className="single-checkbox--label">
                    <input
                      type="checkbox"
                      name={country_code}
                      value={country_code}
                      checked={selectedCountries.includes(country_code)}
                      onChange={handleCountryChange}
                      aria-label={description}
                      className="single-checkbox--input"
                    />
                    {description} ({country_code})
                  </label>
                  {renderFavoriteIcon(country_code)}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="countries-column">
          {rightGroups.map((group) => (
            <div key={group} className="group-container">
              <label className="group-label">{group}</label>
              {groupedCountries[group].map(({ country_code, description }) => (
                <div key={country_code} className="single-checkbox--container">
                  <label className="single-checkbox--label">
                    <input
                      type="checkbox"
                      name={country_code}
                      value={country_code}
                      checked={selectedCountries.includes(country_code)}
                      onChange={handleCountryChange}
                      aria-label={description}
                      className="single-checkbox--input"
                    />
                    {description} ({country_code})
                  </label>
                  {renderFavoriteIcon(country_code)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  };

  const [leftColumn, rightColumn] = splitCountriesIntoColumns(filteredCountries);

  return (
    <div className="countries-checkboxes-component--container">
      {/* User Favorites section */}
      <fieldset className="favorites-container">
        <legend>My Favorite Countries</legend>
        {favoriteCountries.map(({ country_code, description }) => (
          <div key={country_code} className="single-checkbox--container">
            <label className="single-checkbox--label">
              <input
                type="checkbox"
                name={country_code}
                value={country_code}
                checked={selectedCountries.includes(country_code)}
                onChange={handleCountryChange}
                aria-label={description}
                className="single-checkbox--input"
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
      <fieldset className="sorting-method--container">
        <legend>Sort Countries By</legend>
        <div className="col-left">
          <label className="sorting-method--label">
            <input
              type="radio"
              name="sortMethod"
              value={sortingMethods.ALPHABETICAL}
              checked={sortMethod === sortingMethods.ALPHABETICAL}
              onChange={() => setSortMethod(sortingMethods.ALPHABETICAL)}
              className="sorting-method--input"
            />
            Alphabetical
          </label>
          <label className="sorting-method--label">
            <input
              type="radio"
              name="sortMethod"
              value={sortingMethods.CONTINENT}
              checked={sortMethod === sortingMethods.CONTINENT}
              onChange={() => setSortMethod(sortingMethods.CONTINENT)}
              className="sorting-method--input"
            />
            Continent
          </label>
          <label className="sorting-method--label">
            <input
              type="radio"
              name="sortMethod"
              value={sortingMethods.COUNTRY_CODE}
              checked={sortMethod === sortingMethods.COUNTRY_CODE}
              onChange={() => setSortMethod(sortingMethods.COUNTRY_CODE)}
              className="sorting-method--input"
            />
            Country Code
          </label>
        </div>
        <div className="col-right">
          <label className="sorting-method--label">
            <input
              type="radio"
              name="sortMethod"
              value={sortingMethods.SUBREGION}
              checked={sortMethod === sortingMethods.SUBREGION}
              onChange={() => setSortMethod(sortingMethods.SUBREGION)}
              className="sorting-method--input"
            />
            Subregions
          </label>
          <label className="sorting-method--label">
            <input
              type="radio"
              name="sortMethod"
              value={sortingMethods.TIMEZONE}
              checked={sortMethod === sortingMethods.TIMEZONE}
              onChange={() => setSortMethod(sortingMethods.TIMEZONE)}
              className="sorting-method--input"
            />
            Timezone
          </label>
        </div>
      </fieldset>

      {/* Countries Checkboxes */}
      <fieldset className="country-checkboxes-container">
        <legend className="country-checkboxes-legend">Countries</legend>
        {sortMethod === sortingMethods.CONTINENT ? (
          renderCountriesByGroup(filteredCountries)
        ) : sortMethod === sortingMethods.SUBREGION ? (
          renderCountriesByGroup(filteredCountries)
        ) : sortMethod === sortingMethods.TIMEZONE ? (
          renderCountriesByGroup(filteredCountries)
        ) : sortMethod === sortingMethods.COUNTRY_CODE ? (
          <>
            <div className="countries-column">
              {leftColumn.map(({ country_code, description }) => (
                <div key={country_code} className="single-checkbox--container">
                  <label className="single-checkbox--label">
                    <input
                      type="checkbox"
                      name={country_code}
                      value={country_code}
                      checked={selectedCountries.includes(country_code)}
                      onChange={handleCountryChange}
                      aria-label={description}
                      className="single-checkbox--input"
                    />
                    {country_code} ({description})
                  </label>
                  {renderFavoriteIcon(country_code)}
                </div>
              ))}
            </div>
            <div className="countries-column">
              {rightColumn.map(({ country_code, description }) => (
                <div key={country_code} className="single-checkbox--container">
                  <label className="single-checkbox--label">
                    <input
                      type="checkbox"
                      name={country_code}
                      value={country_code}
                      checked={selectedCountries.includes(country_code)}
                      onChange={handleCountryChange}
                      aria-label={description}
                      className="single-checkbox--input"
                    />
                    {country_code} ({description})
                  </label>
                  {renderFavoriteIcon(country_code)}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="countries-column">
              {leftColumn.map(({ country_code, description }) => (
                <div key={country_code} className="single-checkbox--container">
                  <label className="single-checkbox--label">
                    <input
                      type="checkbox"
                      name={country_code}
                      value={country_code}
                      checked={selectedCountries.includes(country_code)}
                      onChange={handleCountryChange}
                      aria-label={description}
                      className="single-checkbox--input"
                    />
                    {description} ({country_code})
                  </label>
                  {renderFavoriteIcon(country_code)}
                </div>
              ))}
            </div>
            <div className="countries-column">
              {rightColumn.map(({ country_code, description }) => (
                <div key={country_code} className="single-checkbox--container">
                  <label className="single-checkbox--label">
                    <input
                      type="checkbox"
                      name={country_code}
                      value={country_code}
                      checked={selectedCountries.includes(country_code)}
                      onChange={handleCountryChange}
                      aria-label={description}
                      className="single-checkbox--input"
                    />
                    {description} ({country_code})
                  </label>
                  {renderFavoriteIcon(country_code)}
                </div>
              ))}
            </div>
          </>
        )}
      </fieldset>
    </div>
  );
};

export default CountriesCheckboxes;