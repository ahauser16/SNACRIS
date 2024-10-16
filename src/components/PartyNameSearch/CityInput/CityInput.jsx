import React from 'react'
import './CityInput.css'

const CityInput = ({ value, onChange, handleErrorDisplay, error }) => {

    const validateUserInput = (value) => {
        if (value.length > 30) {
            handleErrorDisplay('city', 'City name must be 30 characters or less.');
        } else {
            handleErrorDisplay('city', null);
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    return (
        <div className="form-group">
            <label htmlFor="city" >
                City:
            </label>
            <input
                type="text"
                id="city"
                name="city"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
            />
            <span className="error-msg-display">{error}</span>
        </div>
    )
}

export default CityInput