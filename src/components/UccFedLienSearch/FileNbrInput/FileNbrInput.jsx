import React, { useState } from 'react';
import InfoIcon from '../../InfoIcon/InfoIcon';

const FileNbrInput = ({
  value,
  onChange,
  handleErrorDisplay,
  error }) => {

  const [isHovered, setIsHovered] = useState(false);

  const hoverMessage = 'Note: File Number search is only available for documents recorded or filed BEFORE January 2, 2003.';
  
  const validateUserInput = (value) => {

    if (value.length > 12) {
      handleErrorDisplay("file_nbr", "File Number must be 12 numbers or less.");
    } else if (!value) {
      handleErrorDisplay(
        "transNum",
        "This field is required for form submission"
      );
    } else {
      handleErrorDisplay("transNum", null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateUserInput(e.target.value);
    onChange(e);
  };

  return (
    <div
      className={`form-group form-group--width-auto form-group--file_nbr ${error ? 'field-error' : ''}`}
      style={{ '--field-width': '15ch' }}
    >
      <label htmlFor="file-number">
        <span>File Number</span>
        <InfoIcon
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          hoverMessage={hoverMessage}
        />
      </label>
      <input
        type="text"
        id="file-number"
        name="file_nbr"
        value={value}
        onChange={handleValidationPlusDataTransferToSoql}
        className="form-field"
        aria-describedby="file-number-description"
        maxLength="12"
      />
      <span className="field-description" id="file-number-description">
        {error}
      </span>
    </div>
  );
};

export default FileNbrInput;
