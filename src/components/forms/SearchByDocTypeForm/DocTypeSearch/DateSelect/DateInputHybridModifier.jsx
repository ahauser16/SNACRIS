// src/components/DocTypeSearch/DateSelect/DateInputHybridModifier.jsx
import React from "react";

const DateInputHybridModifier = ({
  documentDateModifierFS,
  documentDateModifierES,
  handleModifierChange,
}) => {

  const handleChange = (e) => {
    handleModifierChange("documentDateModifierFS", e.target.value);
  };

  return (
    <div
      className="form-group form-group--width-auto"
      style={{ '--field-width': '20ch' }}
    >
      <label htmlFor="date-select-modifier">
        <span>Select a Date Search Type</span>
      </label>
      <div className="form-field select">
        <select
          id="date-select-modifier"
          name="date-select-modifier"
          value={documentDateModifierFS}
          onChange={handleChange}
          aria-describedby="date-select-modifier-description"
        >
          <option value="dateRangeSelect">Select Date Range</option>
          <option value="exactDate">Exact Date</option>
          <option value="dateRangeCustom">Custom Date Range</option>
        </select>
        <span class="focus"></span>
      </div>
      <span id="date-select-modifier-description" className="field-description">
        {documentDateModifierES}
      </span>
    </div>
  );
};

export default DateInputHybridModifier;
