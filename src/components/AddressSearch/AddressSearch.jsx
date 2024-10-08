import React, { useState } from 'react'
import PropertyTypeCheckboxes from '../PropertyTypeCheckboxes/PropertyTypeCheckboxes';
import PropertyTypeSelect from '../PropertyTypeSelect/PropertyTypeSelect';
import BoroughSelect from './BoroughSelect/BoroughSelect';
import TaxBlockInput from './TaxBlockInput/TaxBlockInput';
import TaxLotInput from './TaxLotInput/TaxLotInput';
import StreetNumberInput from './StreetNumberInput/StreetNumberInput';
import StreetNameInput from './StreetNameInput/StreetNameInput';
import StreetUnitInput from './StreetUnitInput/StreetUnitInput';
import EasementSelect from './EasementSelect/EasementSelect';
import PartialLotSelect from './PartialLotSelect/PartialLotSelect';
import AirRightsSelect from './AirRightsSelect/AirRightsSelect';
import SubterraneanRightsSelect from './SubterraneanRightsSelect/SubterraneanRightsSelect';
import './AddressSearch.css';

function AddressSearch({
    addressSoql,
    handleInputChange,
    handlePropertyTypeChange,
    handleErrorDisplay,
    inputUserErrors
}) {
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
        <fieldset className="address-search--container">
            <legend className="address-search--legend">
                Search By Property
            </legend>
            <div className="row">
                <fieldset className="bbl-container">
                    <legend className="bbl-legend">Search By Borough/Block/Lot</legend>
                    <BoroughSelect
                        value={addressSoql.borough}
                        onChange={handleInputChange}
                        handleErrorDisplay={handleErrorDisplay}
                        error={inputUserErrors.borough}
                    />
                    <TaxBlockInput
                        value={addressSoql.block}
                        onChange={handleInputChange}
                        handleErrorDisplay={handleErrorDisplay}
                        error={inputUserErrors.block}
                    />
                    <TaxLotInput
                        value={addressSoql.lot}
                        onChange={handleInputChange}
                        handleErrorDisplay={handleErrorDisplay}
                        error={inputUserErrors.lot}
                    />
                </fieldset>
                <fieldset className="street-address-container">
                    <legend className="street-address-legend">Search By Street Address</legend>
                    <StreetNumberInput
                        value={addressSoql.street_number}
                        onChange={handleInputChange}
                        handleErrorDisplay={handleErrorDisplay}
                        error={inputUserErrors.street_number}
                    />
                    <StreetNameInput
                        value={addressSoql.street_name}
                        onChange={handleInputChange}
                        handleErrorDisplay={handleErrorDisplay}
                        error={inputUserErrors.street_name}
                    />
                    <StreetUnitInput
                        value={addressSoql.unit}
                        onChange={handleInputChange}
                        handleErrorDisplay={handleErrorDisplay}
                        error={inputUserErrors.unit}
                    />
                </fieldset>
            </div>
            <div className="row">
                <EasementSelect
                    value={addressSoql.easement}
                    onChange={handleInputChange}
                />
                <PartialLotSelect
                    value={addressSoql.partial_lot}
                    onChange={handleInputChange}
                />

            </div>
            <div className="row">
                <AirRightsSelect
                    value={addressSoql.air_rights}
                    onChange={handleInputChange}
                />
                <SubterraneanRightsSelect
                    value={addressSoql.subterranean_rights}
                    onChange={handleInputChange}
                    className="subterranean-rights-select--select"
                />
            </div>
            {/* Property Type Field */}
            <div className="property-type-select-checkbox-container col">
                <PropertyTypeSelect
                    selectedPropertyType={
                        addressSoql.property_type.length > 1
                            ? "multiple"
                            : addressSoql.property_type.length === 1
                                ? addressSoql.property_type[0]
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
                        selectedPropertyTypes={addressSoql.property_type}
                        handlePropertyTypeChange={handlePropertyTypeChange}
                    />
                )}
            </div>
        </fieldset>
    )
}

export default AddressSearch
