import React from "react";
import statesData from "../StatesCheckboxes/mappedData/States.json"; 

const StatesSelect = ({ selectedState, handleStateSelectChange, disabled }) => {
  const capitalizeDescription = (description) => {
    return (
      description.charAt(0).toUpperCase() + description.slice(1).toLowerCase()
    );
  };

  return (
    <div className="states-select-container">
      <label htmlFor="states-select">Select a State:</label>
      <select
        id="states-select"
        name="state"
        value={selectedState === "multiple" ? "" : selectedState || ""}
        onChange={(e) => handleStateSelectChange(e.target.value)} // Pass the selected value directly
        disabled={disabled} // Disable if the user selects multiple states
      >
        {/* Show special text for multiple selected states */}
        {selectedState === "multiple" ? (
          <option value="">You Selected Multiple States</option>
        ) : (
          <option value="">Select a State</option>
        )}

        {statesData.map((state) => (
          <option key={state.state_code} value={state.state_code}>
            {`${capitalizeDescription(state.description)} (${
              state.state_code
            })`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatesSelect;
