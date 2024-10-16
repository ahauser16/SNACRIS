import React from 'react'
import './AddressTwo.css'

const AddressTwo = ({
    value,
    onChange,
    handleErrorDisplay,
    error }) => {

    const validateUserInput = (value) => {
        if (value.length > 60) {
            handleErrorDisplay('address_2', 'Address must be 60 characters or less.');
        } else {
            handleErrorDisplay('address_2', null);
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    return (
        <div
            className={`form-group form-group--address_2 ${error ? 'field-error' : ''}`}>
            <label htmlFor="address_2">
                Address 2:
            </label>
            <input
                type="text"
                id="address_2"
                name="address_2"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
                aria-describedby="address-line-2-description"
            />
            <span
                className="field-description"
                id="address-line-2-description"
            >
                {error}
            </span>
        </div>
    )
}

export default AddressTwo