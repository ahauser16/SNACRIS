import React, { useState } from 'react';
import InfoIcon from '../../InfoIcon/InfoIcon';

const DocIdInput = ({
  value,
  onChange,
  handleErrorDisplay,
  error }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverMessage = 'Note: Document ID search is only available for documents recorded or filed on or AFTER January 2, 2003.';

  const validateUserInput = (value) => {
    if (value.length > 16) {
      handleErrorDisplay("docId", "Document ID must be 16 characters or less.");
    } else {
      handleErrorDisplay("docId", null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateUserInput(e.target.value);
    onChange(e);
  };

  return (
    <div
      className={`form-group form-group--width-auto
      form-group--docId ${error ? "field-error" : ""}`}
      style={{ '--field-width': '20ch' }}
    >
      <label htmlFor="document-id">
        <span>Document ID</span>
        <InfoIcon
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          hoverMessage={hoverMessage}
        />
      </label>
      <input
        type="text"
        id="document-id"
        name="docId"
        value={value}
        onChange={handleValidationPlusDataTransferToSoql}
        className="form-field"
        aria-describedby="document-id-description"
        placeholder="YYYYMMDDNNNNNSSS"
      // maxLength="16"
      />
      <span className="field-description" id="document-id-description">
        {error}
      </span>
    </div>
  );
};

export default DocIdInput;
