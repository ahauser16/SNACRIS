/* src/components/BoroughSelect/BoroughSelect.jsx */
import React from 'react';
import './BoroughSelect.css';

const BoroughSelect = ({ selectedBoroughs, setSelectedBoroughs }) => {
  const boroughOptions = [
    { label: 'Manhattan', value: 1 },
    { label: 'Bronx', value: 2 },
    { label: 'Brooklyn', value: 3 },
    { label: 'Queens', value: 4 },
    { label: 'Staten Island', value: 5 },
  ];

  const handleBorRadioChange = (e) => {
    const { value, checked } = e.target;
  };

  return (
    <div>
      <label>Borough:</label>
        {boroughOptions.map((borough) => (
          <div key={borough.value} className="borough-radio">
            <label>
              <input
                type="radio"
                value={borough.value}
                checked={selectedBoroughs.includes(borough.value)}
                onChange={handleCheckboxChange}
              />
              {borough.label}
            </label>
          </div>
        ))}
    </div>
  );
};

export default BoroughSelect;

// This component handles the selection of boroughs.
// It updates the `selectedBoroughs` state in `SearchByPartyNameForm` and subsequently updates the `soql` state via the `handleBoroughChange` function.