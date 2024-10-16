import React from 'react'

const SelectSample = () => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="standard-select" >
                    Standard Select
                </label>
                <div className="form-field select">
                    <select
                        id="standard-select" name="standard-select">
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <option value="Option length">
                            Option that has too long of a value to fit
                        </option>
                    </select>
                    <span className="focus"></span>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="multi-select">Multiple Select</label>
                <div className="form-field select select--multiple">
                    <select id="multi-select" name="multi-select" multiple>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <option value="Option length">
                            Option that has too long of a value to fit
                        </option>
                    </select>
                    <span className="focus"></span>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="standard-select-disabled">Disabled Select</label>
                <div className="form-field select select--disabled">
                    <select id="standard-select-disabled" name="standard-select-disabled" disabled>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <option value="Option length">
                            Option that is a long value and could wrap
                        </option>
                    </select>
                </div>
            </div>
            {/* the disabled multi-select still has the arrow showing which is not desireable.   */}
            <div className="form-group">
                <label htmlFor="standard-select">Disabled Multiple Select</label>
                <div className="form-field select select--multiple select--disabled">
                    <select id="multi-select-disabled" name="multi-select-disabled" multiple disabled>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <option value="Option length">
                            Option that is a long value and could wrap
                        </option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default SelectSample