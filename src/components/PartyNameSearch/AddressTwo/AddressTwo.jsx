import React from 'react'
import './AddressTwo.css'

function AddressTwo({ value, onChange, handleErrorDisplay, error }) {

    const validateUserInput = (value) => {
        if (value.length > 60) {
            handleErrorDisplay('address_2', 'Address must be 60 characters or less.');
        } else {
            handleErrorDisplay('address_2', '');
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    return (
        <div className="address-2-input--container">
            <label
                className="address-2-input--label" htmlFor="address_2"
            >
                Address 2:
            </label>
            <input
                type="text"
                id="address_2"
                name="address_2"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="address-2-input--input"
            />
            <span className="error-msg-display">{error}</span>
        </div>
    )
}

export default AddressTwo