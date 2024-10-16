import React from 'react'

const ValidationSample = ({

}) => {
    return (
        <>
            <fieldset>
                <legend>Address</legend>
                <div className="form-row">
                    <div className="form-group field-error">
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
                    <div className="form-group form-group--width-auto" style={{ '--field-width': '8ch' }}>
                        <label htmlFor="zip">Zip</label>
                        <input aria-describedby="zip-description" className="form-field" id="zip" name="zip" type="text" />
                        <span className="field-description" id="zip-description">5 digits</span>
                    </div>
                </div>
            </fieldset>
            <fieldset className="field-error">
                <legend>Do you own or rent?</legend>
                <div className="form-row form-row--variable">
                    <div className="form-group form-group--width-auto">
                        <label className="form-control radio">
                            <span className="form-control__input radio__input">
                                <input
                                    type="radio"
                                    value="own"
                                    name="property-ownership"
                                    aria-describedby="property-owernship-description"
                                />
                                <span className="input__control"> </span>
                            </span>
                            <span className="radio__label">Own</span>
                        </label>
                    </div>
                    <div className="form-group form-group--width-auto">
                        <label className="form-control radio">
                            <span className="form-control__input radio__input">
                                {/* NB that the `span` element containing the error description text should have an `id` whose value matches the associated `input` element's `aria-describedby` value (e.g. "property-ownership-description").  */}
                                <input
                                    type="radio"
                                    value="rent"
                                    name="property-ownership"
                                    aria-describedby="property-owernship-description"
                                />
                                <span className="input__control"> </span>
                            </span>
                            <span className="radio__label">Rent</span>
                        </label>
                    </div>
                </div>
                <span
                    className="field-description" id="property-owernship-description"
                >
                    A selection is required
                </span>
            </fieldset>
        </>
    )
}

export default ValidationSample