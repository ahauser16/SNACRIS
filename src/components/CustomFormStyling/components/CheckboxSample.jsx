import React from 'react'

const CheckboxSample = () => {
    return (
        <>
            <div className="form-group">
                <label className="form-control checkbox">
                    <span className="form-control__input checkbox__input">
                        <input type="checkbox" name="checkbox" />
                        <span className="input__control">
                            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="4"
                                    d="M1.73 12.91l6.37 6.37L22.79 4.59"
                                />
                            </svg>
                        </span>
                    </span>
                    Checkbox
                </label>
            </div>

            <div className="form-group">
                <label className="form-control checkbox">
                    <span className="form-control__input checkbox__input">
                        <input type="checkbox" name="checked" checked />
                        <span className="input__control">
                            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="4"
                                    d="M1.73 12.91l6.37 6.37L22.79 4.59"
                                />
                            </svg>
                        </span>
                    </span>
                    Checkbox - Checked
                </label>
            </div>

            <div className="form-group">
                <label className="form-control form-control--disabled checkbox">
                    <span className="form-control__input checkbox__input">
                        <input type="checkbox" name="disabled" disabled />
                        <span className="input__control">
                            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="4"
                                    d="M1.73 12.91l6.37 6.37L22.79 4.59"
                                />
                            </svg>
                        </span>
                    </span>
                    Checkbox - Disabled
                </label>
            </div>

            <div className="form-group">
                <label className="form-control form-control--disabled checkbox">
                    <span className="form-control__input checkbox__input">
                        <input type="checkbox" name="disabled-checked" disabled checked />
                        <span className="input__control">
                            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="4"
                                    d="M1.73 12.91l6.37 6.37L22.79 4.59"
                                />
                            </svg>
                        </span>
                    </span>
                    Checkbox - Disabled Checked
                </label>
            </div>
        </>
    )
}

export default CheckboxSample