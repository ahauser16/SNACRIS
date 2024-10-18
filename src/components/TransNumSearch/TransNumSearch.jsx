// src/components/TransNumSearch/TransNumSearch.jsx
import React from "react";

import TransNumInput from "./TransNumInput/TransNumInput";

const TransNumSearch = ({
  transNumSoql,
  handleInputChange,
  handleErrorDisplay,
  inputUserErrors,
}) => {
  return (
    <fieldset>
      <legend>Search By Transaction Number</legend>
      <div className="form-row">
        <TransNumInput
          value={transNumSoql.transNum}
          onChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
          error={inputUserErrors.transNum}
        />
      </div>
    </fieldset>
  );
};

export default TransNumSearch;
