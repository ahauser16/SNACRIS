// src/components/SearchByPartyNameForm/SearchByPartyNameForm.jsx
import React, { useState } from 'react';
import { fetchRealPropertyPartiesData } from '../../../api/apiHybrid';
import PartyNameSearch from './PartyNameSearch/PartyNameSearch';
import { uppercaseSoql } from '../../Utils/uppercaseSoql';
import { handleErrorsDuringSubmission } from '../../Utils/handleErrorsDuringFormSubmission';
import FormControls from "../FormControls/FormControls";

const SearchByPartyNameForm = ({ setData, setError, handleTableReset, limit, offset }) => {
  const [partyNameSoql, setPartyNameSoql] = useState({
    name: '',
    address_1: '',
    address_2: '',
    country: [],
    city: '',
    state: [],
    zip: '',
  });

  const [inputUserErrors, setInputUserErrors] = useState({
    name: null,
    address_1: null,
    address_2: null,
    country: null,
    city: null,
    state: null,
    zip: null,
  });

  const [errorMessages, setErrorMessages] = useState([]);

  const handleErrorDisplay = (name, errorMessage) => {
    console.log(`Error in ${name}: ${errorMessage}`);
    setInputUserErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (errorMessage) {
        newErrors[name] = errorMessage;
        document.querySelector(`.form-group--${name}`).classList.add('field-error');
      } else {
        newErrors[name] = null; // Set to null if no error
        document.querySelector(`.form-group--${name}`).classList.remove('field-error');
      }
      console.log('Updated inputUserErrors:', newErrors);
      return newErrors;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input change - ${name}: ${value}`);
    setPartyNameSoql((prevSoql) => {
      const newSoql = { ...prevSoql, [name]: value };
      return uppercaseSoql(newSoql);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for required fields
    const requiredFields = ['name'];
    let hasError = false;

    requiredFields.forEach((field) => {
      if (!partyNameSoql[field]) {
        console.log("The Name field has been left blank.")
        handleErrorDisplay(field, 'This field is required for form submission');
        hasError = true;
      }
    });

    if (hasError) {
      return;
    }

    console.log('Current inputUserErrors:', inputUserErrors);
    if (handleErrorsDuringSubmission(inputUserErrors, setErrorMessages)) {
      return;
    }

    console.log("Submitting with SoQL:", partyNameSoql);

    try {
      const response = await fetchRealPropertyPartiesData(partyNameSoql, limit, offset);
      console.log('API response:', response);
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
    setPartyNameSoql({
      name: '',
      address_1: '',
      address_2: '',
      country: [],
      city: '',
      state: [],
      zip: '',
    });
    setInputUserErrors({
      name: null,
      address_1: null,
      address_2: null,
      country: null,
      city: null,
      state: null,
      zip: null,
    });
    setErrorMessages([]);
    handleTableReset();
  };

  return (
    <form
      className="search-by-party-name-form custom-form--container"
      onSubmit={handleSubmit}>
      <PartyNameSearch
        partyNameSoql={partyNameSoql}
        handleInputChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        inputUserErrors={inputUserErrors}
      />
      <FormControls handleFormReset={handleFormReset} />
      {errorMessages.length > 0 && (
        <div className="form-row">
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

export default SearchByPartyNameForm;