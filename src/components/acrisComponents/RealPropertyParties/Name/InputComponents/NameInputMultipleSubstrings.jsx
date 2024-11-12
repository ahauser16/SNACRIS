// src/components/NameInput/NameInput_Contains.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputMultipleSubstrings = ({ name, onChange, handleErrorDisplay, error }) => {
  const [isHovered, setIsHovered] = useState(false);

  const validateName = (value) => {
    if (value.length > 70) {
      handleErrorDisplay("nameMultipleSubstrings", "Name must be 70 characters or less.");
    } else if (!value) {
      handleErrorDisplay("nameMultipleSubstrings", "This field is required for form submission");
    } else {
      handleErrorDisplay("nameMultipleSubstrings", null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateName(e.target.value);
    onChange(e);
  };

  return (
    <div
      className={`form-group form-group--name-multipleSubstrings ${error ? "field-error" : ""}`}
    >
      <label htmlFor="name-multipleSubstrings">
        <span>Name</span>
        <InfoIcon
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          hoverMessage="Name must be 70 characters or less and is required for form submission."
        />
      </label>
      <input
        type="text"
        id="name-multipleSubstrings"
        name="nameMultipleSubstrings"
        value={name}
        onChange={handleValidationPlusDataTransferToSoql}
        className="form-field"
        aria-describedby="party-name-description"
        placeholder="Enter partial name"
        maxLength="70"
        required
      />
      <span className="field-description" id="party-name-description">
        {error}
      </span>
    </div>
  );
};

export default NameInputMultipleSubstrings;
