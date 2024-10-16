import React from 'react';
import './TaxBlockInput.css';

function TaxBlockInput({ value, onChange, handleErrorDisplay, error }) {

    const validateUserInput = (value) => {
        if (!/^\d*$/.test(value)) {
            handleErrorDisplay('block', 'Block must be numbers only');
        } else if (value.length > 5) {
            handleErrorDisplay('block', 'Block number must be 5 numbers or less.');
        } else {
            handleErrorDisplay('block', null);
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    return (
        <div
            className={`form-group form-group--width-auto form-group--block ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '8ch' }}
        >
            <label htmlFor="block">
                Block
            </label>
            <input
                type="text"
                id="block"
                name="block"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
                maxLength="5"
                aria-describedby="tax-block-description"
            />
            <span
                className="field-description"
                id="tax-block-description"
            >
                {error}
            </span>
        </div>
    );
}

export default TaxBlockInput;