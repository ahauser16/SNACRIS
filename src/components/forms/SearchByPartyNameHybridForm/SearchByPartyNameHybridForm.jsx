// src/components/SearchByPartyNameHybridForm/SearchByPartyNameHybridForm.jsx
import React, { useState } from "react";
import {
  fetchRealPropertyPartiesData,
  fetchRealPropertyMasterData,
} from "../../../api/apiHybrid";
import PartyNameSearchHybrid from "./PartyNameSearchHybrid";
// import { uppercaseSoql } from "../Utils/uppercaseSoql";
import { handleErrorsDuringSubmission } from "../../Utils/handleErrorsDuringFormSubmission";
import FormControls from "../FormControls/FormControls";

const SearchByPartyNameHybridForm = ({
  setData,
  setError,
  handleTableReset,
  limit,
  offset,
}) => {
  const [partyNameHybridSoql, setpartyNameHybridSoql] = useState({
    name: "",
    nameParts: {
      first: "",
      last: "",
      middle: "",
    },
    name_modifier: "contains", // New state variable for search type
    party_type: "",
    document_date: "",
    document_date_modifier: "rangeSelect", // New field for date modifier type
    recorded_borough: "",
    doc_type: [],
  });

  const [inputUserErrors, setInputUserErrors] = useState({
    name: null,
    nameParts: {
      first: null,
      last: null,
      middle: null,
    },
    name_modifier: null,
    party_type: null,
    document_date: null,
    document_date_modifier: null,
    recorded_borough: null,
    doc_type: null,
  });

  const [errorMessages, setErrorMessages] = useState([]);

  const handleErrorDisplay = (fieldName, errorMessage) => {
    setInputUserErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (fieldName.startsWith("nameParts.")) {
        const part = fieldName.split(".")[1];
        newErrors.nameParts = {
          ...newErrors.nameParts,
          [part]: errorMessage,
        };
      } else {
        newErrors[fieldName] = errorMessage;
      }

      const className = fieldName.startsWith("nameParts")
        ? `.form-group--${fieldName.replace(".", "-")}`
        : `.form-group--${fieldName}`;

      const formGroupElement = document.querySelector(className);
      if (formGroupElement) {
        formGroupElement.classList.toggle("field-error", !!errorMessage);
      }

      return newErrors;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setpartyNameHybridSoql((prevSoql) => {
      const newSoql = { ...prevSoql };

      if (
        name === "first-name" ||
        name === "last-name" ||
        name === "middle-name"
      ) {
        newSoql.nameParts[name.split("-")[0]] = value;
      } else {
        newSoql[name] = value;
      }

      // return uppercaseSoql(newSoql);
      return newSoql;
    });
  };

  // Updated handleModifierChange to handle both name_modifier and document_date_modifier
  const handleModifierChange = (field, value) => {
    setpartyNameHybridSoql((prevSoql) => ({
      ...prevSoql,
      [field]: value,
    }));
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
    const requiredFields = ["name", "nameParts.first", "nameParts.last"];
    let hasError = false;

    requiredFields.forEach((field) => {
      const value = field.includes(".")
        ? partyNameHybridSoql[field.split(".")[0]][field.split(".")[1]]
        : partyNameHybridSoql[field];
      if (!value) {
        handleErrorDisplay(field, "This field is required for form submission");
        hasError = true;
      }
    });

    if (hasError) {
      return;
    }

    console.log('Current inputUserErrors:', inputUserErrors);
    if (
      hasError ||
      handleErrorsDuringSubmission(inputUserErrors, setErrorMessages)
    )
      return;

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
      name: "",
      nameParts: {
        first: "",
        last: "",
        middle: "",
      },
      name_modifier: "contains",
      party_type: "",
      document_date: "",
      document_date_modifier: "rangeSelect",
      recorded_borough: "",
      doc_type: [],
    });
    setInputUserErrors({
      name: null,
      nameParts: {
        first: null,
        last: null,
        middle: null,
      },
      name_modifier: null,
      party_type: null,
      document_date: null,
      document_date_modifier: null,
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
        handleModifierChange={handleModifierChange}
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

export default SearchByPartyNameHybridForm;