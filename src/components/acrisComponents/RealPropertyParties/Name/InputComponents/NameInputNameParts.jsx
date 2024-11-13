// src/components/NameInput/NameInputNameParts.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputNameParts = ({
  first,
  last,
  middle,
  onChange,
  handleErrorDisplay,
  namePartsErrors,
}) => {
  const [isHoveredFirst, setIsHoveredFirst] = useState(false);
  const [isHoveredMiddle, setIsHoveredMiddle] = useState(false);
  const [isHoveredLast, setIsHoveredLast] = useState(false);

  const hoverMessageFirst = "First Name must be 70 characters or less and is required for form submission.";
  const hoverMessageLast = "Last Name must be 70 characters or less and is required for form submission.";
  const hoverMessageMiddle = "Middle Name must be 70 characters or less and is optional for form submission.";


  const validateField = (field, value) => {
    if (value.length > 70) {
      handleErrorDisplay(
        `name_field.${field}`,
        `${field} Name must be 70 characters or less.`
      );
    } else if (!value) {
      handleErrorDisplay(
        `name_field.${field}`,
        `${field} Name is required for form submission.`
      );
    } else {
      handleErrorDisplay(`name_field.${field}`, null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    const { name, value } = e.target;
    validateField(name.split("-")[0], value);
    onChange(e);
  };

  return (
    <div className="form-row form-row--mixed">
      <div
        className={`form-group form-group--width-auto form-group--nameParts-first ${namePartsErrors.first ? "field-error" : ""
          }`}
        style={{ '--field-width': '25ch' }}
      >
        <label htmlFor="first-name">
          <span>First Name</span>
          <InfoIcon
            isHovered={isHoveredFirst}
            setIsHovered={setIsHoveredFirst}
            hoverMessage={hoverMessageFirst}
          />
        </label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          value={first}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="party-name-description"
          placeholder="First name"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="first-name-description">{namePartsErrors.first}</span>
      </div>

      <div
        className={`form-group form-group--width-auto form-group--nameParts-last ${namePartsErrors.last ? "field-error" : ""
          }`}
        style={{ '--field-width': '25ch' }}
      >
        <label htmlFor="last-name">
          <span>Last Name</span>
          <InfoIcon
            isHovered={isHoveredLast}
            setIsHovered={setIsHoveredLast}
            hoverMessage={hoverMessageLast}
          />
        </label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          value={last}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="last-name-description"
          placeholder="Last name"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="last-name-description">{namePartsErrors.last}</span>
      </div>

      <div
        className={`form-group form-group--width-auto form-group--nameParts-middle ${namePartsErrors.middle ? "field-error" : ""
          }`}
        style={{ '--field-width': '25ch' }}
      >
        <label htmlFor="middle-name">
          <span>Middle Name</span>
          <InfoIcon
            isHovered={isHoveredMiddle}
            setIsHovered={setIsHoveredMiddle}
            hoverMessage={hoverMessageMiddle}
          />
        </label>
        <input
          type="text"
          id="middle-name"
          name="middle-name"
          value={middle}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="middle-name-description"
          placeholder="Middle name"
          maxLength="70"
        />
        <span className="field-description" id="middle-name-description">{namePartsErrors.middle}</span>
      </div>
    </div>
  );
};

export default NameInputNameParts;