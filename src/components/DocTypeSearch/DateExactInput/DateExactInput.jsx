// src/components/DocTypeSearch/DateExactInput/DateExactInput.jsx
import React from 'react';
import './DateExactInput.css';
import moment from 'moment';

const DateExactInput = ({ 
  value, 
  onChange, 
  handleErrorDisplay, 
  error }) => {

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
    <div
      className={`form-group form-group--width-auto form-group--date-range ${error ? 'field-error' : ''}`}
      style={{ '--field-width': '15ch' }}>
      <label htmlFor="date-exact-input" className="date-exact-input--label">
        Select Exact Date:
      </label>
      <input
        type="date"
        id="date-exact-input"
        name="document_date"
        value={value}
        onChange={handleValidationPlusDataTransferToSoql}
        aria-describedby="document-date-exact-description"
      />
      <span
        className="field-description"
        id="document-date-exact-description">
        {error}
      </span>
    </div>
  );
};

export default DateExactInput;