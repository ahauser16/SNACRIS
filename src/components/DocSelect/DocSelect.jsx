import React from "react";
import docMap from "../AcrisData/DocMapClassTypeParties.json";

const DocSelect = ({
  value,
  onChange,
  handleErrorDisplay,
  errorClass,
  errorType,
  errorParty,
}) => {

  // Get unique classes
  const uniqueClasses = [
    ...new Set(docMap.map((doc) => doc.class_code_description)),
  ];

  // Filter document types based on selected class
  const filteredTypes = docMap.filter(
    (doc) => doc.class_code_description === value.document_class
  );

  // Filter party types based on selected document type
  const filteredParties = docMap.filter(
    (doc) => doc.doc__type === value.doc_type
  );

  // Get unique party types from filtered documents
  const uniqueParties = [
    ...new Set(
      filteredParties.flatMap((doc) => [
        doc.party1_type,
        doc.party2_type,
        doc.party3_type,
      ])
    ),
  ];

  // Generic handler for all select changes, managed by `handleValidationPlusDataTransferToSoql`
  const handleValidationPlusDataTransferToSoql = (e) => {
    const { name, value: inputValue } = e.target;
    validateUserInput(inputValue);

    if (name === "document_class") {
      // Reset doc_type and document_party_type when class changes
      onChange({ target: { name: "doc_type", value: "" } });
      onChange({ target: { name: "document_party_type", value: "" } });
    } else if (name === "doc_type") {
      // Reset document_party_type when document type changes
      onChange({ target: { name: "document_party_type", value: "" } });
    }

    onChange({ target: { name, value: inputValue } });
  };

  // Validation function for input fields
  const validateUserInput = (inputValue) => {
    if (!inputValue) {
      handleErrorDisplay("Input value cannot be empty"); // Example validation, can be extended
    }
  };

  return (
    <div className="form-row">
      <div
        className={`form-group form-group--document_class ${errorClass ? "field-error" : ""
          }`}
      >
        <label htmlFor="doc-class-select">Class</label>
        <div className="form-field select">
          <select
            id="doc-class-select"
            name="document_class"
            value={value.document_class} // From docTypeSoql
            onChange={handleValidationPlusDataTransferToSoql}
            aria-describedby="document-class-description"
          >
            <option value="">Select</option>
            {uniqueClasses.map((classCode) => (
              <option key={classCode} value={classCode}>
                {classCode}
              </option>
            ))}
          </select>
          <span className="focus"></span>
        </div>
        <span className="field-description" id="document-class-description">
          {errorClass}
        </span>
      </div>

      <div
        className={`form-group form-group--doc_type ${errorType ? "field-error" : ""
          }`}
      >
        <label htmlFor="doc-type-select">Document</label>
        <div className="form-field select">
          <select
            id="doc-type-select"
            name="doc_type"
            value={value.doc_type} // From docTypeSoql
            onChange={handleValidationPlusDataTransferToSoql}
            aria-describedby="document-type-description"
            disabled={!value.document_class} // Disable if no class selected
          >
            <option value="">Select</option>
            {filteredTypes.map((doc) => (
              <option key={doc.doc__type} value={doc.doc__type}>
                {doc.doc__type_description} {/* Display description */}
              </option>
            ))}
          </select>
          <span className="focus"></span>
        </div>
        <span className="field-description" id="document-type-description">
          {errorType}
        </span>
      </div>

      <div
        className={`form-group form-group--document_party_type ${errorParty ? "field-error" : ""
          }`}
      >
        <label htmlFor="document-party-type-select">Party</label>
        <div className="form-field select">
          <select
            id="document-party-type-select"
            name="document_party_type"
            value={value.document_party_type} // From docTypeSoql
            onChange={handleValidationPlusDataTransferToSoql}
            aria-describedby="document-party-type-description"
            disabled={!value.doc_type} // Disable if no document type selected
          >
            <option value="">Select</option>
            {uniqueParties.map((partyType, index) => (
              <option key={index} value={partyType}>
                {partyType}
              </option>
            ))}
          </select>
          <span className="focus"></span>
        </div>
        <span
          className="field-description"
          id="document-party-type-description"
        >
          {errorParty}
        </span>
      </div>
    </div>
  );
};

export default DocSelect;
