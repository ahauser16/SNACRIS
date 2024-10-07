// src/components/SearchByPartyNameForm/SearchByPartyNameForm.jsx
import React, { useState } from 'react';
import { fetchRealPropertyPartiesData } from '../../api/api';
import PartyNameSearch from '../PartyNameSearch/PartyNameSearch';
import { uppercaseSoql } from '../Utils/uppercaseSoql';
import { handleErrorsDuringSubmission } from '../Utils/handleErrorsDuringFormSubmission';
import './SearchByPartyNameForm.css';

const SearchByPartyNameForm = ({ setData, setError, handleTableReset }) => {

  const [soql, setSoql] = useState({
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
      } else {
        newErrors[name] = null; // Set to null if no error
      }
      console.log('Updated inputUserErrors:', newErrors);
      return newErrors;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input change - ${name}: ${value}`);
    setSoql((prevSoql) => {
      const newSoql = { ...prevSoql, [name]: value };
      return uppercaseSoql(newSoql);
    });
  };

  const handleStateChange = (e) => {
    const { value, checked, type } = e.target;
    console.log(`State change - value: ${value}, checked: ${checked}, type: ${type}`);

    if (type === "checkbox") {
      setSoql((prevSoql) => {
        const newSoql = {
          ...prevSoql,
          state: checked
            ? [...prevSoql.state, value]
            : prevSoql.state.filter((state) => state !== value),
        };
        console.log('Updated soql:', newSoql);
        return uppercaseSoql(newSoql);
      });
    } else {
      setSoql((prevSoql) => {
        const newSoql = {
          ...prevSoql,
          state: value ? [value] : [],
        };
        console.log('Updated soql:', newSoql);
        return uppercaseSoql(newSoql);
      });
    }
  };

  const handleCountryChange = (e) => {
    const { value, checked, type } = e.target;
    console.log(`Country change - value: ${value}, checked: ${checked}, type: ${type}`);
    if (type === "checkbox") {
      setSoql((prevSoql) => {
        const newSoql = {
          ...prevSoql,
          country: checked
            ? [...prevSoql.country, value]
            : prevSoql.country.filter((country) => country !== value),
        };
        console.log('Updated soql:', newSoql);
        return uppercaseSoql(newSoql);
      });
    } else {
      setSoql((prevSoql) => {
        const newSoql = {
          ...prevSoql,
          country: value ? [value] : [],
        };
        console.log('Updated soql:', newSoql);
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

    console.log("Submitting with SoQL:", soql);

    try {
      const response = await fetchRealPropertyPartiesData(soql);
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
    setSoql({
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
      className="search-by-party-name-form"
      onSubmit={handleSubmit}>
      <PartyNameSearch
        soql={soql}
        handleInputChange={handleInputChange}
        handleStateChange={handleStateChange}
        handleCountryChange={handleCountryChange}
        handleErrorDisplay={handleErrorDisplay}
        inputUserErrors={inputUserErrors}
      />
      <div className="flex-container">
        <button type="submit">Search</button>
        <button type="button" onClick={handleFormReset}>Reset</button>
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

export default SearchByPartyNameForm;