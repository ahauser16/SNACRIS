// src/components/SearchByUccFedLienFileNumForm/SearchByUccFedLienFileNumForm.jsx
import React, { useState } from 'react';
import { fetchPersonalPropertyMasterData } from '../../api/api';
import { uppercaseSoql } from '../Utils/uppercaseSoql';
import { handleErrorsDuringSubmission } from '../Utils/handleErrorsDuringFormSubmission';
import UccFedLienSearch from '../UccFedLienSearch/UccFedLienSearch';

const SearchByUccFedLienFileNumForm = ({
  setData,
  setError,
  handleTableReset
}) => {

  const [uccFedLienSoql, setUccFedLienSoql] = useState({
    recorded_borough: '',
    file_nbr: '',
  });

  const [inputUserErrors, setInputUserErrors] = useState({
    recorded_borough: null,
    file_nbr: null,
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
    setUccFedLienSoql((prevSoql) => {
      const newSoql = { ...prevSoql, [name]: value };
      return uppercaseSoql(newSoql);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Current inputUserErrors:', inputUserErrors);
    if (handleErrorsDuringSubmission(inputUserErrors, setErrorMessages)) {
      return;
    }

    console.log("Submitting with SoQL:", uccFedLienSoql);

    try {
      const response = await fetchPersonalPropertyMasterData(uccFedLienSoql);
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
    setUccFedLienSoql({
      recorded_borough: '',
      file_nbr: '',
    });
    setInputUserErrors({
      recorded_borough: null,
      file_nbr: null,
    });
    setErrorMessages([]);
    handleTableReset();
  };

  return (
    <form
      className="search-by-ucc-fed-lien-file-num-form"
      onSubmit={handleSubmit}
    >
      <UccFedLienSearch
        uccFedLienSoql={uccFedLienSoql}
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

export default SearchByUccFedLienFileNumForm;