import React from 'react'
import './StreetUnitInput.css'

function StreetUnitInput({ value, onChange, handleErrorDisplay, error }) {

    const validateUserInput = (value) => {
        if (value.length > 7) {
            handleErrorDisplay('unit', 'Unit must be less than 7 characters');
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
        className={`form-group form-group--width-auto form-group--unit ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '9ch' }}
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
                maxLength="7"
                aria-describedby="unit-description"
            />
            <span
                className="field-description"
                id="unit-description"
            >
                {error}
            </span>
        </div>
    )
}

export default StreetUnitInput