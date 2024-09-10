// src/components/SearchByPartyNameForm/SearchByPartyNameForm.jsx
import React, { useState } from 'react';
import {
  fetchRealPropertyPartiesData,
  fetchRealPropertyMasterData,
} from '../../api/api';
import PartyNameSearch from '../PartyNameSearch/PartyNameSearch';
import PartySelect from '../PartySelect/PartySelect';
import DateSelect from '../DateSelect/DateSelect';
import BoroughSelect from '../BoroughSelect/BoroughSelect';
import DocSelect from '../DocSelect/DocSelect';

import './SearchByPartyNameForm.css';

const SearchByPartyNameForm = ({ setData, setError }) => {
  const [selectedBoroughs, setSelectedBoroughs] = useState([]);
  const [selectedPartyType, setSelectedPartyType] = useState('');
  const [selectedDocTypes, setSelectedDocTypes] = useState([]);

  const [soql, setSoql] = useState({
    name: '',
    party_type: '',
    document_date_start: '',
    document_date_end: '',
    borough: [],
    doc_type: '',
  });
  const [searchTypes, setSearchTypes] = useState(['exact']);

  const handlePartyName = (e) => {
    const { name, value } = e.target;
    setSoql((prevSoql) => ({
      ...prevSoql,
      [name]: value,
    }));
  };

  const handleBoroughChange = (selectedBoroughs) => {
    setSelectedBoroughs(selectedBoroughs);
    setSoql((prevSoql) => ({
      ...prevSoql,
      borough: selectedBoroughs,
    }));
  };

  const handleSearchTypeChange = (e) => {
    setSearchTypes(e.target.value);
  };

  const handlePartySelect = (value) => {
    setSelectedPartyType(value);
    setSoql((prevSoql) => ({
      ...prevSoql,
      party_type: value,
    }));
  };

  const handleDocSelect = (selectedDocTypes) => {
    setSelectedDocTypes(selectedDocTypes);
    setSoql((prevSoql) => ({
      ...prevSoql,
      doc_type: selectedDocTypes.join(','),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting with SoQL:', soql, 'Search Types:', searchTypes); // Log the SoQL object and search types
    
    const fetchFunctions = [];

    if (soql.name) {
      fetchFunctions.push(fetchRealPropertyPartiesData(soql, searchTypes));
    }
    //`party_type` is a field in the `real_property_parties` table
    if (soql.party_type) {
      fetchFunctions.push(fetchRealPropertyPartiesData(soql, searchTypes));
    }
    //`document_date_start` and `document_date_end` can be chosen by the user to represent `document_date`, `recorded_datetime`, or `modified_datetime` fields which are in the `real_property_master` table.
    if (soql.document_date_start || soql.document_date_end) {
      fetchFunctions.push(fetchRealPropertyMasterData(soql, searchTypes));
    }
    //`borough` is a field in the `real_property_master` table represented by `recorded_borough`.  `borough` is also a field in the `real_property_legals` table represented by `borough`.
    if (soql.borough.length > 0) {
      fetchFunctions.push(fetchRealPropertyMasterData(soql, searchTypes));
    }

    try {
      const results = await Promise.all(fetchFunctions);
      setData(results.flat());
    } catch (error) {
      setError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PartyNameSearch
        searchTypes={searchTypes}
        setSearchTypes={setSearchTypes}
        soql={soql}
        handlePartyName={handlePartyName}
      />
      <PartySelect
        selectedPartyType={selectedPartyType}
        handlePartySelect={handlePartySelect}
      />
      <DateSelect
        soql={soql}
        setSoql={setSoql}
      />
      <BoroughSelect
        selectedBoroughs={selectedBoroughs}
        handleBoroughChange={handleBoroughChange}
      />
      <DocSelect
        selectedDocTypes={selectedDocTypes}
        handleDocSelect={handleDocSelect}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchByPartyNameForm;

// Current refactor of the custom form related elements: PartyNameSearch, PartySelect, DateSelect, BoroughSelect, and DocSelect components involve the following issues & improvements. 

//State Updates: (1) Ensure that all components correctly update the `soql` state in `SearchByPartyNameForm` and (2) For `DocSelect`, ensure that the selected document types are reflected in the `soql` state.

//Conditional Fetch Functions: Ensure that the fetch functions are conditionally included based on the filled-out fields.