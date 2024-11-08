// src/components/PartyNameSearch/PartyNameSearch.jsx
import React, { useState } from 'react';
import './PartyNameSearch.css';

const PartyNameSearch = ({ soql, queries = [], handleAddQuery, handleResetQueries }) => {
  const [currentQuery, setCurrentQuery] = useState('');
  const [searchType, setSearchType] = useState('startsWith');
  const [booleanOperator, setBooleanOperator] = useState('AND');

  const handleCurrentQueryChange = (e) => {
    setCurrentQuery(e.target.value);
  };

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleBooleanOperatorChange = (e) => {
    setBooleanOperator(e.target.value);
  };

  const handleAddCondition = () => {
    if (currentQuery) {
      const query = { searchType, query: currentQuery };
      console.log('Adding query:', query);
      handleAddQuery({ query, booleanOperator });
      setCurrentQuery('');
    }
  };

  const handleRemoveQuery = (index) => {
    const newQueries = queries.filter((_, i) => i !== index);
    handleResetQueries(newQueries);
  };

  const formatQuery = (query) => {
    const searchTypeMap = {
      startsWith: 'Starts with',
      endsWith: 'Ends with',
      contains: 'Contains',
      exclude: 'Exclude',
    };
    return `${searchTypeMap[query.query.searchType]} '${query.query.query}'`;
  };

  return (
    <fieldset className="PartyNameSearch-container">
      <legend className="party-name-search--legend">Search By Party Name</legend>
      <div>
        <label>Search Type:</label>
        <select value={searchType} onChange={handleSearchTypeChange}>
          <option value="startsWith">Starts With</option>
          <option value="endsWith">Ends With</option>
          <option value="contains">Contains</option>
          <option value="exclude">Exclude</option>
        </select>
      </div>
      <div>
        <label>Party Name:</label>
        <input
          type="text"
          name="name"
          value={currentQuery}
          onChange={handleCurrentQueryChange}
        />
        <button type="button" onClick={handleAddCondition}>ADD CONDITION</button>
      </div>
      <div>
        <label>Boolean Operator:</label>
        <select value={booleanOperator} onChange={handleBooleanOperatorChange}>
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </select>
      </div>
      <div className="initial-query">
        {Array.isArray(queries) && queries.map((query, index) => (
          <div key={index} className="formatted-query-container">
            {index > 0 && (
              <div className="formatted-boolean-container">
                <label className="formatted-boolean-label visually-hidden" id={`boolean-label-${index}`}>
                  Boolean Operator:
                </label>
                <p className="formatted-boolean" aria-labelledby={`boolean-label-${index}`}>
                  {query.booleanOperator}
                </p>
              </div>
            )}
            <label className="formatted-query-label visually-hidden" id={`query-label-${index}`}>
              Query:
            </label>
            <p className="formatted-query" aria-labelledby={`query-label-${index}`}>
              {formatQuery(query)}
            </p>
            <button type="button" onClick={() => handleRemoveQuery(index)}>X</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => handleResetQueries([])}>RESET</button>
      <button type="button" onClick={() => handleResetQueries([])}>SAVE THIS Party Name SEARCH</button>
    </fieldset>
  );
};

export default PartyNameSearch;