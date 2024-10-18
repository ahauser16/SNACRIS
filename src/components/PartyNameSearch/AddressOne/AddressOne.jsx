import React, { useState } from 'react';
import InfoIcon from '../../InfoIcon/InfoIcon';


const AddressOne = ({
    value,
    onChange,
    handleErrorDisplay,
    error
}) => {
    const [isHovered, setIsHovered] = useState(false);

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

    const hoverMessage = 'Address 1 must be 60 characters or less.';

    return (
        <div
            className={`form-group form-group--address_1 ${error ? 'field-error' : ''}`}
        >
            <label
                htmlFor="address_1"
            >
                <span>Address 1</span>
                <InfoIcon
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    hoverMessage={hoverMessage}
                />

            </label>
            <input
                type="text"
                id="address_1"
                name="address_1"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
                aria-describedby="address-line-1-description"
                placeholder="e.g. 123 Main St"
                maxLength="60"
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