import React, { useState } from "react";
import './PartySelect.css';
import partyMap from "./partyMap.json";
import { groupByClassCodeDescription } from "./utils/groupByClassCodeDescription";
import { checkboxGenerator } from "./utils/checkboxGenerator"; // Import checkboxGenerator
import { toCamelCase } from "./utils/toCamelCase"; // Import checkboxGenerator

const PartySelect = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  // Handle individual checkbox change for party1_type, party2_type, and party3_type
  const handleCheckboxChange = (
    event,
    docTypeId,
    party1Id,
    party2Id,
    party3Id
  ) => {
    const checkedId = event.target.id;
    const isChecked = event.target.checked;

    setSelectedIds((prevSelectedIds) => {
      let updatedSelectedIds = [...prevSelectedIds];

      if (isChecked) {
        updatedSelectedIds.push(checkedId);
      } else {
        updatedSelectedIds = updatedSelectedIds.filter(
          (id) => id !== checkedId
        );
      }

      const allParties = [party1Id, party2Id, party3Id].filter(Boolean);
      const isAnyPartySelected = allParties.some((id) =>
        updatedSelectedIds.includes(id)
      );

      if (isAnyPartySelected && !updatedSelectedIds.includes(docTypeId)) {
        updatedSelectedIds.push(docTypeId); // Check parent doc__type checkbox
      } else if (
        !isAnyPartySelected &&
        updatedSelectedIds.includes(docTypeId)
      ) {
        updatedSelectedIds = updatedSelectedIds.filter(
          (id) => id !== docTypeId
        ); // Uncheck parent doc__type checkbox
      }

      return updatedSelectedIds;
    });
  };

  // Handle master checkbox change for doc__type and associated parties
  const handleDocAndPartiesCheckboxChange = (
    event,
    docTypeId,
    party1Id,
    party2Id,
    party3Id
  ) => {
    const isChecked = event.target.checked;

    const allParties = [docTypeId, party1Id, party2Id, party3Id].filter(
      Boolean
    );

    setSelectedIds((prevSelectedIds) => {
      if (isChecked) {
        return [...new Set([...prevSelectedIds, ...allParties])];
      } else {
        return prevSelectedIds.filter((id) => !allParties.includes(id));
      }
    });
  };

  // Handle master checkbox change for class_code_description (toggle all)
  const handleDocClassCheckboxChange = (event, group) => {
    const isChecked = event.target.checked;

    const allIds = group
      .flatMap((item) => [
        `checkbox${toCamelCase(item.class_code_description)}${toCamelCase(
          item.doc__type
        )}`,
        item.party1_type
          ? `checkbox${toCamelCase(item.class_code_description)}${toCamelCase(
              item.doc__type
            )}${toCamelCase(item.party1_type)}`
          : null,
        item.party2_type
          ? `checkbox${toCamelCase(item.class_code_description)}${toCamelCase(
              item.doc__type
            )}${toCamelCase(item.party2_type)}`
          : null,
        item.party3_type
          ? `checkbox${toCamelCase(item.class_code_description)}${toCamelCase(
              item.doc__type
            )}${toCamelCase(item.party3_type)}`
          : null,
      ])
      .filter(Boolean); // Remove null values

    setSelectedIds((prevSelectedIds) =>
      isChecked
        ? [...new Set([...prevSelectedIds, ...allIds])]
        : prevSelectedIds.filter((id) => !allIds.includes(id))
    );
  };

  // Check if any item in the group has a party3_type
  const hasParty3Type = (group) => group.some((item) => !!item.party3_type);

  // Check if the doc__type checkbox should be checked if **any** of its child checkboxes are toggled
  const isDocTypeChecked = (docTypeId, party1Id, party2Id, party3Id) => {
    const allParties = [party1Id, party2Id, party3Id].filter(Boolean);
    return (
      allParties.some((id) => selectedIds.includes(id)) ||
      selectedIds.includes(docTypeId)
    );
  };

  // Check if all checkboxes within a class_code_description are selected
  const areAllDocsSelected = (group) => {
    const allIds = group
      .flatMap((item) => [
        `checkbox${toCamelCase(item.class_code_description)}${toCamelCase(
          item.doc__type
        )}`,
        item.party1_type
          ? `checkbox${toCamelCase(item.class_code_description)}${toCamelCase(
              item.doc__type
            )}${toCamelCase(item.party1_type)}`
          : null,
        item.party2_type
          ? `checkbox${toCamelCase(item.class_code_description)}${toCamelCase(
              item.doc__type
            )}${toCamelCase(item.party2_type)}`
          : null,
        item.party3_type
          ? `checkbox${toCamelCase(item.class_code_description)}${toCamelCase(
              item.doc__type
            )}${toCamelCase(item.party3_type)}`
          : null,
      ])
      .filter(Boolean); // Remove null values

    // Ensure all checkboxes are selected
    return allIds.every((id) => selectedIds.includes(id));
  };

  // Handle master checkbox change for party1_type
  const handleParty1CheckboxChange = (event, group) => {
    const isChecked = event.target.checked;
    const allParty1Ids = group
      .map((item) =>
        item.party1_type
          ? `checkbox${toCamelCase(item.class_code_description)}${toCamelCase(
              item.doc__type
            )}${toCamelCase(item.party1_type)}`
          : null
      )
      .filter(Boolean); // Filter out null values

    setSelectedIds((prevSelectedIds) =>
      isChecked
        ? [...new Set([...prevSelectedIds, ...allParty1Ids])]
        : prevSelectedIds.filter((id) => !allParty1Ids.includes(id))
    );
  };

  // Check if all party1 checkboxes within a class_code_description are selected
  const areAllParty1Selected = (group) => {
    const allParty1Ids = group
      .map((item) =>
        item.party1_type
          ? `checkbox${toCamelCase(item.class_code_description)}${toCamelCase(
              item.doc__type
            )}${toCamelCase(item.party1_type)}`
          : null
      )
      .filter(Boolean); // Filter out null values
    return allParty1Ids.every((id) => selectedIds.includes(id));
  };

  // Handle master checkbox change for party2_type
  const handleParty2CheckboxChange = (event, group) => {
    const isChecked = event.target.checked;
    const allParty2Ids = group
      .map((item) =>
        item.party2_type
          ? `checkbox${toCamelCase(item.class_code_description)}${toCamelCase(
              item.doc__type
            )}${toCamelCase(item.party2_type)}`
          : null
      )
      .filter(Boolean); // Filter out null values

    setSelectedIds((prevSelectedIds) =>
      isChecked
        ? [...new Set([...prevSelectedIds, ...allParty2Ids])]
        : prevSelectedIds.filter((id) => !allParty2Ids.includes(id))
    );
  };

  // Check if all party2 checkboxes within a class_code_description are selected
  const areAllParty2Selected = (group) => {
    const allParty2Ids = group
      .map((item) =>
        item.party2_type
          ? `checkbox${toCamelCase(item.class_code_description)}${toCamelCase(
              item.doc__type
            )}${toCamelCase(item.party2_type)}`
          : null
      )
      .filter(Boolean); // Filter out null values
    return allParty2Ids.every((id) => selectedIds.includes(id));
  };

  // Handle master checkbox change for party3_type
  const handleParty3CheckboxChange = (event, group) => {
    const isChecked = event.target.checked;
    const allParty3Ids = group
      .map((item) =>
        item.party3_type
          ? `checkbox${toCamelCase(item.class_code_description)}${toCamelCase(
              item.doc__type
            )}${toCamelCase(item.party3_type)}`
          : null
      )
      .filter(Boolean); // Filter out null values

    setSelectedIds((prevSelectedIds) =>
      isChecked
        ? [...new Set([...prevSelectedIds, ...allParty3Ids])]
        : prevSelectedIds.filter((id) => !allParty3Ids.includes(id))
    );
  };

  // Check if all party3 checkboxes within a class_code_description are selected
  const areAllParty3Selected = (group) => {
    const allParty3Ids = group
      .map((item) =>
        item.party3_type
          ? `checkbox${toCamelCase(item.class_code_description)}${toCamelCase(
              item.doc__type
            )}${toCamelCase(item.party3_type)}`
          : null
      )
      .filter(Boolean); // Filter out null values
    return allParty3Ids.every((id) => selectedIds.includes(id));
  };

  const groupedData = groupByClassCodeDescription(partyMap);

  return (
    <div className="party-select-container">
      {Object.entries(groupedData).map(([groupTitle, groupData]) => (
        <fieldset key={groupTitle} className={`party-group ${groupTitle}`}>
          <legend>Filter By {groupTitle}</legend>

          <div className="master-checkbox-row">
            {/* Master checkbox for entire doc group */}
            <label className="checkbox-controller-label custom-checkbox-label">
              <input
                className="checkbox-controller-input"
                type="checkbox"
                onChange={(event) =>
                  handleDocClassCheckboxChange(event, groupData)
                }
                checked={areAllDocsSelected(groupData)} // Update to reflect all checkboxes
              />
              Select All {groupTitle}
            </label>

            {/* Master checkbox for party1_type */}
            <label className="checkbox-controller-label custom-checkbox-label">
              <input
                className="checkbox-controller-input"
                type="checkbox"
                onChange={(event) =>
                  handleParty1CheckboxChange(event, groupData)
                }
                checked={areAllParty1Selected(groupData)}
              />
              Select All Party1
            </label>

            {/* Master checkbox for party2_type */}
            <label className="checkbox-controller-label custom-checkbox-label">
              <input
                className="checkbox-controller-input"
                type="checkbox"
                onChange={(event) =>
                  handleParty2CheckboxChange(event, groupData)
                }
                checked={areAllParty2Selected(groupData)}
              />
              Select All Party2
            </label>

            {/* Only render master checkbox for party3_type if it exists in the group */}
            {hasParty3Type(groupData) && (
              <label className="checkbox-controller-label custom-checkbox-label">
                <input
                  className="checkbox-controller-input"
                  type="checkbox"
                  onChange={(event) =>
                    handleParty3CheckboxChange(event, groupData)
                  }
                  checked={areAllParty3Selected(groupData)}
                />
                Select All Party3
              </label>
            )}
          </div>

          {checkboxGenerator(
            groupData,
            handleCheckboxChange,
            handleDocAndPartiesCheckboxChange,
            isDocTypeChecked,
            selectedIds
          )}
        </fieldset>
      ))}
    </div>
  );
};

export default PartySelect;
