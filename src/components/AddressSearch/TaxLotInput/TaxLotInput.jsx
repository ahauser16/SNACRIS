import React from 'react'
import './TaxLotInput.css'

function TaxLotInput({
    value,
    onChange,
    handleErrorDisplay,
    error
}) {

    const validateUserInput = (value) => {
        if (value.length > 4) {
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
            className="form-group form-group--width-auto"
            style={{ '--field-width': '8ch' }}
        >
            <label
                htmlFor="lot">Lot</label>
            <input
                type="number"
                id="lot"
                name="lot"
                value={value}
                // onChange={onChange}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
            />
            <span className="error-msg-display">{error}</span>
        </div>
    )
}

export default TaxLotInput