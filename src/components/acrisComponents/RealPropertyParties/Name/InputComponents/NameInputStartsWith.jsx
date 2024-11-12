// src/components/NameInput/NameInput_Business.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputStartsWith = ({ name, onChange, handleErrorDisplay, error }) => {
  const [isHovered, setIsHovered] = useState(false);

  const validateName = (value) => {
    if (value.length > 70) {
      handleErrorDisplay("nameStartsWith", "Name must be 70 characters or less.");
    } else if (!value) {
      handleErrorDisplay("nameStartsWith", "This field is required for form submission");
    } else {
      handleErrorDisplay("nameStartsWith", null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateName(e.target.value);
    onChange(e);
  };

  return (
    <div
      className={`form-group form-group--name-startsWith ${error ? "field-error" : ""}`}
    >
      <label htmlFor="name-startsWith">
        <span>Business Name</span>
        <InfoIcon
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          hoverMessage="Name must be 70 characters or less and is required for form submission."
        />
      </label>
      <input
        type="text"
        id="name-startsWith"
        name="nameStartsWith"
        value={name}
        onChange={handleValidationPlusDataTransferToSoql}
        className="form-field"
        aria-describedby="party-name-description"
        placeholder="Enter business name"
        maxLength="70"
        required
      />
      <span className="field-description" id="party-name-description">
        {error}
      </span>
    </div>
  );
};

export default NameInputStartsWith;
