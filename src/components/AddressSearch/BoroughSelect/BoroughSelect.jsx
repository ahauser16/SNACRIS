import React from 'react';
import './BoroughSelect.css';


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
      style={{ '--field-width': '15ch' }}>
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
          <option value="" className="borough-select--option">Select</option>
          <option value="1" className="borough-select--option">Manhattan</option>
          <option value="2" className="borough-select--option">Bronx</option>
          <option value="3" className="borough-select--option">Brooklyn</option>
          <option value="4" className="borough-select--option">Queens</option>
          <option value="5" className="borough-select--option">Staten Island</option>
        </select>
        <span className="focus"></span>
      </div>
      <span className="field-description"
        id="borough-description">{error}</span>
    </div>
  );
};

export default BoroughSelect;