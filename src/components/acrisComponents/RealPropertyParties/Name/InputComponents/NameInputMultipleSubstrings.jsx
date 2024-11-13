// src/components/NameInput/NameInput_Contains.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputMultipleSubstrings = ({
  substring1FS,
  substring1ES,
  substring2FS,
  substring2ES,
  handleInputChange,
  handleErrorDisplay,
}) => {
  const [isHoveredSubstring1, setIsHoveredSubstring1] = useState(false);
  const [isHoveredSubstring2, setIsHoveredSubstring2] = useState(false);

  const validateName = (name, value) => {
    if (value.length > 70) {
      handleErrorDisplay(name, "This search term must be 70 characters or less.");
    } else if (!value) {
      handleErrorDisplay(name, "This search term is required for form submission");
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
        className={`form-group form-group--width-auto form-group--name-multipleSubstrings ${substring1ES ? "field-error" : ""}`}
        style={{ '--field-width': '25ch' }}
      >
        <label htmlFor="name-search-substring1">
          <span>Search Term One</span>
          <InfoIcon
            isHovered={isHoveredSubstring1}
            setIsHovered={setIsHoveredSubstring1}
            hoverMessage="Search term must be 70 characters or less and is required for form submission."
          />
        </label>
        <input
          type="text"
          id="name-search-substring1"
          name="multipleSubstrings.substring1"
          value={substring1FS}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="name-search-substring1-description"
          placeholder="Enter 1st search term"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="name-search-substring1-description">
          {substring1ES}
        </span>
      </div>
      <div
        className={`form-group form-group--width-auto form-group--name-multipleSubstrings ${substring2ES ? "field-error" : ""}`}
        style={{ '--field-width': '25ch' }}
      >
        <label htmlFor="name-search-substring2">
          <span>Search Term Two</span>
          <InfoIcon
            isHovered={isHoveredSubstring2}
            setIsHovered={setIsHoveredSubstring2}
            hoverMessage="Search term must be 70 characters or less and is required for form submission."
          />
        </label>
        <input
          type="text"
          id="name-search-substring2"
          name="multipleSubstrings.substring2"
          value={substring2FS}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="name-search-substring2-description"
          placeholder="Enter 2nd search term"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="name-search-substring2-description">
          {substring2ES}
        </span>
      </div>
    </div>
  );
};

export default NameInputMultipleSubstrings;
