// src/components/PartyNameSearch/PartyNameSearch.jsx
import React, { useState } from 'react';
import StatesCheckboxes from '../StatesCheckboxes/StatesCheckboxes';
import CountriesCheckboxes from '../CountriesCheckboxes/CountriesCheckboxes';
import './PartyNameSearch.css';

const PartyNameSearch = ({ soql, handleInputChange, handleStateChange, handleCountryChange }) => {
  const [showStatesCheckboxes, setShowStatesCheckboxes] = useState(false);
  const [showCountriesCheckboxes, setShowCountriesCheckboxes] = useState(false);

  const toggleStatesCheckboxes = () => {
    setShowStatesCheckboxes((prevShowStatesCheckboxes) => !prevShowStatesCheckboxes);
  };

  const toggleCountriesCheckboxes = () => {
    setShowCountriesCheckboxes((prevShowCountriesCheckboxes) => !prevShowCountriesCheckboxes);
  };

  return (
    <fieldset className="party-name-search-container">
      <legend className="party-name-search-legend">Search By Party Name</legend>
      {['name', 'address_1', 'address_2', 'city', 'zip'].map((field) => (
        <div key={field}>
          <label>{field.replace('_', ' ')}:</label>
          <input
            type="text"
            name={field}
            value={soql[field]}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button type="button" onClick={toggleStatesCheckboxes}>
        {showStatesCheckboxes ? 'Hide States' : 'Show States'}
      </button>

      {/* Passing Handlers to `CountriesCheckboxes` and `StatesCheckboxes`: Inside the `PartyNameSearch` component, the `handleCountryChange` and `handleStateChange` functions are further passed down to the `CountriesCheckboxes` and `StatesCheckboxes` components */}

      {showStatesCheckboxes && (
        <StatesCheckboxes selectedStates={soql.state} handleStateChange={handleStateChange} />
      )}

      <button type="button" onClick={toggleCountriesCheckboxes}>
        {showCountriesCheckboxes ? 'Hide Countries' : 'Show Countries'}
      </button>

      {showCountriesCheckboxes && (
        <CountriesCheckboxes selectedCountries={soql.country} handleCountryChange={handleCountryChange} />
      )}
    </fieldset>
  );
};

export default PartyNameSearch;