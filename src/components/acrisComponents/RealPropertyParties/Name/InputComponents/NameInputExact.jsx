// src/components/NameInput/NameInput_Exact.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputExact = ({ name, onChange, handleErrorDisplay, error }) => {
  const [isHovered, setIsHovered] = useState(false);

  const validateName = (value) => {
    if (value.length > 70) {
      handleErrorDisplay("name", "Name must be 70 characters or less.");
    } else if (!value) {
      handleErrorDisplay("name", "This field is required for form submission");
    } else {
      handleErrorDisplay("name", null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateName(e.target.value);
    onChange(e);
  };

  return (
    <div
      className={`form-group form-group--name-exact ${error ? "field-error" : ""}`}
    >
      <label htmlFor="name-exact">
        <span>Name</span>
        <InfoIcon
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          hoverMessage="Name must be 70 characters or less and is required for form submission."
        />
      </label>
      <input
        type="text"
        id="name-exact"
        name="name"
        value={name}
        onChange={handleValidationPlusDataTransferToSoql}
        className="form-field"
        aria-describedby="party-name-description"
        placeholder="Enter exact name"
        maxLength="70"
        required
      />
      <span className="field-description" id="party-name-description">
        {error}
      </span>
    </div>
  );
};

export default NameInputExact;
