import React from 'react'
import './AirRightsSelect.css'

function AirRightsSelect({ value, onChange }) {
    return (
        <div className="air-rights-select--container">
            <label htmlFor="air_rights" className="air-rights-select--label">
                Air Rights:
            </label>
            <select
                id="air_rights"
                name="air_rights"
                value={value}
                onChange={onChange}
                className="air-rights-select--select"
            >
                <option value="" className="air-rights-select--option">
                    Select an option
                </option>
                <option value="Y" className="air-rights-select--option">
                    Yes
                </option>
                <option value="N" className="air-rights-select--option">
                    No
                </option>
            </select>
        </div>
    )
}

export default AirRightsSelect