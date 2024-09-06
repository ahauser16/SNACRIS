import React, { useState } from 'react';
import axios from 'axios';
import './DocSelect.css';

const DocSelect = ({ setSelectedDocTypes }) => {
    const [docTypes, setDocTypes] = useState([]);
    const [selectedDocs, setSelectedDocs] = useState([]);
    const [docDetails, setDocDetails] = useState(null);

    const fetchDocTypes = async () => {
        try {
            const response = await axios.get('https://data.cityofnewyork.us/resource/7isb-wh4c.json');
            setDocTypes(response.data);
            const date = new Date().toISOString().split('T')[0];
            const fileName = `docMap_${date}.json`;
            const fileContent = JSON.stringify(response.data, null, 2);
            const blob = new Blob([fileContent], { type: 'application/json' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
        } catch (error) {
            console.error('Error fetching document types:', error);
        }
    };

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

    return (
        <div className="doc-select-container">
            <button onClick={fetchDocTypes}>Fetch Document Types</button>
            <div className="doc-checkboxes">
                {docTypes.map((docType) => (
                    <div key={docType.doc__type} className="doc-checkbox">
                        <input
                            type="checkbox"
                            id={docType.doc__type}
                            checked={selectedDocs.includes(docType.doc__type)}
                            onChange={() => handleCheckboxChange(docType)}
                        />
                        <label htmlFor={docType.doc__type} style={{ color: getColor(docType.class_code_description) }}>
                            {docType.doc__type_description}
                        </label>
                    </div>
                ))}
            </div>
            <div className="class-checkboxes">
                {['MORTGAGES & INSTRUMENTS', 'UCC AND FEDERAL LIENS', 'DEEDS AND OTHER CONVEYANCES', 'OTHER DOCUMENTS'].map(
                    (classCodeDescription) => (
                        <div key={classCodeDescription} className="class-checkbox">
                            <input
                                type="checkbox"
                                id={classCodeDescription}
                                onChange={() => handleClassCheckboxChange(classCodeDescription)}
                            />
                            <label htmlFor={classCodeDescription} style={{ color: getColor(classCodeDescription) }}>
                                {classCodeDescription}
                            </label>
                        </div>
                    )
                )}
            </div>
            {docDetails && (
                <div className="doc-details">
                    <p>Doc Type: {docDetails.doc__type}</p>
                    <p>Class Code Description: {docDetails.class_code_description}</p>
                    <p>Party 1 Type: {docDetails.party1_type}</p>
                    <p>Party 2 Type: {docDetails.party2_type}</p>
                </div>
            )}
        </div>
    );
};

export default DocSelect;