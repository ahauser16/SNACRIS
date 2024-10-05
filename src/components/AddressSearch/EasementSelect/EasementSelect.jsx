import React from 'react'
import './EasementSelect.css'

function EasementSelect({ value, onChange }) {
    return (
        <div className="easement-select--container">
            <label htmlFor="easement" className="easement-select--label">Easement:</label>
            <select
                id="easement"
                name="easement"
                value={value}
                onChange={onChange}
                className="easement-select--select"
            >
                <option value="" className="easement-select--option">Select an option</option>
                <option value="Y" className="easement-select--option">Yes</option>
                <option value="N" className="easement-select--option">No</option>
            </select>
        </div>
    )
}

export default EasementSelect