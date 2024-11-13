// src/components/forms/utils/analyzeApiResponseObjects.js

export function analyzeApiResponseObjects(partiesData, masterData) {
  // Step 1: Create a Set of document_ids from masterData
  const masterDocumentIds = new Set(masterData.map(record => record.document_id));

  // Check if the specific document_id "2023122700468002" is present in either dataset. Test search is for the name "NEWREZ", document_date of "the last year", party_type of '1', recorded_borough of "Kings", and class type of "DEEDS AND OTHER CONVEYANCES".
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
}