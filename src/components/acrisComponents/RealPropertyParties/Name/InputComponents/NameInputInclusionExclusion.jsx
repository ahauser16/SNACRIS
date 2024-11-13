// src/components/acrisComponents/RealPropertyParties/Name/InputComponents/NameInputInclusionExclusion.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputInclusionExclusion = ({
  inclusionTextFS,
  inclusionTextES,
  exclusionTextFS,
  exclusionTextES,
  handleInputChange,
  handleErrorDisplay,
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
    handleInputChange(e);
  };

  return (
    <div className="form-row form-row--mixed">
      <div
        className={`form-group form-group--width-auto form-group--name-inclusionExclusion ${inclusionTextES ? "field-error" : ""}`}
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
          value={inclusionTextFS}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="name-inclusion-search-text-description"
          placeholder="Enter inclusionary search text"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="name-inclusion-search-text-description">
          {inclusionTextES}
        </span>
      </div>
      <div
        className={`form-group form-group--width-auto form-group--name-inclusionExclusion ${exclusionTextES ? "field-error" : ""}`}
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
          value={exclusionTextFS}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="name-exclusion-search-text-description"
          placeholder="Enter exclusionary search text"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="name-exclusion-search-text-description">
          {exclusionTextES}
        </span>
      </div>
    </div>
  );
};

export default NameInputInclusionExclusion;
