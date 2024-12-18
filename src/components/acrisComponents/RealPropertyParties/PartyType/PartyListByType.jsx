import React, { useState } from 'react';
import InfoIcon from '../../../InfoIcon/InfoIcon';
import partyMap from "../../../AcrisData/DocMapClassTypeParties.json";
import Accordion from "../../../Accordion/Accordion";
import './PartyListByType.css';

const PartyListByType = () => {
    const [documentNameFilter, setDocumentNameFilter] = useState('');
    const [partyNameFilter, setPartyNameFilter] = useState('');
    const [isHoveredA, setIsHoveredA] = useState(false);
    const [isHoveredB, setIsHoveredB] = useState(false);


    const groupedParties = partyMap.reduce((acc, party) => {
        const { class_code_description } = party;
        if (!acc[class_code_description]) {
            acc[class_code_description] = [];
        }
        acc[class_code_description].push(party);
        return acc;
    }, {});

    const formatColText = (text) => {
        return text ? text.replace(/\//g, ' / ') : text;
    };

    const renderTable = (classCode) => (
        <table className={classCode}>
            <thead>
                <tr>
                    <th colSpan="4">{classCode}</th>
                </tr>
                <tr>
                    <th>Document Name</th>
                    <th>Party 1</th>
                    <th>Party 2</th>
                    <th>Party 3</th>
                </tr>
            </thead>
            <tbody>
                {groupedParties[classCode]
                    ?.filter((party) =>
                        party.doc__type_description.toLowerCase().includes(documentNameFilter.toLowerCase()) &&
                        (party.party1_type.toLowerCase().includes(partyNameFilter.toLowerCase()) ||
                            (party.party2_type && party.party2_type.toLowerCase().includes(partyNameFilter.toLowerCase())) ||
                            (party.party3_type && party.party3_type.toLowerCase().includes(partyNameFilter.toLowerCase())))
                    )
                    .map((party, index) => (
                        <tr key={index}>
                            <td>{party.doc__type_description}</td>
                            <td>{formatColText(party.party1_type)}</td>
                            <td>{party.party2_type ? formatColText(party.party2_type) : 'N/A'}</td>
                            <td>{party.party3_type ? formatColText(party.party3_type) : 'N/A'}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );

    return (
        <fieldset>
            <caption className="text-wrapper-95">List of party names associated with each document type which are organized by document class. If a document does not have a party name associated with it then "N/A" is displayed as a placeholder.</caption>
            <div className="form-row form-row--mixed">
                <div className="form-group form-group--width-auto" style={{ '--field-width': '17ch' }}>
                    <label htmlFor="document-name-filter">
                        <span>Document Name</span>
                        <InfoIcon
                            isHovered={isHoveredA}
                            setIsHovered={setIsHoveredA}
                            hoverMessage="Enter a document name to filter the table results below."
                        />
                    </label>
                    <input
                        type="text"
                        id="document-name-filter"
                        value={documentNameFilter}
                        onChange={(e) => setDocumentNameFilter(e.target.value)}
                        placeholder="Enter document name"
                        className="form-field"
                    />
                </div>
                <div className="form-group form-group--width-auto" style={{ '--field-width': '17ch' }}>
                    <label htmlFor="party-name-filter">
                        <span>Party Name</span>
                        <InfoIcon
                            isHovered={isHoveredB}
                            setIsHovered={setIsHoveredB}
                            hoverMessage="Enter a party name to filter the table results below."
                        />
                    </label>
                    <input
                        type="text"
                        id="party-name-filter"
                        value={partyNameFilter}
                        onChange={(e) => setPartyNameFilter(e.target.value)}
                        placeholder="Enter party name"
                        className="form-field"
                    />
                </div>
            </div>
            <div className="flex-column gap-33 margin-top-33 margin-bottom-33">
                <Accordion title="DEEDS AND OTHER CONVEYANCES">
                    {renderTable("DEEDS AND OTHER CONVEYANCES")}
                </Accordion>
                <Accordion title="MORTGAGES & INSTRUMENTS">
                    {renderTable("MORTGAGES & INSTRUMENTS")}
                </Accordion>
                <Accordion title="UCC AND FEDERAL LIENS">
                    {renderTable("UCC AND FEDERAL LIENS")}
                </Accordion>
                <Accordion title="OTHER DOCUMENTS">
                    {renderTable("OTHER DOCUMENTS")}
                </Accordion>
            </div>
        </fieldset>
    );
};

export default PartyListByType;