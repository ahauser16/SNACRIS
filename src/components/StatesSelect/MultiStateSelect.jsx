import React from "react";
import statesData from "../StatesCheckboxes/mappedData/States.json";
import "./StatesSelect.css";

const MultiStateSelect = ({ selectedState, handleStateSelectChange, disabled }) => {
  const capitalizeDescription = (description) => {
    return (
      description.charAt(0).toUpperCase() + description.slice(1).toLowerCase()
    );
  };

  return (
    <div className="form-group">
      <label htmlFor="multi-states-select">Multiple Select</label>
      {/* this `div` is here due to the instructions o fthe moderncss.dev tutorial */}
      <div class="select select--multiple">
        <select
          id="multi-states-select"
          name="state"
          value={selectedState === "multiple" ? "" : selectedState || ""}
          onChange={(e) => handleStateSelectChange(e.target.value)}
          disabled={disabled} // Disable if the user selects multiple states
          className="form-field"
          multiple
        >
          {/* Show special text for multiple selected states */}
          {/* {selectedState === "multiple" ? (
            <option value="">You Selected Multiple States</option>
          ) : (
            <option value="">Select a State</option>
          )} */}

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

export default MultiStateSelect;
