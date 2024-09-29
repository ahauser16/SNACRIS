// src/components/PartySelect/utils/toCamelCase.js
export const toCamelCase = (str) => {
  if (!str) {
    return ''; // Return an empty string if the input is undefined or null
  }

  return str
    .replace(/-([a-z])/g, (g) => g[1].toUpperCase()) // Convert dashes to camelCase
    .replace(/\s+/g, "") // Remove spaces
    .replace(/[^a-zA-Z0-9]/g, ""); // Remove special characters
};


