// src/components/acrisComponents/RealPropertyParties/Name/SearchModifier/NameInputHybridModifier.jsx
import React, { useState } from 'react';
import searchTypeDescriptions from './searchTypeDescriptions';

const NameInputHybridModifier = ({
  handleModifierChange,
  nameModifierFS,
  nameModifierES,
}) => {
  const [description, setDescription] = useState(searchTypeDescriptions[nameModifierFS]);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    handleModifierChange("nameModifierFS", selectedValue);
    setDescription(searchTypeDescriptions[selectedValue]);
  };

  return (
    <div
      className="form-group form-group--width-auto"
      style={{ '--field-width': '20ch' }}
    >
      <label htmlFor="name-modifier">
        <span>Select a Search Type</span>
      </label>
      <div className="form-field select">
        <select
          id="name-modifier"
          name="name-modifier"
          value={nameModifierFS}
          onChange={handleChange}
          aria-describedby="name-select-modifier-description"
        >
          <option value="business">Business Name</option>
          <option value="nameParts">Full Name</option>
          <option value="exact">Exact</option>
          <option value="contains">Contains</option>
          <option value="exclusion">Exclusion</option>
          <option value="multipleSubstrings">Multiple Substrings</option>
          <option value="inclusionExclusion">Inclusion and Exclusion</option>
          <option value="complexCompound">Complex Compound</option>
          <option value="startsWith">Starts With</option>
          <option value="endsWith">Ends With</option>
          <option value="multipleExclusion">Multiple Exclusion</option>
        </select>
        <span class="focus"></span>
      </div>
      <p className="search-type-description">
        <b>Search Description:</b> {description}
      </p>
      <span id="name-select-modifier-description" className="field-description">
        {nameModifierES}
      </span>
    </div>
  );
};

export default NameInputHybridModifier;