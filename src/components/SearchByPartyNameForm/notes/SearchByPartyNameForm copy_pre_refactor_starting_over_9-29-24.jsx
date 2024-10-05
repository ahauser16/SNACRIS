//src/components/SearchByPartyNameForm/SearchByPartyNameForm.jsx
import React, { useState } from 'react';
import {
  fetchRealPropertyPartiesData,
  fetchRealPropertyMasterData,
} from '../../../api/api';
import PartyNameSearch from '../../PartyNameSearch/PartyNameSearch';
import DocAndPartyTypeSelect from '../../DocAndPartyTypeSelect/DocAndPartyTypeSelect';
import DateSelect from '../../DateSelect/DateSelect';
import BoroughSelect from '../BoroughSelect/BoroughSelect';

import './SearchByPartyNameForm.css';

const SearchByPartyNameForm = ({ setData, setError }) => {
  const [selectedBoroughs, setSelectedBoroughs] = useState([]);
  const [selectedPartyType, setSelectedPartyType] = useState([]);
  const [selectedDocTypeCheckboxes, setSelectedDocTypeCheckboxes] = useState([]); // New state for selected checkboxes
  // EXPLA(soql)-->This line initializes the `soql` state with default values. Each property in the `soql` object corresponds to a search parameter that can be set by the user.
  const [soql, setSoql] = useState({
    name: '',
    doc_type: '',
    party_type: '',
    document_date_start: '',
    document_date_end: '',
    borough: [],
  });
  const [queries, setQueries] = useState([]);

  // EXPLA(handlePartyName)-->This line below defines the `handlePartyName` function, which takes an event object `e` as its parameter. This function will be called when the user interacts with the party name input field.
  // EXPLA(soql)--> When the user enters a party name in the `PartyNameSearch` component, the `handlePartyName` function is called whivh updates the `soql` state with the new party name value.
  const handlePartyName = (e) => {
    // EXPLA(handlePartyName)--> This line below extracts the name and value properties from the event target (`e.target`). The name property corresponds to the `name` attribute of the `input` field, and the `value` property corresponds to the current value of the `input` field.
    const { name, value } = e.target;
    // EXPLA(handlePartyName)-->This line updates the `soql` state using the `setSoql` function. It takes the previous state (`prevSoql`) and returns a new state object.
    setSoql((prevSoql) => ({
      // EXPLA(handlePartyName)-->The spread operator (`...prevSoql`) is used to copy all properties from the previous state.
      ...prevSoql,
      // EXPLA(handlePartyName)-->The `[name]: value` syntax dynamically sets the property of the state object with the name of the input field to the new value entered by the user.
      [name]: value,
    }));
  };

  const handleDocType = (e) => {
    const { value } = e.target;
    setSoql((prevSoql) => ({
      ...prevSoql,
      [doc_type]: value,
    }));
  };

  const handlePartyType = (value) => {
    setSelectedPartyType(value);
    setSoql((prevSoql) => ({
      ...prevSoql,
      [party_type]: value,
    }));
  };

  const handleBoroughChange = (selectedBoroughs) => {
    setSelectedBoroughs(selectedBoroughs);
    setSoql((prevSoql) => ({
      ...prevSoql,
      borough: selectedBoroughs,
    }));
  };

  const handleAddQuery = (query) => {
    setQueries((prevQueries) => [...prevQueries, query]);
  };

  const handleResetQueries = (newQueries = []) => {
    setQueries(newQueries);
  };

  const handleSubmit = async (e) => {
    // EXPLA(soql)--> When the user submits the form, the handleSubmit function is called which calls the `fetchRealPropertyPartiesData` which receives the `soql` state and `queries` state.
    e.preventDefault();
    console.log('Submitting with SoQL:', soql, 'Queries:', queries);

    try {
      //EXPLA(soql)--> `fetchRealPropertyPartiesData` calls the `RPMqueryBuilder` function to construct the URL for the GET request.
      const response = await fetchRealPropertyPartiesData({ ...soql, queries });
      setData(response);
      setError(null); // Reset error state on successful fetch
    } catch (error) {
      console.error('Error fetching data:', error); // Log the error
      setError(error.message);
      setData([]); // Clear data on error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PartyNameSearch
        soql={soql}
        queries={queries}
        // EXPLA(handlePartyName)-->the line of code below passes the `handlePartyName` function as a prop to the `PartyNameSearch` component. This allows the `PartyNameSearch` component to call the `handlePartyName` function when the user interacts with the party name input field within the `PartyNameSearch` component.
        handlePartyName={handlePartyName}
        handleAddQuery={handleAddQuery}
        handleResetQueries={handleResetQueries}
      />
      <DocAndPartyTypeSelect
        soql={soql}
        queries={queries}
        handleDocType={handleDocType}
        handlePartyType={handlePartyType}
      />
      <DateSelect
        soql={soql}
        setSoql={setSoql}
      />
      <BoroughSelect
        selectedBoroughs={selectedBoroughs}
        handleBoroughChange={handleBoroughChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchByPartyNameForm;

