import React from 'react'
import './NameInput.css'

function NameInput({ value, onChange, handleErrorDisplay, error }) {

    const validateUserInput = (value) => {
        if (value.length > 70) {
            handleErrorDisplay('name', 'Name must be 70 characters or less.');
        } else {
            handleErrorDisplay('name', '');
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    return (
        <div className="name-input--container">
            <label className="name-input--label" htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={value}
                // onChange={onChange}
                onChange={handleValidationPlusDataTransferToSoql}
                className="name-input--input"
            />
            <span className="error-msg-display">{error}</span>
        </div>
    )
}

export default NameInput