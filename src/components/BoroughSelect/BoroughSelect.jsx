// src/components/GroupedBoroughsRadioBtns/GroupedBoroughsRadioBtns
import React from 'react';
import './BoroughSelect.css';

const BoroughSelect = ({ selectedBorough, setSelectedBorough }) => {
  const boroughOptions = [
    { description: 'Manhattan', borough_code: 1 },
    { description: 'Bronx', borough_code: 2 },
    { description: 'Brooklyn', borough_code: 3 },
    { description: 'Queens', borough_code: 4 },
    { description: 'Staten Island', borough_code: 5 },
  ];

  const handleBoroughChange = (e) => {
    const borough_code = parseInt(e.target.value, 10);
    setSelectedBorough(borough_code);
  };

  return (
    <div className="borough-select--container">
      <label htmlFor="borough-select" className="borough-select--label">Borough:</label>
      <select
        id="borough-select"
        value={selectedBorough}
        onChange={handleBoroughChange}
        className="borough-select--select"
      >
        <option value="" className="borough-select--option">Select a borough</option>
        {boroughOptions.map((borough) => (
          <option key={borough.borough_code} value={borough.borough_code} className="borough-select--option">
            {borough.description}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BoroughSelect;

