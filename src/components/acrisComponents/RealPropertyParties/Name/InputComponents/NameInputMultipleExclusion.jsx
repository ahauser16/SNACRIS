// src/components/NameInput/NameInput_Contains.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputMultipleExclusion = ({
  searchText,
  exclusionText1,
  exclusionText2,
  onChange,
  handleErrorDisplay,
  error
}) => {
  const [isHoveredSearch, setIsHoveredSearch] = useState(false);
  const [isHoveredExclusion1, setIsHoveredExclusion1] = useState(false);
  const [isHoveredExclusion2, setIsHoveredExclusion2] = useState(false);

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
    <div className="form-row form-row--mixed">
      <div
        className={`form-group form-group--width-auto form-group--name-multipleExclusion ${error.searchText ? "field-error" : ""}`}
        style={{ '--field-width': '30ch' }}
      >
        <label htmlFor="name-search-text">
          <span>Search Text</span>
          <InfoIcon
            isHovered={isHoveredSearch}
            setIsHovered={setIsHoveredSearch}
            hoverMessage="This search text must be 70 characters or less and is required for form submission."
          />
        </label>
        <input
          type="text"
          id="name-search-text"
          name="multipleExclusion.searchText"
          value={searchText}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="multiple-exclusion-name-search-text-description"
          placeholder="Enter search text"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="multiple-exclusion-name-search-text-description">
          {error.searchText}
        </span>
      </div>
      <div
        className={`form-group form-group--width-auto form-group--name-multipleExclusion ${error.exclusionText1 ? "field-error" : ""}`}
        style={{ '--field-width': '25ch' }}
        
      >
        <label htmlFor="exclusion-text1">
          <span>Exclusion Text 1</span>
          <InfoIcon
            isHovered={isHoveredExclusion1}
            setIsHovered={setIsHoveredExclusion1}
            hoverMessage="This exclusion text must be 70 characters or less and is required for form submission."
          />
        </label>
        <input
          type="text"
          id="exclusion-text1"
          name="multipleExclusion.exclusionText1"
          value={exclusionText1}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="multiple-exclusion-exclusion-text1-description"
          placeholder="Enter exclusion text 1"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="multiple-exclusion-exclusion-text1-description">
          {error.exclusionText1}
        </span>
      </div>
      <div
        className={`form-group form-group--width-auto form-group--name-multipleExclusion ${error.exclusionText2 ? "field-error" : ""}`}
        style={{ '--field-width': '25ch' }}
      >
        <label htmlFor="exclusion-text2">
          <span>Exclusion Text 2</span>
          <InfoIcon
            isHovered={isHoveredExclusion2}
            setIsHovered={setIsHoveredExclusion2}
            hoverMessage="This exclusion text must be 70 characters or less and is required for form submission."
          />
        </label>
        <input
          type="text"
          id="exclusion-text2"
          name="multipleExclusion.exclusionText2"
          value={exclusionText2}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="multiple-exclusion-exclusion-text2-description"
          placeholder="Enter exclusion text 2"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="multiple-exclusion-exclusion-text2-description">
          {error.exclusionText2}
        </span>
      </div>
    </div>
  );
};

export default NameInputMultipleExclusion;
