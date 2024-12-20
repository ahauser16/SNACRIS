// src/components/DocTypeSearch/DateRangeSelect/DateRangeSelect.jsx
import React from 'react';
import moment from 'moment';

const getDateRange = (days) => {
  const endDate = moment();
  const startDate = moment().subtract(days, 'days');
  return `${startDate.format('YYYY-MM-DD')} - ${endDate.format('YYYY-MM-DD')}`;
};

function DateRangeSelect({
  startDateFS,
  startDateES,
  endDateFS,
  endDateES,
  handleInputChange,
  handleErrorDisplay,
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
    handleInputChange({ target: { name: 'document_date', value: e.target.value } }); // Update state with the selected value
  };

  return (
    <div
      className={`form-group form-group--width-auto form-group--date-range ${startDateES || endDateES ? 'field-error' : ''}`}
      style={{ '--field-width': '20ch' }}>
      <label htmlFor="date-range-select">
        Date Range
      </label>
      <div className="form-field select">
        <select
          id="date-range-select"
          name="document_date"
          value={`${startDateFS} - ${endDateFS}`}
          onChange={handleValidationPlusDataTransferToSoql}
          aria-describedby="document-date-range-description"
        >
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="focus"></span>
      </div>
      <span
        className="field-description"
        id="document-date-range-description">
        {startDateES || endDateES}
      </span>
    </div>
  );
}

export default DateRangeSelect;