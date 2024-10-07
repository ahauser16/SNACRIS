import React from 'react'
import './AddressOne.css'

function AddressOne({
    value,
    onChange,
    handleErrorDisplay,
    error
}) {

    const validateUserInput = (value) => {
        if (value.length > 60) {
            handleErrorDisplay('address_1', 'Address number must be 60 numbers or less.');
        } else {
            handleErrorDisplay('address_1', null);
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    return (
        <div className="address-1-input--container">
            <label
                htmlFor="address_1" className="address-1-input--label"
            >
                Address 1:
            </label>
            <input
                type="text"
                id="address_1"
                name="address_1"
                value={value}
                //onChange={onChange}
                onChange={handleValidationPlusDataTransferToSoql}
                className="address-1-input--input"
            />
            <span className="error-msg-display">{error}</span>
        </div>
    )
}

export default AddressOne