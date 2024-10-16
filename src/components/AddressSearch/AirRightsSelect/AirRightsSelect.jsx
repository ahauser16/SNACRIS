import React from 'react'
import './AirRightsSelect.css'

function AirRightsSelect({ value, onChange }) {
    return (
        <div
            className="form-group form-group--width-auto"
            style={{ '--field-width': '12ch' }}
        >
            <label htmlFor="air_rights">
                Air Rights
            </label>
            <div className="form-field select">
                <select
                    id="air_rights"
                    name="air_rights"
                    value={value}
                    onChange={onChange}
                >
                    <option value="">
                        Select
                    </option>
                    <option value="Y">
                        Yes
                    </option>
                    <option value="N">
                        No
                    </option>
                </select>
            </div>
        </div>
    )
}

export default AirRightsSelect