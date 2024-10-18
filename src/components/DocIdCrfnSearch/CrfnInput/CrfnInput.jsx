import React, { useState } from 'react';
import InfoIcon from '../../InfoIcon/InfoIcon';

const CrfnInput = ({
  value,
  onChange,
  handleErrorDisplay,
  error }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverMessage = 'Note: CRFN search is only available for documents recorded or filed on or AFTER January 2, 2003.';

  const validateUserInput = (value) => {
    if (value.length > 13) {
      handleErrorDisplay(
        "crfn",
        "City Register Filing Number (CRFN) must be 13 characters or less."
      );
    } else {
      handleErrorDisplay("crfn", null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateUserInput(e.target.value);
    onChange(e);
  };

  return (
    <div
      className={`form-group 
      form-group--crfn ${error ? "field-error" : ""}`}
    >
      <label htmlFor="city-register-filing-number">
        <span>City Register Filing Number (CRFN)</span>
        <InfoIcon
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          hoverMessage={hoverMessage}
        />
      </label>
      <input
        type="text"
        id="city-register-filing-number"
        name="crfn"
        value={value}
        onChange={handleValidationPlusDataTransferToSoql}
        className="form-field"
        aria-describedby="city-register-filing-number-description"
        placeholder="Please enter as 'YYYYNNNNNNNNN'"
      // maxLength="13"
      />
      <span
        className="field-description"
        id="city-register-filing-number-description"
      >
        {error}
      </span>
    </div>
  );
};

export default CrfnInput;
