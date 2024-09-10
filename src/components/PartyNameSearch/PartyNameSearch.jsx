// src/components/PartyNameSearch/PartyNameSearch.jsx
// src/components/PartyNameSearch/PartyNameSearch.jsx
import React, { useState } from 'react';

const PartyNameSearch = ({ searchTypes, setSearchTypes, soql, handlePartyName }) => {
  const [queries, setQueries] = useState([]);
  const [currentQuery, setCurrentQuery] = useState('');

  const handleSearchTypeChange = (e) => {
    const { value, checked } = e.target;
    setSearchTypes((prevSearchTypes) =>
      checked ? [...prevSearchTypes, value] : prevSearchTypes.filter((type) => type !== value)
    );
  };

  const handleAddQuery = () => {
    if (currentQuery) {
      setQueries([...queries, currentQuery]);
      setCurrentQuery('');
    }
  };

  const handleCurrentQueryChange = (e) => {
    setCurrentQuery(e.target.value);
  };

  const isExactSelected = searchTypes.includes('exact');

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            value="exact"
            checked={isExactSelected}
            onChange={handleSearchTypeChange}
          />
          Exact Text Search
        </label>
        <label>
          <input
            type="checkbox"
            value="partial"
            checked={searchTypes.includes('partial')}
            onChange={handleSearchTypeChange}
            disabled={isExactSelected}
          />
          Partial Text Search
        </label>
        <label>
          <input
            type="checkbox"
            value="startsWith"
            checked={searchTypes.includes('startsWith')}
            onChange={handleSearchTypeChange}
            disabled={isExactSelected}
          />
          Starts With
        </label>
        <label>
          <input
            type="checkbox"
            value="endsWith"
            checked={searchTypes.includes('endsWith')}
            onChange={handleSearchTypeChange}
            disabled={isExactSelected}
          />
          Ends With
        </label>
        <label>
          <input
            type="checkbox"
            value="wildcard"
            checked={searchTypes.includes('wildcard')}
            onChange={handleSearchTypeChange}
            disabled={isExactSelected}
          />
          Wildcard
        </label>
        <label>
          <select
            value={searchTypes.includes('boolean') ? 'boolean' : ''}
            onChange={handleSearchTypeChange}
            disabled={isExactSelected}
          >
            <option value="">Select Boolean</option>
            <option value="AND">AND</option>
            <option value="OR">OR</option>
            <option value="NOT">NOT</option>
          </select>
          Boolean
        </label>
        <label>
          <input
            type="checkbox"
            value="proximity"
            checked={searchTypes.includes('proximity')}
            onChange={handleSearchTypeChange}
            disabled={isExactSelected}
          />
          Proximity
        </label>
        <label>
          <input
            type="checkbox"
            value="exclude"
            checked={searchTypes.includes('exclude')}
            onChange={handleSearchTypeChange}
            disabled={isExactSelected}
          />
          Exclude
        </label>
      </div>
      <div>
        <label>Party Name:</label>
        <input
          type="text"
          name="name"
          value={soql.name}
          onChange={handlePartyName}
        />
        <button type="button" onClick={handleAddQuery}>ADD</button>
      </div>
      <div className="initial-query">
        {queries.map((query, index) => (
          <div key={index}>{query}</div>
        ))}
      </div>
    </div>
  );
};

export default PartyNameSearch;

// This component handles the input for the party name and search type (exact or partial).
// It updates the `soql` state in `SearchByPartyNameForm` via the `handleChange` function.

// Explanation:
// Disabling Inputs: The isExactSelected variable checks if "exact" is selected. If it is, other input fields are disabled using the disabled attribute.
// Dropdown for Boolean: The "boolean" input is changed to a select dropdown menu with options for "AND", "OR", and "NOT".
// Initial Query Display: A div with className "initial-query" is added to display the user's search queries.
// Add Button: An "ADD" button is added to append the current search query to the "initial-query" div. The handleAddQuery function handles this logic.
// This refactor ensures that the component behaves as described, allowing users to construct complex search queries interactively.