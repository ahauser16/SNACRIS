import React, { useState } from 'react';
import './PartySelect.css';
import MortgagesInstrumentsRows from './MortgagesInstrumentsRows';
import UccFedLiensRows from './UccFedLiensRows';
import DeedsOtherConveyancesRows from './DeedsOtherConveyancesRows';
import OtherDocumentsRows from './OtherDocumentsRows';

const PartySelect = () => {
  const [visibleGroups, setVisibleGroups] = useState({
    mortgagesInstruments: false,
    uccFederalLiens: false,
    deedsOtherConveyances: false,
    otherDocuments: false,
  });

  const toggleGroupVisibility = (group) => {
    setVisibleGroups((prevVisibleGroups) => ({
      ...prevVisibleGroups,
      [group]: !prevVisibleGroups[group],
    }));
  };

  const toggleCheckboxes = (selector) => {
    const checkboxes = document.querySelectorAll(selector);
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    checkboxes.forEach(checkbox => {
      checkbox.checked = !allChecked;
    });
  };

  const handleToggleAllDocCheckboxes = (classCodeDescription) => {
    toggleCheckboxes(`input[data-class-code-description="${classCodeDescription}"][data-column="doc_type"]`);
    const rows = document.querySelectorAll(`input[data-class-code-description="${classCodeDescription}"][data-column="doc_type"]`);
    rows.forEach(row => {
      const rowValue = row.getAttribute('data-row');
      toggleCheckboxes(`input[data-row="${rowValue}"]`);
    });
  };

  const handleToggleColumnCheckboxes = (classCodeDescription, column) => {
    toggleCheckboxes(`input[data-class-code-description="${classCodeDescription}"][data-column="${column}"]`);
  };

  return (
    <div className="party-select-container">
      <div className="party-group mortgages-instruments-group">
        <h2>Filter by Document Type or by Party Type</h2>
        <div className="party-group-header">
          <h3>MORTGAGES & INSTRUMENTS</h3>
          <button className="show-hide-grp--btn" onClick={() => toggleGroupVisibility('mortgagesInstruments')}>
            {visibleGroups.mortgagesInstruments ? 'Hide' : 'Show'}
          </button>
        </div>
        {visibleGroups.mortgagesInstruments && (
          <table className="party-group-table mortg-inst-tbl-bdy">
            <thead>
              <tr>
                <th>Document Name
                  <input
                    type="checkbox"
                    className="toggle-all-doc-checkboxes-in-same-column-and-group"
                    onChange={() => handleToggleAllDocCheckboxes('MORTGAGES & INSTRUMENTS')}
                    data-class-code-description="MORTGAGES & INSTRUMENTS"
                  />
                </th>
                <th>
                  Party 1
                  <input
                    type="checkbox"
                    className="toggle-all-party1-checkboxes-in-same-column-and-group"
                    onChange={() => handleToggleColumnCheckboxes('MORTGAGES & INSTRUMENTS', 'party1_type')}
                    data-class-code-description="MORTGAGES & INSTRUMENTS"
                  />
                </th>
                <th>
                  Party 2
                  <input
                    className="toggle-all-party2-checkboxes-in-same-column-and-group"
                    type="checkbox"
                    onChange={() => handleToggleColumnCheckboxes('MORTGAGES & INSTRUMENTS', 'party2_type')}
                    data-class-code-description="MORTGAGES & INSTRUMENTS"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="docRow">
                <td className="docName">AGREEMENT (AGMT)
                  <input
                    type="checkbox"
                    className="toggle-all-checkboxes-in-row"
                    value="AGMT"
                    checked={false}
                    onChange={() => toggleCheckboxes('input[data-row="AGMT"]')}
                    data-row="AGMT"
                    data-column="doc_type"
                    data-doc-type="AGMT"
                    data-class-code-description="MORTGAGES & INSTRUMENTS"
                  />
                </td>
                <td className="party1">
                  PARTY 1
                  <input
                    type="checkbox"
                    className="toggle-self"
                    value="PARTY 1"
                    checked={false}
                    onChange={() => { }}
                    data-row="AGMT"
                    data-column="party1_type"
                    data-doc-type="AGMT"
                    data-class-code-description="MORTGAGES & INSTRUMENTS"
                  />
                </td>
                <td className="party2">
                  PARTY 2
                  <input
                    type="checkbox"
                    className="toggle-self"
                    value="PARTY 2"
                    checked={false}
                    onChange={() => { }}
                    data-row="AGMT"
                    data-column="party2_type"
                    data-doc-type="AGMT"
                    data-class-code-description="MORTGAGES & INSTRUMENTS"
                  />
                </td>
              </tr>
              <MortgagesInstrumentsRows />
            </tbody>
          </table>
        )}
      </div>
      <div className="party-group">
        <div className="party-group-header">
          <h3>UCC AND FEDERAL LIENS</h3>
          <button onClick={() => toggleGroupVisibility('uccFederalLiens')}>
            {visibleGroups.uccFederalLiens ? 'Hide' : 'Show'}
          </button>
        </div>
        {visibleGroups.uccFederalLiens && (
          <table className="party-group-table ucc-fed-lien-tbl-bdy">
            <thead>
              <tr>
                <th>Document Name
                  <input
                    type="checkbox"
                    className="toggle-all-doc-checkboxes-in-same-column-and-group"
                    onChange={() => handleToggleAllDocCheckboxes('UCC AND FEDERAL LIENS')}
                    data-class-code-description="UCC AND FEDERAL LIENS"
                  />
                </th>
                <th>
                  Party 1
                  <input
                    type="checkbox"
                    className="toggle-all-party1-checkboxes-in-same-column-and-group"
                    onChange={() => handleToggleColumnCheckboxes('UCC AND FEDERAL LIENS', 'party1_type')}
                    data-class-code-description="UCC AND FEDERAL LIENS"
                  />
                </th>
                <th>
                  Party 2
                  <input
                    className="toggle-all-party2-checkboxes-in-same-column-and-group"
                    type="checkbox"
                    onChange={() => handleToggleColumnCheckboxes('UCC AND FEDERAL LIENS', 'party2_type')}
                    data-class-code-description="UCC AND FEDERAL LIENS"
                  />
                </th>
                <th>
                  Party 3
                  <input
                    type="checkbox"
                    className="toggle-all-party3-checkboxes-in-same-column-and-group"
                    onChange={() => handleToggleColumnCheckboxes('UCC AND FEDERAL LIENS', 'party3_type')}
                    data-class-code-description="UCC AND FEDERAL LIENS"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AMENDMENT OF FEDERAL LIEN (AMFL)
                  <input
                    type="checkbox"
                    value="AMFL"
                    checked={false}
                    onChange={() => toggleCheckboxes('input[data-row="AMFL"]')}
                    data-column="doc_type"
                    data-doc-type="AMFL"
                    data-class-code-description="UCC AND FEDERAL LIENS"
                  />
                </td>
                <td className="party1">
                  DEBTOR
                  <input
                    type="checkbox"
                    value="DEBTOR"
                    checked={false}
                    onChange={() => { }}
                    data-column="party1_type"
                    data-doc-type="AMFL"
                    data-class-code-description="UCC AND FEDERAL LIENS"
                  />
                </td>
                <td className="party2">
                  SECURED PARTY
                  <input
                    type="checkbox"
                    value="SECURED PARTY"
                    checked={false}
                    onChange={() => { }}
                    data-column="party2_type"
                    data-doc-type="AMFL"
                    data-class-code-description="UCC AND FEDERAL LIENS"
                  />
                </td>
              </tr>
              <UccFedLiensRows />
            </tbody>
          </table>
        )}
      </div>
      <div className="party-group">
        <div className="party-group-header">
          <h3>DEEDS AND OTHER CONVEYANCES</h3>
          <button onClick={() => toggleGroupVisibility('deedsOtherConveyances')}>
            {visibleGroups.deedsOtherConveyances ? 'Hide' : 'Show'}
          </button>
        </div>
        {visibleGroups.deedsOtherConveyances && (
          <table className="party-group-table deeds-othr-cnvyncs-tbl-bdy">
            <thead>
              <tr>
                <th>Document Name
                  <input
                    type="checkbox"
                    className="toggle-all-doc-checkboxes-in-same-column-and-group"
                    onChange={() => handleToggleAllDocCheckboxes('DEEDS AND OTHER CONVEYANCES')}
                    data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                  />
                </th>
                <th>
                  Party 1
                  <input
                    type="checkbox"
                    className="toggle-all-party1-checkboxes-in-same-column-and-group"
                    onChange={() => handleToggleColumnCheckboxes('DEEDS AND OTHER CONVEYANCES', 'party1_type')}
                    data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                  />
                </th>
                <th>
                  Party 2
                  <input
                    className="toggle-all-party2-checkboxes-in-same-column-and-group"
                    type="checkbox"
                    onChange={() => handleToggleColumnCheckboxes('DEEDS AND OTHER CONVEYANCES', 'party2_type')}
                    data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                  />
                </th>
                <th>
                  Party 3
                  <input
                    type="checkbox"
                    className="toggle-all-party3-checkboxes-in-same-column-and-group"
                    onChange={() => handleToggleColumnCheckboxes('DEEDS AND OTHER CONVEYANCES', 'party3_type')}
                    data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UNIT ASSIGNMENT (ASTU)
                  <input
                    type="checkbox"
                    value="ASTU"
                    checked={false}
                    onChange={() => toggleCheckboxes('input[data-row="ASTU"]')}
                    data-column="doc_type"
                    data-doc-type="ASTU"
                    data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                  />
                </td>
                <td className="party1">
                  GRANTOR/SELLER
                  <input
                    type="checkbox"
                    value="GRANTOR/SELLER"
                    checked={false}
                    onChange={() => { }}
                    data-column="party1_type"
                    data-doc-type="ASTU"
                    data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                  />
                </td>
                <td className="party2">
                  GRANTEE/BUYER
                  <input
                    type="checkbox"
                    value="GRANTEE/BUYER"
                    checked={false}
                    onChange={() => { }}
                    data-column="party2_type"
                    data-doc-type="ASTU"
                    data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                  />
                </td>
              </tr>
              <DeedsOtherConveyancesRows />
            </tbody>
          </table>
        )}
      </div>
      <div className="party-group">
        <div className="party-group-header">
          <h3>OTHER DOCUMENTS</h3>
          <button onClick={() => toggleGroupVisibility('otherDocuments')}>
            {visibleGroups.otherDocuments ? 'Hide' : 'Show'}
          </button>
        </div>
        {visibleGroups.otherDocuments && (
          <table className="party-group-table other-docs-tbl-bdy">
            <thead>
              <tr>
                <th>Document Name
                  <input
                    type="checkbox"
                    className="toggle-all-doc-checkboxes-in-same-column-and-group"
                    onChange={() => handleToggleAllDocCheckboxes('OTHER DOCUMENTS')}
                    data-class-code-description="OTHER DOCUMENTS"
                  />
                </th>
                <th>
                  Party 1
                  <input
                    type="checkbox"
                    className="toggle-all-party1-checkboxes-in-same-column-and-group"
                    onChange={() => handleToggleColumnCheckboxes('OTHER DOCUMENTS', 'party1_type')}
                    data-class-code-description="OTHER DOCUMENTS"
                  />
                </th>
                <th>
                  Party 2
                  <input
                    className="toggle-all-party2-checkboxes-in-same-column-and-group"
                    type="checkbox"
                    onChange={() => handleToggleColumnCheckboxes('OTHER DOCUMENTS', 'party2_type')}
                    data-class-code-description="OTHER DOCUMENTS"
                  />
                </th>
                <th>
                  Party 3
                  <input
                    type="checkbox"
                    className="toggle-all-party3-checkboxes-in-same-column-and-group"
                    onChange={() => handleToggleColumnCheckboxes('OTHER DOCUMENTS', 'party3_type')}
                    data-class-code-description="OTHER DOCUMENTS"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BOND (BOND)
                  <input
                    type="checkbox"
                    value="BOND"
                    checked={false}
                    onChange={() => toggleCheckboxes('input[data-row="BOND"]')}
                    data-row="BOND"
                    data-column="doc_type"
                    data-doc-type="BOND"
                    data-class-code-description="OTHER DOCUMENTS"
                  />
                </td>
                <td className="party1">
                  DEBTOR
                  <input
                    type="checkbox"
                    value="DEBTOR"
                    checked={false}
                    onChange={() => { }}
                    data-row="BOND"
                    data-column="party1_type"
                    data-doc-type="BOND"
                    data-class-code-description="OTHER DOCUMENTS"
                    className="toggle-self"
                  />
                </td>
                <td className="party2">
                  SECURED PARTY
                  <input
                    type="checkbox"
                    value="SECURED PARTY"
                    checked={false}
                    onChange={() => { }}
                    data-row="BOND"
                    data-column="party2_type"
                    data-doc-type="BOND"
                    data-class-code-description="OTHER DOCUMENTS"
                    className="toggle-self"
                  />
                </td>
              </tr>
              <OtherDocumentsRows />
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PartySelect;