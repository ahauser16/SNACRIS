// src/components/CountriesCheckboxes/CountriesCheckboxes.jsx
import React from 'react';
import CountryCodes from './CountryCodes.json';
import './CountriesCheckboxes.css';
// Handling Checkbox Changes: In the `CountriesCheckboxes` and `StatesCheckboxes` components, the `handleCountryChange` (and `handleStateChange` ) functions are called when a checkbox is changed. These functions receive the event object and update the `soql` state accordingly.
const CountriesCheckboxes = ({ selectedCountries, handleCountryChange }) => {
  return (
    <fieldset className="country-checkboxes-container">
      <legend className="country-checkboxes-legend">Countries</legend>
      <div className="country-grid">
        {CountryCodes.map(({ country_code, description }) => (
          <div key={country_code}>
            <label>
              <input
                type="checkbox"
                name={country_code}
                value={country_code}
                checked={selectedCountries.includes(country_code)}
                onChange={handleCountryChange}
                aria-label={description}
              />
              {description}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default CountriesCheckboxes;