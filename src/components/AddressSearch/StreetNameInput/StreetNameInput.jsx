import React from 'react'
import './StreetNameInput.css'

function StreetNameInput({
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
        <div 
        className="form-group"
        style={{ '--field-width': '32ch' }}
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
                // onChange={onChange}
                className="form-field"
            />
            <span className="error-msg-display">{error}</span>
        </div>
    )
}

export default StreetNameInput