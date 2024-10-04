// src/components/PartyNameSearch/PartyNameSearch.jsx
import React, { useState } from 'react';
import StatesCheckboxes from '../StatesCheckboxes/StatesCheckboxes';
import StatesSelect from "../StatesSelect/StatesSelect";
import CountriesCheckboxes from '../CountriesCheckboxes/CountriesCheckboxes';
import CountrySelect from "../CountrySelect/CountrySelect";
import './PartyNameSearch.css';

const PartyNameSearch = ({ soql, handleInputChange, handleStateChange, handleCountryChange }) => {
  const [showStatesCheckboxes, setShowStatesCheckboxes] = useState(false);
  const [isUsingMultipleStates, setIsUsingMultipleStates] = useState(false);
  const [showCountriesCheckboxes, setShowCountriesCheckboxes] = useState(false);
  const [isUsingMultipleCountries, setIsUsingMultipleCountries] = useState(false);

  const toggleStatesCheckboxes = () => {
    setShowStatesCheckboxes((prev) => !prev);
    setIsUsingMultipleStates((prev) => !prev);
  };

  const toggleCountriesCheckboxes = () => {
    setShowCountriesCheckboxes((prev) => !prev);
    setIsUsingMultipleCountries((prev) => !prev);
  };

  const handleStateSelectChange = (selectedState) => {
    handleStateChange({
      target: { value: selectedState, type: "select", checked: true },
    });
  };

  const handleCountrySelectChange = (selectedCountry) => {
    handleCountryChange({
      target: { value: selectedCountry, type: "select", checked: true },
    });
  };

  return (
    <fieldset className="party-name-search-container">
      <legend className="party-name-search-legend">Search By Party Name</legend>

      {/* Name Field */}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={soql.name}
          onChange={handleInputChange}
        />
      </div>

      {/* Address 1 Field */}
      <div className="form-group">
        <label htmlFor="address_1">Address 1:</label>
        <input
          type="text"
          id="address_1"
          name="address_1"
          value={soql.address_1}
          onChange={handleInputChange}
        />
      </div>

      {/* Address 2 Field */}
      <div className="form-group">
        <label htmlFor="address_2">Address 2:</label>
        <input
          type="text"
          id="address_2"
          name="address_2"
          value={soql.address_2}
          onChange={handleInputChange}
        />
      </div>

      {/* City Field */}
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={soql.city}
          onChange={handleInputChange}
        />
      </div>

      {/* States Selection */}
      <div className="form-group">
        {/* State Select (Single) */}
        <StatesSelect
          selectedState={
            soql.state.length > 1
              ? "multiple" // Pass "multiple" if more than one state is selected
              : soql.state.length === 1
              ? soql.state[0]
              : ""
          }
          handleStateSelectChange={handleStateSelectChange}
          disabled={isUsingMultipleStates}
        />

        {/* Toggle Button for States Checkboxes */}
        <button type="button" onClick={toggleStatesCheckboxes}>
          {showStatesCheckboxes
            ? "Hide Multiple States"
            : "Select Multiple States"}
        </button>

        {showStatesCheckboxes && (
          <StatesCheckboxes
            selectedStates={soql.state}
            handleStateChange={handleStateChange}
          />
        )}
      </div>

      {/* Zip Field */}
      <div className="form-group">
        <label htmlFor="zip">Zip:</label>
        <input
          type="text"
          id="zip"
          name="zip"
          value={soql.zip}
          onChange={handleInputChange}
        />
      </div>

      {/* Country Selection */}
      <div className="form-group">
        <CountrySelect
          selectedCountry={
            soql.country.length > 1
              ? "multiple" // Display "multiple" if more than one country is selected
              : soql.country.length === 1
              ? soql.country[0]
              : ""
          }
          handleCountrySelectChange={handleCountrySelectChange}
          disabled={isUsingMultipleCountries}
        />

        <button type="button" onClick={toggleCountriesCheckboxes}>
          {showCountriesCheckboxes
            ? "Hide Multiple Countries"
            : "Select Multiple Countries"}
        </button>

        {showCountriesCheckboxes && (
          <CountriesCheckboxes
            selectedCountries={soql.country}
            handleCountryChange={handleCountryChange}
          />
        )}
      </div>
    </fieldset>
  );
};

export default PartyNameSearch;