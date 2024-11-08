// src/components/DocTypeSearch/DateSelect/DateInputHybridContainer.jsx
import React from "react";
import DateInputHybridModifier from "./DateInputHybridModifier";
import DateInputHybrid from "./DateInputHybrid";

const DateInputHybridContainer = ({
  partyNameHybridSoql,
  handleInputChange,
  handleErrorDisplay,
  inputUserErrors,
  handleModifierChange,
}) => {
  return (
    <>
      <DateInputHybridModifier
        value={partyNameHybridSoql.document_date_modifier}
        onChange={(e) =>
          handleModifierChange("document_date_modifier", e.target.value)
        }
      />
      <DateInputHybrid
        dateModifier={partyNameHybridSoql.document_date_modifier}
        document_date={partyNameHybridSoql.document_date}
        onChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        inputUserErrors={inputUserErrors}
      />
    </>
  );
};

export default DateInputHybridContainer;
