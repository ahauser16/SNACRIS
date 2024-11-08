// src/components/DocTypeSearch/DateSelect/DateInputHybridModifier.jsx
import React from "react";

const DateInputHybridModifier = ({ value, onChange }) => {
  return (
    <fieldset className="form-group form-group--modifier">
      <legend htmlFor="document_date_modifier">Select Date Modifier</legend>
      <label htmlFor="date_modifier_rangeSelect" className="form-control radio">
        <span className="form-control__input radio__input">
          <input
            type="radio"
            id="date_modifier_rangeSelect"
            name="document_date_modifier"
            value="rangeSelect"
            checked={value === "rangeSelect"}
            onChange={onChange}
          />
          <span className="input__control"></span>
        </span>
        <span className="text-wrapper">Date Range Select</span>
      </label>

      <label htmlFor="date_modifier_exact" className="form-control radio">
        <span className="form-control__input radio__input">
          <input
            type="radio"
            id="date_modifier_exact"
            name="document_date_modifier"
            value="exact"
            checked={value === "exact"}
            onChange={onChange}
          />
          <span className="input__control"></span>
        </span>
        <span className="text-wrapper">Exact Date</span>
      </label>

      <label htmlFor="date_modifier_rangeInput" className="form-control radio">
        <span className="form-control__input radio__input">
          <input
            id="date_modifier_rangeInput"
            type="radio"
            name="document_date_modifier"
            value="rangeInput"
            checked={value === "rangeInput"}
            onChange={onChange}
          />
          <span className="input__control"></span>
        </span>
        <span className="text-wrapper">Date Range Input</span>
      </label>
    </fieldset>
  );
};

export default DateInputHybridModifier;
