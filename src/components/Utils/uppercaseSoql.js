// src/utils/uppercaseSoql.js
export const uppercaseSoql = (soql) => {
    const uppercasedSoql = {};
    for (const key in soql) {
      if (typeof soql[key] === 'string') {
        uppercasedSoql[key] = soql[key].toUpperCase();
      } else {
        uppercasedSoql[key] = soql[key];
      }
    }
    return uppercasedSoql;
  };