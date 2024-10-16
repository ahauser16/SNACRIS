import React from 'react'
import './StreetUnitInput.css'

function StreetUnitInput({ value, onChange, handleErrorDisplay, error }) {

    const validateUserInput = (value) => {
        if (value.length > 7) {
            handleErrorDisplay('unit', 'Unit must be 5 numbers/letters or less.');
        } else {
            handleErrorDisplay('unit', '');
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    return (
        <div
            className="form-group form-group--width-auto"
            style={{ '--field-width': '7ch' }}
        >
            <label htmlFor="unit" className="street-unit-input--label">Unit</label>
            <input
                type="text"
                id="unit"
                name="unit"
                value={value}
                // onChange={onChange}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
            />
            <span className="error-msg-display">{error}</span>
        </div>
    )
}

export default StreetUnitInput