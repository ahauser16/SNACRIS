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

const buildSoQLQuery = (soql, fields) => {
  if (!soql.queries || soql.queries.length === 0) {
    return '';
  }

  const whereClauses = soql.queries.map((query, index) => {
    const { query: condition, booleanOperator } = query;
    const clause = `${index > 0 ? booleanOperator : ''} ${buildSoQLFieldQuery('name', condition)}`;
    console.log('Constructed clause:', clause);
    return clause.trim();
  }).join(' ');

  return `$where=${encodeURIComponent(whereClauses)}`;
};

const buildSoQLFieldQuery = (key, value) => {
  switch (value.searchType) {
    case 'startsWith':
      return `UPPER(${key}) LIKE UPPER('${value.query}%')`;
    case 'endsWith':
      return `UPPER(${key}) LIKE UPPER('%${value.query}')`;
    case 'contains':
      return `UPPER(${key}) LIKE UPPER('%${value.query}%')`;
    case 'exclude':
      return `UPPER(${key}) NOT LIKE UPPER('%${value.query}%')`;
    default:
      return `UPPER(${key})=UPPER('${value.query}')`;
  }
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
// refactor in progress ABOVE!


export const fetchRealPropertyLegalsData = (soql, searchType) => {
  const url = RPMqueryBuilder(soql, API_ENDPOINTS.realPropertyLegals, realPropertyLegalFields, searchType);
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