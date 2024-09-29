import React, { useState } from "react";
import './PartySelect.css';
import partyMap from "../partyMap.json";
import { groupByClassCodeDescription } from "../utils/groupByClassCodeDescription";
import { checkboxGenerator } from "../utils/checkboxGenerator";
import { toKebabCase } from "../utils/toKebabCase";

const PartySelect = () => {
  const [selectedIds, setSelectedIds] = useState({});
  //The `useState` hook manages the state of selected checkboxes. `selectedIds` is an object where keys are group names and values are arrays of selected checkbox IDs.


  // Handle individual checkbox change for party1_type, party2_type, and party3_type
  const handleCheckboxChange = (
    event,
    group,
    docTypeId,
    party1Id,
    party2Id,
    party3Id
  ) => {
    const checkedId = event.target.id;
    const isChecked = event.target.checked;

    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = { ...prevSelectedIds };
      const groupSelectedIds = updatedSelectedIds[group] || [];

      if (isChecked) {
        groupSelectedIds.push(checkedId);
      } else {
        updatedSelectedIds[group] = groupSelectedIds.filter((id) => id !== checkedId);
      }

      updatedSelectedIds[group] = groupSelectedIds;
      return updatedSelectedIds;
    });
  };

  // Handle master checkbox change for doc__type and associated parties
  const handleDocAndPartiesCheckboxChange = (
    event,
    group,
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
      const updatedSelectedIds = { ...prevSelectedIds };
      const groupSelectedIds = updatedSelectedIds[group] || [];

      if (isChecked) {
        updatedSelectedIds[group] = [...new Set([...groupSelectedIds, ...allParties])];
      } else {
        updatedSelectedIds[group] = groupSelectedIds.filter((id) => !allParties.includes(id));
      }

      return updatedSelectedIds;
    });
  };

  // Handle master checkbox change for class_code_description (toggle all)
  const handleDocClassCheckboxChange = (event, groupData, group) => {
    const isChecked = event.target.checked;

    // Generate all checkbox IDs for the group (docType, party1, party2, party3)
    const allIds = groupData.flatMap((item) => [
      `checkbox-${toKebabCase(group)}-${toKebabCase(item.class_code_description)}-${toKebabCase(item.doc__type)}`,
      item.party1_type
        ? `checkbox-${toKebabCase(group)}-${toKebabCase(item.class_code_description)}-${toKebabCase(item.doc__type)}-${toKebabCase(item.party1_type)}`
        : null,
      item.party2_type
        ? `checkbox-${toKebabCase(group)}-${toKebabCase(item.class_code_description)}-${toKebabCase(item.doc__type)}-${toKebabCase(item.party2_type)}`
        : null,
      item.party3_type
        ? `checkbox-${toKebabCase(group)}-${toKebabCase(item.class_code_description)}-${toKebabCase(item.doc__type)}-${toKebabCase(item.party3_type)}`
        : null,
    ]).filter(Boolean); // Remove nulls

    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = { ...prevSelectedIds };
      const groupSelectedIds = updatedSelectedIds[group] || [];

      // If checked, add all the checkbox IDs to the group's selectedIds array
      if (isChecked) {
        updatedSelectedIds[group] = [...new Set([...groupSelectedIds, ...allIds])];
      } else {
        // If unchecked, remove all the checkbox IDs from the group's selectedIds array
        updatedSelectedIds[group] = groupSelectedIds.filter((id) => !allIds.includes(id));
      }

      return updatedSelectedIds;
    });
  };


  // Check if the doc__type checkbox should be checked if **any** of its child checkboxes are toggled
  const isDocTypeChecked = (group, docTypeId, party1Id, party2Id, party3Id) => {
    const groupSelectedIds = selectedIds[group] || [];
    const allParties = [party1Id, party2Id, party3Id].filter(Boolean);
    return (
      allParties.some((id) => groupSelectedIds.includes(id)) ||
      groupSelectedIds.includes(docTypeId)
    );
  };

  // Check if all checkboxes within a class_code_description are selected
  const areAllDocsSelected = (group, groupData) => {
    const groupSelectedIds = selectedIds[group] || [];
    const allIds = groupData
      .flatMap((item) => [
        `checkbox-${toKebabCase(item.class_code_description)}-${toKebabCase(item.doc__type)}`,
        item.party1_type ? `checkbox-${toKebabCase(item.class_code_description)}-${toKebabCase(item.doc__type)}-${toKebabCase(item.party1_type)}` : null,
        item.party2_type ? `checkbox-${toKebabCase(item.class_code_description)}-${toKebabCase(item.doc__type)}-${toKebabCase(item.party2_type)}` : null,
        item.party3_type ? `checkbox-${toKebabCase(item.class_code_description)}-${toKebabCase(item.doc__type)}-${toKebabCase(item.party3_type)}` : null,
      ])
      .filter(Boolean);

    return allIds.every((id) => groupSelectedIds.includes(id));
  };

  // Handle master checkbox change for party1_type
  const handleParty1CheckboxChange = (event, group, groupData) => {
    const isChecked = event.target.checked;
    const allParty1Ids = groupData
      .map((item) =>
        item.party1_type
          ? `checkbox-${toKebabCase(group)}-${toKebabCase(item.class_code_description)}-${toKebabCase(item.doc__type)}-${toKebabCase(item.party1_type)}`
          : null
      )
      .filter(Boolean);

    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = { ...prevSelectedIds };
      const groupSelectedIds = updatedSelectedIds[group] || [];

      updatedSelectedIds[group] = isChecked
        ? [...new Set([...groupSelectedIds, ...allParty1Ids])]
        : groupSelectedIds.filter((id) => !allParty1Ids.includes(id));

      return updatedSelectedIds;
    });
  };

  const areAllParty1Selected = (group, groupData) => {
    const groupSelectedIds = selectedIds[group] || [];
    const allParty1Ids = groupData
      .map((item) =>
        item.party1_type
          ? `checkbox-${toKebabCase(group)}-${toKebabCase(item.class_code_description)}-${toKebabCase(item.doc__type)}-${toKebabCase(item.party1_type)}`
          : null
      )
      .filter(Boolean);

    return allParty1Ids.every((id) => groupSelectedIds.includes(id));
  };

  // Handle master checkbox change for party2_type
  const handleParty2CheckboxChange = (event, group, groupData) => {
    const isChecked = event.target.checked;
    const allParty2Ids = groupData
      .map((item) =>
        item.party2_type ? `checkbox-${toKebabCase(group)}-${toKebabCase(item.class_code_description)}-${toKebabCase(item.doc__type)}-${toKebabCase(item.party2_type)}` : null
      )
      .filter(Boolean);

    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = { ...prevSelectedIds };
      const groupSelectedIds = updatedSelectedIds[group] || [];

      updatedSelectedIds[group] = isChecked ? [...new Set([...groupSelectedIds, ...allParty2Ids])] : groupSelectedIds.filter((id) => !allParty2Ids.includes(id));

      return updatedSelectedIds;
    });
  };

  const areAllParty2Selected = (group, groupData) => {
    const groupSelectedIds = selectedIds[group] || [];
    const allParty2Ids = groupData
      .map((item) =>
        item.party2_type ? `checkbox-${toKebabCase(group)}-${toKebabCase(item.class_code_description)}-${toKebabCase(item.doc__type)}-${toKebabCase(item.party2_type)}` : null
      )
      .filter(Boolean);
    return allParty2Ids.every((id) => groupSelectedIds.includes(id));
  };

  // Handle master checkbox change for party3_type
  const handleParty3CheckboxChange = (event, group, groupData) => {
    const isChecked = event.target.checked;
    const allParty3Ids = groupData
      .map((item) =>
        item.party3_type ? `checkbox-${toKebabCase(group)}-${toKebabCase(item.class_code_description)}-${toKebabCase(item.doc__type)}-${toKebabCase(item.party3_type)}` : null
      )
      .filter(Boolean);

    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = { ...prevSelectedIds };
      const groupSelectedIds = updatedSelectedIds[group] || [];

      updatedSelectedIds[group] = isChecked ? [...new Set([...groupSelectedIds, ...allParty3Ids])] : groupSelectedIds.filter((id) => !allParty3Ids.includes(id));

      return updatedSelectedIds;
    });
  };

  const areAllParty3Selected = (group, groupData) => {
    const groupSelectedIds = selectedIds[group] || [];
    const allParty3Ids = groupData
      .map((item) =>
        item.party3_type ? `checkbox-${toKebabCase(group)}-${toKebabCase(item.class_code_description)}-${toKebabCase(item.doc__type)}-${toKebabCase(item.party3_type)}` : null
      )
      .filter(Boolean);
    return allParty3Ids.every((id) => groupSelectedIds.includes(id));
  };


  // Check if any item in the group has a party3_type
  const hasParty3Type = (group) => group.some((item) => !!item.party3_type);

  const groupedData = groupByClassCodeDescription(partyMap);

  return (
    <div className="party-select-container">
      {Object.entries(groupedData).map(([groupTitle, groupData]) => (
        <fieldset key={groupTitle} className={`party-group ${toKebabCase(groupTitle)}-grp`} id={`filter-by-${toKebabCase(groupTitle)}-grp-using-doc-name-and-party-type`}>
          <legend className={`party-group ${toKebabCase(groupTitle)}-legend`}>Filter By {groupTitle}</legend>

          <div className="master-checkbox-row">
            <label className="checkbox-controller-label custom-checkbox-label" htmlFor={`checkbox-option-to-select-all-docs-that-are-${toKebabCase(groupTitle)}-with-all-party-types`}>
              <input
                id={`checkbox-option-to-select-all-docs-that-are-${toKebabCase(groupTitle)}-with-all-party-types`}
                className={`${toKebabCase(groupTitle)}-chkbx-cntrl-input custom-checkbox-input`}
                type="checkbox"
                onChange={(event) => handleDocClassCheckboxChange(event, groupData, groupTitle)}
                checked={areAllDocsSelected(groupTitle, groupData)}
              />
              Select All {groupTitle}
            </label>

            <label className="checkbox-controller-label custom-checkbox-label" htmlFor={`checkbox-select-all-party1-${toKebabCase(groupTitle)}`}>
              <input
                id={`checkbox-select-all-party1-${toKebabCase(groupTitle)}`}
                className="checkbox-controller-input"
                type="checkbox"
                onChange={(event) => handleParty1CheckboxChange(event, groupTitle, groupData)}
                checked={areAllParty1Selected(groupTitle, groupData)}
              />
              Select All Party1 in {groupTitle}
            </label>

            <label className="checkbox-controller-label custom-checkbox-label" htmlFor={`checkbox-select-all-party2-${toKebabCase(groupTitle)}`}>
              <input
                id={`checkbox-select-all-party2-${toKebabCase(groupTitle)}`}
                className="checkbox-controller-input"
                type="checkbox"
                onChange={(event) => handleParty2CheckboxChange(event, groupTitle, groupData)}
                checked={areAllParty2Selected(groupTitle, groupData)}
              />
              Select All Party2 in {groupTitle}
            </label>

            <label className="checkbox-controller-label custom-checkbox-label" htmlFor={`checkbox-select-all-party3-${toKebabCase(groupTitle)}`}>
              <input
                id={`checkbox-select-all-party3-${toKebabCase(groupTitle)}`}
                className="checkbox-controller-input"
                type="checkbox"
                onChange={(event) => handleParty3CheckboxChange(event, groupTitle, groupData)}
                checked={areAllParty3Selected(groupTitle, groupData)}
              />
              Select All Party3 in {groupTitle}
            </label>
          </div>

          {checkboxGenerator(groupData, handleCheckboxChange, handleDocAndPartiesCheckboxChange, isDocTypeChecked, selectedIds, groupTitle)}
        </fieldset>
      ))}
    </div>
  );
};

export default PartySelect;