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

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedBoroughs((prevSelectedBoroughs) => {
      if (checked) {
        return [...prevSelectedBoroughs, parseInt(value)];
      } else {
        return prevSelectedBoroughs.filter((borough) => borough !== parseInt(value));
      }
    });
  };

  return (
    <div>
      <label>Borough:</label>
      <div className="borough-checkboxes">
        {boroughOptions.map((borough) => (
          <div key={borough.value}>
            <label>
              <input
                type="checkbox"
                value={borough.value}
                checked={selectedBoroughs.includes(borough.value)}
                onChange={handleCheckboxChange}
              />
              {borough.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoroughSelect;