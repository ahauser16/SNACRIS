// src/components/acrisComponents/RealPropertyParties/Name/InputComponents/NameInputInclusionExclusion.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputInclusionExclusion = ({
  inclusionText,
  exclusionText,
  onChange,
  handleErrorDisplay,
  error
}) => {
  const [isHoveredInclusionText, setIsHoveredInclusionText] = useState(false);
  const [isHoveredExclusionText, setIsHoveredExclusionText] = useState(false);

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
        className={`form-group form-group--width-auto form-group--name-inclusionExclusion ${error.inclusionText ? "field-error" : ""}`}
        style={{ '--field-width': '25ch' }}
      >
        <label htmlFor="name-inclusion-search-text">
          <span>Search Text (Inclusive)</span>
          <InfoIcon
            isHovered={isHoveredInclusionText}
            setIsHovered={setIsHoveredInclusionText}
            hoverMessage="Name must be 70 characters or less and is required for form submission."
          />
        </label>
        <input
          type="text"
          id="name-inclusion-search-text"
          name="inclusionExclusion.inclusionText"
          value={inclusionText}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="name-inclusion-search-text-description"
          placeholder="Enter inclusionary search text"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="name-inclusion-search-text-description">
          {error.inclusionText}
        </span>
      </div>
      <div
        className={`form-group form-group--width-auto form-group--name-inclusionExclusion ${error.exclusionText ? "field-error" : ""}`}
        style={{ '--field-width': '25ch' }}
      >
        <label htmlFor="name-exclusion-search-text">
          <span>Search Text (Exclusive)</span>
          <InfoIcon
            isHovered={isHoveredExclusionText}
            setIsHovered={setIsHoveredExclusionText}
            hoverMessage="Search term must be 70 characters or less and is required for form submission."
          />
        </label>
        <input
          type="text"
          id="name-exclusion-search-text"
          name="inclusionExclusion.exclusionText"
          value={exclusionText}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="name-exclusion-search-text-description"
          placeholder="Enter exclusionary search text"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="name-exclusion-search-text-description">
          {error.exclusionText}
        </span>
      </div>
    </div>
  );
};

export default NameInputInclusionExclusion;
