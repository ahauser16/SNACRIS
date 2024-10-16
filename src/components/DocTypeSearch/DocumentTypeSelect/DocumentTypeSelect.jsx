import React from 'react'
import './DocumentTypeSelect.css'

const DocumentTypeSelect = ({
  value, 
  onChange, 
  handleErrorDisplay, 
  error 
}) => {

  const validateUserInput = (value) => {
    // if (!value) {
    //   handleErrorDisplay('borough', 'You must select a borough.');
    // } else {
    //   handleErrorDisplay('borough', null);
    // }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    validateUserInput(e.target.value);
    onChange(e); // Keep the original onChange for state management
  };

  return (
    <div
      className={`form-group form-group--width-auto form-group--borough ${error ? 'field-error' : ''}`}
      style={{ '--field-width': '15ch' }}>
      <label htmlFor="document_class" >
        Borough
      </label>
      <div className="form-field select">
        <select
          id="document_class"
          name="document_class"
          value={value}
          onChange={handleValidationPlusDataTransferToSoql}
          aria-describedby="document-class-description"
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
        id="document-class-description">{error}</span>
    </div>
  )
}

export default DocumentTypeSelect