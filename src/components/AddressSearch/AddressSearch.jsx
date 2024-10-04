import React, { useState } from 'react'
import PropertyTypeCheckboxes from '../PropertyTypeCheckboxes/PropertyTypeCheckboxes';
import PropertyTypeSelect from '../PropertyTypeSelect/PropertyTypeSelect';
import BoroughSelect from '../BoroughSelect/BoroughSelect';
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
            <legend className="address-search-container--legend">
                Search By Property
            </legend>
            <div className="row">
                <fieldset className="bbl-container">
                    <legend className="bbl-legend">Search By Borough/Block/Lot</legend>
                    {/* Borough Field */}
                    <BoroughSelect
                        selectedBorough={soql.borough}
                        setSelectedBorough={(borough) => handleInputChange({ target: { name: 'borough', value: borough } })}
                        className="borough-select-component"
                    />
                    {/* Block Field */}
                    <div className="tax-block-input--container">
                        <label htmlFor="block" className="tax-block-input--label">Block:</label>
                        <input
                            type="number"
                            id="block"
                            name="block"
                            value={soql.block}
                            onChange={handleInputChange}
                            className="tax-block-input--input"
                        />
                    </div>
                    {/* Lot Field */}
                    <div className="tax-lot-input--container">
                        <label htmlFor="lot" className="tax-lot-input--label">Lot:</label>
                        <input
                            type="number"
                            id="lot"
                            name="lot"
                            value={soql.lot}
                            onChange={handleInputChange}
                            className="tax-lot-input--input"
                        />
                    </div>
                </fieldset>
                <fieldset className="street-address-container">
                    <legend className="street-address-legend">Search By Street Address</legend>
                    {/* Street Number Field */}
                    <div className="street-number-input--container">
                        <label htmlFor="street_number" className="street-number-input--label">Street Number:</label>
                        <input
                            type="text"
                            id="street_number"
                            name="street_number"
                            value={soql.street_number}
                            onChange={handleInputChange}
                            className="street-number-input--input"
                            style={{ textTransform: 'uppercase' }}
                        />
                    </div>
                    {/* Street Name Field */}
                    <div className="street-name-input--container">
                        <label htmlFor="street_name" className="street-name-input--label">Street Name:</label>
                        <input
                            type="text"
                            id="street_name"
                            name="street_name"
                            value={soql.street_name}
                            onChange={handleInputChange}
                            className="street-name-input--input"
                            style={{ textTransform: 'uppercase' }}
                        />
                    </div>
                    {/* Unit Address Field */}
                    <div className="street-unit-input--container">
                        <label htmlFor="unit_address" className="street-unit-input--label">Unit Address:</label>
                        <input
                            type="text"
                            id="unit_address"
                            name="unit_address"
                            value={soql.unit_address}
                            onChange={handleInputChange}
                            className="street-unit-input--input"
                            style={{ textTransform: 'uppercase' }}
                        />
                    </div>
                </fieldset>
            </div>
            {/* Easement Field */}
            <div className="row">
                <div className="easement-select--container">
                    <label htmlFor="easement" className="easement-select--label">Easement:</label>
                    <select
                        id="easement"
                        name="easement"
                        value={soql.easement}
                        onChange={handleInputChange}
                        className="easement-select--select"
                    >
                        <option value="" className="easement-select--option">Select an option</option>
                        <option value="Y" className="easement-select--option">Yes</option>
                        <option value="N" className="easement-select--option">No</option>
                    </select>
                </div>
                {/* Partial Lot Field */}
                <div className="partial-lot-select--container">
                    <label htmlFor="partial_lot" className="partial-lot-select--label">Partial Lot:</label>
                    <select
                        id="partial_lot"
                        name="partial_lot"
                        value={soql.partial_lot}
                        onChange={handleInputChange}
                        className="partial-lot-select--select"
                    >
                        <option value="" className="partial-lot-select--option">Select an option</option>
                        <option value="P" className="partial-lot-select--option">Partial</option>
                        <option value="E" className="partial-lot-select--option">Entire</option>
                        <option value="N" className="partial-lot-select--option">Not Applicable</option>
                    </select>
                </div>
            </div>
            <div className="row">
                {/* Air Rights Field */}
                <div className="air-rights-select--container">
                    <label htmlFor="air_rights" className="air-rights-select--label">Air Rights:</label>
                    <select
                        id="air_rights"
                        name="air_rights"
                        value={soql.air_rights}
                        onChange={handleInputChange}
                        className="air-rights-select--select"
                    >
                        <option value="" className="air-rights-select--option">Select an option</option>
                        <option value="Y" className="air-rights-select--option">Yes</option>
                        <option value="N" className="air-rights-select--option">No</option>
                    </select>
                </div>
                {/* Subterranean Rights Field */}
                <div className="subterranean-rights-select--container">
                    <label htmlFor="subterranean_rights" className="subterranean-rights-select--label">Subterranean Rights:</label>
                    <select
                        id="subterranean_rights"
                        name="subterranean_rights"
                        value={soql.subterranean_rights}
                        onChange={handleInputChange}
                        className="subterranean-rights-select--select"
                    >
                        <option value="" className="subterranean-rights-select--option">Select an option</option>
                        <option value="Y" className="subterranean-rights-select--option">Yes</option>
                        <option value="N" className="subterranean-rights-select--option">No</option>
                    </select>
                </div>
            </div>
            {/* Property Type Field */}
            <div className="property-type-select-checkbox-container col">
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
        </fieldset>
    )
}

export default AddressSearch
