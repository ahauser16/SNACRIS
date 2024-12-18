// src/components/DocTypeSearch/DateSelect/DateInputHybridContainer.jsx
import React from "react";
import DateInputHybridModifier from "../SearchModifier/DateInputHybridModifier";
import DateInputHybrid from "../InputComponents/DateInputHybrid";

const DateInputHybridContainer = ({
  documentDateFieldFS,
  documentDateFieldES,
  handleInputChange,
  handleErrorDisplay,
  handleModifierChange,
}) => {
  return (
    <fieldset className="drop-shadow">
      <legend>Document Date Search</legend>
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
    </fieldset>
  );
};

export default DateInputHybridContainer;

