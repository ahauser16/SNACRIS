// src/components/SearchByPartyNameForm/SearchByPartyNameForm.jsx
import React, { useState, useEffect } from "react";
import DocIdInput from "./DocIdInput/DocIdInput";
import CrfnInput from "./CrfnInput/CrfnInput";

const DocIdCrfnSearch = ({
  docIdCrfnSoql,
  handleInputChange,
  handleErrorDisplay,
  inputUserErrors,
}) => {
  const [dualError, setDualError] = useState("");

  useEffect(() => {
    // Validate dual input fields whenever docId or crfn changes
    validateDualInputFields(docIdCrfnSoql.docId, docIdCrfnSoql.crfn);
  }, [docIdCrfnSoql.docId, docIdCrfnSoql.crfn]);

  const validateDualInputFields = (docId, crfn) => {
    if (!docId && !crfn) {
      setDualError("You must enter either a Document ID or CRFN.");
    } else if (docId && crfn) {
      setDualError("You must enter either a Document ID or CRFN but not both.");
    } else {
      setDualError("");
    }
  };

  return (
    <fieldset>
      <legend>Search By Document ID or CRFN</legend>
      <div className="form-row form-row--mixed">
        <DocIdInput
          value={docIdCrfnSoql.docId}
          onChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
          error={inputUserErrors.docId}
        />
      {/* </div>
      <div className="form-row"> */}
        <CrfnInput
          value={docIdCrfnSoql.crfn}
          onChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
          error={inputUserErrors.crfn}
        />
      </div>
      <span
        className={`multi-field-error-handling ${
          dualError ? "field-error" : ""
        }`}
      >
        <span className="field-description">{dualError}</span>
      </span>
    </fieldset>
  );
};

export default DocIdCrfnSearch;
