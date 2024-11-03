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
    doc_type: [],
  });

  const [inputUserErrors, setInputUserErrors] = useState({
    name: null,
    party_type: null,
    document_date: null,
    recorded_borough: null,
    doc_type: null,
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
      const newSoql = { ...prevSoql, [name]: Array.isArray(value) ? value : value.split(',') };
      return uppercaseSoql(newSoql);
    });
  };

  //REFACTOR IN PROGRESS BELOW 
  function parseApiResponse(jsonResponse) {
    try {
      // Parse JSON if it's in string format
      const parsedData = typeof jsonResponse === 'string' ? JSON.parse(jsonResponse) : jsonResponse;

      // Check for the expected structure: { response: { data: [...] } }
      if (!parsedData.response || !Array.isArray(parsedData.response.data)) {
        throw new Error("Response format is not { response: { data: [...] } }");
      }

      // Parse `data` array fully
      const fullyParsedData = parsedData.response.data.map(record => parseNested(record));

      // Return all response properties, with `data` replaced by the parsed array
      return {
        ...parsedData.response,
        data: fullyParsedData
      };
    } catch (error) {
      console.error("Failed to parse response:", error);
      return null;
    }

    // Helper function to parse nested structures
    function parseNested(obj) {
      if (Array.isArray(obj)) {
        return obj.map(item => parseNested(item));
      } else if (obj && typeof obj === 'object') {
        return Object.fromEntries(
          Object.entries(obj).map(([key, value]) => [key, parseNested(value)])
        );
      }
      return obj;
    }
  }
  //REFACTOR IN PROGRESS ABOVE

  const analyzeBothApiResponseObjects = (partiesData, masterData) => {
    // Step 1: Create a Set of document_ids from masterData
    const masterDocumentIds = new Set(masterData.map(record => record.document_id));
    
    // Check if the specific document_id "2023122700468002" is present in either dataset.  Test search is for the name "NEWREZ", document_date of "the last year", party_type of '1', recorded_borough of "Kings", and class type of "DEEDS AND OTHER CONVEYANCES".
    const testDocumentId = "2023122700468002";
    const testInParties = partiesData.some(record => record.document_id === testDocumentId);
    const testInMaster = masterData.some(record => record.document_id === testDocumentId);
  
    if (testInParties) {
      console.log(`Test document_id ${testDocumentId} found in partiesData`);
    } else {
      console.log(`Test document_id ${testDocumentId} NOT found in partiesData`);
    }
  
    if (testInMaster) {
      console.log(`Test document_id ${testDocumentId} found in masterData`);
    } else {
      console.log(`Test document_id ${testDocumentId} NOT found in masterData`);
    }
  
    // Step 2: Find matching document_ids in partiesData and combine records
    const crossReferencedData = partiesData
      .filter(partyRecord => masterDocumentIds.has(partyRecord.document_id))
      .map(partyRecord => {
        // Find the corresponding record in masterData
        const matchingMasterRecord = masterData.find(
          masterRecord => masterRecord.document_id === partyRecord.document_id
        );
  
        // Log matching document_ids as they are found
        console.log(`Match found for document_id: ${partyRecord.document_id}`);
  
        // Combine both records into a single object
        return {
          ...partyRecord,
          ...matchingMasterRecord
        };
      });
  
    // Log if no data matches the criteria
    if (crossReferencedData.length === 0) {
      console.log("No data matches your criteria");
    } else {
      console.log("Cross-referenced data found:", crossReferencedData);
    }
  
    return crossReferencedData;
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

      const parsedPartiesResponse = parseApiResponse(partiesResponse);

      // Access `data` and other properties directly
      if (parsedPartiesResponse) {
        // Accessing `document_id` of the first item in `data`
        console.log("parsedPartiesResponse contains a record with document id: ", parsedPartiesResponse.data[0].document_id);
        // Accessing `status` 
        console.log("parsedPartiesResponse has a 'status' of:", parsedPartiesResponse.status);
        // Accessing `statusText`
        console.log("parsedPartiesResponse has a 'responseURL' of:", parsedPartiesResponse.request.responseURL);
        // Accessing `document_id` of the first item in `data`
        console.log("parsedPartiesResponse contains data: ", parsedPartiesResponse.data);
      } else {
        console.error("No data returned from parseApiResponse");
      }


      // Prepare the second API request
      const masterSoql = {
        recorded_borough: partyNameHybridSoql.recorded_borough,
        document_date: partyNameHybridSoql.document_date,
        doc_type: partyNameHybridSoql.doc_type // This will be handled in the API
      };

      // Second API request to fetchRealPropertyMasterData
      const masterResponse = await fetchRealPropertyMasterData(masterSoql, limit, offset);
      console.log('Master API response:', masterResponse);

      const parsedMasterResponse = parseApiResponse(masterResponse);

      // Access `data` and other properties directly
      if (parsedMasterResponse) {
        // Accessing `document_id` of the first item in `data`
        console.log("parsedMasterResponse contains a record with document id: ", parsedMasterResponse.data[0].document_id);
        // Accessing `status` 
        console.log("parsedMasterResponse has a 'status' of:", parsedMasterResponse.status);
        // Accessing `statusText`
        console.log("parsedMasterResponse has a 'responseURL' of:", parsedMasterResponse.request.responseURL);
        // Accessing `document_id` of the first item in `data`
        console.log("parsedMasterResponse contains data: ", parsedMasterResponse.data);
      } else {
        console.error("No data returned from parseApiResponse");
      }

      // Cross-reference the results based on document_id
      const crossReferencedData = analyzeBothApiResponseObjects(parsedPartiesResponse.data, parsedMasterResponse.data);
      console.log('Cross Referenced Data:', crossReferencedData);

      setData({
        crossReferencedData,
        partiesResponse,
        masterResponse
      });
      setError(null);
      setErrorMessages([]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setData({
        crossReferencedData: [],
        partiesResponse: null,
        masterResponse: null
      });
    }
  };

  const handleFormReset = () => {
    setpartyNameHybridSoql({
      name: '',
      party_type: '',
      document_date: '',
      recorded_borough: '',
      doc_type: [],
    });
    setInputUserErrors({
      name: null,
      party_type: null,
      document_date: null,
      recorded_borough: null,
      doc_type: null,
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