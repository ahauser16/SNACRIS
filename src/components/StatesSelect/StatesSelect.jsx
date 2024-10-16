import React from "react";
import statesData from "../StatesCheckboxes/mappedData/States.json";
import "./StatesSelect.css";

const StatesSelect = ({ 
  selectedState, 
  handleStateSelectChange, 
  disabled 
}) => {
  const capitalizeDescription = (description) => {
    return (
      description.charAt(0).toUpperCase() + description.slice(1).toLowerCase()
    );
  };

  return (
    <div className="form-group form-group--width-auto" style={{ '--field-width': '10ch' }}>
      <label htmlFor="states-select">State</label>
      <div className="form-field select">
        <select
          id="states-select"
          name="state"
          value={selectedState === "multiple" ? "" : selectedState || ""}
          onChange={(e) => handleStateSelectChange(e.target.value)}
        >
          {selectedState === "multiple" ? (
            <option value="">You Selected Multiple States</option>
          ) : (
            <option value="">Select</option>
          )}

          {statesData.map((state) => (
            <option key={state.state_code} value={state.state_code}>
              {`${capitalizeDescription(state.description)} (${state.state_code
                })`}
            </option>
          ))}
        </select>
        <span class="focus"></span>
      </div>
    </div>
  );
};

export default StatesSelect;
