// src/components/forms/utils/handlePartyNameHybridFormSubmit.js
import { fetchRealPropertyPartiesData, fetchRealPropertyMasterData } from "../../../api/apiHybrid";
import { parseApiResponse } from "./parseApiResponse";
import { analyzeApiResponseObjects } from "./analyzeApiResponseObjects";
import { handleErrorsDuringSubmission } from "../../Utils/handleErrorsDuringFormSubmission";

export const handlePartyNameHybridFormSubmit = async (
  e,
  partyNameHybridFormState,
  setInputUserErrors,
  setErrorMessages,
  setData,
  setError,
  limit,
  offset,
  handleErrorDisplay
) => {
  e.preventDefault();

  console.log("Submitting with SoQL:", partyNameHybridFormState);

  try {
    // First API request to fetchRealPropertyPartiesData
    const partiesSoql = {
      name: partyNameHybridFormState.nameFieldFS.nameBusinessFS,
      party_type: partyNameHybridFormState.party_typeFS
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
      recorded_borough: partyNameHybridFormState.recorded_boroughFS,
      document_date: partyNameHybridFormState.document_dateFS,
      doc_type: partyNameHybridFormState.doc_typeFS // This will be handled in the API
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
    const crossReferencedData = analyzeApiResponseObjects(parsedPartiesResponse.data, parsedMasterResponse.data);
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