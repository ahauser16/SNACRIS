import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputBusiness = ({ 
  nameBusinessFS, 
  nameBusinessES, 
  handleInputChange, 
  handleErrorDisplay, 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const validateName = (value) => {
    if (value.length > 70) {
      handleErrorDisplay("nameBusinessES", "Name must be 70 characters or less.");
    } else if (!value) {
      handleErrorDisplay("nameBusinessES", "This field is required for form submission");
    } else {
      handleErrorDisplay("nameBusinessES", null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateName(e.target.value);
    handleInputChange(e);
  };

  return (
    <div
      className={`form-group form-group--name-business ${nameBusinessES ? "field-error" : ""}`}
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
        value={nameBusinessFS}
        onChange={handleValidationPlusDataTransferToSoql}
        className="form-field"
        aria-describedby="name-business-description"
        placeholder="Enter business name"
        maxLength="70"
        aria-required="true"
        required
      />
      <span className="field-description" id="name-business-description">
        {nameBusinessES}
      </span>
    </div>
  );
};

export default NameInputBusiness;