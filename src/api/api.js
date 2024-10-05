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

const RPMqueryBuilder = (soql = {}, endpoint, fields) => {
  const soqlQuery = buildSoQLQuery(soql, fields);
  const url = `${endpoint}?${soqlQuery}`;
  console.log('Constructed URL:', url);
  return url;
};

// Build SoQL query string
const buildSoQLQuery = (soql, fields) => {
  const whereClauses = Object.entries(soql)
    .filter(([_, value]) => value && String(value).trim() !== '')
    .map(([key, value]) => buildSoqlFieldQuery(key, value))
    .join(' AND ');

  // Log the constructed where clause before encoding
  console.log('Raw SoQL Query:', whereClauses);

  // Ensure that the query is properly encoded
  return `$where=${encodeURIComponent(whereClauses)}`;
};

// Improved utility function to escape SoQL string values
const escapeSoqlString = (value) => {
  if (typeof value === 'string') {
    return value.replace(/'/g, "''");  // Escape single quotes for SoQL
  }
  return value;
};

// Function to ensure the query starts properly with correct syntax
const startQuery = (key, value, isString) => {
  return isString ? `${key}="${escapeSoqlString(value)}` : `${key}=${value}`;
};

// Function to ensure the query ends correctly with proper quotes and escape handling
const endQuery = (isString) => {
  return isString ? '"' : '';  // Use double quotes for strings
};

// Function to build field queries based on field type (string or number)
const buildSoqlFieldQuery = (key, value) => {
  const exactMatchStringFields = ['street_name', 'unit', 'street_number'];
  const exactMatchNumberFields = ['borough', 'block', 'lot'];

  const isString = exactMatchStringFields.includes(key);
  const isNumber = exactMatchNumberFields.includes(key);

  if (isString || isNumber) {
    // Exact match for string or number fields
    return startQuery(key, value, isString) + endQuery(isString);
  }

  // Default to partial match for other fields
  return `${key} LIKE '%${escapeSoqlString(value)}%'`;
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