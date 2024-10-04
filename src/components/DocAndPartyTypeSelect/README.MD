# DocAndPartyTypeSelect component notes

## `toggleAllCheckboxes` undesireable behavior

### Summary

When clicking a checkbox in the Party 1 or Party 2 column within a document group all the checkboxes in that column should be checked, however, the function is checking boxes in the other column and in other groups. Below is an explanation of the `toggleAllCheckboxes` function which I'm refactoring.

```javascript
const toggleAllCheckboxes = (classCodeDescription, partyTypeKey) => {
  // Filter the partyTypes array to get only the parties that belong to the specified classCodeDescription
  const classParties = partyTypes.filter(
    (party) => party.class_code_description === classCodeDescription
  );

  // Map the filtered parties to get an array of party types (either party1_type or party2_type) based on the partyTypeKey
  const partyTypesToToggle = classParties.map((party) => party[partyTypeKey]);

  // Update the selectedParties state
  setSelectedParties((prevSelectedParties) => {
    // Check if all party types to toggle are already selected
    const allSelected = partyTypesToToggle.every((type) =>
      prevSelectedParties.includes(type)
    );

    // If all are selected, filter them out from the selectedParties array, otherwise add them
    const newSelectedParties = allSelected
      ? prevSelectedParties.filter((type) => !partyTypesToToggle.includes(type))
      : [...new Set([...prevSelectedParties, ...partyTypesToToggle])];

    // Update the selectedPartyType state
    setSelectedPartyType(newSelectedParties);

    // Return the new selected parties array
    return newSelectedParties;
  });
};
```

### Cause of the Undesirable Behavior

The issue lies in the `partyTypesToToggle` array. When you map the `classParties` to get the party types based on `partyTypeKey`, it includes all party types for the specified `classCodeDescription`. This means that if `party1_type` and `party2_type` have overlapping values, toggling one column might affect the other.

### Refactored Solution

To fix this, we need to ensure that the `partyTypesToToggle` array only includes the party types for the specified column within the specified group. We can achieve this by filtering the party types more precisely.

Here is the refactored `toggleAllCheckboxes` function:

```javascript
const toggleAllCheckboxes = (classCodeDescription, partyTypeKey) => {
  // Filter the partyTypes array to get only the parties that belong to the specified classCodeDescription
  const classParties = partyTypes.filter(
    (party) => party.class_code_description === classCodeDescription
  );

  // Map the filtered parties to get an array of party types (either party1_type or party2_type) based on the partyTypeKey
  const partyTypesToToggle = classParties
    .map((party) => party[partyTypeKey])
    .filter((type) => type); // Ensure no undefined values are included

  // Update the selectedParties state
  setSelectedParties((prevSelectedParties) => {
    // Check if all party types to toggle are already selected
    const allSelected = partyTypesToToggle.every((type) =>
      prevSelectedParties.includes(type)
    );

    // If all are selected, filter them out from the selectedParties array, otherwise add them
    const newSelectedParties = allSelected
      ? prevSelectedParties.filter((type) => !partyTypesToToggle.includes(type))
      : [...new Set([...prevSelectedParties, ...partyTypesToToggle])];

    // Update the selectedPartyType state
    setSelectedPartyType(newSelectedParties);

    // Return the new selected parties array
    return newSelectedParties;
  });
};
```

### Explanation of Changes

1. **Filtering Undefined Values**: Added `.filter((type) => type)` to ensure that no undefined values are included in the `partyTypesToToggle` array. This ensures that only valid party types are toggled.
2. **Precise Mapping**: The mapping now ensures that only the party types for the specified column within the specified group are included.
   This should resolve the issue where checkboxes in one group were affecting checkboxes in other groups.

This should resolve the issue where checkboxes in one group were affecting checkboxes in other groups.

**The aforementioned refactor is on hold because I want to add metadata from the JSON file to each `<td>` and checkbox input for better control.**

## Refactor In Progress (9/29/24)

### Summary

I want to refactor the `DocAndPartyTypeSelect` component so that it contains the same state management, and is wired to `api.js`, just like how the `PartyNameSearch.jsx` component is constructed. Below are my notes on how `PartyNameSearch` works in the context of state management, props and the API GET request that is made by the `SearchByPartyNameForm`, `PartyNameSearch` and `api.js` components. I have create sub-bullets with my notes (e.g. --> ) that are associated with implementing a function in my `DocAndPartyTypeSelect` component.

#### `PartyNameSearch.jsx`

The `PartyNameSearch` component is responsible for managing the state and UI for adding search conditions related to party names. It allows users to specify search conditions, such as the search type (e.g., starts with, ends with, contains, exclude) and the boolean operator (AND/OR) to combine multiple conditions.

**1. State Management:**

- `currentQuery`: Stores the current query input by the user.
- `searchType`: Stores the selected search type.
- `booleanOperator`: Stores the selected boolean operator.
  - NB --> create variables that store the selected checkbox values for `doctype`, `party1type`, `party2type` and `party3type`.

**2. Props**

- `soql`: The current SoQL query object.
  - NB --> this variable needs to be passed to `DocAndPartyTypeSelect` to achieve the same functionality as `PartyNameSearch.jsx`
- `queries`: An array of existing queries.
  - NB --> this variable needs to be passed to `DocAndPartyTypeSelect` to achieve the same functionality as `PartyNameSearch.jsx`
- `handlePartyName`: Function to handle changes to the party name input.
- `handleAddQuery`: Function to add a new query condition.
- `handleResetQueries`: Function to reset the queries.

**3. Functions**

- `handleCurrentQueryChange`: Updates `currentQuery` state when the input changes.
  - NB --> this variable needs to be passed to `DocAndPartyTypeSelect` to achieve the same functionality as `PartyNameSearch.jsx`
- `handleSearchTypeChange`: Updates `searchType` state when the search type changes.
- `handleBooleanOperatorChange`: Updates `booleanOperator` state when the boolean operator changes.
- `handleAddCondition`: Adds the current query condition to the list of queries and resets `currentQuery`.
  - NB --> this variable needs to be passed to `DocAndPartyTypeSelect` to achieve the same functionality as `PartyNameSearch.jsx` when a checkbox is clicked
- `handleRemoveQuery`: Removes a query condition from the list of queries.
  - NB --> this variable needs to be passed to `DocAndPartyTypeSelect` to achieve the same functionality as `PartyNameSearch.jsx` and this needs to update the corresponding checkbox that initially added the condition.
- `formatQuery`: Formats a query condition for display.
  - NB --> this variable needs to be passed to `DocAndPartyTypeSelect` to achieve the same functionality as `PartyNameSearch.jsx` while displaying different formatting appropriate for checkboxes.

#### `SearchByPartyNameForm.jsx`

The `SearchByPartyNameForm` component is a form that allows users to search for real property parties data. It incorporates the `PartyNameSearch` component to handle the party name search conditions.

**1. State Management:**

- `soql`: Stores the SoQL query object, which includes various search parameters.
- `queries`: Stores the list of query conditions.
- `selectedBoroughs`: Stores the selected boroughs.
- `selectedPartyType`: Stores the selected party types.
- `selectedDocTypeCheckboxes`: Stores the selected document type checkboxes.

**2. Props:**

- `setData`: Function to set the fetched data.
- `setError`: Function to set the error state.

**3. Functions:**

- `handlePartyName`: Updates the `soql` state when the party name input changes.
- `handleDocType`: Updates the `soql` state when the document type input changes.
- `handlePartyType`: Updates the `soql` state when the party type input changes.
- `handleBoroughChange`: Updates the `soql` state when the borough selection changes.
- `handleAddQuery`: Adds a new query condition to the `queries` state.
- `handleResetQueries`: Resets the `queries` state.
- `handleSubmit`: Handles form submission, constructs the SoQL query, and makes the API request.

#### `api.js`

The api.js file contains functions to build SoQL queries and make API requests.

**1. Functions:**

- `RPMqueryBuilder`: Constructs the SoQL query URL based on the provided SoQL object, endpoint, and fields.
- `buildSoQLQuery`: Builds the SoQL query string from the provided SoQL object and fields.
- `buildSoqlFieldQuery`: Constructs a SoQL field query based on the search type and query value.
- `fetchData`: Makes an API request using Axios and returns the response data.

**2. Exported Functions:**

- `fetchRealPropertyPartiesData`: Constructs the URL for fetching real property parties data and makes the API request.

#### GET Request - How `SearchByPartyNameForm.jsx` Uses `PartyNameSearch.jsx` and `api.js`

**1. Form Submission:**

- When the form in `SearchByPartyNameForm.jsx` is submitted, the `handleSubmit` function is called.
- This function constructs the SoQL query object by combining the `soql` state and the `queries` state.

**2. API Call:**

- The `handleSubmit` function calls the `fetchRealPropertyPartiesData` function from `api.js` with the constructed SoQL query object.
- `fetchRealPropertyPartiesData` uses the `RPMqueryBuilder` function to construct the URL for the API request.
- The `RPMqueryBuilder` function calls `buildSoQLQuery` to build the SoQL query string from the provided SoQL object and fields.
  The `buildSoQLQuery` function constructs the `where` clause of the SoQL query based on the `queries` state.
  The constructed URL is then used by the `fetchData` function to make the GET request using Axios.

**3. Response Handling:**

- The response from the API call is handled in the `handleSubmit` function.
- If the request is successful, the `setData` function is called to update the data state.
- If there is an error, the `setError` function is called to update the error state.

#### Summary

- `PartyNameSearch.jsx` manages the state and UI for adding search conditions related to party names.
- `SearchByPartyNameForm.jsx` manages the overall state of the form, including the SoQL query object and the list of query conditions.
- When the form is submitted, `SearchByPartyNameForm.jsx` constructs the SoQL query object and makes an API request using the `fetchRealPropertyPartiesData` function from `api.js`.
- The response from the API request is then handled to update the data or error state.
