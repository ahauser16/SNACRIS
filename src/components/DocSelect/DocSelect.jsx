import React, { useState, useEffect } from 'react';
import docMap from './docMap_2024-09-06.json';
import './DocSelect.css';

const DocSelect = ({ setSelectedDocTypes }) => {
    const [docTypes, setDocTypes] = useState([]);
    const [selectedDocs, setSelectedDocs] = useState([]);
    const [docDetails, setDocDetails] = useState(null);
    const [visibleGroups, setVisibleGroups] = useState({
        'MORTGAGES & INSTRUMENTS': true,
        'UCC AND FEDERAL LIENS': true,
        'DEEDS AND OTHER CONVEYANCES': true,
        'OTHER DOCUMENTS': true,
    });

    useEffect(() => {
        setDocTypes(docMap);
    }, []);

    const handleCheckboxChange = (docType) => {
        setSelectedDocs((prevSelectedDocs) => {
            const isSelected = prevSelectedDocs.includes(docType.doc__type);
            const newSelectedDocs = isSelected
                ? prevSelectedDocs.filter((type) => type !== docType.doc__type)
                : [...prevSelectedDocs, docType.doc__type];
            setSelectedDocTypes(newSelectedDocs);
            return newSelectedDocs;
        });
        setDocDetails(docType);
    };

    const handleClassCheckboxChange = (classCodeDescription) => {
        const classDocs = docTypes.filter((doc) => doc.class_code_description === classCodeDescription);
        const classDocTypes = classDocs.map((doc) => doc.doc__type);
        setSelectedDocs((prevSelectedDocs) => {
            const allSelected = classDocTypes.every((type) => prevSelectedDocs.includes(type));
            const newSelectedDocs = allSelected
                ? prevSelectedDocs.filter((type) => !classDocTypes.includes(type))
                : [...new Set([...prevSelectedDocs, ...classDocTypes])];
            setSelectedDocTypes(newSelectedDocs);
            return newSelectedDocs;
        });
    };

    const toggleGroupVisibility = (group) => {
        setVisibleGroups((prevVisibleGroups) => ({
            ...prevVisibleGroups,
            [group]: !prevVisibleGroups[group],
        }));
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

    const groupedDocTypes = docTypes.reduce((acc, docType) => {
        const { class_code_description } = docType;
        if (!acc[class_code_description]) {
            acc[class_code_description] = [];
        }
        acc[class_code_description].push(docType);
        return acc;
    }, {});

    return (
        <div className="doc-select-container">
            {Object.keys(groupedDocTypes).map((classCodeDescription) => (
                <div key={classCodeDescription} className="doc-group">
                    <div className="doc-group-header" style={{ color: getColor(classCodeDescription) }}>
                        <input
                            type="checkbox"
                            id={classCodeDescription}
                            onChange={() => handleClassCheckboxChange(classCodeDescription)}
                        />
                        {classCodeDescription}
                        <button onClick={() => toggleGroupVisibility(classCodeDescription)}>
                            {visibleGroups[classCodeDescription] ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    {visibleGroups[classCodeDescription] && (
                        <table className="doc-group-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Doc Name</th>
                                    <th>Doc Code</th>
                                    <th className="party1">Doc Party 1 Name</th>
                                    <th className="party2">Doc Party 2 Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groupedDocTypes[classCodeDescription].map((docType) => (
                                    <tr key={docType.doc__type}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                id={docType.doc__type}
                                                checked={selectedDocs.includes(docType.doc__type)}
                                                onChange={() => handleCheckboxChange(docType)}
                                            />
                                        </td>
                                        <td>{docType.doc__type_description}</td>
                                        <td>{docType.doc__type}</td>
                                        <td className="party1">{docType.party1_type}</td>
                                        <td className="party2">{docType.party2_type}</td>
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

export default DocSelect;

// This component handles the selection of document types.
// It updates the `selectedDocTypes` state in `SearchByPartyNameForm`.