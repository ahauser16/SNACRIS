// src/components/PropertyTypeSelect/PropertyTypeSelect.jsx
import React from "react";
import PropertyTypeCodes from '../AcrisData/PropertyTypeCodes.json';
import './PropertyTypeSelect.css'; // Import the CSS file


const PropertyTypeSelect = ({
    selectedPropertyType,
    handlePropertyTypeSelectChange,
    disabled,
    value,
    onChange,
    handleErrorDisplay,
    error
}) => {
    const validateUserInput = (value) => {
        // if (!value) {
        //     handleErrorDisplay('borough', 'You must select a borough.');
        // } else {
        //     handleErrorDisplay('borough', null);
        // }
    };

    const handleValidationPlusDataTransferToSoql = (e) => {
        validateUserInput(e.target.value);
        onChange(e); // Keep the original onChange for state management
    };
    return (
        <div
            className={`form-group form-group--width-auto form-group--property_type ${error ? 'field-error' : ''}`}
            style={{ '--field-width': '15ch' }}
        >
            <label htmlFor="property-type--select" >
                Property Type
            </label>
            <div className="form-field select">
                <select
                    id="property-type-select"
                    name="property_type"
                    value={selectedPropertyType || ""}
                    onChange={(e) => handlePropertyTypeSelectChange(e.target.value)}
                    // onChange={handleValidationPlusDataTransferToSoql}
                    disabled={disabled}
                    aria-describedby="property-type-description"
                >
                    {selectedPropertyType === "multiple" ? (
                        <option
                            className="property-type-select--option" value=""
                        >
                            You Selected Multiple Property Types
                        </option>
                    ) : (
                        <option
                            className="property-type-select--option"
                            value="">Select
                        </option>
                    )}
                    {PropertyTypeCodes.map((propertyType) => (
                        <option
                            className="property-type-select--option"
                            key={propertyType.property_type}
                            value={propertyType.property_type}
                        >
                            {propertyType.description}
                        </option>
                    ))}
                </select>
                <span className="focus"></span>
            </div>
            <span
                className="field-description"
                id="borough-description"
            >
                {error}
            </span>
        </div>
    );
};

export default PropertyTypeSelect;