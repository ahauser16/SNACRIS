// src/components/PartyNameSearch/PartyNameSearchHybrid.jsx
import React from 'react';
import NameInput from "./NameInput/NameInput";
import DateSelect from '../DocTypeSearch/DateSelect/DateSelect';
import PartyTypeSelect from '../PartyNameSearch/PartyTypeSelect/PartyTypeSelect';
import RecordedBoroughSelect from '../AddressSearch/RecordedBoroughSelect/RecordedBoroughSelect';
import DocClassSelect from '../DocClassSelect/DocClassSelect';

const PartyNameSearchHybrid = ({
  partyNameHybridSoql,
  handleInputChange,
  handleErrorDisplay,
  inputUserErrors
}) => {

  return (
    <fieldset>
      <legend>
        Search By Party Name & Additional Criteria
      </legend>
      <div className="form-row form-row--mixed">
        <NameInput
          value={partyNameHybridSoql.name}
          onChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
          error={inputUserErrors.name}
        />
      </div>
      <DateSelect
        value={partyNameHybridSoql.document_date}
        onChange={handleInputChange}
        handleErrorDisplay={handleErrorDisplay}
        inputUserErrors={inputUserErrors}
      />
      <div className="form-row form-row--mixed">
        <PartyTypeSelect
          value={partyNameHybridSoql.party_type}
          onChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
          error={inputUserErrors.party_type}
        />
      </div>
      <div className="form-row form-row--mixed">
        <RecordedBoroughSelect
          value={partyNameHybridSoql.recorded_borough}
          onChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
          error={inputUserErrors.recorded_borough}
        />
      </div>
      <div className="form-row form-row--mixed">
        <DocClassSelect
          value={partyNameHybridSoql.document_class}
          onChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
          error={inputUserErrors.document_class}
        />
      </div>
    </fieldset>
  );
};

export default PartyNameSearchHybrid;