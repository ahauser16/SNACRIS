// src/components/SearchByDocIdForm/SearchByDocIdForm.jsx
import React, { useState } from 'react';
import { fetchRealPropertyMasterData } from '../../api/api';
// import DisplayApiDataTable from '../DisplayApiDataTable/DisplayApiDataTable';
import './SearchByDocIdForm.css';

const SearchByDocIdForm = ({ setData, setError }) => {
  const [soql, setSoql] = useState({
    document_id: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSoql((prevSoql) => ({
      ...prevSoql,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting with SoQL:', soql); // Log the SoQL object
    try {
      const result = await fetchRealPropertyMasterData(soql);
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
    <div className="form-container">
      <h2>Real Property Master Data</h2>
      <h3>Search by 'document_id'</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Document ID:
          </label>
          <input
            type="text"
            name="document_id"
            value={soql.document_id}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Fetch Data</button>
      </form>
    </div>
  );
};

export default SearchByDocIdForm;