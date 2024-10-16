import React from 'react'
import './NameInput.css'

const NameInput = ({
    value,
    onChange,
    handleErrorDisplay,
    error
}) => {

    const validateUserInput = (value) => {
        if (value.length > 70) {
            handleErrorDisplay('name', 'Name must be 70 characters or less.');
        } else {
            handleErrorDisplay('name', null);
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e);
    };

    return (
        <div className="form-group">
            <label
                htmlFor="name"
            >
                Name:
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
            />
            <span className="error-msg-display">{error}</span>
        </div>

    )
}

export default NameInput