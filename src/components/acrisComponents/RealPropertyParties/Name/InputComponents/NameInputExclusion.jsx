// src/components/NameInput/NameInputExclusion.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputExclusion = ({
  searchTextFS,
  searchTextES,
  exclusionTextFS,
  exclusionTextES,
  handleInputChange,
  handleErrorDisplay,
}) => {
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
    handleInputChange(e);
  };

  return (
    <div className="form-row form-row--mixed">
      <div
        className={`form-group form-group--width-auto form-group--name-exclusion ${searchTextES ? "field-error" : ""}`}
        style={{ '--field-width': '25ch' }}
      >
        <label htmlFor="name-search-text">
          <span>Name Search</span>
          <InfoIcon
            isHovered={isHoveredSearch}
            setIsHovered={setIsHoveredSearch}
            hoverMessage="Name must be 70 characters or less and is required for form submission."
          />
        </label>
        <input
          type="text"
          id="name-search-text"
          name="exclusion.searchText"
          value={searchTextFS}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="name-search-text-description"
          placeholder="Enter Name"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="name-search-text-description">
          {searchTextES}
        </span>
      </div>
      <div
        className={`form-group form-group--width-auto form-group--name-exclusion ${exclusionTextES ? "field-error" : ""}`}
        style={{ '--field-width': '25ch' }}
      >
        <label htmlFor="name-exclusion-text">
          <span>Exclusion Text</span>
          <InfoIcon
            isHovered={isHoveredExclusion}
            setIsHovered={setIsHoveredExclusion}
            hoverMessage="Exclusion text must be 70 characters or less and is required for form submission."
          />
        </label>
        <input
          type="text"
          id="name-exclusion-text"
          name="exclusion.exclusionText"
          value={exclusionTextFS}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="name-exclusion-text-description"
          placeholder="Enter exclusion text"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="name-exclusion-text-description">
          {exclusionTextES}
        </span>
      </div>
    </div>
  );
};

export default NameInputExclusion;