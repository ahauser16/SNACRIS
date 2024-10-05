import React from 'react'
import './CityInput.css'

function CityInput({ value, onChange, handleErrorDisplay, error }) {

    const validateUserInput = (value) => {
        if (value.length > 30) {
            handleErrorDisplay('city', 'City name must be 30 characters or less.');
        } else {
            handleErrorDisplay('city', '');
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    return (
        <div className="city-input--container">
            <label
                htmlFor="city"
                className="city-input--label"
            >
                City:
            </label>
            <input
                type="text"
                id="city"
                name="city"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="city-input--input"
            />
            <span className="error-msg-display">{error}</span>
        </div>
    )
}

export default CityInput