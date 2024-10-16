import React from 'react'

const RadioBtnSample = () => {
    return (
        <>
            <div className="form-group">
                <label className="form-control radio">
                    <span className="form-control__input radio__input">
                        <input type="radio" name="radio" />
                        <span className="input__control"> </span>
                    </span>
                    Radio
                </label>
            </div>

            <div className="form-group">
                <label className="form-control radio">
                    <span className="form-control__input radio__input">
                        <input type="radio" name="radio" checked />
                        <span className="input__control"> </span>
                    </span>
                    Radio - Checked
                </label>
            </div>

            <div className="form-group">
                <label className="form-control form-control--disabled radio">
                    <span className="form-control__input radio__input">
                        <input type="radio" name="disabled" disabled />
                        <span className="input__control"> </span>
                    </span>
                    Radio - Disabled
                </label>
            </div>

            <div className="form-group">
                <label className="form-control form-control--disabled radio">
                    <span className="form-control__input radio__input">
                        <input type="radio" name="disabled" checked disabled />
                        <span className="input__control"> </span>
                    </span>
                    Radio - Disabled Checked
                </label>
            </div>
        </>
    )
}

export default RadioBtnSample