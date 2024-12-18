// src/components/DocTypeSearch/DateExactInput/DateExactInput.jsx
import React from 'react';
import moment from 'moment';

const DateExactInput = ({
  exactDateFS,
  exactDateES,
  onChange,
  handleErrorDisplay,
}) => {

  const validateUserInput = (value) => {
    console.log('Validating date input:', value);
    if (!value) {
      handleErrorDisplay('exactDateES', 'Please select a date.');
      return;
    }

    if (!moment(value, 'YYYY-MM-DD', true).isValid()) {
      handleErrorDisplay('exactDateES', 'Invalid date format. Please use YYYY-MM-DD.');
      return;
    }

    handleErrorDisplay('exactDateES', null);
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateUserInput(e.target.value);
    onChange(e); 
  };

  return (
    <div
      className={`form-group form-group--width-auto form-group--date-range ${exactDateES ? 'field-error' : ''}`}
      style={{ '--field-width': '15ch' }}>
      <label htmlFor="document-date-exact-input" className="document-date-exact-input--label">
        Select Exact Date:
      </label>
      <input
        type="date"
        id="document-date-exact-input"
        name="document-date-exact-input"
        value={exactDateFS}
        onChange={handleValidationPlusDataTransferToSoql}
        aria-describedby="document-date-exact-input-description"
      />
      <span
        className="field-description"
        id="document-date-exact-input-description">
        {exactDateES}
      </span>
    </div>
  );
};

export default DateExactInput;