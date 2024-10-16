import React from 'react'
import './SubterraneanRightsSelect.css'

function SubterraneanRightsSelect({ value, onChange }) {
    return (
        <div 
        className="form-group form-group--width-auto" 
        style={{ '--field-width': '12ch' }}
        >
            <label htmlFor="subterranean_rights" >
                Subterranean Rights
            </label>
            <div className="form-field select">
                <select
                    id="subterranean_rights"
                    name="subterranean_rights"
                    value={value}
                    onChange={onChange}
                    className="subterranean-rights-select--select"
                >
                    <option value="" className="subterranean-rights-select--option">Select</option>
                    <option value="Y" className="subterranean-rights-select--option">Yes</option>
                    <option value="N" className="subterranean-rights-select--option">No</option>
                </select>
                <span className="focus"></span>
            </div>
        </div>
    )
}

export default SubterraneanRightsSelect