// src/components/PartySelect/PartySelect.jsx
import React from 'react';

const PartySelect = ({ selectedPartyType, setSelectedPartyType }) => {
  const handlePartyTypeChange = (e) => {
    setSelectedPartyType(e.target.value);
  };

  return (
    <div>
      <label>Party Type:</label>
      <select name="party_type" value={selectedPartyType} onChange={handlePartyTypeChange}>
        <option value="">Select Party Type</option>
        <option value="1">Party Number One</option>
        <option value="2">Party Number Two</option>
        <option value="3">Party Number Three</option>
      </select>
    </div>
  );
};

export default PartySelect;

// This component handles the selection of the party type.
// It updates the `selectedPartyType` state in `SearchByPartyNameForm` and subsequently updates the `soql` state via the `handlePartySelect` function.