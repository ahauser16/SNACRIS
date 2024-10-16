import React from 'react'
import './AddressOne.css'

const AddressOne = ({
    value,
    onChange,
    handleErrorDisplay,
    error
}) => {

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
        <div 
        className={`form-group form-group--address_1 ${error ? 'field-error' : ''}`}
        >
            <label
                htmlFor="address_1"
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
                // className="address-1-input--input"
                className="form-field"
                aria-describedby="address-line-1-description"
            />
            <span
                className="field-description"
                id="address-line-1-description"
                >
                {error}
            </span>
        </div >
    )
}

export default AddressOne