import React, { useState } from 'react'
import PropertyTypeCheckboxes from '../PropertyTypeCheckboxes/PropertyTypeCheckboxes';
import PropertyTypeSelect from '../PropertyTypeSelect/PropertyTypeSelect';
import './AddressSearch.css';

function AddressSearch({ soql, handleInputChange, handlePropertyTypeChange }) {
    const [showPropertyTypeCheckboxes, setShowPropertyTypeCheckboxes] = useState(false);
    const [isUsingMultiplePropertyTypes, setIsUsingMultiplePropertyTypes] = useState(false);

    const togglePropertyTypesCheckboxes = () => {
        setShowPropertyTypeCheckboxes((prev) => !prev);
        setIsUsingMultiplePropertyTypes((prev) => !prev);
    };

    const handlePropertyTypeSelectChange = (selectedPropertyType) => {
        handlePropertyTypeChange({
            target: { value: selectedPropertyType, name: "property_type" },
        });
    };

    return (
        <fieldset className="address-search-container">
            <legend className="address-search-legend">
                Search By Address
            </legend>
            {/* Borough Field */}
            <div className="form-group">
                <label htmlFor="borough">Borough:</label>
                <input
                    type="text"
                    id="borough"
                    name="borough"
                    value={soql.borough}
                    onChange={handleInputChange}
                />
            </div>
            {/* Block Field */}
            <div className="form-group">
                <label htmlFor="block">Block:</label>
                <input
                    type="text"
                    id="block"
                    name="block"
                    value={soql.block}
                    onChange={handleInputChange}
                />
            </div>
            {/* Lot Field */}
            <div className="form-group">
                <label htmlFor="lot">Lot:</label>
                <input
                    type="text"
                    id="lot"
                    name="lot"
                    value={soql.lot}
                    onChange={handleInputChange}
                />
            </div>
            {/* Easement Field */}
            <div className="form-group">
                <label htmlFor="easement">Easement:</label>
                <input
                    type="text"
                    id="easement"
                    name="easement"
                    value={soql.easement}
                    onChange={handleInputChange}
                />
            </div>
            {/* Partial Lot Field */}
            <div className="form-group">
                <label htmlFor="partial_lot">Partial Lot:</label>
                <input
                    type="text"
                    id="partial_lot"
                    name="partial_lot"
                    value={soql.partial_lot}
                    onChange={handleInputChange}
                />
            </div>
            {/* Air Rights Field */}
            <div className="form-group">
                <label htmlFor="air_rights">Air Rights:</label>
                <input
                    type="text"
                    id="air_rights"
                    name="air_rights"
                    value={soql.air_rights}
                    onChange={handleInputChange}
                />
            </div>
            {/* Subterranean Rights Field */}
            <div className="form-group">
                <label htmlFor="subterranean_rights">Subterranean Rights:</label>
                <input
                    type="text"
                    id="subterranean_rights"
                    name="subterranean_rights"
                    value={soql.subterranean_rights}
                    onChange={handleInputChange}
                />
            </div>
            {/* Property Type Field */}
            <div className="form-group">
                <PropertyTypeSelect
                    selectedPropertyType={
                        soql.property_type.length > 1
                            ? "multiple"
                            : soql.property_type.length === 1
                                ? soql.property_type[0]
                                : ""
                    }
                    handlePropertyTypeSelectChange={handlePropertyTypeSelectChange}
                    disabled={isUsingMultiplePropertyTypes}
                />
                <button type="button" onClick={togglePropertyTypesCheckboxes}>
                    {showPropertyTypeCheckboxes
                        ? "Hide Multiple Property Types"
                        : "Select Multiple Property Types"}
                </button>
                {showPropertyTypeCheckboxes && (
                    <PropertyTypeCheckboxes
                        selectedPropertyTypes={soql.property_type}
                        handlePropertyTypeChange={handlePropertyTypeChange}
                    />
                )}
            </div>

            {/* Street Number Field */}
            <div className="form-group">
                <label htmlFor="street_number">Street Number:</label>
                <input
                    type="text"
                    id="street_number"
                    name="street_number"
                    value={soql.street_number}
                    onChange={handleInputChange}
                />
            </div>
            {/* Street Name Field */}
            <div className="form-group">
                <label htmlFor="street_name">Street Name:</label>
                <input
                    type="text"
                    id="street_name"
                    name="street_name"
                    value={soql.street_name}
                    onChange={handleInputChange}
                />
            </div>
            {/* Unit Address Field */}
            <div className="form-group">
                <label htmlFor="unit_address">Unit Address:</label>
                <input
                    type="text"
                    id="unit_address"
                    name="unit_address"
                    value={soql.unit_address}
                    onChange={handleInputChange}
                />
            </div>
        </fieldset>
    )
}

export default AddressSearch
