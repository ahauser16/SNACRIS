import React from 'react'

const ReelNbrInput = ({
    value,
    onChange,
    handleErrorDisplay,
    error }) => {

    const validateUserInput = (value) => {
        if (value.length > 5) {
            handleErrorDisplay("reel_nbr", "Reel Number must be 5 numbers or less.");
        } else if (!value) {
            handleErrorDisplay("reel_nbr", "This field is required for form submission");
        } else if (!/^\d+$/.test(value)) {
            handleErrorDisplay("reel_nbr", "Page Number can only consist of numbers.");
        } else {
            handleErrorDisplay("reel_nbr", null);
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e);
    };

    return (
        <div
            className={`form-group form-group--width-auto form-group--reel_nbr ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '8ch' }}
        >
            <label htmlFor="reel-number">Reel</label>
            <input
                type="text"
                id="reel-number"
                name="reel_nbr"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
                aria-describedby="reel-number-description"
                maxLength="5"
                required
            />
            <span
                className="field-description"
                id="reel-number-description"
            >
                {error}
            </span>
        </div>
    )
}

export default ReelNbrInput
