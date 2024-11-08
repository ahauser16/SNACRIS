// src/components/DocTypeSearch/DateSelect/DateSelectHybrid.jsx
import React, { useState } from "react";
import DateRangeInput from "../DateRangeInput/DateRangeInput";
import DateRangeSelect from "../DateRangeSelect/DateRangeSelect";
import DateExactInput from "../DateExactInput/DateExactInput";

const DateSelectHybrid = ({
    value,
    onChange,
    handleErrorDisplay,
    inputUserErrors
}) => {
    const [dateInputType, setDateInputType] = useState("rangeSelect");

    const handleDateInputTypeChange = (e) => {
        setDateInputType(e.target.value);
        onChange({ target: { name: "document_date", value: "" } }); // Reset document_date value
    };

    return (
        <>
            <div className="form-row form-row--mixed">
                <div className="form-group">
                    <label className="form-control radio">
                        <span className="form-control__input radio__input">
                            <input
                                type="radio"
                                name="dateInputType"
                                value="rangeSelect"
                                checked={dateInputType === "rangeSelect"}
                                onChange={handleDateInputTypeChange}
                            />
                            <span className="input__control"> </span>
                        </span>
                        <span className="text-wrapper">Date Range Select</span>
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-control radio">
                        <span className="form-control__input radio__input">
                            <input
                                type="radio"
                                name="dateInputType"
                                value="exact"
                                checked={dateInputType === "exact"}
                                onChange={handleDateInputTypeChange}
                            />
                            <span className="input__control"> </span>
                        </span>
                        <span className="text-wrapper">Exact Date</span>
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-control radio">
                        <span className="form-control__input radio__input">
                            <input
                                type="radio"
                                name="dateInputType"
                                value="rangeInput"
                                checked={dateInputType === "rangeInput"}
                                onChange={handleDateInputTypeChange}
                            />
                            <span className="input__control"> </span>
                        </span>
                        <span className="text-wrapper">Date Range Input</span>
                    </label>
                </div>
            </div>
            <div className="form-row form-row--mixed">
                {dateInputType === "rangeSelect" && (
                    <DateRangeSelect
                        value={value}
                        onChange={onChange}
                        handleErrorDisplay={handleErrorDisplay}
                        error={inputUserErrors.document_date}
                    />
                )}
                {dateInputType === "exact" && (
                    <DateExactInput
                        value={value}
                        onChange={onChange}
                        handleErrorDisplay={handleErrorDisplay}
                        error={inputUserErrors.document_date}
                    />
                )}
                {dateInputType === "rangeInput" && (
                    <DateRangeInput
                        value={value}
                        onChange={onChange}
                        handleErrorDisplay={handleErrorDisplay}
                        error={inputUserErrors.document_date}
                    />
                )}
            </div>
        </>
    );
};

export default DateSelectHybrid;