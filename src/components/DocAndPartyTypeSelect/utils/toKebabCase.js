export const toKebabCase = (str) => {
    if (!str) {
      return ''; // Return an empty string if the input is undefined or null
    }
  
    return str
      .toLowerCase() // Convert to lowercase
      .replace(/&/g, 'and') // Replace '&' with 'and'
      .replace(/[^a-zA-Z0-9\s-]/g, '') // Remove special characters except hyphen
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/-+/g, '-'); // Ensure no consecutive dashes
  };