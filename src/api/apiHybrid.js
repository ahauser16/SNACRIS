// src/api/api.js
import axios from 'axios';
import secrets from 'secrets';
import moment from 'moment';
import realPropertyMasterFields from './realPropertyMasterFields';
import realPropertyLegalFields from './realPropertyLegalFields';
import realPropertyPartiesFields from './realPropertyPartiesFields';
import realPropertyReferencesFields from './realPropertyReferencesFields';
import realPropertyRemarksFields from './realPropertyRemarksFields';
import personalPropertyMasterFields from './personalPropertyMasterFields';
import personalPropertyLegalsFields from './personalPropertyLegalsFields';
import personalPropertyPartiesFields from './personalPropertyPartiesFields';
import personalPropertyReferencesFields from './personalPropertyReferencesFields';
import personalPropertyRemarksFields from './personalPropertyRemarksFields';
import documentControlCodesFields from './documentControlCodesFields';
import countryCodesFields from './countryCodesFields';
import uccCollateralCodesFields from './uccCollateralCodesFields';
import stateCodesFields from './stateCodesFields';
import API_ENDPOINTS from './apiEndpoints';

const APP_TOKEN = secrets.appToken;

// Function Definition: The RPMqueryBuilder function is defined with parameters soql, endpoint, fields, limit, and offset. Default values are provided for soql (an empty object), limit (10000), and offset (0).
// Build SoQL Query: The function calls buildSoQLQuery with the soql, fields, limit, and offset parameters to construct the SoQL query string.
// Construct URL: The function constructs the full URL by appending the SoQL query string to the endpoint.
// Log URL: The constructed URL is logged to the console for debugging purposes.
// Return URL: The function returns the constructed URL.
const RPMqueryBuilder = (soql = {}, endpoint, fields, limit = 10000, offset = 0) => {
  const soqlQuery = buildSoQLQuery(soql, fields, limit, offset);
  const url = `${endpoint}?${soqlQuery}`;
  console.log('Constructed URL:', url);
  return url;
};

// Function Definition: The buildSoQLQuery function is defined with parameters soql, fields, limit, and offset.
// Filter and Map SoQL Entries: The function processes the soql object:
// Filter: It filters out entries where the value is empty or consists only of whitespace.
// Map: It maps each key-value pair to a SoQL query string by calling buildSoqlFieldQuery.
// Join Clauses: The resulting query strings are joined with ' AND ' to form the complete where clause.
// Log Query: The raw SoQL query is logged to the console for debugging purposes.
// Return Query String: The function returns the complete SoQL query string, including the where clause, limit, offset, and order parameters.
const buildSoQLQuery = (soql, fields, limit, offset) => {
  let whereClauses = Object.entries(soql)
    .filter(([key, value]) => value && String(value).trim() !== '')
    .map(([key, value]) => buildSoqlFieldQuery(key, value, soql))
    .join(' AND ');

  console.log('Raw SoQL Query:', whereClauses);

  return `$where=${encodeURIComponent(whereClauses)}&$limit=${limit}&$offset=${offset}&$order=:id`;
};

// Improved utility function to escape SoQL string values
const escapeSoqlString = (value) => {
  if (typeof value === 'string') {
    return value.replace(/'/g, "''");  // Escape single quotes for SoQL
  }
  return value;
};

// Function Definition: The buildSoqlFieldQuery function is defined with parameters key, value, and soql.
// Exact Match Fields: It defines arrays of fields that require exact matches for strings and numbers.
// Check Field Type: It checks if the key is a string or number field.
// Handle document_date: It handles date ranges and exact dates for the document_date field.
// Handle doc_type: It handles multiple doc_type values using the IN syntax.
// Handle name_modifier: It handles different name_modifier values:
// contains: Uses LIKE for partial matches.
// exact: Uses = for exact matches.
// business: Uses LIKE for partial matches.
// name_parts: Constructs separate LIKE queries for first, last, and middle name parts and combines them with AND.
// Exact Match: It returns exact match queries for string or number fields.
// Partial Match: It returns partial match queries for other fields.
const buildSoqlFieldQuery = (key, value, soql) => {
  const exactMatchStringFields = ['street_name', 'unit', 'street_number', 'state', 'city', 'party_type', 'doc_type'];
  const exactMatchNumberFields = ['borough', 'block', 'lot', 'recorded_borough', 'reel_pg', 'reel_nbr', 'reel_yr'];

  const isString = exactMatchStringFields.includes(key);
  const isNumber = exactMatchNumberFields.includes(key);

  if (key === 'document_date') {
    // Handle date range for `document_date`
    if (Array.isArray(value) && value.length === 1 && value[0].includes(' - ')) {
      const [startDate, endDate] = value[0].split(' - ');
      return `document_date BETWEEN '${moment(startDate, 'YYYY-MM-DD').format('YYYY-MM-DD')}' AND '${moment(endDate, 'YYYY-MM-DD').format('YYYY-MM-DD')}'`;
    } else {
      // Handle exact date
      const formattedDate = moment(value, 'YYYY-MM-DD').format('YYYY-MM-DD');
      return `document_date = '${formattedDate}'`;
    }
  }

  if (key === 'doc_type' && Array.isArray(value)) {
    // Use IN syntax for multiple `doc_type` values
    const inClause = value.map(val => `'${escapeSoqlString(val)}'`).join(', ');
    return `doc_type IN (${inClause})`;
  }

  const nameModifier = soql.name_modifier;
  if (nameModifier) {
    if (nameModifier === 'contains' && key === 'name') {
      return `UPPER(name) LIKE UPPER('%${escapeSoqlString(value)}%')`;
    } else if (nameModifier === 'exact' && key === 'name') {
      return `UPPER(name) = UPPER('${escapeSoqlString(value)}')`;
    } else if (nameModifier === 'business' && key === 'name') {
      return `UPPER(name) LIKE UPPER('%${escapeSoqlString(value)}%')`;
    } else if (nameModifier === 'name_parts' && key === 'nameParts') {
      const nameParts = value;
      const partsQueries = [];
      if (nameParts.first) {
        partsQueries.push(`UPPER(name) LIKE UPPER('%${escapeSoqlString(nameParts.first)}%')`);
      }
      if (nameParts.last) {
        partsQueries.push(`UPPER(name) LIKE UPPER('%${escapeSoqlString(nameParts.last)}%')`);
      }
      if (nameParts.middle) {
        partsQueries.push(`UPPER(name) LIKE UPPER('%${escapeSoqlString(nameParts.middle)}%')`);
      }
      return partsQueries.join(' AND ');
    }
  }

  if (isString || isNumber) {
    // Exact match for string or number fields
    return `${key}=${isString ? `"${escapeSoqlString(value)}"` : value}`;
  }

  // Default to partial match for other fields
  return `${key} LIKE '%${escapeSoqlString(value)}%'`;
};

//Function Definition: The fetchData function is defined as an asynchronous function with the url parameter.
// Try Block: It tries to fetch data from the provided URL using axios.get.
// Set Headers: It sets the request headers, including the X-App-Token.
// Log Response: It logs the API response to the console.
// Return Response: It returns the response.
// Catch Block: It catches and logs any errors that occur during the fetch operation and rethrows the error.
const fetchData = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-App-Token': APP_TOKEN,
      },
    });
    console.log('API response:', response);
    return {
      // data: response.data,
      // totalRecords: response.headers['x-total-count'] || response.data.length,
      response
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

//Function Definition: The fetchPaginatedData function is defined with parameters soql, endpoint, fields, limit, and offset.
// Build URL: It calls RPMqueryBuilder to construct the URL with the provided parameters.
// Fetch Data: It calls fetchData with the constructed URL and returns the result.
export const fetchPaginatedData = (soql, endpoint, fields, limit, offset) => {
  const url = RPMqueryBuilder(soql, endpoint, fields, limit, offset);
  return fetchData(url);
};

//API endpoint specific functions
export const fetchRealPropertyMasterData = (docTypeSoql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(docTypeSoql, API_ENDPOINTS.realPropertyMaster, realPropertyMasterFields, limit, offset);
};

export const fetchRealPropertyPartiesData = (partyNameSoql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(partyNameSoql, API_ENDPOINTS.realPropertyParties, realPropertyPartiesFields, limit, offset);
};

export const fetchRealPropertyLegalsData = (addressSoql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(addressSoql, API_ENDPOINTS.realPropertyLegals, realPropertyLegalFields, limit, offset);
};

export const fetchRealPropertyReferencesData = (soql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.realPropertyReferences, realPropertyReferencesFields, limit, offset);
};

export const fetchRealPropertyRemarksData = (soql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.realPropertyRemarks, realPropertyRemarksFields, limit, offset);
};

export const fetchPersonalPropertyMasterData = (soql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.personalPropertyMaster, personalPropertyMasterFields, limit, offset);
};

export const fetchPersonalPropertyLegalsData = (soql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.personalPropertyLegals, personalPropertyLegalsFields, limit, offset);
};

export const fetchPersonalPropertyPartiesData = (soql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.personalPropertyParties, personalPropertyPartiesFields, limit, offset);
};

export const fetchPersonalPropertyReferencesData = (soql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.personalPropertyReferences, personalPropertyReferencesFields, limit, offset);
};

export const fetchPersonalPropertyRemarksData = (soql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.personalPropertyRemarks, personalPropertyRemarksFields, limit, offset);
};

export const fetchDocumentControlCodesData = (soql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.documentControlCodes, documentControlCodesFields, limit, offset);
};

export const fetchStateCodesData = (soql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.stateCodes, stateCodesFields, limit, offset);
};

export const fetchCountryCodesData = (soql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.countryCodes, countryCodesFields, limit, offset);
};

export const fetchUccCollateralCodesData = (soql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.uccCollateralCodes, uccCollateralCodesFields, limit, offset);
};

export const fetchPropertyTypeCodesData = (soql, limit = 10000, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.propertyTypeCodes, propertyTypeCodesFields, limit, offset);
};

export { RPMqueryBuilder, buildSoQLQuery };