import React from "react";
import { toCamelCase } from "./toCamelCase";

export const checkboxGenerator = (
  data,
  handleCheckboxChange,
  handleDocAndPartiesCheckboxChange,
  isDocTypeChecked,
  selectedIds
) => {
  return data.map((item, index) => {
    const classCodeCamelCase = toCamelCase(item.class_code_description);
    const docTypeCamelCase = toCamelCase(item.doc__type);

    const docTypeId = `checkbox${classCodeCamelCase}${docTypeCamelCase}`;
    const party1Id = item.party1_type
      ? `checkbox${classCodeCamelCase}${docTypeCamelCase}${toCamelCase(
          item.party1_type
        )}`
      : null;
    const party2Id = item.party2_type
      ? `checkbox${classCodeCamelCase}${docTypeCamelCase}${toCamelCase(
          item.party2_type
        )}`
      : null;
    const party3Id = item.party3_type
      ? `checkbox${classCodeCamelCase}${docTypeCamelCase}${toCamelCase(
          item.party3_type
        )}`
      : null;

    return (
      <div key={index} className="doc-and-party-container">
        {/* Master checkbox for doc__type */}
        <label
          className="doc-type-checkbox-controller-label custom-checkbox-label"
          htmlFor={docTypeId}
        >
          <input
            value={item.doc__type}
            type="checkbox"
            id={docTypeId}
            checked={isDocTypeChecked(docTypeId, party1Id, party2Id, party3Id)}
            onChange={(event) =>
              handleDocAndPartiesCheckboxChange(
                event,
                docTypeId,
                party1Id,
                party2Id,
                party3Id
              )
            }
            aria-label={`Filter results by ${item.doc__type_description}`}
            className="doc-type-with-parties-checkbox-controller-input"
          />
          {item.doc__type_description}
          {/* <span style={{ display: "block" }}>with parties</span> */}
        </label>

        {/* Checkbox for party1_type */}
        {party1Id ? (
          <label
            className="party1-type-checkbox-controlled-label custom-checkbox-label"
            htmlFor={party1Id}
          >
            <input
              value={item.party1_type}
              className="party1-type-checkbox-controlled-input"
              type="checkbox"
              id={party1Id}
              checked={selectedIds.includes(party1Id)}
              onChange={(event) =>
                handleCheckboxChange(
                  event,
                  docTypeId,
                  party1Id,
                  party2Id,
                  party3Id
                )
              }
              aria-label={`Filter results by ${item.party1_type}`}
            />
            {item.party1_type}
          </label>
        ) : (
          <span>Not Applicable</span>
        )}

        {/* Checkbox for party2_type */}
        {party2Id ? (
          <label
            className="party2-type-checkbox-controlled-label custom-checkbox-label"
            htmlFor={party2Id}
          >
            <input
              value={item.party2_type}
              className="party2-type-checkbox-controlled-input"
              type="checkbox"
              id={party2Id}
              checked={selectedIds.includes(party2Id)}
              onChange={(event) =>
                handleCheckboxChange(
                  event,
                  docTypeId,
                  party1Id,
                  party2Id,
                  party3Id
                )
              }
              aria-label={`Filter results by ${item.party2_type}`}
            />
            {item.party2_type}
          </label>
        ) : (
          <span>Not Applicable</span>
        )}

        {/* Checkbox for party3_type */}
        {
          party3Id ? (
            <label
              className="party3-type-checkbox-controlled-label custom-checkbox-label"
              htmlFor={party3Id}
            >
              <input
                value={item.party3_type}
                className="party3-type-checkbox-controlled-input"
                type="checkbox"
                id={party3Id}
                checked={selectedIds.includes(party3Id)}
                onChange={(event) =>
                  handleCheckboxChange(
                    event,
                    docTypeId,
                    party1Id,
                    party2Id,
                    party3Id
                  )
                }
                aria-label={`Filter results by ${item.party3_type}`}
              />
              {item.party3_type}
            </label>
          ) : null /* Skip rendering if no party3_type */
        }
      </div>
    );
  });
};
