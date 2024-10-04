// src/api/api.js
import axios from 'axios';
import secrets from 'secrets';
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

//The `RPMqueryBuilder` function is defined, taking three parameters: `soql` (an object containing query parameters), `endpoint` (the API endpoint URL), and `fields` (the fields to be queried).
const RPMqueryBuilder = (soql = {}, endpoint, fields) => {
  //The `buildSoQLQuery` function is called with `soql` and `fields` as arguments, and the result is stored in the `soqlQuery` variable.
  const soqlQuery = buildSoQLQuery(soql, fields);
  //The `url` variable is constructed by concatenating the `endpoint` and the `soqlQuery`.
  const url = `${endpoint}?${soqlQuery}`;
  console.log('Constructed URL:', url);
  return url;
};

//The `buildSoQLQuery` function is defined, taking two parameters: `soql` (an object containing query parameters) and `fields` (the fields to be queried).
const buildSoQLQuery = (soql, fields) => {
  //The whereClauses variable is constructed by:
  //first, converting the `soql` object into an array of key-value pairs using `Object.entries`.
  const whereClauses = Object.entries(soql)
    //second, filtering out entries where the value is empty or consists only of whitespace.
    .filter(([_, value]) => value && String(value).trim() !== '')
    //third, mapping each key-value pair to a SoQL field query using the `buildSoqlFieldQuery` function.
    .map(([key, value]) => buildSoqlFieldQuery(key, value))
    //fourth, joining the resulting array of field queries with " AND ".
    .join(' AND ');
  //The `whereClauses` string is encoded using `encodeURIComponent` and prefixed with `$where=`. 
  //The resulting string is returned.
  return `$where=${encodeURIComponent(whereClauses)}`;
};

// The `buildSoqlFieldQuery` function takes two parameters: `key` (the field name) and `value` (the field value).
const buildSoqlFieldQuery = (key, value) => {
  // Define the fields that should use the `=` operator.
  const exactMatchFields = ['borough', 'block', 'lot'];

  // Check if the key is in the exactMatchFields array.
  if (exactMatchFields.includes(key)) {
    // Return a string representing a SoQL field query using the `=` operator.
    return `${key}=${value}`;
  }

  // For other fields, return a string representing a SoQL field query using the `LIKE` operator.
  return `${key} LIKE '%${value}%'`;
};

const fetchData = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-App-Token': APP_TOKEN,
      },
    });
    console.log('API response:', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// refactor in progress BELOW!
export const fetchRealPropertyMasterData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyMaster, realPropertyMasterFields);
  return fetchData(url);
};

export const fetchRealPropertyPartiesData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyParties, realPropertyPartiesFields);
  return fetchData(url);
};

export const fetchRealPropertyLegalsData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyLegals, realPropertyLegalFields);
  return fetchData(url);
};
// refactor in progress ABOVE!
export const fetchRealPropertyReferencesData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyReferences, realPropertyReferencesFields);
  return fetchData(url);
};

export const fetchRealPropertyRemarksData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyRemarks, realPropertyRemarksFields);
  return fetchData(url);
};

export const fetchPersonalPropertyMasterData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.personalPropertyMaster, personalPropertyMasterFields);
  return fetchData(url);
};

export const fetchPersonalPropertyLegalsData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.personalPropertyLegals, personalPropertyLegalsFields);
  return fetchData(url);
};

export const fetchPersonalPropertyPartiesData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.personalPropertyParties, personalPropertyPartiesFields);
  return fetchData(url);
};

export const fetchPersonalPropertyReferencesData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.personalPropertyReferences, personalPropertyReferencesFields);
  return fetchData(url);
};

export const fetchPersonalPropertyRemarksData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.personalPropertyRemarks, personalPropertyRemarksFields);
  return fetchData(url);
};

export const fetchDocumentControlCodesData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.documentControlCodes, documentControlCodesFields);
  return fetchData(url);
};

export const fetchStateCodesData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.stateCodes, stateCodesFields);
  return fetchData(url);
};

export const fetchCountryCodesData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.countryCodes, countryCodesFields);
  return fetchData(url);
};

export const fetchUccCollateralCodesData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.uccCollateralCodes, uccCollateralCodesFields);
  return fetchData(url);
};

export const fetchPropertyTypeCodesData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.propertyTypeCodes, propertyTypeCodesFields);
  return fetchData(url);
};

export { RPMqueryBuilder, buildSoQLQuery };