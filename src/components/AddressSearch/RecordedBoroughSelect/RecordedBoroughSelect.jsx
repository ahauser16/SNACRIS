import React, { useState } from 'react';
import InfoIcon from '../../InfoIcon/InfoIcon';


const RecordedBoroughSelect = ({
  value,
  onChange,
  handleErrorDisplay,
  error
}) => {
  const [isHovered, setIsHovered] = useState(false);

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

  const hoverMessage = 'Borough is optional for form submission.';

  return (
    <div
      className={`form-group form-group--width-auto form-group--recorded_borough ${error ? 'field-error' : ''}`}
      style={{ '--field-width': '15ch' }}
    >
      <label htmlFor="recorded_borough" >
        <span>Borough</span>
        <InfoIcon
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          hoverMessage={hoverMessage}
        />
      </label>
      <div className="form-field select">
        <select
          id="recorded_borough"
          name="recorded_borough"
          value={value}
          onChange={handleValidationPlusDataTransferToSoql}
          aria-describedby="recorded-borough-description"
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
        id="recorded-borough-description">{error}</span>
    </div>
  );
};

export default RecordedBoroughSelect