import React from "react";
import NameInputHybridContainer from "../../acrisComponents/RealPropertyParties/Name/Container/NameInputHybridContainer";
import DateInputHybridContainer from "../SearchByDocTypeForm/DocTypeSearch/DateSelect/DateInputHybridContainer";
import PartyTypeSelectHybrid from "../SearchByPartyNameForm/PartyNameSearch/PartyTypeSelect/PartyTypeSelectHybrid";
import RecordedBoroughSelectHybrid from "../SearchByAddressForm/AddressSearch/RecordedBoroughSelect/RecordedBoroughSelectHybrid";
import DocClassSelectHybrid from "../SearchByPartyNameForm/PartyNameSearch/DocClassSelect/DocClassSelectHybrid";

const PartyNameSearchHybrid = ({
  partyNameHybridSoql,
  handleInputChange,
  handleErrorDisplay,
  inputUserErrors,
  handleModifierChange,
}) => {
  return (
    <fieldset>
      <legend>Search By Party Name & Additional Criteria</legend>
      <NameInputHybridContainer
        nameFieldFS={partyNameHybridSoql.nameFieldFS}
        handleInputChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        nameFieldES={inputUserErrors.nameFieldES}
        handleModifierChange={handleModifierChange}
      />
      <DateInputHybridContainer
        partyNameHybridSoql={partyNameHybridSoql}
        handleInputChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        inputUserErrors={inputUserErrors}
        handleModifierChange={handleModifierChange}
      />
      <div className="form-row form-row--mixed">
        <PartyTypeSelectHybrid
          value={partyNameHybridSoql.party_typeFS}
          onChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
          error={inputUserErrors.party_typeES}
        />
      </div>
      <div className="form-row form-row--mixed">
        <RecordedBoroughSelectHybrid
          value={partyNameHybridSoql.recorded_boroughFS}
          onChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
          error={inputUserErrors.recorded_boroughES}
        />
      </div>
      <div className="form-row form-row--mixed">
        <DocClassSelectHybrid
          value={partyNameHybridSoql.doc_typeFS}
          onChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
          error={inputUserErrors.doc_typeES}
        />
      </div>
    </fieldset>
  );
};

export default PartyNameSearchHybrid;