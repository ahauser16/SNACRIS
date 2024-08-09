// src/utils/api.js
import secrets from 'secrets';

const API_ENDPOINT = `${secrets.REAL_PROPERTY_MASTER_ENDPOINT}.json`;
const APP_TOKEN = secrets.appToken;

const buildQueryParams = (params) => {
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
};

export const fetchRealPropertyMasterData = async () => {
  try {
    const queryString = buildQueryParams(filters);
    const url = `${API_ENDPOINT}?${queryString}`;

    const response = await fetch(API_ENDPOINT, {
      headers: {
        'X-App-Token': APP_TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};