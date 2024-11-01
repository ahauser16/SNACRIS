// src/components/SearchByPartyNameHybridForm/SearchByPartyNameHybridForm.jsx
import React, { useState } from 'react';
import { fetchRealPropertyPartiesData, fetchRealPropertyMasterData } from '../../api/api';
import PartyNameSearchHybrid from '../PartyNameSearch/PartyNameSearchHybrid';
import { uppercaseSoql } from '../Utils/uppercaseSoql';
import { handleErrorsDuringSubmission } from '../Utils/handleErrorsDuringFormSubmission';


const SearchByPartyNameHybridForm = ({
  setData,
  setError,
  handleTableReset,
  limit,
  offset
}) => {
  const [partyNameHybridSoql, setpartyNameHybridSoql] = useState({
    name: '',
    party_type: '',
    document_date: '',
    recorded_borough: '',
    document_class: '',
  });

  const [inputUserErrors, setInputUserErrors] = useState({
    name: null,
    party_type: null,
    document_date: null,
    recorded_borough: null,
    document_class: null,
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
          formGroupElement.classList.add('field-error');
        }
      } else {
        newErrors[name] = null; // Set to null if no error
        if (formGroupElement) {
          formGroupElement.classList.remove('field-error');
        }
      }
      console.log('Updated inputUserErrors:', newErrors);
      return newErrors;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input change - ${name}: ${value}`);
    setpartyNameHybridSoql((prevSoql) => {
      const newSoql = { ...prevSoql, [name]: value };
      return uppercaseSoql(newSoql);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for required fields
    const requiredFields = ['name'];
    let hasError = false;

    requiredFields.forEach((field) => {
      if (!partyNameHybridSoql[field]) {
        console.log("The Name field has been left blank.")
        handleErrorDisplay(field, 'This field is required for form submission');
        hasError = true;
      }
    });

    if (hasError) {
      return;
    }

    console.log('Current inputUserErrors:', inputUserErrors);
    if (handleErrorsDuringSubmission(inputUserErrors, setErrorMessages)) {
      return;
    }

    console.log("Submitting with SoQL:", partyNameHybridSoql);

    try {
      // First API request to fetchRealPropertyPartiesData
      const partiesSoql = {
        name: partyNameHybridSoql.name,
        party_type: partyNameHybridSoql.party_type
      };
      const partiesResponse = await fetchRealPropertyPartiesData(partiesSoql, limit, offset);
      console.log('Parties API response:', partiesResponse);

      // Prepare the second API request
      const masterSoql = {
        recorded_borough: partyNameHybridSoql.recorded_borough,
        document_date: partyNameHybridSoql.document_date,
        doc_type: partyNameHybridSoql.document_class // This will be handled in the API
      };

      // Second API request to fetchRealPropertyMasterData
      const masterResponse = await fetchRealPropertyMasterData(masterSoql, limit, offset);
      console.log('Master API response:', masterResponse);

      // Cross-reference the results based on document_id
      const partiesData = partiesResponse.data;
      const masterData = masterResponse.data;

      const crossReferencedData = partiesData.filter(partyRecord =>
        masterData.some(masterRecord => masterRecord.document_id === partyRecord.document_id)
      );

      setData(crossReferencedData);
      setError(null);
      setErrorMessages([]); // Clear error messages on successful submission
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setData([]);
    }
  };

  const handleFormReset = () => {
    setpartyNameHybridSoql({
      name: '',
      party_type: '',
      document_date: '',
      recorded_borough: '',
      document_class: '',
    });
    setInputUserErrors({
      name: null,
      party_type: null,
      document_date: null,
      recorded_borough: null,
      document_class: null,
    });
    setErrorMessages([]);
    handleTableReset();
  };

  return (
    <form
      className="custom-form--container"
      onSubmit={handleSubmit}
    >
      <PartyNameSearchHybrid
        partyNameHybridSoql={partyNameHybridSoql}
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

export default SearchByPartyNameHybridForm;