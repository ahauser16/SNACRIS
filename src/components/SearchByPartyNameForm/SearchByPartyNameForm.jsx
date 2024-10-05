// src/components/SearchByPartyNameForm/SearchByPartyNameForm.jsx
import React, { useState } from 'react';
import { fetchRealPropertyPartiesData } from '../../api/api';
import PartyNameSearch from '../PartyNameSearch/PartyNameSearch';
import { uppercaseSoql } from '../Utils/uppercaseSoql';
import './SearchByPartyNameForm.css';

// The `CountriesCheckboxes` and `StatesCheckboxes` components pass the checkbox values to the `soql` state variable through the `handleCountryChange` and `handleStateChange` functions, respectively. These functions are passed down as props from the `SearchByPartyNameForm` component to the `PartyNameSearch` component, and then further down to the `CountriesCheckboxes` and `StatesCheckboxes` components.

const SearchByPartyNameForm = ({ setData, setError, handleTableReset }) => {
  //State Initialization: The component initializes a soql state object via `useState`, which stores the form fields from the ACRIS_REAL_PROPERTY_PARTIES dataset [https://data.cityofnewyork.us/City-Government/ACRIS-Real-Property-Parties/636b-3b5g/about_data]. This state object will be passed down to other components (`PartyNameSearch`, `CountriesCheckboxes`, and `StatesCheckboxes`) as props.
  //`soql` acts as the dynamic data store for the user's input and selection, which will later be transformed into a query string for the API.
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
    name: '',
    address_1: '',
    address_2: '',
    country: [],
    city: '',
    state: [],
    zip: '',
  });

  const [errorMessages, setErrorMessages] = useState([]);

  const handleErrorDisplay = (name, errorMessage) => {
    setInputUserErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  //`handleInputChange` updates the `soql` state for text inputs (e.g., `name`, `address_1`, `address_2`, etc.). It's triggered when the user types into any of these input fields.
  //question: so each component needs to have this prop in order for the `soql` data store to be updated, correct?
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSoql((prevSoql) => {
      const newSoql = { ...prevSoql, [name]: value };
      return uppercaseSoql(newSoql);
    });
  };

  // `handleStateChange` updates the `state` array in the `soql` object by adding or removing state codes based on whether the checkbox is checked.
  //question: how do I pass this prop to each state_checkbox?
  // Modify `handleStateChange` to work with both select and checkbox inputs.
  // `handleStateChange` updates the `state` array in the `soql` object
  const handleStateChange = (e) => {
    const { value, checked, type } = e.target;

    if (type === "checkbox") {
      setSoql((prevSoql) => {
        const newSoql = {
          ...prevSoql,
          state: checked
            ? [...prevSoql.state, value]
            : prevSoql.state.filter((state) => state !== value),
        };
        return uppercaseSoql(newSoql);
      });
    } else {
      setSoql((prevSoql) => {
        const newSoql = {
          ...prevSoql,
          state: value ? [value] : [],
        };
        return uppercaseSoql(newSoql);
      });
    }
  };


  // `handleCountryChange` updates the `country` array in the `soql` object when a country checkbox is checked or unchecked.
  const handleCountryChange = (e) => {
    const { value, checked, type } = e.target;
    if (type === "checkbox") {
      setSoql((prevSoql) => {
        const newSoql = {
          ...prevSoql,
          country: checked
            ? [...prevSoql.country, value]
            : prevSoql.country.filter((country) => country !== value),
        };
        return uppercaseSoql(newSoql);
      });
    } else {
      setSoql((prevSoql) => {
        const newSoql = {
          ...prevSoql,
          country: value ? [value] : [],
        };
        return uppercaseSoql(newSoql);
      });
    }
  };

  //`handleSubmit` is triggered when the user submits the form. It prevents the default form submission, then constructs the SoQL query using the current `soql` state and sends it to the API via the `fetchRealPropertyPartiesData` function.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors in inputUserErrors
    const errors = Object.values(inputUserErrors).filter(error => error !== '');
    if (errors.length > 0) {
      setErrorMessages(errors);
      return;
    }

    console.log("Submitting with SoQL:", soql);

    try {
      //the `fetchRealPropertyPartiesData` function accepts the `soql` state as an argument and passes it to `RPMqueryBuilder` to generate the SoQL query URL.
      const response = await fetchRealPropertyPartiesData(soql);
      setData(response);
      setError(null);
      setErrorMessages([]); // Clear error messages on successful submission
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setData([]);
    }
  };

  //`handleFormReset` resets the `soql` state to its initial values, effectively clearing the form. It also calls `handleReset` (passed as a prop) to reset any additional external state.
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
      name: '',
      address_1: '',
      address_2: '',
      country: [],
      city: '',
      state: [],
      zip: '',
    });
    setErrorMessages([]);
    handleTableReset();
  };

  return (
    <form className="search-by-party-name-form" onSubmit={handleSubmit}>
      {/* The `soql`, `handleInputChange`, `handleStateChange`, and `handleCountryChange` functions are passed down to the PartyNameSearch component as props, enabling it to modify the state in `SearchByPartyNameForm`. 
      question: check to see how the components in PartyNameSearch are using the `soql` prop
      
      */}
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