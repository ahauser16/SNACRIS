import React from 'react'
import './StreetNumberInput.css'

function StreetNumberInput({ value, onChange, handleErrorDisplay, error }) {

  const validateUserInput = (value) => {
    if (value.length > 12) {
      handleErrorDisplay('street_number', 'Street number must be 12 numbers or less.');
    } else {
      handleErrorDisplay('street_number', '');
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateUserInput(e.target.value);
    onChange(e); // Keep the original onChange for state management
  };

  return (
    <div
      className="form-group form-group--width-auto"
      style={{ '--field-width': '12ch' }}
    >
      <label htmlFor="street_number">Street Number</label>
      <input
        type="text"
        id="street_number"
        name="street_number"
        value={value}
        // onChange={onChange}
        onChange={handleValidationPlusDataTransferToSoql}
        className="form-field"
      />
      <span className="error-msg-display">{error}</span>
    </div>
  )
}

export default StreetNumberInput