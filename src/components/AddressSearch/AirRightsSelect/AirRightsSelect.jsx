import React from 'react'
import './AirRightsSelect.css'

const AirRightsSelect = ({ 
    value, 
    onChange, 
    handleErrorDisplay, 
    error 
}) => {
    const validateUserInput = (value) => {
        // if (!value) {
        //     handleErrorDisplay('borough', 'You must select a borough.');
        // } else {
        //     handleErrorDisplay('borough', null);
        // }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };
    return (
        <div
            className={`form-group form-group--width-auto form-group--air_rights ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '12ch' }}
        >
            <label htmlFor="air_rights">
                Air Rights
            </label>
            <div className="form-field select">
                <select
                    id="air_rights"
                    name="air_rights"
                    value={value}
                    onChange={handleValidationPlusDataTransferToSoql}
                    aria-describedby="air-rights-description"

                >
                    <option value="">
                        Select
                    </option>
                    <option value="Y">
                        Yes
                    </option>
                    <option value="N">
                        No
                    </option>
                </select>
                <span className="focus"></span>
            </div>
            <span className="field-description" id="air-rights-description">{error}</span>
        </div>
    )
}

export default AirRightsSelect