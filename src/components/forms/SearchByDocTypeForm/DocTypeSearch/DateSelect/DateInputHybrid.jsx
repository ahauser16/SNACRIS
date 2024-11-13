// src/components/DocTypeSearch/DateSelect/DateInputHybrid.jsx
import React from "react";
import DateRangeInput from "../DateRangeInput/DateRangeInput";
import DateRangeSelect from "../DateRangeSelect/DateRangeSelect";
import DateExactInput from "../DateExactInput/DateExactInput";

const DateInputHybrid = ({
  documentDateFieldFS,
  documentDateFieldES,
  handleInputChange,
  handleErrorDisplay,
}) => {
  return (
    <div className="form-row form-row--mixed">
      {documentDateFieldFS.documentDateModifierFS === "dateRangeSelect" && (
        <DateRangeSelect
          startDateFS={documentDateFieldFS.dateRangeSelectFS.startDateFS}
          startDateES={documentDateFieldES.dateRangeSelectES.startDateES}
          endDateFS={documentDateFieldFS.dateRangeSelectFS.endDateFS}
          endDateES={documentDateFieldES.dateRangeSelectES.endDateES}
          handleInputChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
        />
      )}
      {documentDateFieldFS.documentDateModifierFS === "exactDate" && (
        <DateExactInput
          exactDateFS={documentDateFieldFS.exactDateFS}
          exactDateES={documentDateFieldES.exactDateES}
          handleInputChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
        />
      )}
      {documentDateFieldFS.documentDateModifierFS === "dateRangeCustom" && (
        <DateRangeInput
          startDateFS={documentDateFieldFS.dateRangeCustomFS.startDateFS}
          startDateES={documentDateFieldES.dateRangeCustomES.startDateES}
          endDateFS={documentDateFieldFS.dateRangeCustomFS.endDateFS}
          endDateES={documentDateFieldES.dateRangeCustomES.endDateES}
          handleInputChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
        />
      )}
    </div>
  );
};

export default DateInputHybrid;
