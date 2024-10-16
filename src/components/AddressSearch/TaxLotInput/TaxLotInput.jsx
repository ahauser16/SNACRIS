import React from 'react'
import './TaxLotInput.css'

function TaxLotInput({
    value,
    onChange,
    handleErrorDisplay,
    error
}) {

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
            <label
                htmlFor="lot">Lot</label>
            <input
                type="text"
                id="lot"
                name="lot"
                value={value}
                // onChange={onChange}
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