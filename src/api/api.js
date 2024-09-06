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

//Socrata's explanation of the App Token: https://dev.socrata.com/foundry/data.cityofnewyork.us/7isb-wh4c
const APP_TOKEN = secrets.appToken;

// Function to build the complete query URL
const RPMqueryBuilder = (soql = {}, endpoint, fields, searchType = 'exact') => {
  const soqlQuery = buildSoQLQuery(soql, fields, searchType);
  const url = `${endpoint}?${soqlQuery}`;
  console.log('Constructed URL:', url); // Log the constructed URL
  return url;
};

// Helper function to build SoQL query parameters
const buildSoQLQuery = (soql, fields, searchType) => {
  const whereClauses = Object.keys(soql)
    .filter(key => fields[key])
    .map(key => {
      if (searchType === 'partial') {
        return `UPPER(${key}) LIKE UPPER('%${soql[key]}%')`;
      }
      if (key === 'document_date_start' || key === 'document_date_end') {
        const dateField = key === 'document_date_start' ? 'document_date >= ' : 'document_date <= ';
        return `${dateField}'${soql[key]}'`;
      }
      return `UPPER(${key})=UPPER('${soql[key]}')`;
    })
    .join(' AND ');

  return `$where=${encodeURIComponent(whereClauses)}`;
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


export const fetchRealPropertyMasterData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyMaster, realPropertyMasterFields, searchType);
  return fetchData(url);
};

export const fetchRealPropertyLegalsData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyLegals, realPropertyLegalFields, searchType);
  return fetchData(url);
};

export const fetchRealPropertyPartiesData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyParties, realPropertyPartiesFields, searchType);
  return fetchData(url);
};

export const fetchRealPropertyReferencesData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyReferences, realPropertyReferencesFields, searchType);
  return fetchData(url);
};

export const fetchRealPropertyRemarksData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyRemarks, realPropertyRemarksFields, searchType);
  return fetchData(url);
};

export const fetchPersonalPropertyMasterData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.personalPropertyMaster, personalPropertyMasterFields, searchType);
  return fetchData(url);
};

export const fetchPersonalPropertyLegalsData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.personalPropertyLegals, personalPropertyLegalsFields, searchType);
  return fetchData(url);
};

export const fetchPersonalPropertyPartiesData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.personalPropertyParties, personalPropertyPartiesFields, searchType);
  return fetchData(url);
};

export const fetchPersonalPropertyReferencesData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.personalPropertyReferences, personalPropertyReferencesFields, searchType);
  return fetchData(url);
};

export const fetchPersonalPropertyRemarksData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.personalPropertyRemarks, personalPropertyRemarksFields, searchType);
  return fetchData(url);
};

export const fetchDocumentControlCodesData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.documentControlCodes, documentControlCodesFields, searchType);
  return fetchData(url);
};

export const fetchStateCodesData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.stateCodes, stateCodesFields, searchType);
  return fetchData(url);
};

export const fetchCountryCodesData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.countryCodes, countryCodesFields, searchType);
  return fetchData(url);
};

export const fetchUccCollateralCodesData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.uccCollateralCodes, uccCollateralCodesFields, searchType);
  return fetchData(url);
};

export const fetchPropertyTypeCodesData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.propertyTypeCodes, propertyTypeCodesFields, searchType);
  return fetchData(url);
};

export { RPMqueryBuilder, buildSoQLQuery };