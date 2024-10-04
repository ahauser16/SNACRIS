# refactor in progress

## Explanation

The `SearchByPartyNameForm.jsx` component incorporates the `PartyNameSearch.jsx` component to construct part of the SoQL query. The `PartyNameSearch.jsx` component allows users to add conditions to the query, which are then stored in the `queries` state of `SearchByPartyNameForm.jsx`. When the form is submitted, the `fetchRealPropertyPartiesData` function from `api.js` is called with the constructed SoQL query.

The `api.js` file contains the `RPMqueryBuilder` and `buildSoQLQuery` functions, which build the SoQL query string based on the conditions provided. The `fetchRealPropertyPartiesData` function constructs the URL for the API endpoint and makes the GET request using Axios.

## Plan to Incorporate `PartySelect.jsx`

1. Update State Management: Add state management for the selected checkboxes in SearchByPartyNameForm.jsx.
2. Modify PartySelect.jsx: Update PartySelect.jsx to accept props for managing selected checkboxes.
3. Update Query Construction: Modify the RPMqueryBuilder and buildSoQLQuery functions to include the selected checkboxes in the SoQL query.

## Step-by-Step Implementation

### 1. Update State Management in `SearchByPartyNameForm.jsx`

Add state management for the selected checkboxes:

```javascript
import React, { useState } from 'react';
import {
  fetchRealPropertyPartiesData,
  fetchRealPropertyMasterData,
} from '../../api/api';
import PartyNameSearch from '../PartyNameSearch/PartyNameSearch';
import PartySelect from '../PartySelect/PartySelect';
import DateSelect from '../DateSelect/DateSelect';
import BoroughSelect from '../BoroughSelect/BoroughSelect';

import './SearchByPartyNameForm.css';

const SearchByPartyNameForm = ({ setData, setError }) => {
  const [selectedBoroughs, setSelectedBoroughs] = useState([]);
  const [selectedPartyType, setSelectedPartyType] = useState([]);
  const [selectedDocTypeCheckboxes, setSelectedDocTypeCheckboxes] = useState(
    []
  ); // New state for selected checkboxes
  const [soql, setSoql] = useState({
    name: '',
    party_type: '',
    document_date_start: '',
    document_date_end: '',
    borough: [],
    doc_type: '',
  });
  const [queries, setQueries] = useState([]);

  const handlePartyName = (e) => {
    const { name, value } = e.target;
    setSoql((prevSoql) => ({
      ...prevSoql,
      [name]: value,
    }));
  };

  const handleBoroughChange = (selectedBoroughs) => {
    setSelectedBoroughs(selectedBoroughs);
    setSoql((prevSoql) => ({
      ...prevSoql,
      borough: selectedBoroughs,
    }));
  };

  const handlePartySelect = (value) => {
    setSelectedPartyType(value);
    setSoql((prevSoql) => ({
      ...prevSoql,
      party_type: value,
    }));
  };

  const handleCheckboxChange = (selectedIds) => {
    setSelectedCheckboxes(selectedIds);
  };

  const handleAddQuery = (query) => {
    setQueries((prevQueries) => [...prevQueries, query]);
  };

  const handleResetQueries = (newQueries = []) => {
    setQueries(newQueries);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting with SoQL:', soql, 'Queries:', queries);

    try {
      const response = await fetchRealPropertyPartiesData({
        ...soql,
        queries,
        selectedCheckboxes,
      });
      setData(response);
      setError(null); // Reset error state on successful fetch
    } catch (error) {
      console.error('Error fetching data:', error); // Log the error
      setError(error.message);
      setData([]); // Clear data on error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PartyNameSearch
        soql={soql}
        queries={queries}
        handlePartyName={handlePartyName}
        handleAddQuery={handleAddQuery}
        handleResetQueries={handleResetQueries}
      />
      <PartySelect
        selectedPartyType={selectedPartyType}
        setSelectedPartyType={handlePartySelect}
        selectedDocTypeCheckboxes={selectedDocTypeCheckboxes}
        setSelectedDocTypeCheckboxes={handleCheckboxChange}
      />
      <DateSelect soql={soql} setSoql={setSoql} />
      <BoroughSelect
        selectedBoroughs={selectedBoroughs}
        handleBoroughChange={handleBoroughChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchByPartyNameForm;
```

### 2. Modify `PartySelect.jsx`

Update `PartySelect.jsx` to accept props for managing selected checkboxes:

```javascript
import React, { useState, useEffect } from 'react';
import './PartySelect.css';
import partyMap from './partyMap.json';
import { groupByClassCodeDescription } from './utils/groupByClassCodeDescription';
import { checkboxGenerator } from './utils/checkboxGenerator';
import { toCamelCase } from './utils/toCamelCase';
import { toKebabCase } from './utils/toKebabCase';

const PartySelect = ({ selectedCheckboxes, setSelectedCheckboxes }) => {
  const [visibleGroups, setVisibleGroups] = useState({});

  useEffect(() => {
    setSelectedCheckboxes(selectedCheckboxes);
  }, [selectedCheckboxes, setSelectedCheckboxes]);

  const handleCheckboxChange = (
    event,
    docTypeId,
    party1Id,
    party2Id,
    party3Id
  ) => {
    const checkedId = event.target.id;
    const isChecked = event.target.checked;

    setSelectedCheckboxes((prevSelectedIds) => {
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

    setSelectedCheckboxes((prevSelectedIds) => {
      if (isChecked) {
        return [...new Set([...prevSelectedIds, ...allParties])];
      } else {
        return prevSelectedIds.filter((id) => !allParties.includes(id));
      }
    });
  };

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

    setSelectedCheckboxes((prevSelectedIds) =>
      isChecked
        ? [...new Set([...prevSelectedIds, ...allIds])]
        : prevSelectedIds.filter((id) => !allIds.includes(id))
    );
  };

  const hasParty3Type = (group) => group.some((item) => !!item.party3_type);

  const isDocTypeChecked = (docTypeId, party1Id, party2Id, party3Id) => {
    const allParties = [party1Id, party2Id, party3Id].filter(Boolean);
    return (
      allParties.some((id) => selectedCheckboxes.includes(id)) ||
      selectedCheckboxes.includes(docTypeId)
    );
  };

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

    return allIds.every((id) => selectedCheckboxes.includes(id));
  };

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

    setSelectedCheckboxes((prevSelectedIds) =>
      isChecked
        ? [...new Set([...prevSelectedIds, ...allParty1Ids])]
        : prevSelectedIds.filter((id) => !allParty1Ids.includes(id))
    );
  };

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
    return allParty1Ids.every((id) => selectedCheckboxes.includes(id));
  };

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

    setSelectedCheckboxes((prevSelectedIds) =>
      isChecked
        ? [...new Set([...prevSelectedIds, ...allParty2Ids])]
        : prevSelectedIds.filter((id) => !allParty2Ids.includes(id))
    );
  };

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
    return allParty2Ids.every((id) => selectedCheckboxes.includes(id));
  };

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

    setSelectedCheckboxes((prevSelectedIds) =>
      isChecked
        ? [...new Set([...prevSelectedIds, ...allParty3Ids])]
        : prevSelectedIds.filter((id) => !allParty3Ids.includes(id))
    );
  };

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
    return allParty3Ids.every((id) => selectedCheckboxes.includes(id));
  };

  const groupedData = groupByClassCodeDescription(partyMap);

  const toggleVisibility = (groupTitle) => {
    setVisibleGroups((prevVisibleGroups) => ({
      ...prevVisibleGroups,
      [groupTitle]: !prevVisibleGroups[groupTitle],
    }));
  };

  return (
    <div className="party-select-container">
      {Object.entries(groupedData).map(([groupTitle, groupData]) => (
        <fieldset
          key={groupTitle}
          className={`party-group ${toKebabCase(groupTitle)}-grp`}
        >
          <div className="fieldset-toolbar">
            <div className="select-all-docs-container">
              <label className="doc-group-checkbox-controller-label custom-checkbox-label">
                <input
                  className="doc-group-checkbox-controller-input"
                  type="checkbox"
                  onChange={(event) =>
                    handleDocClassCheckboxChange(event, groupData)
                  }
                  checked={areAllDocsSelected(groupData)} // Update to reflect all checkboxes
                />
                Select All
              </label>
            </div>
            <button
              className="toggle-button"
              onClick={() => toggleVisibility(groupTitle)}
            >
              {visibleGroups[groupTitle] ? 'Hide All' : 'Show All'}
            </button>
          </div>
          <legend>
            <span className="hide-when-sidepanel-is-small">Filter By</span>
            {groupTitle}
          </legend>

          <div
            className="fieldset-content"
            style={{
              display: visibleGroups[groupTitle] ? 'inline-block' : 'none',
            }}
          >
            <div className="master-checkbox-row">
              <label className="all-party1-in-group-checkbox-controller-label custom-checkbox-label">
                <input
                  className="all-party1-in-group-checkbox-controller-input custom-checkbox"
                  type="checkbox"
                  onChange={(event) =>
                    handleParty1CheckboxChange(event, groupData)
                  }
                  checked={areAllParty1Selected(groupData)}
                />
                Party 1
              </label>

              <label className="all-party2-in-group-checkbox-controller-label custom-checkbox-label">
                <input
                  className="all-party2-in-group-checkbox-controller-input custom-checkbox"
                  type="checkbox"
                  onChange={(event) =>
                    handleParty2CheckboxChange(event, groupData)
                  }
                  checked={areAllParty2Selected(groupData)}
                />
                Party 2
              </label>

              {hasParty3Type(groupData) && (
                <label className="all-party3-in-group-checkbox-controller-label custom-checkbox-label">
                  <input
                    className="all-party3-in-group-checkbox-controller-input custom-checkbox"
                    type="checkbox"
                    onChange={(event) =>
                      handleParty3CheckboxChange(event, groupData)
                    }
                    checked={areAllParty3Selected(groupData)}
                  />
                  Party 3
                </label>
              )}
            </div>

            {checkboxGenerator(
              groupData,
              handleCheckboxChange,
              handleDocAndPartiesCheckboxChange,
              isDocTypeChecked,
              selectedCheckboxes
            )}
          </div>
        </fieldset>
      ))}
    </div>
  );
};

export default PartySelect;
```

### 3. Update Query Construction in `api.js`

Modify the `RPMqueryBuilder` and `buildSoQLQuery` functions to include the selected checkboxes in the SoQL query:

```javascript
const RPMqueryBuilder = (soql = {}, endpoint, fields) => {
  const soqlQuery = buildSoQLQuery(soql, fields);
  const url = `${endpoint}?${soqlQuery}`;
  console.log('Constructed URL:', url);
  return url;
};

const buildSoQLQuery = (soql, fields) => {
  const whereClauses = [];

  if (soql.queries && soql.queries.length > 0) {
    const queryClauses = soql.queries
      .map((query, index) => {
        const { query: condition, booleanOperator } = query;
        const clause = `${
          index > 0 ? booleanOperator : ''
        } ${buildSoqlFieldQuery('name', condition)}`;
        console.log('Constructed clause:', clause);
        return clause.trim();
      })
      .join(' ');
    whereClauses.push(queryClauses);
  }

  if (soql.selectedCheckboxes && soql.selectedCheckboxes.length > 0) {
    const checkboxClauses = soql.selectedCheckboxes
      .map((id) => `id='${id}'`)
      .join(' OR ');
    whereClauses.push(`(${checkboxClauses})`);
  }

  return `$where=${encodeURIComponent(whereClauses.join(' AND '))}`;
};
```

This plan and implementation should help you incorporate the `PartySelect.jsx` component into the `SearchByPartyNameForm.jsx` file, allowing the selected checkboxes to be included in the SoQL query.
