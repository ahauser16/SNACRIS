import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputBusiness = ({ nameBusinessSoql, onChange, handleErrorDisplay, error }) => {
  const [isHovered, setIsHovered] = useState(false);

  const validateName = (value) => {
    if (value.length > 70) {
      handleErrorDisplay("nameFieldES.nameBusinessES", "Name must be 70 characters or less.");
    } else if (!value) {
      handleErrorDisplay("nameFieldES.nameBusinessES", "This field is required for form submission");
    } else {
      handleErrorDisplay("nameFieldES.nameBusinessES", null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateName(e.target.value);
    onChange(e);
  };

  return (
    <div
      className={`form-group form-group--name-business ${error ? "field-error" : ""}`}
    >
      <label htmlFor="name-business">
        <span>Business Name</span>
        <InfoIcon
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          hoverMessage="Business Name must be 70 characters or less and is required for form submission."
        />
      </label>
      <input
        type="text"
        id="name-business"
        name="nameBusiness"
        value={nameBusinessSoql}
        onChange={handleValidationPlusDataTransferToSoql}
        className="form-field"
        aria-describedby="name-business-description"
        placeholder="Enter business name"
        maxLength="70"
        aria-required="true"
        required
      />
      <span className="field-description" id="name-business-description">
        {error}
      </span>
    </div>
  );
};

export default NameInputBusiness;