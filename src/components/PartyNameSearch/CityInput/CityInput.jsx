import React, { useState } from 'react';
import InfoIcon from '../../InfoIcon/InfoIcon';

const CityInput = ({
    value,
    onChange,
    handleErrorDisplay,
    error }) => {
    const [isHovered, setIsHovered] = useState(false);


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

    const hoverMessage = 'City must be 30 characters or less.';

    return (
        <div
            className={`form-group form-group--width-auto form-group--city ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '30ch' }}
        >
            <label htmlFor="city" >
                <span>City</span>
                <InfoIcon
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    hoverMessage={hoverMessage}
                />
            </label>
            <input
                type="text"
                id="city"
                name="city"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
                aria-describedby="city-description"
                placeholder="e.g. New York"
                maxLength="30"
            />
            <span
                className="field-description"
                id="city-description"
            >{error}</span>
        </div>
    )
}

export default CityInput