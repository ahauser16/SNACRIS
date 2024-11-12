// src/components/acrisComponents/RealPropertyParties/Name/SearchModifier/NameInputHybridModifier.jsx
import React from 'react';

const searchTypeDescriptions = {
  contains: "Searches for names that contain the entered term. For example, entering 'john' will match names like 'JOHNSON' or 'SMITH JOHN'. You can use SoQL wildcard syntax such as '%' for any sequence of characters and '_' for any single character. For example, entering '%john%' will match 'JOHNSON' and 'SMITH JOHN', and entering 'j_hn' will match 'JOHN' and 'JAHN'.",
  exact: "Searches for names that exactly match the entered term. For example, entering 'JOHN' will only match names like 'JOHN'.",
  nameParts: "Searches for names that match the entered first, middle, and last names. For example, entering 'JOHN' for first name and 'DOE' for last name will match names like 'JOHN DOE'.",
  business: "Searches for business names that contain the entered term. For example, entering 'TECH' will match business names like 'TECHNOLOGY INC' or 'TECH SOLUTIONS'.",
  exclusion: "Searches for names containing a specific substring but excluding another substring. For example, entering 'JOHN' and 'DOE' will match names like 'JOHN SMITH' but not 'JOHN DOE'.",
  multipleSubstrings: "Searches for names containing one of multiple substrings. For example, entering 'JOHN' or 'DOE' will match names like 'JOHN SMITH' or 'JANE DOE'.",
  combinedInclusionExclusion: "Searches for names containing one substring and excluding another substring. For example, entering 'JOHN' and 'XAVIER' will match names like 'JOHN SMITH' but not 'JOHN XAVIER'.",
  complexCompound: "Searches for names containing one substring and either of two other substrings. For example, entering 'JOHN' and 'DOE' or 'SMITH' will match names like 'JOHN DOE' or 'JOHN SMITH'.",
  startsWith: "Searches for names that start with a specific substring. For example, entering 'JOHN' will match names like 'JOHNSON' or 'JOHN SMITH'.",
  endsWith: "Searches for names that end with a specific substring. For example, entering 'DOE' will match names like 'JOHN DOE' or 'JANE DOE'.",
  multipleExclusion: "Searches for names containing a specific substring but excluding multiple other substrings. For example, entering 'JOHN' and 'DOE' and 'XAVIER' will match names like 'JOHN SMITH' but not 'JOHN DOE' or 'JOHN XAVIER'."
};

const NameInputHybridModifier = ({ value, onChange }) => {
  return (
    <fieldset 
    className="form-group form-group--width-auto"
    style={{ '--field-width': '20ch' }}
    >
      <legend htmlFor="search-type">Search Type</legend>
      <label htmlFor="name-modifier">
        <span>Select a Search Type</span>
      </label>
      <div className="form-field select">
        <select
          id="name-modifier"
          name="name_modifier"
          value={value}
          onChange={onChange}
        >
          <option value="business">Business Name</option>
          <option value="nameParts">Full Name</option>
          <option value="exact">Exact</option>
          <option value="contains">Contains</option>
          <option value="exclusion">Exclusion</option>
          <option value="multipleSubstrings">Multiple Substrings</option>
          <option value="combinedInclusionExclusion">Inclusion and Exclusion</option>
          <option value="complexCompound">Complex Compound</option>
          <option value="startsWith">Starts With</option>
          <option value="endsWith">Ends With</option>
          <option value="multipleExclusion">Multiple Exclusion</option>
        </select>
        <span class="focus"></span>
      </div>
      <p className="search-type-description">
        {searchTypeDescriptions[value]}
      </p>
    </fieldset>
  );
};

export default NameInputHybridModifier;

// 1. **Basic Case-Insensitive Search**
//    - **Feature**: Search for names containing a specific substring.
//    - **Example**: `name ILIKE '%JOHN%'`
//    - **Description**: Finds all records where the name contains "JOHN".

// 2. **Exclusion Search**
//    - **Feature**: Search for names containing a specific substring but excluding another substring.
//    - **Example**: `name ILIKE '%JOHN%' AND name NOT ILIKE '%DOE%'`
//    - **Description**: Finds all records where the name contains "JOHN" but does not contain "DOE".

// 3. **Multiple Substring Search**
//    - **Feature**: Search for names containing one of multiple substrings.
//    - **Example**: `name ILIKE '%JOHN%' OR name ILIKE '%DOE%'`
//    - **Description**: Finds all records where the name contains either "JOHN" or "DOE".

// 4. **Combined Inclusion and Exclusion**
//    - **Feature**: Search for names containing one substring and excluding another substring.
//    - **Example**: `name ILIKE '%JOHN%' AND name NOT ILIKE '%XAVIER%'`
//    - **Description**: Finds all records where the name contains "JOHN" and does not contain "XAVIER".

// 5. **Complex Compound Search**
//    - **Feature**: Search for names containing one substring and either of two other substrings.
//    - **Example**: `name ILIKE '%JOHN%' AND (name ILIKE '%DOE%' OR name ILIKE '%SMITH%')`
//    - **Description**: Finds all records where the name contains "JOHN" and either "DOE" or "SMITH".

// 6. **Starts With Search**
//    - **Feature**: Search for names that start with a specific substring.
//    - **Example**: `name ILIKE 'JOHN%'`
//    - **Description**: Finds all records where the name starts with "JOHN".

// 7. **Ends With Search**
//    - **Feature**: Search for names that end with a specific substring.
//    - **Example**: `name ILIKE '%DOE'`
//    - **Description**: Finds all records where the name ends with "DOE".

// 8. **Multiple Exclusion Search**
//    - **Feature**: Search for names containing a specific substring but excluding multiple other substrings.
//    - **Example**: `name ILIKE '%JOHN%' AND name NOT ILIKE '%DOE%' AND name NOT ILIKE '%XAVIER%'`
//    - **Description**: Finds all records where the name contains "JOHN" but does not contain "DOE" or "XAVIER".

// These features provide flexible and powerful search capabilities using the ILIKE operator along with NOT, AND, and OR operators to handle various search scenarios with wildcard characters.