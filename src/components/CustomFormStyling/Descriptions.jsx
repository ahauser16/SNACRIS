import React from 'react'

const Descriptions = () => {
    return (
        <>
            <fieldset>
                <legend>Address</legend>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="street-address">Street Address</label>
                        <input aria-describedby="street-address-description" className="form-field" id="street-address" name="street-address" type="text" />
                        <span className="field-description" id="street-address-description">Example: 123 Sesame Street, #456</span>
                    </div>
                </div>
                <div className="form-row form-row--mixed">
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-field" id="city" name="city" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-field" id="state" name="state" type="text" />
                    </div>
                    <div className="form-group form-group--width-auto" style="--field-width: 10ch;">
                        <label htmlFor="zip">Zip</label>
                        <input aria-describedby="zip-description" className="form-field" id="zip" name="zip" type="text" />
                        <span className="field-description" id="zip-description">5 digits</span>
                    </div>
                </div>
            </fieldset>
        </>
    )
}

export default Descriptions