// src/components/SearchByPartyNameForm/SearchByPartyNameForm.jsx
import React, { useState } from 'react';
import { fetchRealPropertyPartiesData } from '../../api/api';
import PartyNameSearch from '../PartyNameSearch/PartyNameSearch';
import './SearchByPartyNameForm.css';

// The `CountriesCheckboxes` and `StatesCheckboxes` components pass the checkbox values to the `soql` state variable through the `handleCountryChange` and `handleStateChange` functions, respectively. These functions are passed down as props from the `SearchByPartyNameForm` component to the `PartyNameSearch` component, and then further down to the `CountriesCheckboxes` and `StatesCheckboxes` components.

const SearchByPartyNameForm = ({ setData, setError, handleReset }) => {
  //State Initialization in `SearchByPartyNameForm`: The soql state is initialized in the `SearchByPartyNameForm` component below.
  const [soql, setSoql] = useState({
    name: '',
    address_1: '',
    address_2: '',
    country: [],
    city: '',
    state: [],
    zip: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSoql((prevSoql) => ({
      ...prevSoql,
      [name]: value,
    }));
  };

  // Handler Functions in `SearchByPartyNameForm`: The `handleStateChange` function is defined in the `SearchByPartyNameForm` component to update the `soql` state:
  const handleStateChange = (e) => {
    const { value, checked } = e.target;
    setSoql((prevSoql) => ({
      ...prevSoql,
      state: checked
        ? [...prevSoql.state, value]
        : prevSoql.state.filter((state) => state !== value),
    }));
  };

  // Handler Functions in `SearchByPartyNameForm`: The `handleCountryChange` function is defined in the `SearchByPartyNameForm` component to update the `soql` state:
  const handleCountryChange = (e) => {
    const { value, checked } = e.target;
    setSoql((prevSoql) => ({
      ...prevSoql,
      country: checked
        ? [...prevSoql.country, value]
        : prevSoql.country.filter((country) => country !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting with SoQL:', soql);

    try {
      const response = await fetchRealPropertyPartiesData(soql);
      setData(response);
      setError(null); // Reset error state on successful fetch
    } catch (error) {
      console.error('Error fetching data:', error); // Log the error
      setError(error.message);
      setData([]); // Clear data on error
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
    handleReset();
  };

  return (
    <form className="search-by-party-name-form" onSubmit={handleSubmit}>
      {/* Passing Handlers to `PartyNameSearch`: These handler functions are passed as props to the `PartyNameSearch` component. */}
      <PartyNameSearch
        soql={soql}
        handleInputChange={handleInputChange}
        handleStateChange={handleStateChange}
        handleCountryChange={handleCountryChange}
      />
      <div className="flex-container">
        <button type="submit">Search</button>
        <button type="button" onClick={handleFormReset}>Reset</button>
      </div>
    </form>
  );
};

export default SearchByPartyNameForm;