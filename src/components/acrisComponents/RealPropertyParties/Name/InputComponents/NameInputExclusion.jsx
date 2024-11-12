// src/components/NameInput/NameInputExclusion.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputExclusion = ({ searchText, exclusionText, onChange, handleErrorDisplay, error }) => {
  const [isHoveredSearch, setIsHoveredSearch] = useState(false);
  const [isHoveredExclusion, setIsHoveredExclusion] = useState(false);

  const validateName = (name, value) => {
    if (value.length > 70) {
      handleErrorDisplay(name, "Text must be 70 characters or less.");
    } else if (!value) {
      handleErrorDisplay(name, "This field is required for form submission");
    } else {
      handleErrorDisplay(name, null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    const { name, value } = e.target;
    validateName(name, value);
    onChange(e);
  };

  return (
    <div className="form-group form-group--name-exclusion">
      <div className={`form-group ${error.searchText ? "field-error" : ""}`}>
        <label htmlFor="search-text">
          <span>Name Search</span>
          <InfoIcon
            isHovered={isHoveredSearch}
            setIsHovered={setIsHoveredSearch}
            hoverMessage="Name must be 70 characters or less and is required for form submission."
          />
        </label>
        <input
          type="text"
          id="search-text"
          name="exclusion.searchText"
          value={searchText}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="name-includes-description"
          placeholder="Enter Name"
          maxLength="70"
          required
        />
        <span className="field-description" id="name-includes-description">
          {error.searchText}
        </span>
      </div>
      <div className={`form-group ${error.exclusionText ? "field-error" : ""}`}>
        <label htmlFor="exclusion-text">
          <span>Exclusion Text</span>
          <InfoIcon
            isHovered={isHoveredExclusion}
            setIsHovered={setIsHoveredExclusion}
            hoverMessage="Exclusion text must be 70 characters or less and is required for form submission."
          />
        </label>
        <input
          type="text"
          id="exclusion-text"
          name="exclusion.exclusionText"
          value={exclusionText}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="name-exclusion-description"
          placeholder="Enter exclusion text"
          maxLength="70"
          required
        />
        <span className="field-description" id="name-exclusion-description">
          {error.exclusionText}
        </span>
      </div>
    </div>
  );
};

export default NameInputExclusion;