// src/components/DocTypeSearch/DateSelect/DateInputHybridContainer.jsx
import React from "react";
import DateInputHybridModifier from "./DateInputHybridModifier";
import DateInputHybrid from "./DateInputHybrid";

const DateInputHybridContainer = ({
  partyNameHybridFormState,
  handleInputChange,
  handleErrorDisplay,
  inputUserErrors,
  handleModifierChange,
}) => {
  return (
    <>
      <DateInputHybridModifier
        value={partyNameHybridFormState.document_date_modifier}
        onChange={(e) =>
          handleModifierChange("document_date_modifier", e.target.value)
        }
      />
      <DateInputHybrid
        dateModifier={partyNameHybridFormState.document_date_modifier}
        document_date={partyNameHybridFormState.document_date}
        onChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        inputUserErrors={inputUserErrors}
      />
    </>
  );
};

export default DateInputHybridContainer;
