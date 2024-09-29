import React from "react";
import { toKebabCase } from "../utils/toKebabCase";

export const checkboxGenerator = (
    data,
    handleCheckboxChange,
    handleDocAndPartiesCheckboxChange,
    isDocTypeChecked,
    selectedIds,
    group
) => {
    return data.map((item, index) => {
        const classCodeKebabCase = toKebabCase(item.class_code_description);
        const docTypeKebabCase = toKebabCase(item.doc__type);

        const docTypeId = `checkbox-${toKebabCase(group)}-${classCodeKebabCase}-${docTypeKebabCase}`;
        const party1Id = item.party1_type
            ? `checkbox-${toKebabCase(group)}-${classCodeKebabCase}-${docTypeKebabCase}-${toKebabCase(item.party1_type)}`
            : null;
        const party2Id = item.party2_type
            ? `checkbox-${toKebabCase(group)}-${classCodeKebabCase}-${docTypeKebabCase}-${toKebabCase(item.party2_type)}`
            : null;
        const party3Id = item.party3_type
            ? `checkbox-${toKebabCase(group)}-${classCodeKebabCase}-${docTypeKebabCase}-${toKebabCase(item.party3_type)}`
            : null;

        const groupSelectedIds = selectedIds[group] || [];

        return (
            <div key={index} className="doc-and-party-container">
                <label
                    className="doc-type-checkbox-controller-label custom-checkbox-label"
                    htmlFor={docTypeId}
                >
                    <input
                        value={item.doc__type}
                        type="checkbox"
                        id={docTypeId}
                        checked={isDocTypeChecked(group, docTypeId, party1Id, party2Id, party3Id)}
                        onChange={(event) =>
                            handleDocAndPartiesCheckboxChange(event, group, docTypeId, party1Id, party2Id, party3Id)
                        }
                        aria-label={`Filter results by ${item.doc__type_description}`}
                        className="checkbox-controller-input"
                    />
                    {item.doc__type_description}
                </label>

                {party1Id && (
                    <label htmlFor={party1Id} className="custom-checkbox-label">
                        <input
                            value={item.party1_type}
                            type="checkbox"
                            id={party1Id}
                            checked={groupSelectedIds.includes(party1Id)}
                            onChange={(event) =>
                                handleCheckboxChange(event, group, docTypeId, party1Id, party2Id, party3Id)
                            }
                            aria-label={`Filter results by ${item.party1_type}`}
                        />
                        {item.party1_type}
                    </label>
                )}


                {party2Id && (
                    <label htmlFor={party2Id} className="custom-checkbox-label">
                        <input
                            value={item.party2_type}
                            type="checkbox"
                            id={party2Id}
                            checked={groupSelectedIds.includes(party2Id)}
                            onChange={(event) =>
                                handleCheckboxChange(event, group, docTypeId, party1Id, party2Id, party3Id)
                            }
                            aria-label={`Filter results by ${item.party2_type}`}
                        />
                        {item.party2_type}
                    </label>
                )}

                {party3Id && (
                    <label htmlFor={party3Id} className="custom-checkbox-label">
                        <input
                            value={item.party3_type}
                            type="checkbox"
                            id={party3Id}
                            checked={groupSelectedIds.includes(party3Id)}
                            onChange={(event) =>
                                handleCheckboxChange(event, group, docTypeId, party1Id, party2Id, party3Id)
                            }
                            aria-label={`Filter results by ${item.party3_type}`}
                        />
                        {item.party3_type}
                    </label>
                )}
            </div>
        );
    });
};