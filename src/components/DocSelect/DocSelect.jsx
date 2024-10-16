import React, { useState } from 'react';
import docMap from './docMap_2024-09-06.json';

const DocSelect = ({
    value,
    onChange,
    handleErrorDisplay,
    error
}) => {
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedType, setSelectedType] = useState('');

    const uniqueClasses = [...new Set(docMap.map(doc => doc.class_code_description))];

    const filteredTypes = docMap.filter(doc => doc.class_code_description === selectedClass);
    const uniqueTypes = [...new Set(filteredTypes.map(doc => doc.doc__type))];

    const filteredParties = docMap.filter(doc => doc.doc__type === selectedType);
    const uniqueParties = [...new Set(filteredParties.flatMap(doc => [doc.party1_type, doc.party2_type, doc.party3_type]))];

    const handleClassChange = (e) => {
        const value = e.target.value;
        setSelectedClass(value);
        setSelectedType(''); // Reset the selected type when class changes
        handleValidationPlusDataTransferToSoql(e);
    };

    const handleTypeChange = (e) => {
        const value = e.target.value;
        setSelectedType(value);
        handleValidationPlusDataTransferToSoql(e);
    };

    const validateUserInput = (value) => {
        // Add validation logic if needed
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    return (
        <div className="form-row">
            <div className="form-group">
                <label htmlFor="doc-class-select">
                    Class
                </label>
                <div className="form-field select">
                    <select
                        id="doc-class-select"
                        name="document_class"
                        value={selectedClass}
                        onChange={handleClassChange}
                        aria-describedby="document-class-description"
                    >
                        <option value="">Select</option>
                        {uniqueClasses.map((classCode) => (
                            <option
                                key={classCode}
                                value={classCode}
                            >
                                {classCode}
                            </option>
                        ))}
                    </select>
                    <span className="focus"></span>
                </div>
                <span
                    className="field-description"
                    id="document-class-description">
                    {error}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="doc-type-select">
                    Document
                </label>
                <div className="form-field select">
                    <select
                        id="doc-type-select"
                        name="document_type"
                        value={selectedType}
                        onChange={handleTypeChange}
                        aria-describedby="document-type-description"
                        disabled={!selectedClass}
                    >
                        <option value="">Select</option>
                        {filteredTypes.map((doc) => (
                            <option
                                key={doc.doc__type}
                                value={doc.doc__type}
                            >
                                {doc.doc__type_description}
                            </option>
                        ))}
                    </select>
                    <span className="focus"></span>
                </div>
                <span
                    className="field-description"
                    id="document-type-description">
                    {error}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="party-type-select">
                    Party
                </label>
                <div className="form-field select">
                    <select
                        id="party-type-select"
                        name="party_type"
                        value={value}
                        onChange={handleValidationPlusDataTransferToSoql}
                        aria-describedby="party-type-description"
                        disabled={!selectedType}
                    >
                        <option value="">Select</option>
                        {uniqueParties.map((partyType, index) => (
                            <option
                                key={index}
                                value={partyType}
                            >
                                {partyType}
                            </option>
                        ))}
                    </select>
                    <span className="focus"></span>
                </div>
                <span
                    className="field-description"
                    id="party-type-description">
                    {error}
                </span>
            </div>
        </div>
    );
};

export default DocSelect;