import React from 'react'

const ReelYearInput = ({
    value,
    onChange,
    handleErrorDisplay,
    error }) => {

    const validateUserInput = (value) => {
        if (value.length > 4) {
            handleErrorDisplay("reel_yr", "Reel Year must be 4 numbers or less.");
        } else if (!value) {
            handleErrorDisplay("reel_yr", "This field is required for form submission");
        } else if (!/^\d+$/.test(value)) {
            handleErrorDisplay("reel_yr", "Page Number can only consist of numbers.");
        } else {
            handleErrorDisplay("reel_yr", null);
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e);
    };

    return (
        <div
            className={`form-group form-group--width-auto form-group--reel_yr ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '8ch' }}
        >
            <label htmlFor="reel-year">Year</label>
            <input
                type="text"
                id="reel-year"
                name="reel_yr"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
                aria-describedby="reel-year-description"
                maxLength="4"
                required
            />
            <span
                className="field-description"
                id="reel-year-description"
            >
                {error}
            </span>
        </div>
    )
}

export default ReelYearInput
