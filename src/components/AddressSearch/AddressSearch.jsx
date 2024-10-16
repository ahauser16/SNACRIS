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
            <div className="form-row form-row--mixed">
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
            </div>
            <div className="form-row form-row--mixed">
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
            </div>
            <div className="form-row form-row--mixed">
                <EasementSelect
                    value={addressSoql.easement}
                    onChange={handleInputChange}
                    handleErrorDisplay={handleErrorDisplay}
                    error={inputUserErrors.easement}
                />
                <PartialLotSelect
                    value={addressSoql.partial_lot}
                    onChange={handleInputChange}
                    handleErrorDisplay={handleErrorDisplay}
                    error={inputUserErrors.partial_lot}
                />
                <AirRightsSelect
                    value={addressSoql.air_rights}
                    onChange={handleInputChange}
                    handleErrorDisplay={handleErrorDisplay}
                    error={inputUserErrors.air_rights}
                />
                <SubterraneanRightsSelect
                    value={addressSoql.subterranean_rights}
                    onChange={handleInputChange}
                    handleErrorDisplay={handleErrorDisplay}
                    error={inputUserErrors.subterranean_rights}
                />
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
                    value={addressSoql.property_type}
                    onChange={handleInputChange}
                    handleErrorDisplay={handleErrorDisplay}
                    error={inputUserErrors.property_type}
                />
            </div>
            {/* <button type="button" onClick={togglePropertyTypesCheckboxes}>
                    {showPropertyTypeCheckboxes
                        ? "Hide Multiple Property Types"
                        : "Select Multiple Property Types"}
                </button>
                {showPropertyTypeCheckboxes && (
                    <PropertyTypeCheckboxes
                        selectedPropertyTypes={addressSoql.property_type}
                        handlePropertyTypeChange={handlePropertyTypeChange}
                    />
                )} */}
        </fieldset >
    )
}

export default AddressSearch
