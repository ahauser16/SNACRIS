// src/components/DateSelect/DateSelect.jsx
import React, { useState } from 'react';

const DateSelect = ({ soql, setSoql, handleChange }) => {
  const [dateQueries, setDateQueries] = useState([
    { dateType: 'single', selectedField: 'document_date' }
  ]);

  const handleDateTypeChange = (index, e) => {
    const newDateQueries = [...dateQueries];
    newDateQueries[index].dateType = e.target.value;
    setDateQueries(newDateQueries);
  };

  const handleFieldChange = (index, e) => {
    const newDateQueries = [...dateQueries];
    newDateQueries[index].selectedField = e.target.value;
    setDateQueries(newDateQueries);
  };

  const handleAddDateQuery = () => {
    setDateQueries([...dateQueries, { dateType: 'single', selectedField: 'document_date' }]);
  };

  return (
    <div>
      {dateQueries.map((query, index) => (
        <div key={index}>
          <div>
            <label>
              <input
                type="radio"
                value="single"
                checked={query.dateType === 'single'}
                onChange={(e) => handleDateTypeChange(index, e)}
              />
              Single Date
            </label>
            <label>
              <input
                type="radio"
                value="range"
                checked={query.dateType === 'range'}
                onChange={(e) => handleDateTypeChange(index, e)}
              />
              Date Range
            </label>
          </div>
          <div>
            <label>
              Date Field:
              <select value={query.selectedField} onChange={(e) => handleFieldChange(index, e)}>
                <option value="document_date">Document Date</option>
                <option value="recorded_datetime">Recorded Date</option>
                <option value="modified_date">Modified Date</option>
                <option value="good_through_date">Good Through Date</option>
              </select>
            </label>
          </div>
          {query.dateType === 'single' ? (
            <div>
              <label>{query.selectedField.replace('_', ' ')}:</label>
              <input
                type="date"
                name={query.selectedField}
                value={soql[query.selectedField]}
                onChange={handleChange}
              />
            </div>
          ) : (
            <div>
              <div>
                <label>{query.selectedField.replace('_', ' ')} Start:</label>
                <input
                  type="date"
                  name={`${query.selectedField}_start`}
                  value={soql[`${query.selectedField}_start`]}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>{query.selectedField.replace('_', ' ')} End:</label>
                <input
                  type="date"
                  name={`${query.selectedField}_end`}
                  value={soql[`${query.selectedField}_end`]}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
        </div>
      ))}
      <button type="button" onClick={handleAddDateQuery}>Add Date Query</button>
    </div>
  );
};

export default DateSelect;

// This component handles the selection of date fields and date ranges.
// It updates the `soql` state in `SearchByPartyNameForm` via the `handleChange` function.