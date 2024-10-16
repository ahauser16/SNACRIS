import React from 'react'
import './PartialLotSelect.css'

function PartialLotSelect({ value, onChange }) {
    return (
        <div
            className="form-group form-group--width-auto"
            style={{ '--field-width': '10ch' }}
        >
            <label htmlFor="partial_lot">Partial Lot</label>
            <div className="form-field select">
                <select
                    id="partial_lot"
                    name="partial_lot"
                    value={value}
                    onChange={onChange}
                    className="partial-lot-select--select"
                >
                    <option value="" className="partial-lot-select--option">Select</option>
                    <option value="P" className="partial-lot-select--option">Partial</option>
                    <option value="E" className="partial-lot-select--option">Entire</option>
                    <option value="N" className="partial-lot-select--option">Not Applicable</option>
                </select>
                <span className="focus"></span>
            </div>
        </div>
    )
}

export default PartialLotSelect