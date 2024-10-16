import React from 'react'

const FieldsetSample = () => {
    return (
        <>
            <fieldset> 
                <legend>Your Name</legend>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input className="form-field" id="first-name" name="first-name" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input className="form-field" id="last-name" name="last-name" type="text" />
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>Address</legend>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="street-address">Street Address</label>
                        <input className="form-field" id="street-address" name="street-address" type="text" />
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
                    <div className="form-group form-group--width-auto" style={{ '--field-width': '8ch' }}>
                        <label htmlFor="zip">Zip</label>
                        <input className="form-field" id="zip" name="zip" type="text" />
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>Do you own or rent?</legend>
                <div className="form-row form-row--variable">
                    <div className="form-group">
                        <label className="form-control radio">
                            <span className="form-control__input radio__input">
                                <input type="radio" value="own" name="property-ownership" />
                                <span className="input__control"> </span>
                            </span>
                            <span className="radio__label">Own</span>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-control radio">
                            <span className="form-control__input radio__input">
                                <input type="radio" value="rent" name="property-ownership" />
                                <span className="input__control"> </span>
                            </span>
                            <span className="radio__label">Rent</span>
                        </label>
                    </div>
                </div>
            </fieldset>
        </>
    )
}

export default FieldsetSample