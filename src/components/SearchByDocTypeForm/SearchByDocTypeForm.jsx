// src/components/SearchByDocTypeForm/SearchByDocTypeForm.jsx
import React, { useState } from 'react';
import { fetchRealPropertyMasterData } from '../../api/api'; //this is not the right function to call here
import { uppercaseSoql } from '../Utils/uppercaseSoql';
import DocTypeSearch from '../DocTypeSearch/DocTypeSearch';
import './SearchByDocTypeForm.css';


const SearchByDocTypeForm = ({ setData, setError, handleTableReset }) => {
  const [soql, setSoql] = useState({
    document_class: '',
    document_type: '',
    document_date: '',
    borough: '',
  });

  const [inputUserErrors, setInputUserErrors] = useState({
    document_class: '',
    document_type: '',
    document_date: '',
    borough: '',
  });

  const [errorMessages, setErrorMessages] = useState([]);

  const handleErrorDisplay = (name, errorMessage) => {
    setInputUserErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSoql((prevSoql) => {
      const newSoql = { ...prevSoql, [name]: value };
      return uppercaseSoql(newSoql);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors in inputUserErrors
    const errors = Object.values(inputUserErrors).filter(error => error !== '');
    if (errors.length > 0) {
      setErrorMessages(errors);
      return;
    }

    console.log("Submitting with SoQL:", soql);

    try {
      //this is not the right function to call here
      const response = await fetchRealPropertyLegalsData(soql);
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
    setSoql({
      document_class: '',
      document_type: '',
      document_date: '',
      borough: '',
    });
    setInputUserErrors({
      document_class: '',
      document_type: '',
      document_date: '',
      borough: '',
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
        soql={soql}
        handleInputChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        inputUserErrors={inputUserErrors}
      />
      <div className="flex-container">
        <button type="submit">Search</button>
        <button type="button" onClick={handleFormReset}>Reset</button>
      </div>
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