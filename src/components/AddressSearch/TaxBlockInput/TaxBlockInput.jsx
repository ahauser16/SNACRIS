import React from 'react';
import './TaxBlockInput.css';

function TaxBlockInput({ value, onChange, handleErrorDisplay, error }) {

    const validateUserInput = (value) => {
        if (value.length > 5) {
            handleErrorDisplay('block', 'Block number must be 5 numbers or less.');
        } else {
            handleErrorDisplay('block', '');
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    return (
        <div className="tax-block-input--container">
            <label htmlFor="block" className="tax-block-input--label">Block:</label>
            <input
                type="number"
                id="block"
                name="block"
                value={value}
                // onChange={onChange}
                onChange={handleValidationPlusDataTransferToSoql}
                className="tax-block-input--input"
                maxLength="5"
            />
            <span className="error-msg-display">{error}</span>
        </div>
    );
}

export default TaxBlockInput;