import React from 'react'
import './ZipInput.css'

function ZipInput({ value, onChange, handleErrorDisplay, error }) {

    const validateUserInput = (value) => {
        if (value.length > 9) {
            handleErrorDisplay('zip', 'Zip code must be 9 characters or less.');
        } else {
            handleErrorDisplay('zip', '');
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    return (
        <div className="zip-input--container">
            <label
                className="zip-input--container"
                htmlFor="zip"
            >
                Zip:
            </label>
            <input
                type="text"
                id="zip"
                name="zip"
                value={value}
                // onChange={onChange}
                onChange={handleValidationPlusDataTransferToSoql}
                className="zip-input--input"
            />
            <span className="error-msg-display">{error}</span>
        </div>
    )
}

export default ZipInput