import React from "react";
import NameInputHybrid from "../InputComponents/NameInputHybrid";
import NameInputHybridModifier from "../SearchModifier/NameInputHybridModifier";

const NameInputHybridContainer = ({
  nameFieldFS,
  nameFieldES,
  handleInputChange,
  handleErrorDisplay,
  handleModifierChange,
}) => {
  return (
    <fieldset className="drop-shadow">
      <legend>Party Name Search</legend>
      <NameInputHybridModifier
        handleModifierChange={handleModifierChange}
        nameModifierFS={nameFieldFS.nameModifierFS}
        nameModifierES={nameFieldES.nameModifierES}
      />
      <NameInputHybrid
        nameFieldFS={nameFieldFS}
        nameFieldES={nameFieldES}
        handleErrorDisplay={handleErrorDisplay}
        handleInputChange={handleInputChange}
      />
    </fieldset>
  );
};

export default NameInputHybridContainer;