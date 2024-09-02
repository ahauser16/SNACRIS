# Socrata & ACRIS API Notes

This is a notepad for Socrata's simple filter and more complex SoQL Queries and the ACRIS datasets.

## Socrata APIs - filters versus SoQL queries

### Simple Filters

#### Advantages:

1. **Ease of Use:** Simple filters are straightforward and easy to use. You can directly append them to the URL as query parameters.
2. **Readability:** The resulting URL is often more readable and easier to understand.
3. **Basic Filtering:** Ideal for basic equality comparisons and straightforward filtering.

#### Limitations:

1. **Limited Functionality:** Simple filters are limited to basic equality comparisons and cannot handle complex queries.
2. **No Aggregation:** You cannot perform aggregations, grouping, or ordering with simple filters.

#### Example:
```
https://data.cityofnewyork.us/resource/bnx9-e6tj.json?document_id=2024061800496001&record_type=A
```

### SoQL Queries

#### Advantages:

1. **Advanced Querying:** SoQL supports advanced querying capabilities similar to SQL, including `SELECT`, `WHERE`, `ORDER BY`, `GROUP BY`, `HAVING`, and more.
2. **Aggregations and Functions:** You can perform aggregations (e.g., `SUM`, `AVG`, `COUNT`) and use various functions (e.g., `date_extract_y`, `max`, `min`).
3. **Complex Filtering:** Allows for complex filtering conditions, including logical operators (`AND`, `OR`), range queries (`BETWEEN`), and pattern matching (`LIKE`).

#### Limitations:

1. **Complexity:** SoQL queries can be more complex to construct and understand, especially for users unfamiliar with SQL-like syntax.
2. **URL Length:** Complex queries can result in long URLs, which might be harder to manage and debug.

Example:
```
https://data.cityofnewyork.us/resource/bnx9-e6tj.json?$where=document_id='2024061800496001' AND record_type='A'
```

### Comparison
1. Simple Filters are best for straightforward, basic filtering where you only need to match specific field values.
2. SoQL Queries are more powerful and flexible, allowing for complex querying, aggregations, and advanced filtering.

### What you cannot do with Simple Filters
1. Perform aggregations (e.g., `SUM`, `AVG`, `COUNT`).
2. Use advanced functions (e.g., `date_extract_y`, `max`, `min`).
3. Apply complex logical conditions (e.g., combining multiple conditions with `AND`/`OR`).
4. Order or group results.

### What You Cannot Do with SoQL Queries
1. SoQL queries can handle everything that simple filters can, but they require more complex syntax and understanding of the SoQL language.

---

## Implementation & Examples

### `fetchRealPropertyMasterData()` and So QL queries

To implement the `fetchRealPropertyMasterData` function to retrieve all records from `https://data.cityofnewyork.us/resource/bnx9-e6tj.json` with a `recorded_borough` value of `1` and the `doc_type` of "AGMT" using the `RPMqueryBuilder` function and So QL query parameters, you can pass the appropriate queries to the `RPMqueryBuilder` function. Here's how you can do it:

***draft one***

1. **Create a React Component:** Create a new React component or use an existing one.
2. **Use `useEffect` Hook:** Use the `useEffect` hook to call the `fetchRealPropertyMasterData` function when the component mounts.
3. **Pass Parameters:** Pass the specific parameters to the `fetchRealPropertyMasterData` function.
4. **Handle State:** Manage the state for the fetched data and any potential errors.

***draft two***

1. **Add Input Fields:** Add input fields to the component to allow users to enter the parameters.
2. **Handle Input Changes:** Use state to manage the input values and handle changes.
3. **Fetch Data on Form Submission:** Fetch the data when the user submits the form.

***draft three***

1. Remove the `buildSimpleFilters` function from `api.js` as it will no longer be used.
2. Modify the `RPMqueryBuilder` function from `api.js`to only use SoQL syntax.
3. Update the `fetchRealPropertyMasterData` function from `api.js`to reflect the changes.

Here's the current implementation of `api.js`:
```
// src/utils/api.js
import axios from 'axios';
import secrets from 'secrets';

const API_ENDPOINTS = {
  realPropertyMaster: 'https://data.cityofnewyork.us/resource/bnx9-e6tj.json',
  realPropertyLegals: 'https://data.cityofnewyork.us/resource/8h5j-fqxa.json',
  realPropertyParties: 'https://data.cityofnewyork.us/resource/636b-3b5g.json',
  realPropertyReferences: 'https://data.cityofnewyork.us/resource/pwkr-dpni.json',
  realPropertyRemarks: 'https://data.cityofnewyork.us/resource/9p4w-7npp.json',
  personalPropertyMaster: 'https://data.cityofnewyork.us/resource/sv7x-dduq.json',
  personalPropertyLegals: 'https://data.cityofnewyork.us/resource/uqqa-hym2.json',
  personalPropertyParties: 'https://data.cityofnewyork.us/resource/nbbg-wtuz.json',
  personalPropertyReferences: 'https://data.cityofnewyork.us/resource/6y3e-jcrc.json',
  personalPropertyRemarks: 'https://data.cityofnewyork.us/resource/fuzi-5ks9.json',
  documentControlCodes: 'https://data.cityofnewyork.us/resource/7isb-wh4c.json',
  uccCollateralCodes: 'https://data.cityofnewyork.us/resource/j2iz-mwzu.json',
  propertyTypesCodes: 'https://data.cityofnewyork.us/resource/94g4-w6xz.json',
  statesCodes: 'https://data.cityofnewyork.us/resource/5c9e-33xj.json',
  countryCodes: 'https://data.cityofnewyork.us/resource/q9kp-jvxv.json',
};

// Socrata's explanation of the App Token: https://dev.socrata.com/foundry/data.cityofnewyork.us/7isb-wh4c
const APP_TOKEN = secrets.appToken;

// Real Property Master Field List with data types
const realPropertyMasterFields = {
  document_id: 'text',
  record_type: 'text',
  crfn: 'text',
  recorded_borough: 'number',
  doc_type: 'text',
  document_date: 'floating_timestamp',
  document_amt: 'number',
  recorded_datetime: 'floating_timestamp',
  modified_date: 'floating_timestamp',
  reel_yr: 'number',
  reel_nbr: 'number',
  reel_pg: 'number',
  percent_trans: 'number',
  good_through_date: 'floating_timestamp',
};

// Helper function to build SoQL query parameters
const buildSoQLQuery = (soql) => {
  return Object.keys(soql)
    .filter(key => realPropertyMasterFields[key])
    .map(key => `$${key}=${encodeURIComponent(soql[key])}`)
    .join('&');
};

// Function to build the complete query URL
const RPMqueryBuilder = (soql = {}) => {
  const baseUrl = API_ENDPOINTS.realPropertyMaster;
  const soqlQuery = buildSoQLQuery(soql);
  return `${baseUrl}?${soqlQuery}`;
};

// Function to fetch data using the constructed query URL
const fetchData = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-App-Token': APP_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchRealPropertyMasterData = (soql) => {
  const url = RPMqueryBuilder(soql);
  return fetchData(url);
};

export const fetchRealPropertyLegalsData = (params) => fetchData(API_ENDPOINTS.realPropertyLegals, params);
export const fetchRealPropertyPartiesData = (params) => fetchData(API_ENDPOINTS.realPropertyParties, params);
export const fetchRealPropertyReferencesData = (params) => fetchData(API_ENDPOINTS.realPropertyReferences, params);
export const fetchRealPropertyRemarksData = (params) => fetchData(API_ENDPOINTS.realPropertyRemarks, params);
export const fetchPersonalPropertyMasterData = (params) => fetchData(API_ENDPOINTS.personalPropertyMaster, params);
export const fetchPersonalPropertyLegalsData = (params) => fetchData(API_ENDPOINTS.personalPropertyLegals, params);
export const fetchPersonalPropertyPartiesData = (params) => fetchData(API_ENDPOINTS.personalPropertyParties, params);
export const fetchPersonalPropertyReferencesData = (params) => fetchData(API_ENDPOINTS.personalPropertyReferences, params);
export const fetchPersonalPropertyRemarksData = (params) => fetchData(API_ENDPOINTS.personalPropertyRemarks, params);
export const fetchDocumentControlCodes = (params) => fetchData(API_ENDPOINTS.documentControlCodes, params);
export const fetchUccCollateralCodes = (params) => fetchData(API_ENDPOINTS.uccCollateralCodes, params);
export const fetchPropertyTypesCodes = (params) => fetchData(API_ENDPOINTS.propertyTypesCodes, params);
export const fetchStatesCodes = (params) => fetchData(API_ENDPOINTS.statesCodes, params);
export const fetchCountryCodes = (params) => fetchData(API_ENDPOINTS.countryCodes, params);

export { RPMqueryBuilder, buildSoQLQuery };
```

Here's the current implementation of the hypothetical component `RealPropertyMasterComp.js` which includes:
   1. Update the state to reflect SoQL syntax.
   2. Modify the `handleSubmit` function to pass the SoQL object to `fetchRealPropertyMasterData`.

```
// src/containers/ACRIS/RealPropertyMasterComp.jsx

import React, { useState } from 'react';
import { fetchRealPropertyMasterData } from '../../utils/api';

const RealPropertyMasterComp = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [soql, setSoql] = useState({
    recorded_borough: '1',
    doc_type: 'AGMT',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSoql((prevSoql) => ({
      ...prevSoql,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await fetchRealPropertyMasterData(soql);
      setData(result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Real Property Master Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Recorded Borough:
            <input
              type="text"
              name="recorded_borough"
              value={soql.recorded_borough}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Document Type:
            <input
              type="text"
              name="doc_type"
              value={soql.doc_type}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Fetch Data</button>
      </form>
      {error && <div>Error: {error}</div>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default RealPropertyMasterComp;
```


