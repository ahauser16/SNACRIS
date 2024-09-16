import React, { useState, useEffect } from 'react';
import partyMap from './partyMap_2024-09-06.json';
import './PartySelect.css';

const PartySelect = ({ selectedPartyType, setSelectedPartyType }) => {
  const [partyTypes, setPartyTypes] = useState([]);
  const [selectedParties, setSelectedParties] = useState([]);
  const [visibleGroups, setVisibleGroups] = useState({
    'MORTGAGES & INSTRUMENTS': false,
    'UCC AND FEDERAL LIENS': false,
    'DEEDS AND OTHER CONVEYANCES': false,
    'OTHER DOCUMENTS': false,
  });

  useEffect(() => {
    setPartyTypes(partyMap);
  }, []);

  const handleCheckboxChange = (partyType) => {
    setSelectedParties((prevSelectedParties) => {
      const isSelected = prevSelectedParties.includes(partyType);
      const newSelectedParties = isSelected
        ? prevSelectedParties.filter((type) => type !== partyType)
        : [...prevSelectedParties, partyType];
      setSelectedPartyType(newSelectedParties);
      return newSelectedParties;
    });
  };

  const toggleGroupVisibility = (group) => {
    setVisibleGroups((prevVisibleGroups) => ({
      ...prevVisibleGroups,
      [group]: !prevVisibleGroups[group],
    }));
  };

  const toggleAllCheckboxes = (classCodeDescription, partyTypeKey) => {
    const classParties = partyTypes.filter((party) => party.class_code_description === classCodeDescription);
    const partyTypesToToggle = classParties.map((party) => party[partyTypeKey]).filter((type) => type);
    setSelectedParties((prevSelectedParties) => {
      const allSelected = partyTypesToToggle.every((type) => prevSelectedParties.includes(type));
      const newSelectedParties = allSelected
        ? prevSelectedParties.filter((type) => !partyTypesToToggle.includes(type))
        : [...new Set([...prevSelectedParties, ...partyTypesToToggle])];
      setSelectedPartyType(newSelectedParties);
      return newSelectedParties;
    });
  };

  const getColor = (classCodeDescription) => {
    switch (classCodeDescription) {
      case 'MORTGAGES & INSTRUMENTS':
        return 'green';
      case 'UCC AND FEDERAL LIENS':
        return 'orange';
      case 'DEEDS AND OTHER CONVEYANCES':
        return 'purple';
      case 'OTHER DOCUMENTS':
        return 'red';
      default:
        return 'black';
    }
  };

  const groupedPartyTypes = partyTypes.reduce((acc, partyType) => {
    const { class_code_description } = partyType;
    if (!acc[class_code_description]) {
      acc[class_code_description] = [];
    }
    acc[class_code_description].push(partyType);
    return acc;
  }, {});

  const generateMetadata = (partyType, columnName) => {
    return {
      'data-col': columnName,
      'data-doc-type': partyType.doc__type,
      'data-class-code-desc': partyType.class_code_description,
    };
  };

  // Establishing the variable based on the JSON data
  const mortgageInstruments_party1col_checkboxes = partyTypes
    .filter(party => party.class_code_description === 'MORTGAGES & INSTRUMENTS')
    .map(party => ({
      ...generateMetadata(party, 'party1_type'),
      value: party.party1_type,
      checked: selectedParties.includes(party.party1_type),
    }));

  return (
    <div className="party-select-container">
      <h2>Filter By Party Type</h2>
      {Object.keys(groupedPartyTypes).map((classCodeDescription) => (
        <div key={classCodeDescription} className="party-group">
          <div className="party-group-header" style={{ color: getColor(classCodeDescription) }}>
            <h3>{classCodeDescription}</h3>
            <button onClick={() => toggleGroupVisibility(classCodeDescription)}>
              {visibleGroups[classCodeDescription] ? 'Hide' : 'Show'}
            </button>
          </div>
          {visibleGroups[classCodeDescription] && (
            <table className="party-group-table">
              <thead>
                <tr>
                  <th>Doc Name</th>
                  <th>
                    Party 1
                    <input
                      type="checkbox"
                      onChange={() => toggleAllCheckboxes(classCodeDescription, 'party1_type')}
                    />
                  </th>
                  <th>
                    Party 2
                    <input
                      type="checkbox"
                      onChange={() => toggleAllCheckboxes(classCodeDescription, 'party2_type')}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {groupedPartyTypes[classCodeDescription].map((partyType) => (
                  <tr key={partyType.doc__type}>
                    <td {...generateMetadata(partyType, 'doc__type')}>{`${partyType.doc__type_description} (${partyType.doc__type})`}</td>
                    <td className="party1" {...generateMetadata(partyType, 'party1_type')}>
                      {partyType.party1_type}
                      <input
                        type="checkbox"
                        value={partyType.party1_type}
                        checked={selectedParties.includes(partyType.party1_type)}
                        onChange={() => handleCheckboxChange(partyType.party1_type)}
                        data-column="party1_type"
                        data-doc-type={partyType.doc__type}
                        data-class-code-description={classCodeDescription}
                        {...generateMetadata(partyType, 'party1_type')}
                      />
                    </td>
                    <td className="party2" {...generateMetadata(partyType, 'party2_type')}>
                      {partyType.party2_type}
                      <input
                        type="checkbox"
                        value={partyType.party2_type}
                        checked={selectedParties.includes(partyType.party2_type)}
                        onChange={() => handleCheckboxChange(partyType.party2_type)}
                        data-column="party2_type"
                        data-doc-type={partyType.doc__type}
                        data-class-code-description={classCodeDescription}
                        {...generateMetadata(partyType, 'party2_type')}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

export default PartySelect;