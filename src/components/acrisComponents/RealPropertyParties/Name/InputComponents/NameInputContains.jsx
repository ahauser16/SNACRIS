// src/components/NameInput/NameInput_Contains.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputContains = ({
  nameContainsFS,
  nameContainsES,
  onChange,
  handleErrorDisplay,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const validateName = (value) => {
    if (value.length > 70) {
      handleErrorDisplay("nameContainsES", "Name must be 70 characters or less.");
    } else if (!value) {
      handleErrorDisplay("nameContainsES", "This field is required for form submission");
    } else {
      handleErrorDisplay("nameContainsES", null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateName(e.target.value);
    onChange(e);
  };

  return (
    <div
      className={`form-group form-group--name-contains ${nameContainsES ? "field-error" : ""}`}
    >
      <label htmlFor="name-contains">
        <span>Name</span>
        <InfoIcon
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          hoverMessage="Name must be 70 characters or less and is required for form submission."
        />
      </label>
      <input
        type="text"
        id="name-contains"
        name="nameContains"
        value={nameContainsFS}
        onChange={handleValidationPlusDataTransferToSoql}
        className="form-field"
        aria-describedby="party-name-description"
        placeholder="Enter partial name"
        maxLength="70"
        aria-required="true"
        required
      />
      <span className="field-description" id="name-contains-description">
        {nameContainsES}
      </span>
    </div>
  );
};

export default NameInputContains;
