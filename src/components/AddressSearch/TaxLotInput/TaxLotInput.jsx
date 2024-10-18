import React, { useState } from 'react';
import InfoIcon from '../../InfoIcon/InfoIcon';

const TaxLotInput = ({
    value,
    onChange,
    handleErrorDisplay,
    error
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const hoverMessage = 'Entry of "0000" or no unit number indicates all lots';

    const validateUserInput = (value) => {
        if (!/^\d*$/.test(value)) {
            handleErrorDisplay('lot', 'Lot must be numbers only');
        } else if (value.length > 4) {
            handleErrorDisplay('lot', 'Lot number must be 4 numbers or less.');
        } else {
            handleErrorDisplay('lot', null);
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    return (
        <div
            className={`form-group form-group--width-auto form-group--lot ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '6ch' }}
        >
            <label htmlFor="lot">
                <span>Lot</span>
                <InfoIcon
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    hoverMessage={hoverMessage}
                />
            </label>
            <input
                type="text"
                id="lot"
                name="lot"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
                maxLength="4"
                aria-describedby="tax-lot-description"
            />
            <span
                className="field-description"
                id="tax-lot-description"
            >
                {error}
            </span>
        </div>
    )
}

export default TaxLotInput