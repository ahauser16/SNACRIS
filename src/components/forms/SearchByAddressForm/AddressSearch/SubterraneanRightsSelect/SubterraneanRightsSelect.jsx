import React from 'react'
import './SubterraneanRightsSelect.css'

const SubterraneanRightsSelect = ({
    value,
    onChange,
    handleErrorDisplay,
    error }) => {

    const validateUserInput = (value) => {
        // if (!value) {
        //   handleErrorDisplay('borough', 'You must select a borough.');
        // } else {
        //   handleErrorDisplay('borough', null);
        // }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    return (
        <div
            className={`form-group form-group--width-auto form-group--subterranean_rights ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '10ch' }}
        >
            <label htmlFor="subterranean_rights" >
                Subterranean Rights
            </label>
            <div className="form-field select">
                <select
                    id="subterranean_rights"
                    name="subterranean_rights"
                    value={value}
                    onChange={handleValidationPlusDataTransferToSoql}
                    aria-describedby="subterranean-rights-description"
                >
                    <option value="">Select</option>
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                </select>
                <span className="focus"></span>
            </div>
            <span
                className="field-description"
                id="subterranean-rights-description"
            >
                {error}
            </span>
        </div>
    )
}

export default SubterraneanRightsSelect