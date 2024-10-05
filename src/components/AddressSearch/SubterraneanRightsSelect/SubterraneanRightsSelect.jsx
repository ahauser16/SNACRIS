import React from 'react'
import './SubterraneanRightsSelect.css'

function SubterraneanRightsSelect({value, onChange}) {
    return (
        <div className="subterranean-rights-select--container">
            <label htmlFor="subterranean_rights" className="subterranean-rights-select--label">Subterranean Rights:</label>
            <select
                id="subterranean_rights"
                name="subterranean_rights"
                value={value}
                onChange={onChange}
                className="subterranean-rights-select--select"
            >
                <option value="" className="subterranean-rights-select--option">Select an option</option>
                <option value="Y" className="subterranean-rights-select--option">Yes</option>
                <option value="N" className="subterranean-rights-select--option">No</option>
            </select>
        </div>
    )
}

export default SubterraneanRightsSelect