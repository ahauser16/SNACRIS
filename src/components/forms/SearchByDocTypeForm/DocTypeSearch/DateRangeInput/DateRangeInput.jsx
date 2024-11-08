// src/components/DocTypeSearch/DateRangeInput/DateRangeInput.jsx
import React from 'react';
import './DateRangeInput.css';
import moment from 'moment';

function DateRangeInput({
  value,
  onChange,
  handleErrorDisplay,
  error
}) {
  const handleStartDateChange = (e) => {
    const startDate = e.target.value;
    const endDate = value.split(' - ')[1] || '';
    const newValue = `${startDate} - ${endDate}`;
    validateUserInput(newValue);
    onChange({ target: { name: 'document_date', value: newValue } });
  };

  const handleEndDateChange = (e) => {
    const endDate = e.target.value;
    const startDate = value.split(' - ')[0] || '';
    const newValue = `${startDate} - ${endDate}`;
    validateUserInput(newValue);
    onChange({ target: { name: 'document_date', value: newValue } });
  };

  const [startDate, endDate] = value.split(' - ');

  const validateUserInput = (value) => {
    const [startDate, endDate] = value.split(' - ');

    if (!startDate || !endDate) {
      handleErrorDisplay('document_date', 'Both start and end dates are required.');
      return;
    }

    if (!moment(startDate, 'YYYY-MM-DD', true).isValid() || !moment(endDate, 'YYYY-MM-DD', true).isValid()) {
      handleErrorDisplay('document_date', 'Invalid date format. Please use YYYY-MM-DD.');
      return;
    }

    if (moment(startDate).isAfter(moment(endDate))) {
      handleErrorDisplay('document_date', 'Start date cannot be after end date.');
      return;
    }

    handleErrorDisplay('document_date', null);
  };

  return (
    <>
      <div className="form-group">
        <label htmlFor="date-range-start" className="date-range-input--label">
          Start Date:
        </label>
        <input
          type="date"
          id="date-range-start"
          name="date_range_start"
          value={startDate || ''}
          onChange={handleStartDateChange}
          className="date-range-input--input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="date-range-end" className="date-range-input--label">
          End Date:
        </label>
        <input
          type="date"
          id="date-range-end"
          name="date_range_end"
          value={endDate || ''}
          onChange={handleEndDateChange}
          className="date-range-input--input"
        />
        <span className="error-msg-display">{error}</span>
      </div>
    </>
  );
}

export default DateRangeInput;