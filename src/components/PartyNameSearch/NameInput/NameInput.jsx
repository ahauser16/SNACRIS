import React, { useState } from 'react';
import InfoIcon from '../../InfoIcon/InfoIcon';

const NameInput = ({
    value,
    onChange,
    handleErrorDisplay,
    error
}) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const hoverMessage = 'Name must be 70 characters or less and is required for form submission.';

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
        <div 
        className={`form-group form-group--width-auto form-group--name ${error ? 'field-error' : ''}`}
        style={{ '--field-width': '30ch' }}
        >
            <label htmlFor="name" >
                <span>Name</span>
                <InfoIcon
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    hoverMessage={hoverMessage}
                />
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={value}
                onChange={handleValidationPlusDataTransferToSoql}
                className="form-field"
                aria-describedby="party-name-description"
                placeholder="Enter a party name"
                maxLength="70"
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