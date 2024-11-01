import React, { useState } from 'react';
import DocMapClassTypeParties from '../AcrisData/DocMapClassTypeParties.json'
import InfoIcon from '../InfoIcon/InfoIcon';

const DocClassSelect = ({
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

    // Validation function for input fields
    // Example validation, can be extended
    const validateUserInput = (inputValue) => {
        // if (!inputValue) {
        //     handleErrorDisplay("Input value cannot be empty"); 
        // }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };

    const hoverMessage = 'Document Class is optional for form submission.';

    return (
        <div className="form-row">
            <div
                className={`form-group form-group--document_class ${error ? "field-error" : ""
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
                        name="document_class"
                        value={value.document_class}
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

export default DocClassSelect