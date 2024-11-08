import React, { useState } from 'react';
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const AddressTwo = ({
    value,
    onChange,
    handleErrorDisplay,
    error }) => {
    const [isHovered, setIsHovered] = useState(false);


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

    const hoverMessage = 'Address 2 must be 60 characters or less.';

    return (
        <div
            className={`form-group form-group--width-auto form-group--address_2 ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '30ch' }}
        >
            <label htmlFor="address_2">
                <span>Address 2</span>
                <InfoIcon
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    hoverMessage={hoverMessage}
                />
            </label>
            <input
                type="text"
                id="address_2"
                name="address_2"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
                aria-describedby="address-line-2-description"
                placeholder="e.g. Suite 200"
                maxLength="60"
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