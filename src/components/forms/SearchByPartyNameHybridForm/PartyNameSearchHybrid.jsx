import React from "react";
import NameInputHybridContainer from "../../acrisComponents/RealPropertyParties/Name/Container/NameInputHybridContainer";
import DateInputHybridContainer from "../../acrisComponents/RealPropertyMaster/DocumentDate/Container/DateInputHybridContainer";
import PartyTypeHybridContainer from "../../acrisComponents/RealPropertyParties/PartyType/Container/PartyTypeHybridContainer";
import RecordedBoroughSelectHybrid from "../SearchByAddressForm/AddressSearch/RecordedBoroughSelect/RecordedBoroughSelectHybrid";
import DocClassSelectHybrid from "../SearchByPartyNameForm/PartyNameSearch/DocClassSelect/DocClassSelectHybrid";

const PartyNameSearchHybrid = ({
  partyNameHybridFormDataState,
  handleInputChange,
  handleErrorDisplay,
  inputUserErrors,
  handleModifierChange,
}) => {
  return (
    <fieldset>
      <legend>Search By Party Name & Additional Criteria</legend>
      <NameInputHybridContainer
        nameFieldFS={partyNameHybridFormDataState.nameFieldFS}
        nameFieldES={inputUserErrors.nameFieldES}
        handleInputChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        handleModifierChange={handleModifierChange}
      />
      <DateInputHybridContainer
        documentDateFieldFS={partyNameHybridFormDataState.documentDateFieldFS}
        documentDateFieldES={inputUserErrors.documentDateFieldES}
        handleInputChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        handleModifierChange={handleModifierChange}
      />
      <PartyTypeHybridContainer
        partyTypeFieldFS={partyNameHybridFormDataState.partyTypeFieldFS}
        partyTypeFieldES={inputUserErrors.partyTypeFieldES}
        handleInputChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        handleModifierChange={handleModifierChange}
      />
      {/* <div className="form-row form-row--mixed">
        <PartyTypeSelectHybrid
          value={partyNameHybridFormDataState.party_typeFS}
          onChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
          error={inputUserErrors.party_typeES}
        />
      </div>
      <div className="form-row form-row--mixed">
        <RecordedBoroughSelectHybrid
          value={partyNameHybridFormDataState.recorded_boroughFS}
          onChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
          error={inputUserErrors.recorded_boroughES}
        />
      </div>
      <div className="form-row form-row--mixed">
        <DocClassSelectHybrid
          value={partyNameHybridFormDataState.doc_typeFS}
          onChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
          error={inputUserErrors.doc_typeES}
        />
      </div> */}
    </fieldset>
  );
};

export default PartyNameSearchHybrid;