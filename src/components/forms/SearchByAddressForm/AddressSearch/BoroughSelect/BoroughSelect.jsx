import React from 'react';

//this validation does not work as intended because the user can still submit the form without selecting a borough only when the the page first loads.  If the user selects a borough and then selects the default "Select a borough" option, the error message will display which disables the form from being submitted.
const BoroughSelect = ({
  value,
  onChange,
  handleErrorDisplay,
  error
}) => {
  const validateUserInput = (value) => {
    if (!value) {
      handleErrorDisplay('borough', 'You must select a borough.');
    } else {
      handleErrorDisplay('borough', null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateUserInput(e.target.value);
    onChange(e); // Keep the original onChange for state management
  };

  return (
    <div
      className={`form-group form-group--width-auto form-group--borough ${error ? 'field-error' : ''}`}
      style={{ '--field-width': '15ch' }}
    >
      <label htmlFor="borough" >
        Borough
      </label>
      <div className="form-field select">
        <select
          id="borough"
          name="borough"
          value={value}
          onChange={handleValidationPlusDataTransferToSoql}
          aria-describedby="borough-description"
        >
          <option value="">Select</option>
          <option value="1">Manhattan</option>
          <option value="2">Bronx</option>
          <option value="3">Brooklyn</option>
          <option value="4">Queens</option>
          <option value="5">Staten Island</option>
        </select>
        <span className="focus"></span>
      </div>
      <span className="field-description"
        id="borough-description">{error}</span>
    </div>
  );
};

export default BoroughSelect;