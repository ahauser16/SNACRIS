import React from 'react'
import './PartialLotSelect.css'

const PartialLotSelect = ({ value,
    onChange,
    handleErrorDisplay,
    error }) =>{

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
            className={`form-group form-group--width-auto form-group--partial_lot ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '10ch' }}
        >
            <label htmlFor="partial_lot">Partial Lot</label>
            <div className="form-field select">
                <select
                    id="partial_lot"
                    name="partial_lot"
                    value={value}
                    onChange={handleValidationPlusDataTransferToSoql}
                    aria-describedby="partial-lot-description"
                >
                    <option value="" className="partial-lot-select--option">Select</option>
                    <option value="P" className="partial-lot-select--option">Partial</option>
                    <option value="E" className="partial-lot-select--option">Entire</option>
                    <option value="N" className="partial-lot-select--option">Not Applicable</option>
                </select>
                <span className="focus"></span>
            </div>
            <span
                className="field-description"
                id="partial-lot-description"
            >
                {error}
            </span>
        </div>
    )
}

export default PartialLotSelect