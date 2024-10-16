import React, { useState } from 'react';
import { fetchRealPropertyLegalsData } from '../../api/api';
import AddressSearch from '../AddressSearch/AddressSearch';
import { uppercaseSoql } from '../Utils/uppercaseSoql';
import { handleErrorsDuringSubmission } from '../Utils/handleErrorsDuringFormSubmission';
import './SearchByAddressForm.css';
// partyNameSoql / setPartyNameSoql
const SearchByAddressForm = ({ setData, setError, handleTableReset }) => {
  const [addressSoql, setAddressSoql] = useState({
    borough: '',
    block: '',
    lot: '',
    easement: '',
    partial_lot: '',
    air_rights: '',
    subterranean_rights: '',
    property_type: [],
    street_name: '',
    unit: '',
  });

  const [inputUserErrors, setInputUserErrors] = useState({
    borough: null,
    block: null,
    lot: null,
    easement: null,
    partial_lot: null,
    air_rights: null,
    subterranean_rights: null,
    street_name: null,
    unit: null,
  });

  const [errorMessages, setErrorMessages] = useState([]);

  const handleErrorDisplay = (name, errorMessage) => {
    setInputUserErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressSoql((prevSoql) => {
      const newSoql = { ...prevSoql, [name]: value };
      return uppercaseSoql(newSoql);
    });
  };

  const handlePropertyTypeChange = (e) => {
    const { value, checked, type } = e.target;
    if (type === "checkbox") {
      setAddressSoql((prevSoql) => {
        const newSoql = {
          ...prevSoql,
          property_type: checked
            ? [...prevSoql.property_type, value]
            : prevSoql.property_type.filter((propertyType) => propertyType !== value),
        };
        return uppercaseSoql(newSoql);
      });
    } else {
      setAddressSoql((prevSoql) => {
        const newSoql = {
          ...prevSoql,
          property_type: value ? [value] : [],
        };
        return uppercaseSoql(newSoql);
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Current inputUserErrors:', inputUserErrors);
    if (handleErrorsDuringSubmission(inputUserErrors, setErrorMessages)) {
      return;
    }

    console.log("Submitting with SoQL:", addressSoql);

    try {
      const response = await fetchRealPropertyLegalsData(addressSoql);
      setData(response);
      setError(null);
      setErrorMessages([]); // Clear error messages on successful submission
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setData([]);
    }
  };

  const handleFormReset = () => {
    setAddressSoql({
      borough: '',
      block: '',
      lot: '',
      easement: '',
      partial_lot: '',
      air_rights: '',
      subterranean_rights: '',
      property_type: [],
      street_number: '',
      street_name: '',
      unit: '',
    });
    setInputUserErrors({
      borough: null,
      block: null,
      lot: null,
      easement: null,
      partial_lot: null,
      air_rights: null,
      subterranean_rights: null,
      street_name: null,
      unit: null,
    });
    setErrorMessages([]);
    handleTableReset();
  };

  return (
    <form
      className="search-by-address-form"
      onSubmit={handleSubmit}
    >
      <AddressSearch
        addressSoql={addressSoql}
        handleInputChange={handleInputChange}
        handlePropertyTypeChange={handlePropertyTypeChange}
        handleErrorDisplay={handleErrorDisplay}
        inputUserErrors={inputUserErrors}
      />
      <div className="form-row">
        <div className="form-group">
          <button
            type="submit"
            className="form-button infoBtn"
          >
            Search
          </button>
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={handleFormReset}
            className="form-button warningBtn"
          >
            Reset
          </button>
        </div>
      </div>
      {errorMessages.length > 0 && (
        <div className="flex-container">
          <span className="error-msg-display">
            <ul>
              {errorMessages.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </span>
        </div>
      )}
    </form>
  );
};

export default SearchByAddressForm;