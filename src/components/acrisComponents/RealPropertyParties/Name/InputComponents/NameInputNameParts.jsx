// src/components/NameInput/NameInputNameParts.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputNameParts = ({
  firstFS,
  firstES,
  lastFS,
  lastES,
  middleFS,
  middleES,
  fullNameFS,
  fullNameES,
  handleInputChange,
  handleErrorDisplay,
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
    handleInputChange(e);
  };

  return (
    <div className="form-row form-row--mixed">
      <div
        className={`form-group form-group--width-auto form-group--nameParts-first ${firstES ? "field-error" : ""
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
          value={firstFS}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="party-name-description"
          placeholder="First name"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="first-name-description">{firstES}</span>
      </div>

      <div
        className={`form-group form-group--width-auto form-group--nameParts-last ${lastES ? "field-error" : ""
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
          value={lastFS}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="last-name-description"
          placeholder="Last name"
          maxLength="70"
          aria-required="true"
          required
        />
        <span className="field-description" id="last-name-description">{lastES}</span>
      </div>

      <div
        className={`form-group form-group--width-auto form-group--nameParts-middle ${middleES ? "field-error" : ""
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
          value={middleFS}
          onChange={handleValidationPlusDataTransferToSoql}
          className="form-field"
          aria-describedby="middle-name-description"
          placeholder="Middle name"
          maxLength="70"
        />
        <span className="field-description" id="middle-name-description">{middleES}</span>
      </div>
    </div>
  );
};

export default NameInputNameParts;