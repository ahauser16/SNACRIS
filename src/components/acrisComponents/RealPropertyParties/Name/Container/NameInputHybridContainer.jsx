import React from "react";
import NameInputHybrid from "../InputComponents/NameInputHybrid";
import NameInputHybridModifier from "../SearchModifier/NameInputHybridModifier";

const NameInputHybridContainer = ({
  partyNameHybridSoql,
  handleInputChange,
  handleErrorDisplay,
  inputUserErrors,
  handleModifierChange,
}) => {
  return (
    <>
      <div className="form-row form-row--mixed">
        <NameInputHybridModifier
          value={partyNameHybridSoql.name_modifier}
          onChange={(e) =>
            handleModifierChange("name_modifier", e.target.value)
          }
        />
      </div>
      <div className="form-row form-row--mixed">
        <NameInputHybrid
          nameModifier={partyNameHybridSoql.name_modifier}
          name={partyNameHybridSoql.name}
          nameParts={partyNameHybridSoql.nameParts}
          handleErrorDisplay={handleErrorDisplay}
          onChange={handleInputChange}
          error={inputUserErrors.name}
          namePartsErrors={inputUserErrors.nameParts}
        />
      </div>
    </>
  );
};

export default NameInputHybridContainer;
