import React from 'react'

const ReelPageInput = ({
    value,
    onChange,
    handleErrorDisplay,
    error }) => {

    const validateUserInput = (value) => {
        if (value.length > 5) {
            handleErrorDisplay("reel_pg", "Page Number must be 5 numbers or less.");
        } else if (!value) {
            handleErrorDisplay("reel_pg", "This field is required for form submission");
        } else if (!/^\d+$/.test(value)) {
            handleErrorDisplay("reel_pg", "Page Number can only consist of numbers.");
        } else {
            handleErrorDisplay("reel_pg", null);
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e);
    };

    return (
        <div
            className={`form-group form-group--width-auto form-group--reel_pg ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '8ch' }}
        >
            <label htmlFor="reel-page-number">Page</label>
            <input
                type="text"
                id="reel-page-number"
                name="reel_pg"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
                aria-describedby="reel-page-number-description"
                maxLength="5"
                required
            />
            <span
                className="field-description"
                id="reel-page-number-description"
            >
                {error}
            </span>
        </div>
    )
}

export default ReelPageInput
