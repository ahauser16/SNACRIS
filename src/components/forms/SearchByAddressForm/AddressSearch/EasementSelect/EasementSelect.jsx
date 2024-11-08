import React from 'react'
import './EasementSelect.css'

const EasementSelect = ({
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
            className={`form-group form-group--width-auto form-group--easement ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '10ch' }}
        >
            <label htmlFor="easement">Easement</label>
            <div className="form-field select">
                <select
                    id="easement"
                    name="easement"
                    value={value}
                    onChange={handleValidationPlusDataTransferToSoql}
                    aria-describedby="easement-description"
                >
                    <option value="" className="easement-select--option">Select</option>
                    <option value="Y" className="easement-select--option">Yes</option>
                    <option value="N" className="easement-select--option">No</option>
                </select>
                <span className="focus"></span>
            </div>
            <span
                className="field-description"
                id="easement-description"
            >
                {error}
            </span>
        </div>
    )
}

export default EasementSelect