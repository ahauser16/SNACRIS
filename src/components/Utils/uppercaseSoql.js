// src/utils/uppercaseSoql.js
export const uppercaseSoql = (soql) => {
  const uppercasedSoql = {};
  for (const key in soql) {
    if (typeof soql[key] === 'string') {
      uppercasedSoql[key] = soql[key].toUpperCase();
    } else if (typeof soql[key] === 'object' && soql[key] !== null) {
      uppercasedSoql[key] = uppercaseSoql(soql[key]); // Recursively apply to nested objects
    } else {
      uppercasedSoql[key] = soql[key];
    }
  }
  return uppercasedSoql;
};