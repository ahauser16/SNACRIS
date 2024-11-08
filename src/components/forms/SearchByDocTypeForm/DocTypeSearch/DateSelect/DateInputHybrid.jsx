// src/components/DocTypeSearch/DateSelect/DateInputHybrid.jsx
import React from "react";
import DateRangeInput from "../DateRangeInput/DateRangeInput";
import DateRangeSelect from "../DateRangeSelect/DateRangeSelect";
import DateExactInput from "../DateExactInput/DateExactInput";

const DateInputHybrid = ({
  dateModifier,
  document_date,
  onChange,
  handleErrorDisplay,
  inputUserErrors,
}) => {
  return (
    <div className="form-row form-row--mixed">
      {dateModifier === "rangeSelect" && (
        <DateRangeSelect
          value={document_date}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          inputUserErrors={inputUserErrors.document_date}
        />
      )}
      {dateModifier === "exact" && (
        <DateExactInput
          value={document_date}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          inputUserErrors={inputUserErrors.document_date}
        />
      )}
      {dateModifier === "rangeInput" && (
        <DateRangeInput
          value={document_date}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          inputUserErrors={inputUserErrors.document_date}
        />
      )}
    </div>
  );
};

export default DateInputHybrid;
