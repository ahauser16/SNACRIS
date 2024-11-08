// src/components/SearchByPartyNameHybridForm/FormControls.jsx
import React from "react";

const FormControls = ({ handleFormReset }) => {
  return (
    <fieldset id="form-controls" className="center">
      <div className="form-row form-row--variable">
        <div className="form-group">
          <button type="submit" className="form-button infoBtn">
            Search
          </button>
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={handleFormReset}
            className="form-button warningBtn"
          >
            Reset
          </button>
        </div>
      </div>
    </fieldset>
  );
};

export default FormControls;