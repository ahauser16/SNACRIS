import React, { useState } from 'react';
import InfoIcon from '../../InfoIcon/InfoIcon';


const PartyTypeSelect = ({
    value,
    onChange,
    handleErrorDisplay,
    error
}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Validation function for input fields
    // Example validation, can be extended
    const validateUserInput = (inputValue) => {
        // if (!inputValue) {
        //     handleErrorDisplay("Input value cannot be empty"); 
        // }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    const hoverMessage = 'Party Type is optional for form submission.';

    return (
        <div className="form-row">
            <div
                className={`form-group form-group--party_type ${error ? "field-error" : ""
                    }`}
            >
                <label htmlFor="party-type-select">
                    <span>Document Type</span>
                    <InfoIcon
                        isHovered={isHovered}
                        setIsHovered={setIsHovered}
                        hoverMessage={hoverMessage}
                    />
                </label>
                <div className="form-field select">
                    <select
                        id="party-type-select"
                        name="party_type"
                        value={value.party_type}
                        onChange={handleValidationPlusDataTransferToSoql}
                        aria-describedby="party-type-select"
                    >
                        <option value="">All Parties</option>
                        <option value="1">Party 1 (only)</option>
                        <option value="2">Party 2 (only)</option>
                        <option value="3">Party 3/Other (only)</option>
                        
                    </select>
                    <span className="focus"></span>
                </div>
                <span
                    className="field-description" id="party-type-select"
                >
                    {error}
                </span>
            </div>
        </div>
    )
}

export default PartyTypeSelect