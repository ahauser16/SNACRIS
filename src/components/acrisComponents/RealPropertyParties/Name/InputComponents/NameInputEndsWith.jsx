// src/components/NameInput/NameInput_Business.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputEndsWith = ({
  name,
  onChange,
  handleErrorDisplay,
  error
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const validateName = (value) => {
    if (value.length > 70) {
      handleErrorDisplay("endsWith", "Name must be 70 characters or less.");
    } else if (!value) {
      handleErrorDisplay("endsWith", "This field is required for form submission");
    } else {
      handleErrorDisplay("endsWith", null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateName(e.target.value);
    onChange(e);
  };

  return (
    <div className="form-row">
      <div
        className={`form-group form-group--name-ends-with ${error ? "field-error" : ""}`}
      >
        <label htmlFor="name-ends-with">
          <span>Name Ends With</span>
          <InfoIcon
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            hoverMessage="Name must be 70 characters or less and is required for form submission."
          />
        </label>
        <input
          type="text"
          id="name-ends-with"
          name="endsWith"
          value={name}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="name-ends-with-description"
          placeholder="Enter search term"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="name-ends-with-description">
          {error}
        </span>
      </div>
    </div>
  );
};

export default NameInputEndsWith;
