import React from 'react'
import './EasementSelect.css'

function EasementSelect({ value, onChange }) {
    return (
        <div 
        className="form-group form-group--width-auto" 
        style={{ '--field-width': '12ch' }}
        >
            <label htmlFor="easement">Easement</label>
            <div className="form-field select">
                <select
                    id="easement"
                    name="easement"
                    value={value}
                    onChange={onChange}
                >
                    <option value="" className="easement-select--option">Select</option>
                    <option value="Y" className="easement-select--option">Yes</option>
                    <option value="N" className="easement-select--option">No</option>
                </select>
                <span className="focus"></span>
            </div>
        </div>
    )
}

export default EasementSelect