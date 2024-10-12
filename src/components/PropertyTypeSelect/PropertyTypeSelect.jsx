// src/components/PropertyTypeSelect/PropertyTypeSelect.jsx
import React from "react";
import PropertyTypeCodes from '../PropertyTypeCheckboxes/PropertyTypeCodes.json'
import './PropertyTypeSelect.css'; // Import the CSS file


const PropertyTypeSelect = ({ selectedPropertyType, handlePropertyTypeSelectChange, disabled }) => {
    return (
        <div className="property-type-select--container">
            <label
                htmlFor="property-type--select" className="property-type-select--label"
            >Select a Property Type:</label>
            <select
                id="property-type-select"
                name="property_type"
                value={selectedPropertyType || ""}
                onChange={(e) => handlePropertyTypeSelectChange(e.target.value)}
                disabled={disabled}
                className="property-type-select--select"
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
                        value="">Select a Property Type
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
        </div>
    );
};

export default PropertyTypeSelect;