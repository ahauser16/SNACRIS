import React from 'react'

function StreetNameInput({
    value,
    onChange,
    handleErrorDisplay,
    error }) {

    const validateUserInput = (value) => {
        if (value.length > 32) {
            handleErrorDisplay('street_name', 'Street name must be 32 characters or less.');
        } else {
            handleErrorDisplay('street_name', '');
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    return (
        <div 
        className={`form-group form-group--width-auto form-group--street_name ${error ? 'field-error' : ''}`}
        style={{ '--field-width': '20ch' }}
        >
            <label htmlFor="street_name" >
                Street Name
            </label>
            <input
                type="text"
                id="street_name"
                name="street_name"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
                aria-describedby="tax-block-description"
                maxLength="32"
            />
            <span className="field-description"
                id="tax-block-description">{error}</span>
        </div>
    )
}

export default StreetNameInput