// src/components/DocTypeSearch/DateExactInput/DateExactInput.jsx
import React from 'react';
import './DateExactInput.css';
import moment from 'moment';

const DateExactInput = ({ value, onChange, handleErrorDisplay, error }) => {

  const validateUserInput = (value) => {
    console.log('Validating date input:', value);
    if (!value) {
      handleErrorDisplay('document_date', 'Please select a date.');
      return;
    }

    if (!moment(value, 'YYYY-MM-DD', true).isValid()) {
      handleErrorDisplay('document_date', 'Invalid date format. Please use YYYY-MM-DD.');
      return;
    }

    handleErrorDisplay('document_date', null);
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateUserInput(e.target.value);
    onChange(e); // Keep the original onChange for state management
  };

  return (
    <div className="date-exact-input--container">
      <label htmlFor="date-exact-input" className="date-exact-input--label">
        Select Exact Date:
      </label>
      <input
        type="date"
        id="date-exact-input"
        name="document_date"
        value={value}
        onChange={handleValidationPlusDataTransferToSoql}
        className="date-exact-input--input"
      />
      <span className="error-msg-display">{error}</span>
    </div>
  );
};

export default DateExactInput;