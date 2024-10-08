import React from 'react';
import './DateRangeSelect.css';
import moment from 'moment';

const getDateRange = (days) => {
  const endDate = moment();
  const startDate = moment().subtract(days, 'days');
  return `${startDate.format('YYYY-MM-DD')} - ${endDate.format('YYYY-MM-DD')}`;
};

function DateRangeSelect({
  value,
  onChange,
  handleErrorDisplay,
  error
}) {

  const options = [
    { label: 'In the last week', value: getDateRange(7) },
    { label: 'In the last month', value: getDateRange(30) },
    { label: 'In the last 3 months', value: getDateRange(90) },
    { label: 'In the last 6 months', value: getDateRange(180) },
    { label: 'In the last year', value: getDateRange(365) },
  ];

  const validateUserInput = (value) => {
    if (!value) {
      handleErrorDisplay('document_date', 'Please select a date range.');
      return;
    }

    const [startDate, endDate] = value.split(' - ');
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

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateUserInput(e.target.value);
    onChange(e); // Keep the original onChange for state management
  };

  return (
    <div className="date-range-select-input--container">
      <label
        htmlFor="date-range-select"
        className="date-range-select-input--label"
      >
        Select Date Range:
      </label>
      <select
        id="date-range-select"
        name="document_date"
        value={value}
        onChange={handleValidationPlusDataTransferToSoql}
        className="date-range-select-input--input"
      >
        <option value="">Select a date range</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="error-msg-display">{error}</span>
    </div>
  );
}

export default DateRangeSelect;