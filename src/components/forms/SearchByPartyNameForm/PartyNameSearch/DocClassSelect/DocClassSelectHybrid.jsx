import React, { useState } from 'react';
import DocMapClassTypeParties from '../../../../AcrisData/DocMapClassTypeParties.json'
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const DocClassSelectHybrid = ({
    value,
    onChange,
    handleErrorDisplay,
    error
}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Extract unique class code descriptions
    const uniqueClassCodeDescriptions = [
        ...new Set(DocMapClassTypeParties.map(doc => doc.class_code_description))
    ];

    // Map class code descriptions to doc__type values
    const mapClassCodeToDocType = (classCode) => {
        return DocMapClassTypeParties
            .filter(doc => doc.class_code_description === classCode)
            .map(doc => doc.doc__type);
    };

    // Validation function for input fields
    // Example validation, can be extended
    const validateUserInput = (inputValue) => {
        if (!inputValue) {
            handleErrorDisplay("Input value cannot be empty"); 
        }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        const docTypes = mapClassCodeToDocType(e.target.value);
        onChange({ target: { name: 'doc_type', value: docTypes } });
    };

    const hoverMessage = 'Document Class is optional for form submission.';

    return (
        <div className="form-row">
            <div
                className={`form-group form-group--doc_type ${error ? "field-error" : ""
                    }`}
            >
                <label htmlFor="document-class-select">
                    <span>Class</span>
                    <InfoIcon
                        isHovered={isHovered}
                        setIsHovered={setIsHovered}
                        hoverMessage={hoverMessage}
                    />
                </label>
                <div className="form-field select">
                    <select
                        id="document-class-select"
                        name="doc_type"
                        value={value.doc_type}
                        onChange={handleValidationPlusDataTransferToSoql}
                        aria-describedby="document-class-select"
                    >
                        <option value="">All Document Classes</option>
                        {uniqueClassCodeDescriptions.map((classCode, index) => (
                            <option key={index} value={classCode}>
                                {classCode}
                            </option>
                        ))}
                    </select>
                    <span className="focus"></span>
                </div>
                <span
                    className="field-description" id="document-class-select"
                >
                    {error}
                </span>
            </div>
        </div>
    )
}

export default DocClassSelectHybrid