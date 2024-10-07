import React from 'react'
import './DateRangeInput.css'

function DateRangeInput({
  value,
  onChange,
  handleErrorDisplay,
  error }) {

  const validateUserInput = (value) => {
    if (value.length > 32) {
      handleErrorDisplay('street_name', 'Street name must be 32 numbers or less.');
    } else {
      handleErrorDisplay('street_name', '');
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateUserInput(e.target.value);
    onChange(e); // Keep the original onChange for state management
  };

  return (
    <div className="date-range-input--container col">
      
      
      <label
        htmlFor="doc_date" className="doc-date-input--label"
      >
        Start Date:
      </label>
      <input
        type="date"
        id="doc_date"
        name="doc_date"
        value={value}
        onChange={handleValidationPlusDataTransferToSoql}
        // onChange={onChange}
        className="doc-date-input--input"
      />
      
      <label
        htmlFor="date_range_start" className="date-range-input--label"
      >
        Start Date:
      </label>
      <input
        type="date"
        id="date_range_start"
        name="date_range_start"
        value={value}
        onChange={handleValidationPlusDataTransferToSoql}
        // onChange={onChange}
        className="date-range-input--input"
      />
      <label
        htmlFor="date_range_end" className="date-range-input--label"
      >
        End Date:
      </label>
      <input
        type="date"
        id="date_range_end"
        name="date_range_end"
        value={value}
        onChange={handleValidationPlusDataTransferToSoql}
        // onChange={onChange}
        className="date-range-input--input"
      />
      <span className="error-msg-display">{error}</span>
    </div>
  )
}

export default DateRangeInput