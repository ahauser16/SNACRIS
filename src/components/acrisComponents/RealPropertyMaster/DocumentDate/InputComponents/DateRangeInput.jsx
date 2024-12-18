// src/components/DocTypeSearch/DateRangeInput/DateRangeInput.jsx
import React from 'react';
import moment from 'moment';

function DateRangeInput({
  startDateFS,
  startDateES,
  endDateFS,
  endDateES,
  handleInputChange,
  handleErrorDisplay,
}) {
  const handleStartDateChange = (e) => {
    const startDate = e.target.value;
    const endDate = endDateFS || '';
    const newValue = `${startDate} - ${endDate}`;
    validateUserInput(newValue);
    handleInputChange({ target: { name: 'document_date', value: newValue } });
  };

  const handleEndDateChange = (e) => {
    const endDate = e.target.value;
    const startDate = startDateFS || '';
    const newValue = `${startDate} - ${endDate}`;
    validateUserInput(newValue);
    handleInputChange({ target: { name: 'document_date', value: newValue } });
  };

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
          value={startDateFS || ''}
          onChange={handleStartDateChange}
          className="date-range-input--input"
        />
        <span className="error-msg-display">{startDateES}</span>
      </div>
      <div className="form-group">
        <label htmlFor="date-range-end" className="date-range-input--label">
          End Date:
        </label>
        <input
          type="date"
          id="date-range-end"
          name="date_range_end"
          value={endDateFS || ''}
          onChange={handleEndDateChange}
          className="date-range-input--input"
        />
        <span className="error-msg-display">{endDateES}</span>
      </div>
    </>
  );
}

export default DateRangeInput;