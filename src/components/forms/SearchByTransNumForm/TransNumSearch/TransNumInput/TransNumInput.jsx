import React, { useState } from 'react';
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const TransNumInput = ({
  value,
  onChange,
  handleErrorDisplay,
  error
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverMessage = 'Note: Transaction Number search only available for documents recorded or filed on or AFTER January 2, 2003';

  const validateUserInput = (value) => {
    if (value.length > 13) {
      handleErrorDisplay(
        "transNum",
        "Transaction number must be 13 characters or less."
      );
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
      className={`form-group form-group--width-auto
      form-group--transNum ${error ? "field-error" : ""}`}
      style={{ '--field-width': '20ch' }}
    >
      <label htmlFor="transaction-number">
        <span>Transaction Number</span>
        <InfoIcon
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          hoverMessage={hoverMessage}
        />
      </label>
      <input
        type="text"
        id="transaction-number"
        name="transNum"
        value={value}
        onChange={handleValidationPlusDataTransferToSoql}
        className="form-field"
        aria-describedby="transaction-number-description"
        placeholder="YYYYMMDDNNNNN"
        maxLength="13"
        required
      />
      <span className="field-description" id="transaction-number-description">
        {error}
      </span>
    </div>
  );
};

export default TransNumInput;
