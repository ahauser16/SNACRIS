// utils/groupByClassCodeDescription.js
export const groupByClassCodeDescription = (data) => {
    return data.reduce((acc, item) => {
      const key = item.class_code_description;
      if (!acc[key]) {
        acc[key] = []; // Initialize as an array if it doesn't exist
      }
      acc[key].push(item);
      return acc;
    }, {});
  };
  