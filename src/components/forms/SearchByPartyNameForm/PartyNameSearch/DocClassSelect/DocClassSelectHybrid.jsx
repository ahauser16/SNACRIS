import React, { useState } from 'react';
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const DocClassSelectHybrid = ({
    value,
    onChange,
    handleErrorDisplay,
    error
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const validateUserInput = (value) => {
        // if (!value) {
        //   handleErrorDisplay('doc_type', 'You must select a type of document.');
        // } else {
        //   handleErrorDisplay('doc_type', null);
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
                className={`form-group form-group--doc_type ${error ? "field-error" : ""}`}
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
                        value={value}
                        onChange={handleValidationPlusDataTransferToSoql}
                        aria-describedby="document-class-select"
                    >
                        <option value="ALL DOCUMENT CLASSES">
                            ALL DOCUMENT CLASSES
                        </option>
                        <option value="DEEDS AND OTHER CONVEYANCES">
                            DEEDS AND OTHER CONVEYANCES
                        </option>
                        <option value="MORTGAGES & INSTRUMENTS">
                            MORTGAGES & INSTRUMENTS
                        </option>
                        <option value="UCC AND FEDERAL LIENS">
                            UCC AND FEDERAL LIENS
                        </option>
                        <option value="OTHER DOCUMENTS">
                            OTHER DOCUMENTS
                        </option>
                    </select>
                    <span className="focus"></span>
                </div>
                <span className="field-description" id="document-class-select">
                    {error}
                </span>
            </div>
        </div>
    );
};

export default DocClassSelectHybrid;
