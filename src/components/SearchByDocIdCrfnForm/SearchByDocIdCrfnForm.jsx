// src/components/SearchByDocId_CRFNform/SearchByDocIdCrfnForm.jsx
import React, { useState } from "react";
import { uppercaseSoql } from "../Utils/uppercaseSoql";
import { handleErrorsDuringSubmission } from "../Utils/handleErrorsDuringFormSubmission";
import { fetchRealPropertyPartiesData } from "../../api/api";
import DocIdCrfnSearch from "../DocIdCrfnSearch/DocIdCrfnSearch";

const SearchByDocIdCrfnForm = ({ setData, setError, handleTableReset }) => {
  const [docIdCrfnSoql, setDocIdCrfnSoql] = useState({
    docId: "",
    crfn: "",
  });

  const [inputUserErrors, setInputUserErrors] = useState({
    docId: null,
    crfn: null,
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
    setDocIdCrfnSoql((prevSoql) => {
      const newSoql = { ...prevSoql, [name]: value };
      return uppercaseSoql(newSoql);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Block submission if both or neither fields are filled
    if (!docIdCrfnSoql.docId && !docIdCrfnSoql.crfn) {
      setErrorMessages(["You must either enter a Document ID or CRFN"]);
      return;
    } else if (docIdCrfnSoql.docId && docIdCrfnSoql.crfn) {
      setErrorMessages([
        "You must enter either a Document ID or CRFN but not both",
      ]);
      return;
    }

    console.log("Current inputUserErrors:", inputUserErrors);
    if (handleErrorsDuringSubmission(inputUserErrors, setErrorMessages)) {
      return;
    }

    console.log("Submitting with SoQL:", docIdCrfnSoql);

    try {
      const response = await fetchRealPropertyPartiesData(docIdCrfnSoql);
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
    setDocIdCrfnSoql({
      docId: "",
      crfn: "",
    });
    setInputUserErrors({
      docId: null,
      crfn: null,
    });
    setErrorMessages([]);
    handleTableReset();
  };

  return (
    <form className="search-by-doc-id-crfn-form" onSubmit={handleSubmit}>
      <DocIdCrfnSearch
        docIdCrfnSoql={docIdCrfnSoql}
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

export default SearchByDocIdCrfnForm;
