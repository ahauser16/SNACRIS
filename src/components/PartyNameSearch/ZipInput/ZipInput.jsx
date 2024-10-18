import React, { useState } from 'react';
import InfoIcon from '../../InfoIcon/InfoIcon';

const ZipInput = ({
    value,
    onChange,
    handleErrorDisplay,
    error }) => {
    const [isHovered, setIsHovered] = useState(false);


    const validateUserInput = (value) => {
        if (value.length > 9) {
            handleErrorDisplay('zip', 'Zip code must be 9 characters or less.');
        } else {
            handleErrorDisplay('zip', null);
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    const hoverMessage = 'Zip must be 9 numbers or less.';

    return (
        <div
            className={`form-group form-group--width-auto form-group--zip ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '8ch' }}>
            <label htmlFor="zip" >
                <span>Zip</span>
                <InfoIcon
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    hoverMessage={hoverMessage}
                />
            </label>
            <input
                type="text"
                id="zip"
                name="zip"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
                aria-describedby="zip-code-description"
                placeholder="12345"
                maxLength="9"
            />
            <span
                className="field-description"
                id="zip-code-description"
            >
                {error}
            </span>
        </div>
    )
}

export default ZipInput