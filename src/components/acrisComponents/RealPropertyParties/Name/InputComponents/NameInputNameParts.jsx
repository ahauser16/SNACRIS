// src/components/NameInput/NameInputNameParts.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputNameParts = ({
  nameParts,
  onChange,
  handleErrorDisplay,
  namePartsErrors,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverMessageFirst = "First Name must be 70 characters or less and is required for form submission.";
  const hoverMessageLast = "Last Name must be 70 characters or less and is required for form submission.";
  const hoverMessageMiddle = "Middle Name must be 70 characters or less and is optional for form submission.";


  const validateField = (field, value) => {
    if (value.length > 70) {
      handleErrorDisplay(
        `nameParts.${field}`,
        `${field} Name must be 70 characters or less.`
      );
    } else if (!value) {
      handleErrorDisplay(
        `nameParts.${field}`,
        `${field} Name is required for form submission.`
      );
    } else {
      handleErrorDisplay(`nameParts.${field}`, null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    const { name, value } = e.target;
    validateField(name.split("-")[0], value);
    onChange(e);
  };

  return (
    <>
      <div
        className={`form-group form-group--nameParts-first ${namePartsErrors.first ? "field-error" : ""
          }`}
      >
        <label htmlFor="first-name">
          <span>First Name</span>
          <InfoIcon
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            hoverMessage={hoverMessageFirst}
          />
        </label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          value={nameParts.first}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="party-name-description"
          placeholder="First name"
          maxLength="70"
          required
        />
        <span className="field-description">{namePartsErrors.first}</span>
      </div>

      <div
        className={`form-group form-group--nameParts-last ${namePartsErrors.last ? "field-error" : ""
          }`}
      >
        <label htmlFor="last-name">
          <span>Last Name</span>
          <InfoIcon
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            hoverMessage={hoverMessageLast}
          />
        </label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          value={nameParts.last}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="party-name-description"
          placeholder="Last name"
          maxLength="70"
          required
        />
        <span className="field-description">{namePartsErrors.last}</span>
      </div>

      <div
        className={`form-group form-group--nameParts-middle ${namePartsErrors.middle ? "field-error" : ""
          }`}
      >
        <label htmlFor="middle-name">
          <span>Middle Name</span>
          <InfoIcon
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            hoverMessage={hoverMessageMiddle}
          />
        </label>
        <input
          type="text"
          id="middle-name"
          name="middle-name"
          value={nameParts.middle}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="party-name-description"
          placeholder="Middle name"
          maxLength="70"
        />
        <span className="field-description">{namePartsErrors.middle}</span>
      </div>
    </>
  );
};

export default NameInputNameParts;