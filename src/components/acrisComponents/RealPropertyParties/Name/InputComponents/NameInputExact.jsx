// src/components/NameInput/NameInput_Exact.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputExact = ({ name, onChange, handleErrorDisplay, error }) => {
  const [isHovered, setIsHovered] = useState(false);

  const validateName = (value) => {
    if (value.length > 70) {
      handleErrorDisplay("nameExact", "Name must be 70 characters or less.");
    } else if (!value) {
      handleErrorDisplay("nameExact", "This field is required for form submission");
    } else {
      handleErrorDisplay("nameExact", null);
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
        <span>Exact Name</span>
        <InfoIcon
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          hoverMessage="Name must be 70 characters or less and is required for form submission."
        />
      </label>
      <input
        type="text"
        id="name-exact"
        name="nameExact"
        value={name}
        onChange={handleValidationPlusDataTransferToSoql}
        className="form-field"
        aria-describedby="name-exact-description"
        placeholder="Enter exact name"
        maxLength="70"
        aria-required="true"
        required
      />
      <span className="field-description" id="name-exact-description">
        {error}
      </span>
    </div>
  );
};

export default NameInputExact;
