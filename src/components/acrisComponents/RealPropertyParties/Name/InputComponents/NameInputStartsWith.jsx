// src/components/NameInput/NameInput_Business.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputStartsWith = ({
  name,
  onChange,
  handleErrorDisplay,
  error
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const validateName = (value) => {
    if (value.length > 70) {
      handleErrorDisplay("startsWith", "Name must be 70 characters or less.");
    } else if (!value) {
      handleErrorDisplay("startsWith", "This field is required for form submission");
    } else {
      handleErrorDisplay("startsWith", null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateName(e.target.value);
    onChange(e);
  };

  return (
    <div className="form-row">
      <div
        className={`form-group form-group--name-starts-with ${error ? "field-error" : ""}`}
      >
        <label htmlFor="name-starts-with">
          <span>Name Starts With</span>
          <InfoIcon
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            hoverMessage="Name must be 70 characters or less and is required for form submission."
          />
        </label>
        <input
          type="text"
          id="name-starts-with"
          name="startsWith"
          value={name}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="name-starts-with-description"
          placeholder="Enter search term"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="name-starts-with-description">
          {error}
        </span>
      </div>
    </div>
  );
};

export default NameInputStartsWith;
