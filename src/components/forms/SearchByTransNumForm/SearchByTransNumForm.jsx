// src/components/SearchByTransNumForm/SearchByTransNumForm.jsx
import React, { useState } from "react";
import { uppercaseSoql } from "../../Utils/uppercaseSoql";
import { fetchRealPropertyMasterData } from "../../../api/api";
import { handleErrorsDuringSubmission } from "../../Utils/handleErrorsDuringFormSubmission";
import TransNumSearch from "./TransNumSearch/TransNumSearch";
import FormControls from "../FormControls/FormControls";

const SearchByTransNumForm = ({
  setData,
  setError,
  handleTableReset
}) => {
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
      if (errorMessage) {
        newErrors[name] = errorMessage;
        document.querySelector(`.form-group--${name}`).classList.add('field-error');
      } else {
        newErrors[name] = null; // Set to null if no error
        document.querySelector(`.form-group--${name}`).classList.remove('field-error');
      }
      console.log('Updated inputUserErrors:', newErrors);
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
    const requiredFields = ["transNum"];
    let hasError = false;

    requiredFields.forEach((field) => {
      if (!transNumSoql[field]) {
        console.log("The Transaction Number field has been left blank.");
        handleErrorDisplay(field, "This field is required for form submission");
        hasError = true;
      }
    });

    if (hasError) {
      return;
    }

    console.log("Current inputUserErrors:", inputUserErrors);
    if (handleErrorsDuringSubmission(inputUserErrors, setErrorMessages)) {
      console.log("Form submission halted due to validation errors.");
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
      transNum: '',
    });
    setInputUserErrors({
      transNum: null,
    });
    setErrorMessages([]);
    handleTableReset();
  };

  return (
    <form className="search-by-trans-num-form custom-form--container" onSubmit={handleSubmit}>
      <TransNumSearch
        transNumSoql={transNumSoql}
        handleInputChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        inputUserErrors={inputUserErrors}
      />
      <FormControls handleFormReset={handleFormReset} />
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
