import React from 'react'
import './PartialLotSelect.css'

function PartialLotSelect({ value, onChange }) {
    return (
        <div className="partial-lot-select--container">
            <label htmlFor="partial_lot" className="partial-lot-select--label">Partial Lot:</label>
            <select
                id="partial_lot"
                name="partial_lot"
                value={value}
                onChange={onChange}
                className="partial-lot-select--select"
            >
                <option value="" className="partial-lot-select--option">Select an option</option>
                <option value="P" className="partial-lot-select--option">Partial</option>
                <option value="E" className="partial-lot-select--option">Entire</option>
                <option value="N" className="partial-lot-select--option">Not Applicable</option>
            </select>
        </div>
    )
}

export default PartialLotSelect