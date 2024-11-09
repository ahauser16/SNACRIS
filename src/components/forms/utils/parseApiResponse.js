// src/components/forms/utils/parseApiResponse.js

export function parseApiResponse(jsonResponse) {
    try {
      // Parse JSON if it's in string format
      const parsedData = typeof jsonResponse === 'string' ? JSON.parse(jsonResponse) : jsonResponse;
  
      // Check for the expected structure: { response: { data: [...] } }
      if (!parsedData.response || !Array.isArray(parsedData.response.data)) {
        throw new Error("Response format is not { response: { data: [...] } }");
      }
  
      // Parse `data` array fully
      const fullyParsedData = parsedData.response.data.map(record => parseNested(record));
  
      // Return all response properties, with `data` replaced by the parsed array
      return {
        ...parsedData.response,
        data: fullyParsedData
      };
    } catch (error) {
      console.error("Failed to parse response:", error);
      return null;
    }
  
    // Helper function to parse nested structures
    function parseNested(obj) {
      if (Array.isArray(obj)) {
        return obj.map(item => parseNested(item));
      } else if (obj && typeof obj === 'object') {
        return Object.fromEntries(
          Object.entries(obj).map(([key, value]) => [key, parseNested(value)])
        );
      }
      return obj;
    }
  }