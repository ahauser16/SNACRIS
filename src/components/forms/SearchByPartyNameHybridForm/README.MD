# NOTES

## refactor in progress as of 11/3/24

refactor to parse and cross reference two API response objects

### version 1.0:

```javascript
function parseApiResponse(jsonResponse, responseName) {
    try {
        // Parse JSON if it's in string format
        const parsedData = typeof jsonResponse === 'string' ? JSON.parse(jsonResponse) : jsonResponse;

        // Define the dynamic property name based on `responseName`
        const output = {
            [responseName]: parsedData.response
        };

        console.log('Parsed API Response:', output);
        return output;
    } catch (error) {
        console.error("Failed to parse JSON response:", error);
        return null;
    }
}

// Usage examples
const partiesResponse = /* the parties JSON object */;
const masterResponse = /* the master JSON object */;

// Call `parseApiResponse` with appropriate response names
const parsedPartiesResponse = parseApiResponse(partiesResponse, 'parsedPartiesResponse');
const parsedMasterResponse = parseApiResponse(masterResponse, 'parsedMasterResponse');

console.log(parsedPartiesResponse); // { parsedPartiesResponse: { /* parsed response object */ } }
console.log(parsedMasterResponse);  // { parsedMasterResponse: { /* parsed response object */ } }
```

### version 1.1:

In this case, the function parseApiResponse is working as intended because it returned parsedPartiesResponse containing only the response object from your JSON, not the entire JSON structure.

However, since the content of parsedPartiesResponse looks the same as the original JSON response under the response key, you may be expecting a transformation of some kind (like renaming or simplifying the keys), which the current function does not perform. The function as written only isolates the response section of the original JSON and returns it, without modifying the structure of response itself.

#### Current Behavior of parseApiResponse
Here’s a recap of what the function currently does:

1. It parses the `jsonResponse`.

2. It accesses the `response` property of `jsonResponse`.

3. It creates an object with a dynamic key name (like `parsedPartiesResponse`) pointing to `parsedData.response`.

```javascript
const output = {
    [responseName]: parsedData.response
};
```

The function does not alter the keys inside the `response` data structure. It simply isolates `response` from the larger JSON and assigns it to a dynamically named key.


```javascript
function parseApiResponse(jsonResponse, responseName) {
    try {
        // Parse JSON if it's in string format
        const parsedData = typeof jsonResponse === 'string' ? JSON.parse(jsonResponse) : jsonResponse;

        // Create an object with a dynamic property name based on `responseName`
        const output = {
            [responseName]: parsedData.response
        };

        // Customized console log with the response name
        console.log(`${responseName}:`, output[responseName]);
        return output;
    } catch (error) {
        // Customized error log with the response name
        console.error(`Failed to parse ${responseName.replace('parsed', '').toLowerCase()}:`, error);
        return null;
    }
}

// Example usage
const partiesResponse = /* the parties JSON object */;
const masterResponse = /* the master JSON object */;

// Calling parseApiResponse with customized response names
const parsedPartiesResponse = parseApiResponse(partiesResponse, 'parsedPartiesResponse');
const parsedMasterResponse = parseApiResponse(masterResponse, 'parsedMasterResponse');

console.log(parsedPartiesResponse); // { parsedPartiesResponse: { /* parsed response object */ } }
console.log(parsedMasterResponse);  // { parsedMasterResponse: { /* parsed response object */ } }
```

### version 1.3:

To transform the entire JSON object into a valid JavaScript object with valid key-value pairs, including nested structures, you can use a recursive parsing function within `parseApiResponse`. This function will traverse the entire object, ensuring that every nested key-value pair is transformed into a valid JavaScript format.

Here’s a refactored version of `parseApiResponse` that:

1. Extracts the `response` object from the original JSON.
2. Recursively parses all nested objects and arrays, creating a fully JavaScript-compatible object.

```javascript
function parseApiResponse(jsonResponse, responseName) {
    try {
        // Parse JSON if it's in string format
        const parsedData = typeof jsonResponse === 'string' ? JSON.parse(jsonResponse) : jsonResponse;

        // Recursive function to parse nested structures
        const parseNested = (obj) => {
            if (Array.isArray(obj)) {
                // Parse each item in an array
                return obj.map(item => parseNested(item));
            } else if (obj && typeof obj === 'object') {
                // Parse each key-value in an object
                return Object.fromEntries(
                    Object.entries(obj).map(([key, value]) => [key, parseNested(value)])
                );
            }
            // Return value directly if it's not an object or array
            return obj;
        };

        // Extract and parse the `response` object fully
        const fullyParsedResponse = parseNested(parsedData.response);

        // Create a dynamically named object with the parsed response
        const output = {
            [responseName]: fullyParsedResponse
        };

        // Customized console log with the response name
        console.log(`${responseName}:`, output[responseName]);
        return output;
    } catch (error) {
        // Customized error log with the response name
        console.error(`Failed to parse ${responseName.replace('parsed', '').toLowerCase()}:`, error);
        return null;
    }
}

// Example usage with nested JSON
const partiesResponse = /* your JSON response here */;
const parsedPartiesResponse = parseApiResponse(partiesResponse, "parsedPartiesResponse");

console.log(parsedPartiesResponse);

```

#### version 1.4

This refactored function will check if `parsedData.response` exists; if not, it will fallback to parsing the entire object directly.

```javascript
function parseApiResponse(jsonResponse, responseName) {
    try {
        // Parse JSON if it's in string format
        const parsedData = typeof jsonResponse === 'string' ? JSON.parse(jsonResponse) : jsonResponse;

        // Determine if the response has a top-level `response` key or if we are directly dealing with data
        const dataToParse = parsedData.response || parsedData;

        // Recursive function to parse nested structures
        const parseNested = (obj) => {
            if (Array.isArray(obj)) {
                // Parse each item in an array
                return obj.map(item => parseNested(item));
            } else if (obj && typeof obj === 'object') {
                // Parse each key-value in an object
                return Object.fromEntries(
                    Object.entries(obj).map(([key, value]) => [key, parseNested(value)])
                );
            }
            // Return value directly if it's not an object or array
            return obj;
        };

        // Fully parse the determined `dataToParse` structure
        const fullyParsedResponse = parseNested(dataToParse);

        // Create a dynamically named object with the parsed response
        const output = {
            [responseName]: fullyParsedResponse
        };

        // Customized console log with the response name
        console.log(`${responseName}:`, output[responseName]);
        return output;
    } catch (error) {
        // Customized error log with the response name
        console.error(`Failed to parse ${responseName.replace('parsed', '').toLowerCase()}:`, error);
        return null;
    }
}
```

**Explanation of Changes**
1. Conditionally Check for `response` Key:
   - `const dataToParse = parsedData.response || parsedData;` will check if `parsedData` has a `response` key. If it does, `dataToParse` is set to `parsedData.response`. Otherwise, it uses `parsedData` directly.
2. Parse Nested Structure:
   - `dataToParse` is then passed through `parseNested`, so whether your data is wrapped in a `response` key or provided directly, the function will recursively parse it into a valid JavaScript object.
3. Console Logging:
   - The logging still uses `responseName`, so it will output the desired `parsedPartiesResponse` or `parsedMasterResponse` naming convention.

**Applying parseApiResponse**
In your `handleSubmit` function, this change should ensure that `parseApiResponse` works as expected for both `fetchRealPropertyPartiesData` and `fetchRealPropertyMasterData` responses.

#### version 1.5

To simplify, let’s remove the dynamic naming and make `parseApiResponse` return only the parsed `data` array directly. This way, you can assign the result of `parseApiResponse` to a variable, like parsedPartiesResponse, without additional wrapping or naming.

**Simplified `parseApiResponse` Function**
Here’s the refactored function:

```javascript
function parseApiResponse(jsonResponse) {
    try {
        // Parse JSON if it's in string format
        const parsedData = typeof jsonResponse === 'string' ? JSON.parse(jsonResponse) : jsonResponse;

        // Check for the expected structure: { response: { data: [...] } }
        if (!parsedData.response || !Array.isArray(parsedData.response.data)) {
            throw new Error("Response format is not { response: { data: [...] } }");
        }

        // Parse each item in the data array recursively to ensure all nested structures are processed
        const fullyParsedData = parsedData.response.data.map(record => parseNested(record));

        console.log("Parsed Data:", fullyParsedData);
        return fullyParsedData;
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

```

To include all properties from the `response` object (like `status`, `statusText`, `headers`, etc.) while parsing `data` into a JavaScript-compatible format, let’s modify `parseApiResponse` so it retains `data` in its parsed form and preserves all other `response` properties.

**Updated `parseApiResponse` Function**

This version will parse `data` as before but also return a single object that includes all other properties from `response`.

```javascript

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
```

**How to Use the Updated Function**

When using the function, you’ll get a single object with all `response` properties, where `data` has been fully parsed.

```javascript
// Using the function in your component
const parsedPartiesResponse = parseApiResponse(partiesResponse);

// Access `data` and other properties directly
if (parsedPartiesResponse) {
    console.log(parsedPartiesResponse.data[0].document_id); // Accessing `document_id` of the first item in `data`
    console.log(parsedPartiesResponse.status);              // Accessing `status`
    console.log(parsedPartiesResponse.statusText);          // Accessing `statusText`
} else {
    console.error("No data returned from parseApiResponse");
}

```

**Explanation**
- `data`: This array is parsed to ensure all nested structures are JavaScript-friendly.
- Other properties (e.g., `status`, `headers`): These remain untouched, providing you full access to the `response` metadata.

#### version 1.6

From your description and the provided code, here are several points to investigate regarding why your feature might not be working as expected:

1. Criteria Alignment in `analyzeBothApiResponseObjects`
The `analyzeBothApiResponseObjects` function currently checks for matching document_ids between parsedPartiesResponse.data and parsedMasterResponse.data records. This is correct. However, to align with ACRIS's functionality, you need to verify that party_type, doc_type, document_date, and recorded_borough criteria are also met. Currently, these fields are only applied during the initial API request; cross-referencing them in `analyzeBothApiResponseObjects` will help to filter the results precisely.

2. Refining the `analyzeBothApiResponseObjects` to Consider All Search Criteria
In addition to document_id, you can incorporate additional filtering based on the fields in parsedPartiesResponse and parsedMasterResponse. Here’s a refined version of `analyzeBothApiResponseObjects` that implements this logic.

3. Refactored `analyzeBothApiResponseObjects`
This function now filters based on both matching document_ids and additional conditions on party_type, doc_type, document_date, and recorded_borough.

```javascript
const analyzeBothApiResponseObjects = (partiesData, masterData, searchCriteria) => {
  const { party_type, doc_type, document_date, recorded_borough } = searchCriteria;

  // Create a Set of document_ids from masterData where `doc_type`, `document_date`, and `recorded_borough` match
  const masterDocumentIds = new Set(
    masterData
      .filter(record => 
        (!doc_type || doc_type.includes(record.doc_type)) &&
        (!document_date || isDateInRange(record.document_date, document_date)) &&
        (!recorded_borough || record.recorded_borough === recorded_borough)
      )
      .map(record => record.document_id)
  );

  // Find matching document_ids in partiesData, where `party_type` matches, and combine records
  const crossReferencedData = partiesData
    .filter(partyRecord => 
      masterDocumentIds.has(partyRecord.document_id) &&
      (!party_type || partyRecord.party_type === party_type)
    )
    .map(partyRecord => {
      // Find the corresponding record in masterData
      const matchingMasterRecord = masterData.find(
        masterRecord => masterRecord.document_id === partyRecord.document_id
      );

      // Combine both records into a single object
      return {
        ...partyRecord,
        ...matchingMasterRecord
      };
    });

  if (crossReferencedData.length === 0) {
    console.log("No data matches your criteria");
  }
  
  console.log("cross referenced data:", crossReferencedData);
  return crossReferencedData;
};

// Helper function to check if a date is within a range
const isDateInRange = (date, range) => {
  const [start, end] = range.map(d => new Date(d));
  const docDate = new Date(date);
  return docDate >= start && docDate <= end;
};

```

4. Explanation of Changes
Additional Filtering: The filtering in masterData now checks for doc_type, document_date range, and recorded_borough.
doc_type matches if the document’s doc_type exists in the list of doc_type values from the search criteria.
document_date matches if it falls within the range specified in document_date. The isDateInRange helper function handles this.
recorded_borough checks that the recorded_borough in masterData matches the search criteria.
Cross-Referencing by party_type: After matching document_ids, partiesData also filters based on party_type.

5. Updated Usage Example
In your handleSubmit function, pass the necessary search criteria to analyzeBothApiResponseObjects:

```javascript
const crossReferencedData = analyzeBothApiResponseObjects(
  parsedPartiesResponse.data,
  parsedMasterResponse.data,
  partyNameHybridSoql // this holds the search criteria
);
console.log('Cross Referenced Data:', crossReferencedData);

```

This should ensure that your results from `analyzeBothApiResponseObjects` match the refined criteria, as it now checks each condition relevant to party_type, doc_type, document_date, and recorded_borough. Let me know if you encounter any further issues with the matching logic!

#### version 1.7

You're correct to consider that each key in `partyNameHybridSoql` is associated with a specific dataset. The `analyzeBothApiResponseObjects` function as currently written doesn’t differentiate which search criteria apply to which dataset; it treats all criteria as potentially applicable to both.

Let's refine the `analyzeBothApiResponseObjects` function to clearly apply the relevant filters to each dataset by mapping the `partyNameHybridSoql` fields to the correct dataset (`ACRIS_REAL_PROPERTY_PARTIES` or `ACRIS_REAL_PROPERTY_MASTER`). Here’s how we can approach this:

1. Define the Relevant Fields for Each Dataset: We’ll map the fields in `partyNameHybridSoql` to `ACRIS_REAL_PROPERTY_PARTIES` and `ACRIS_REAL_PROPERTY_MASTER` datasets.

2. Filter Each Dataset Separately: We’ll apply the `party_type` filter to `ACRIS_REAL_PROPERTY_PARTIES` and the other filters (`doc_type`, `document_date`, `recorded_borough`) to `ACRIS_REAL_PROPERTY_MASTER`.

3. Cross-Reference by `document_id`: Once filtered, we’ll match `document_id`s between the two datasets.

Refactored `analyzeBothApiResponseObjects`

```javascript
const analyzeBothApiResponseObjects = (partiesData, masterData, searchCriteria) => {
  // Destructure relevant fields from searchCriteria
  const { party_type, doc_type, document_date, recorded_borough } = searchCriteria;

  // Step 1: Filter masterData based on `doc_type`, `document_date`, and `recorded_borough`
  const masterFiltered = masterData.filter(record =>
    (!doc_type || doc_type.includes(record.doc_type)) &&
    (!document_date || isDateInRange(record.document_date, document_date)) &&
    (!recorded_borough || record.recorded_borough === recorded_borough)
  );

  // Step 2: Create a Set of document_ids from the filtered masterData
  const masterDocumentIds = new Set(masterFiltered.map(record => record.document_id));

  // Step 3: Filter partiesData based on `party_type` and matching document_id
  const crossReferencedData = partiesData
    .filter(partyRecord =>
      masterDocumentIds.has(partyRecord.document_id) &&
      (!party_type || partyRecord.party_type === party_type)
    )
    .map(partyRecord => {
      // Find the corresponding record in masterFiltered
      const matchingMasterRecord = masterFiltered.find(
        masterRecord => masterRecord.document_id === partyRecord.document_id
      );

      // Combine both records into a single object
      return {
        ...partyRecord,
        ...matchingMasterRecord
      };
    });

  // Log if no data matches the criteria
  if (crossReferencedData.length === 0) {
    console.log("No data matches your criteria");
  }
  
  console.log("cross referenced data:", crossReferencedData);
  return crossReferencedData;
};

// Helper function to check if a date is within a range
const isDateInRange = (date, range) => {
  const [start, end] = range.map(d => new Date(d));
  const docDate = new Date(date);
  return docDate >= start && docDate <= end;
};

```

**Explanation of the Changes**

- Step 1: We filter `masterData` based on `doc_type`, `document_date`, and `recorded_borough` since these fields are associated with `ACRIS_REAL_PROPERTY_MASTER`.
- Step 2: After filtering `masterData`, we create a Set of `document_id`s to quickly check for presence in the `partiesData`.
- Step 3: We filter `partiesData` by `party_type` (specific to `ACRIS_REAL_PROPERTY_PARTIES`) and cross-reference using `document_id`.
- Final Cross-Referenced Data: For each `document_id` present in both filtered datasets, we merge the corresponding records.

This approach ensures that each search criterion is only applied to the dataset to which it belongs. Let me know if you would like to test this further or need clarification on any part!