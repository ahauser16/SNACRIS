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
import DocMapClassTypeParties from '../components/AcrisData/DocMapClassTypeParties.json';

const APP_TOKEN = secrets.appToken;

const RPMqueryBuilder = (soql = {}, endpoint, fields, limit = 10, offset = 0) => {
  const soqlQuery = buildSoQLQuery(soql, fields, limit, offset);
  const url = `${endpoint}?${soqlQuery}`;
  console.log('Constructed URL:', url);
  return url;
};

// Function to map document_class to doc__type values
const mapDocTypeBasedOnDocClass = (documentClass) => {
  return DocMapClassTypeParties
    .filter(doc => doc.class_code_description === documentClass)
    .map(doc => doc.doc__type);
};

// Build SoQL query string
const buildSoQLQuery = (soql, fields, limit, offset) => {
  // Define the fields you want to skip
  const fieldsToSkip = ['document_class', 'document_party_type'];

  let whereClauses = Object.entries(soql)
    // Skip fields like 'document_class' and 'document_party_type'
    .filter(([key]) => !fieldsToSkip.includes(key)) 
    .filter(([key, value]) => value && String(value).trim() !== '') // Ensure valid key-value pairs
    .map(([key, value]) => buildSoqlFieldQuery(key, value)) // Build the query for each field
    .join(' AND ');

  // Handle document_class separately
  if (soql.document_class) {
    const docTypes = mapDocTypeBasedOnDocClass(soql.document_class);
    if (docTypes.length > 0) {
      const docTypeQuery = docTypes.map(docType => `doc_type='${docType}'`).join(' OR ');
      whereClauses += ` AND (${docTypeQuery})`;
    }
  }

  // Log the constructed where clause before encoding
  console.log('Raw SoQL Query:', whereClauses);

  // Ensure that the query is properly encoded and limit the results to the specified number of records
  return `$where=${encodeURIComponent(whereClauses)}&$limit=${limit}&$offset=${offset}&$order=:id`;
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
  const exactMatchStringFields = ['street_name', 'unit', 'street_number', 'state', 'city', 'party_type'];
  const exactMatchNumberFields = ['borough', 'block', 'lot', 'recorded_borough', 'reel_pg', 'reel_nbr', 'reel_yr'];

  const isString = exactMatchStringFields.includes(key);
  const isNumber = exactMatchNumberFields.includes(key);

  if (isString || isNumber) {
    // Exact match for string or number fields
    return startQuery(key, value, isString) + endQuery(isString);
  }

  if (key === 'document_date') {
    if (value.includes(' - ')) {
      // Handle date range
      const [startDate, endDate] = value.split(' - ');
      const formattedStartDate = moment(startDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
      const formattedEndDate = moment(endDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
      return `document_date BETWEEN '${formattedStartDate}' AND '${formattedEndDate}'`;
    } else {
      // Handle exact date
      const formattedDate = moment(value, 'YYYY-MM-DD').format('YYYY-MM-DD');
      return `document_date = '${formattedDate}'`;
    }
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
    return {
      data: response.data,
      totalRecords: response.headers['x-total-count'] || response.data.length,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Pagination functions
export const fetchPaginatedData = (soql, endpoint, fields, limit, offset) => {
  const url = RPMqueryBuilder(soql, endpoint, fields, limit, offset);
  return fetchData(url);
};

//API endpoint specific functions
export const fetchRealPropertyMasterData = (docTypeSoql, limit = 10, offset = 0) => {
  return fetchPaginatedData(docTypeSoql, API_ENDPOINTS.realPropertyMaster, realPropertyMasterFields, limit, offset);
};

export const fetchRealPropertyPartiesData = (partyNameSoql, limit = 10, offset = 0) => {
  return fetchPaginatedData(partyNameSoql, API_ENDPOINTS.realPropertyParties, realPropertyPartiesFields, limit, offset);
};

export const fetchRealPropertyLegalsData = (addressSoql, limit = 10, offset = 0) => {
  return fetchPaginatedData(addressSoql, API_ENDPOINTS.realPropertyLegals, realPropertyLegalFields, limit, offset);
};

export const fetchRealPropertyReferencesData = (soql, limit = 10, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.realPropertyReferences, realPropertyReferencesFields, limit, offset);
};

export const fetchRealPropertyRemarksData = (soql, limit = 10, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.realPropertyRemarks, realPropertyRemarksFields, limit, offset);
};

export const fetchPersonalPropertyMasterData = (soql, limit = 10, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.personalPropertyMaster, personalPropertyMasterFields, limit, offset);
};

export const fetchPersonalPropertyLegalsData = (soql, limit = 10, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.personalPropertyLegals, personalPropertyLegalsFields, limit, offset);
};

export const fetchPersonalPropertyPartiesData = (soql, limit = 10, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.personalPropertyParties, personalPropertyPartiesFields, limit, offset);
};

export const fetchPersonalPropertyReferencesData = (soql, limit = 10, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.personalPropertyReferences, personalPropertyReferencesFields, limit, offset);
};

export const fetchPersonalPropertyRemarksData = (soql, limit = 10, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.personalPropertyRemarks, personalPropertyRemarksFields, limit, offset);
};

export const fetchDocumentControlCodesData = (soql, limit = 10, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.documentControlCodes, documentControlCodesFields, limit, offset);
};

export const fetchStateCodesData = (soql, limit = 10, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.stateCodes, stateCodesFields, limit, offset);
};

export const fetchCountryCodesData = (soql, limit = 10, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.countryCodes, countryCodesFields, limit, offset);
};

export const fetchUccCollateralCodesData = (soql, limit = 10, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.uccCollateralCodes, uccCollateralCodesFields, limit, offset);
};

export const fetchPropertyTypeCodesData = (soql, limit = 10, offset = 0) => {
  return fetchPaginatedData(soql, API_ENDPOINTS.propertyTypeCodes, propertyTypeCodesFields, limit, offset);
};

export { RPMqueryBuilder, buildSoQLQuery };