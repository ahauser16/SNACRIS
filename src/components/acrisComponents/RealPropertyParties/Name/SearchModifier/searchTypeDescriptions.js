const searchTypeDescriptions = {
    contains: "Searches for names that contain the entered term. For example, entering 'john' will match names like 'JOHNSON' or 'SMITH JOHN'. You can use SoQL wildcard syntax such as '%' for any sequence of characters and '_' for any single character. For example, entering '%john%' will match 'JOHNSON' and 'SMITH JOHN', and entering 'j_hn' will match 'JOHN' and 'JAHN'.",
    exact: "Searches for names that exactly match the entered term. For example, entering 'JOHN' will only match names like 'JOHN'.",
    nameParts: "Searches for names that match the entered first, middle, and last names. For example, entering 'JOHN' for first name and 'DOE' for last name will match names like 'JOHN DOE'.",
    business: "Searches for business names that contain the entered term. For example, entering 'TECH' will match business names like 'TECHNOLOGY INC' or 'TECH SOLUTIONS'.",
    exclusion: "Searches for names containing a specific substring but excluding another substring. For example, entering 'JOHN' and 'DOE' will match names like 'JOHN SMITH' but not 'JOHN DOE'.",
    multipleSubstrings: "Searches for names containing one of multiple substrings. For example, entering 'JOHN' or 'DOE' will match names like 'JOHN SMITH' or 'JANE DOE'.",
    inclusionExclusion: "Searches for names containing one substring and excluding another substring. For example, entering 'JOHN' and 'XAVIER' will match names like 'JOHN SMITH' but not 'JOHN XAVIER'.",
    complexCompound: "Searches for names containing one substring and either of two other substrings. For example, entering 'JOHN' and 'DOE' or 'SMITH' will match names like 'JOHN DOE' or 'JOHN SMITH'.",
    startsWith: "Searches for names that start with a specific substring. For example, entering 'JOHN' will match names like 'JOHNSON' or 'JOHN SMITH'.",
    endsWith: "Searches for names that end with a specific substring. For example, entering 'DOE' will match names like 'JOHN DOE' or 'JANE DOE'.",
    multipleExclusion: "Searches for names containing a specific substring but excluding multiple other substrings. For example, entering 'JOHN' and 'DOE' and 'XAVIER' will match names like 'JOHN SMITH' but not 'JOHN DOE' or 'JOHN XAVIER'."
  };
  
  export default searchTypeDescriptions;