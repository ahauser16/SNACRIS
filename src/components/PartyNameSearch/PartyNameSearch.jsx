// src/components/PartyNameSearch/PartyNameSearch.jsx
import React, { useState } from 'react';
import StatesCheckboxes from '../StatesCheckboxes/StatesCheckboxes';
import StatesSelect from "../StatesSelect/StatesSelect";
import CountriesCheckboxes from '../CountriesCheckboxes/CountriesCheckboxes';
import CountrySelect from "../CountrySelect/CountrySelect";
import NameInput from "./NameInput/NameInput";
import AddressOne from "./AddressOne/AddressOne";
import AddressTwo from "./AddressTwo/AddressTwo";
import CityInput from "./CityInput/CityInput";
import ZipInput from "./ZipInput/ZipInput";
import './PartyNameSearch.css';

function PartyNameSearch({
  partyNameSoql,
  handleInputChange,
  handleStateChange,
  handleCountryChange,
  handleErrorDisplay,
  inputUserErrors
}) {
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
    <fieldset className="party-name-search--container">
      <legend className="party-name-search--legend">Search By Party Name</legend>
      <NameInput
        value={partyNameSoql.name}
        onChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        error={inputUserErrors.name}
      />
      <AddressOne
        value={partyNameSoql.address_1}
        onChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        error={inputUserErrors.address_1}
      />
      <AddressTwo
        value={partyNameSoql.address_2}
        onChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        error={inputUserErrors.address_2}
      />
      <CityInput
        value={partyNameSoql.city}
        onChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        error={inputUserErrors.city}
      />

      {/* States Selection */}
      <div className="form-group">
        {/* State Select (Single) */}
        <StatesSelect
          selectedState={
            partyNameSoql.state.length > 1
              ? "multiple" // Pass "multiple" if more than one state is selected
              : partyNameSoql.state.length === 1
                ? partyNameSoql.state[0]
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
            selectedStates={partyNameSoql.state}
            handleStateChange={handleStateChange}
          />
        )}
      </div>

      <ZipInput
        value={partyNameSoql.zip}
        onChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        error={inputUserErrors.zip}
      />

      {/* Country Selection */}
      <div className="form-group">
        <CountrySelect
          selectedCountry={
            partyNameSoql.country.length > 1
              ? "multiple" // Display "multiple" if more than one country is selected
              : partyNameSoql.country.length === 1
                ? partyNameSoql.country[0]
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
            selectedCountries={partyNameSoql.country}
            handleCountryChange={handleCountryChange}
          />
        )}
      </div>
    </fieldset>
  );
};

export default PartyNameSearch;