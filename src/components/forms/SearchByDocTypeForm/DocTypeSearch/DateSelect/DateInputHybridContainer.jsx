// src/components/DocTypeSearch/DateSelect/DateInputHybridContainer.jsx
import React from "react";
import DateInputHybridModifier from "./DateInputHybridModifier";
import DateInputHybrid from "./DateInputHybrid";

const DateInputHybridContainer = ({
  documentDateFieldFS,
  documentDateFieldES,
  handleInputChange,
  handleErrorDisplay,
  handleModifierChange,
}) => {
  return (
    <>
      <DateInputHybridModifier
        documentDateModifierFS={documentDateFieldFS.documentDateModifierFS}
        documentDateModifierES={documentDateFieldES.documentDateModifierES}
        handleModifierChange={handleModifierChange}
      />
      <DateInputHybrid
        documentDateFieldFS={documentDateFieldFS}
        documentDateFieldES={documentDateFieldES}
        handleInputChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
      />
    </>
  );
};

export default DateInputHybridContainer;

