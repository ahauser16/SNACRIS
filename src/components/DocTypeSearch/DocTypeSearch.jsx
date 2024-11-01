// src/components/DocTypeSearch/DocTypeSearch.jsx
import React from "react";
import DateSelect from "./DateSelect/DateSelect";
import RecordedBoroughSelect from "../AddressSearch/RecordedBoroughSelect/RecordedBoroughSelect";
import DocSelect from "../DocSelect/DocSelect";

const DocTypeSearch = ({
  docTypeSoql,
  handleInputChange,
  handleErrorDisplay,
  inputUserErrors,
}) =>{

  return (
    <fieldset>
      <legend>
        Search By Document Type or Class
      </legend>
      <DateSelect
        value={docTypeSoql.document_date}
        onChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        inputUserErrors={inputUserErrors}
      />
      <DocSelect
        value={docTypeSoql}
        onChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        errorClass={inputUserErrors.document_class}
        errorType={inputUserErrors.doc_type}
        errorParty={inputUserErrors.document_party_type}
      />
      <RecordedBoroughSelect
        value={docTypeSoql.recorded_borough}
        onChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        error={inputUserErrors.recorded_borough}
      />
    </fieldset>
  );
}

export default DocTypeSearch;
