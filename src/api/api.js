// src/api/api.js
import axios from 'axios';
import secrets from 'secrets';
import realPropertyMasterFields from './realPropertyMasterFields';
import realPropertyLegalFields from './realPropertyLegalFields';
import realPropertyPartiesFields from './realPropertyPartiesFields';
import realPropertyReferencesFields from './realPropertyReferencesFields';
import realPropertyRemarksFields from './realPropertyRemarksFields';
import personalPropertyMasterFields from './personalPropertyMasterFields';
import API_ENDPOINTS from './apiEndpoints';

//Socrata's explanation of the App Token: https://dev.socrata.com/foundry/data.cityofnewyork.us/7isb-wh4c
const APP_TOKEN = secrets.appToken;

// Helper function to build SoQL query parameters
const buildSoQLQuery = (soql, fields) => {
  return Object.keys(soql)
    .filter(key => fields[key])
    .map(key => `$${key}=${encodeURIComponent(soql[key])}`)
    .join('&');
};

// Function to build the complete query URL
const RPMqueryBuilder = (soql = {}, endpoint, fields) => {
  const soqlQuery = buildSoQLQuery(soql, fields);
  const url = `${endpoint}?${soqlQuery}`;
  console.log('Constructed URL:', url); // Log the constructed URL
  return url;
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
    console.log('API response:', response); // Log the API response
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error); // Log the error object
    throw error;
  }
};

export const fetchRealPropertyMasterData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyMaster, realPropertyMasterFields);
  return fetchData(url);
};

export const fetchRealPropertyLegalsData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyLegals, realPropertyLegalFields);
  return fetchData(url);
};

export const fetchRealPropertyPartiesData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyParties, realPropertyPartiesFields);
  return fetchData(url);
};

export const fetchRealPropertyReferencesData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyReferences, realPropertyReferencesFields);
  return fetchData(url);
};

export const fetchRealPropertyRemarksData = (soql) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyRemarks, realPropertyRemarksFields);
  return fetchData(url);
};








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