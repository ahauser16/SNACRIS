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
        } else if (!value) {
            handleErrorDisplay('name', 'This field is required for form submission');
        } else {
            handleErrorDisplay('name', null);
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e);
    };

    return (
        <div className={`form-group form-group--name ${error ? 'field-error' : ''}`}>
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
                aria-describedby="party-name-description"
                required
            />
            <span
                className="field-description"
                id="party-name-description"
            >
                {error}
            </span>
        </div>

    )
}

export default NameInput