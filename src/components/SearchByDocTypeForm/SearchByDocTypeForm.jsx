// src/components/SearchByDocTypeForm/SearchByDocTypeForm.jsx
import React, { useState } from 'react';
import { fetchRealPropertyMasterData } from '../../api/api'; //this is the right function to call but I may need to make additional function calls.  Consider the Document Control Codes API endpoing that includes the `doc__type`, `doc__type_description`, `class_code_description`, `party1_type`, `party2_type` and `party3_type` fields.  The only field that `ACRIS_REAL_PROPERTY_MASTER` dataset has in common with the Document COntrol COdes dataset is the `doc_type` field. 
import { uppercaseSoql } from '../Utils/uppercaseSoql';
import { handleErrorsDuringSubmission } from '../Utils/handleErrorsDuringFormSubmission';
import DocTypeSearch from '../DocTypeSearch/DocTypeSearch';
import './SearchByDocTypeForm.css';

//The "Search By Document Type" feature of ACRIS includes the following fields: `class_code_description`, `doc__type`, `doc__type_description`, `document_date` (inputs include a select input with different ranges of dates as options and a range of dates input consisting of six text input fields) an dthe `recorded_recorded_borough` field.
const SearchByDocTypeForm = ({ setData, setError, handleTableReset }) => {
  const [docTypeSoql, setDocTypeSoql] = useState({
    document_class: '',
    document_type: '',
    document_date: '',
    recorded_borough: '',
  });

  const [inputUserErrors, setInputUserErrors] = useState({
    document_class: null,
    document_type: null,
    document_date: null,
    recorded_borough: null,
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
    setDocTypeSoql((prevSoql) => {
      const newSoql = { ...prevSoql, [name]: value };
      return uppercaseSoql(newSoql);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Current inputUserErrors:', inputUserErrors);
    if (handleErrorsDuringSubmission(inputUserErrors, setErrorMessages)) {
      console.log('Form submission halted due to validation errors.');
      return;
    }

    console.log("Submitting with SoQL:", docTypeSoql);

    try {
      //this is not the right function to call here
      const response = await fetchRealPropertyMasterData(docTypeSoql);
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
    setDocTypeSoql({
      document_class: '',
      document_type: '',
      document_date: '',
      recorded_borough: '',
    });
    setInputUserErrors({
      document_class: null,
      document_type: null,
      document_date: null,
      recorded_borough: null,
    });
    setErrorMessages([]);
    handleTableReset();
  };


  return (
    <form
      className="search-by-doc-type-form"
      onSubmit={handleSubmit}
    >
      <DocTypeSearch
        docTypeSoql={docTypeSoql}
        handleInputChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        inputUserErrors={inputUserErrors}
      />
      <fieldset className="center">
          <div className="form-row form-row--variable">
            <div className="form-group">
              <button
                type="submit"
                className="form-button infoBtn"
              >
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
        <div className="flex-container">
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

export default SearchByDocTypeForm;