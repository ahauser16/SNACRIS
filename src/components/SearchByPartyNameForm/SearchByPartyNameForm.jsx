//src/components/SearchByPartyNameForm/SearchByPartyNameForm.jsx
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
  const [selectedPartyType, setSelectedPartyType] = useState([]);
  const [selectedDocTypes, setSelectedDocTypes] = useState([]);
  const [soql, setSoql] = useState({
    name: '',
    party_type: '',
    document_date_start: '',
    document_date_end: '',
    borough: [],
    doc_type: '',
  });
  const [queries, setQueries] = useState([]);

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

  const handleAddQuery = (query) => {
    setQueries((prevQueries) => [...prevQueries, query]);
  };

  const handleResetQueries = (newQueries = []) => {
    setQueries(newQueries);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting with SoQL:', soql, 'Queries:', queries);

    try {
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
        handlePartyName={handlePartyName}
        handleAddQuery={handleAddQuery}
        handleResetQueries={handleResetQueries}
      />
      <PartySelect
        selectedPartyType={selectedPartyType}
        setSelectedPartyType={handlePartySelect}
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