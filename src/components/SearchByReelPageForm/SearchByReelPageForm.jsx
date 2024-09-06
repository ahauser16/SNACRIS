// src/components/SearchByReelPageForm/SearchByReelPageForm.jsx
import React, { useState } from 'react';
import { fetchRealPropertyPartiesData } from '../../api/api';

const SearchByReelPageForm = ({ setData, setError, colorClass }) => {
  const [soql, setSoql] = useState({
    name: '',
  });
  const [searchType, setSearchType] = useState('exact');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSoql((prevSoql) => ({
      ...prevSoql,
      [name]: value,
    }));
  };

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting with SoQL:', soql, 'Search Type:', searchType); // Log the SoQL object and search type
    try {
      const result = await fetchRealPropertyPartiesData(soql, searchType);
      console.log('API call result:', result); // Log the result of the API call
      setData(result);
      setError(null); // Reset error state on successful fetch
    } catch (err) {
      console.error('Error in handleSubmit:', err); // Log the error
      setError(err.message);
      setData([]); // Clear data on error
    }
  };

  return (
    <div className={`form-container ${colorClass}`}>
      <h2>Real Property Parties Data</h2>
      <h3>Search by Party 'name'</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Party Name:
          </label>
          <input
            type="text"
            name="name"
            value={soql.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="exact"
              checked={searchType === 'exact'}
              onChange={handleSearchTypeChange}
            />
            Exact Text Search
          </label>
          <label>
            <input
              type="radio"
              value="partial"
              checked={searchType === 'partial'}
              onChange={handleSearchTypeChange}
            />
            Partial Text Search
          </label>
        </div>
        <button type="submit">Fetch Data</button>
      </form>
    </div>
  );
};

export default SearchByReelPageForm;