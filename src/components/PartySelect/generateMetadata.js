//src/components/PartySelect/generateMetadata.js
export const generateMetadata = (partyType, columnName) => {
    return {
      'data-column': columnName,
      'data-doc-type': partyType.doc__type,
      'data-class-code-description': partyType.class_code_description,
    };
  };