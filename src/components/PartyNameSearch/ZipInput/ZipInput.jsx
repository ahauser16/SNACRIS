import React from 'react'
import './ZipInput.css'

const ZipInput = ({
    value,
    onChange,
    handleErrorDisplay,
    error }) => {

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

    return (
        <div
            className={`form-group form-group--width-auto form-group--zip ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '8ch' }}>
            <label htmlFor="zip" >
                Zip:
            </label>
            <input
                type="text"
                id="zip"
                name="zip"
                value={value}
                // onChange={onChange}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
                aria-describedby="zip-code-description"
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