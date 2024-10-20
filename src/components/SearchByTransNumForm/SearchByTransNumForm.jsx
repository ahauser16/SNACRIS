// src/components/SearchByTransNumForm/SearchByTransNumForm.jsx
import React, { useState } from "react";
import { uppercaseSoql } from "../Utils/uppercaseSoql";
import { fetchRealPropertyMasterData } from "../../api/api";
import { handleErrorsDuringSubmission } from "../Utils/handleErrorsDuringFormSubmission";
import TransNumSearch from "../TransNumSearch/TransNumSearch";

const SearchByTransNumForm = ({ setData, setError, handleTableReset }) => {
  const [transNumSoql, setTransNumSoql] = useState({
    transNum: "",
  });

  const [inputUserErrors, setInputUserErrors] = useState({
    transNum: null,
  });

  const [errorMessages, setErrorMessages] = useState([]);

  const handleErrorDisplay = (name, errorMessage) => {
    console.log(`Error in ${name}: ${errorMessage}`);

    setInputUserErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      const formGroupElement = document.querySelector(`.form-group--${name}`);

      if (errorMessage) {
        newErrors[name] = errorMessage;
        if (formGroupElement) {
          formGroupElement.classList.add("field-error");
        }
      } else {
        newErrors[name] = null; // Set to null if no error
        if (formGroupElement) {
          formGroupElement.classList.remove("field-error");
        }
      }
      console.log("Updated inputUserErrors:", newErrors);
      return newErrors;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input change - ${name}: ${value}`);
    setTransNumSoql((prevSoql) => {
      const newSoql = { ...prevSoql, [name]: value };
      return uppercaseSoql(newSoql);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for required fields
    const requiredFields = ["name"];
    let hasError = false;

    requiredFields.forEach((field) => {
      if (!transNumSoql[field]) {
        console.log("The Name field has been left blank.");
        handleErrorDisplay(field, "This field is required for form submission");
        hasError = true;
      }
    });

    if (hasError) {
      return;
    }

    console.log("Current inputUserErrors:", inputUserErrors);
    if (handleErrorsDuringSubmission(inputUserErrors, setErrorMessages)) {
      return;
    }

    console.log("Submitting with SoQL:", transNumSoql);

    try {
      const response = await fetchRealPropertyMasterData(transNumSoql);
      console.log("API response:", response);
      setData(response);
      setError(null);
      setErrorMessages([]); // Clear error messages on successful submission
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setData([]);
    }
  };

  const handleFormReset = () => {
    setTransNumSoql({
      transNum: "",
    });
    setInputUserErrors({
      transNum: null,
    });
    setErrorMessages([]);
    handleTableReset();
  };

  return (
    <form className="search-by-trans-num-form" onSubmit={handleSubmit}>
      <TransNumSearch
        transNumSoql={transNumSoql}
        handleInputChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        inputUserErrors={inputUserErrors}
      />
      <fieldset className="center">
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
      {errorMessages.length > 0 && (
        <div className="form-row">
          <span className="error-msg-display">
            <ul>
              {errorMessages.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </span>
        </div>
      )}
    </form>
  );
};

export default SearchByTransNumForm;
