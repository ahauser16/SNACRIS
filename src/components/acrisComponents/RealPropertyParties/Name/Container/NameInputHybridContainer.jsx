import React from "react";
import NameInputHybrid from "../InputComponents/NameInputHybrid";
import NameInputHybridModifier from "../SearchModifier/NameInputHybridModifier";

const NameInputHybridContainer = ({
  nameFieldFS,
  handleInputChange,
  handleErrorDisplay,
  nameFieldES,
  handleModifierChange,
}) => {
  return (
    <fieldset>
      <legend>Search Type</legend>
      <NameInputHybridModifier
        value={nameFieldFS.nameModifierFS}
        onChange={(e) =>
          handleModifierChange("nameModifier", e.target.value)
        }
      />
      <NameInputHybrid
        nameFieldFS={nameFieldFS}
        handleErrorDisplay={handleErrorDisplay}
        nameFieldES={nameFieldES}
        onChange={handleInputChange}
      />
    </fieldset>
  );
};

export default NameInputHybridContainer;