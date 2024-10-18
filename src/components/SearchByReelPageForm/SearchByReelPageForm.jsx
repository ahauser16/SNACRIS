// src/components/SearchByReelPageForm/SearchByReelPageForm.jsx
import React, { useState } from 'react';
import { fetchRealPropertyMasterData } from '../../api/api';
import { uppercaseSoql } from '../Utils/uppercaseSoql';
import { handleErrorsDuringSubmission } from '../Utils/handleErrorsDuringFormSubmission';
import ReelPageSearch from '../ReelPageSearch/ReelPageSearch';

const SearchByReelPageForm = ({
  setData,
  setError,
  handleTableReset
}) => {

  const [reelPageSoql, setReelPageSoql] = useState({
    recorded_borough: '',
    reel_yr: '',
    reel_nbr: '',
    reel_pg: '',
  });

  const [inputUserErrors, setInputUserErrors] = useState({
    recorded_borough: null,
    reel_yr: null,
    reel_nbr: null,
    reel_pg: null,
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
    setReelPageSoql((prevSoql) => {
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

    console.log("Submitting with SoQL:", reelPageSoql);

    try {
      const response = await fetchRealPropertyMasterData(reelPageSoql);
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
    setReelPageSoql({
      recorded_borough: '',
      reel_yr: '',
      reel_nbr: '',
      reel_pg: '',
    });
    setInputUserErrors({
      recorded_borough: null,
      reel_yr: null,
      reel_nbr: null,
      reel_pg: null,
    });
    setErrorMessages([]);
    handleTableReset();
  };

  return (
    <form
      className="search-by-reel-page-form"
      onSubmit={handleSubmit}
    >
      <ReelPageSearch
        reelPageSoql={reelPageSoql}
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

export default SearchByReelPageForm;
