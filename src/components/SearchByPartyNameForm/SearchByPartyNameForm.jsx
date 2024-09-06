// src/components/SearchByPartyNameForm/SearchByPartyNameForm.jsx
import React, { useState } from 'react';
import {
  fetchRealPropertyPartiesData,
  fetchRealPropertyMasterData,
  fetchRealPropertyLegalsData,
  fetchRealPropertyReferencesData,
  fetchRealPropertyRemarksData
} from '../../api/api';
import BoroughSelect from '../BoroughSelect/BoroughSelect';
import PartySelect from '../PartySelect/PartySelect';
import DocSelect from '../DocSelect/DocSelect';
import DateSelect from '../DateSelect/DateSelect';



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
  const [searchType, setSearchType] = useState('exact');

  const handleChange = (e) => {
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
    setSearchType(e.target.value);
  };

  const handlePartySelect = (value) => {
    setSelectedPartyType(value);
    setSoql((prevSoql) => ({
      ...prevSoql,
      party_type: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting with SoQL:', soql, 'Search Type:', searchType); // Log the SoQL object and search type
    try {
      const results = await Promise.all([
        fetchRealPropertyPartiesData(soql, searchType),
        fetchRealPropertyMasterData(soql, searchType),
        fetchRealPropertyLegalsData(soql, searchType),
        fetchRealPropertyReferencesData(soql, searchType),
        fetchRealPropertyRemarksData(soql, searchType),
      ]);
      const combinedResults = results.flat();
      console.log('API call results:', combinedResults); // Log the combined results of the API calls
      setData(combinedResults);
      setError(null); // Reset error state on successful fetch
    } catch (err) {
      console.error('Error in handleSubmit:', err); // Log the error
      setError(err.message);
      setData([]); // Clear data on error
    }
  };

  return (
    <div className={`form-container`}>
      <h2>Search Real Property Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input type="radio" value="exact" checked={searchType === 'exact'} onChange={handleSearchTypeChange} />
            Exact Text Search
          </label>
          <label>
            <input type="radio" value="partial" checked={searchType === 'partial'} onChange={handleSearchTypeChange} />
            Partial Text Search
          </label>
        </div>
        <div>
          <label>Party Name:</label>
          <input type="text" name="name" value={soql.name} onChange={handleChange} />
        </div>
        <PartySelect selectedPartyType={selectedPartyType} setSelectedPartyType={handlePartySelect} />
        <DateSelect soql={soql} setSoql={setSoql} handleChange={handleChange} />
        <BoroughSelect selectedBoroughs={selectedBoroughs} setSelectedBoroughs={handleBoroughChange} />
        <DocSelect setSelectedDocTypes={setSelectedDocTypes} />
        <button type="submit">Fetch Data</button>
      </form>
    </div>
  );
};

export default SearchByPartyNameForm;