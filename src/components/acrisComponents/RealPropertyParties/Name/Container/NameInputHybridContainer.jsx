import React from "react";
import NameInputHybrid from "../InputComponents/NameInputHybrid";
import NameInputHybridModifier from "../SearchModifier/NameInputHybridModifier";

const NameInputHybridContainer = ({
  nameField,
  handleInputChange,
  handleErrorDisplay,
  inputUserErrors,
  handleModifierChange,
}) => {
  return (
    <>
      <div className="form-row form-row--mixed">
        <NameInputHybridModifier
          value={nameField.nameModifier}
          onChange={(e) =>
            handleModifierChange("nameModifier", e.target.value)
          }
        />
      </div>
      <div className="form-row form-row--mixed">
        <NameInputHybrid
          nameField={nameField}
          handleErrorDisplay={handleErrorDisplay}
          onChange={handleInputChange}
          error={inputUserErrors}
        />
      </div>
    </>
  );
};

export default NameInputHybridContainer;
