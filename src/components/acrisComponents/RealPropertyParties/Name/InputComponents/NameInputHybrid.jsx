import React from 'react';
import NameInputContains from "./NameInputContains";
import NameInputExact from "./NameInputExact";
import NameInputNameParts from "./NameInputNameParts";
import NameInputBusiness from "./NameInputBusiness";
import NameInputExclusion from "./NameInputExclusion";
import NameInputMultipleSubstrings from "./NameInputMultipleSubstrings";
import NameInputInclusionExclusion from "./NameInputInclusionExclusion";
import NameInputComplexCompound from "./NameInputComplexCompound";
import NameInputStartsWith from "./NameInputStartsWith";
import NameInputEndsWith from "./NameInputEndsWith";
import NameInputMultipleExclusion from "./NameInputMultipleExclusion";

const NameInputHybrid = ({
  nameFieldFS,
  nameFieldES,
  handleInputChange,
  handleErrorDisplay,
}) => {
  return (
    <fieldset>
      {nameFieldFS.nameModifierFS === "contains" && (
        <NameInputContains
          nameContainsFS={nameFieldFS.nameContainsFS}
          nameContainsES={nameFieldES.nameContainsES}
          handleInputChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
        />
      )}
      {nameFieldFS.nameModifierFS === "exact" && (
        <NameInputExact
          nameExactFS={nameFieldFS.nameExactFS}
          nameExactES={nameFieldES.nameExactES}
          handleInputChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
        />
      )}
      {nameFieldFS.nameModifierFS === "nameParts" && (
        <NameInputNameParts
          firstFS={nameFieldFS.namePartsFS.firstFS}
          firstES={nameFieldES.namePartsES.firstES}
          lastFS={nameFieldFS.namePartsFS.lastFS}
          lastES={nameFieldES.namePartsES.lastES}
          middleFS={nameFieldFS.namePartsFS.middleFS}
          middleES={nameFieldES.namePartsES.middleES}
          fullNameFS={nameFieldFS.namePartsFS.fullNameFS}
          fullNameES={nameFieldES.namePartsES.fullNameES}
          handleInputChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
        />
      )}
      {nameFieldFS.nameModifierFS === "business" && (
        <NameInputBusiness
          nameBusinessFS={nameFieldFS.nameBusinessFS}
          nameBusinessES={nameFieldES.nameBusinessES}
          handleInputChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
        />
      )}
      {nameFieldFS.nameModifierFS === "exclusion" && (
        <NameInputExclusion
          searchTextFS={nameFieldFS.exclusionFS.searchTextFS}
          searchTextES={nameFieldES.exclusionES.searchTextES}
          exclusionTextFS={nameFieldFS.exclusionFS.exclusionTextFS}
          exclusionTextES={nameFieldES.exclusionES.exclusionTextES}
          handleInputChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
        />
      )}
      {nameFieldFS.nameModifierFS === "multipleSubstrings" && (
        <NameInputMultipleSubstrings
          substring1FS={nameFieldFS.multipleSubstringsFS.substring1FS}
          substring1ES={nameFieldES.multipleSubstringsES.substring1ES}
          substring2FS={nameFieldFS.multipleSubstringsFS.substring2FS}
          substring2ES={nameFieldES.multipleSubstringsES.substring2ES}
          handleInputChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
        />
      )}
      {nameFieldFS.nameModifierFS === "inclusionExclusion" && (
        <NameInputInclusionExclusion
          inclusionTextFS={nameFieldFS.inclusionExclusionFS.inclusionTextFS}
          inclusionTextES={nameFieldES.inclusionExclusionES.inclusionTextES}
          exclusionTextFS={nameFieldFS.inclusionExclusionFS.exclusionTextFS}
          exclusionTextES={nameFieldES.inclusionExclusionES.exclusionTextES}
          handleInputChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
        />
      )}
      {nameFieldFS.nameModifierFS === "complexCompound" && (
        <NameInputComplexCompound
          mainTextFS={nameFieldFS.complexCompoundFS.mainTextFS}
          mainTextES={nameFieldES.complexCompoundES.mainTextES}
          compoundText1FS={nameFieldFS.complexCompoundFS.compoundText1FS}
          compoundText1ES={nameFieldES.complexCompoundES.compoundText1ES}
          compoundText2FS={nameFieldFS.complexCompoundFS.compoundText2FS}
          compoundText2ES={nameFieldES.complexCompoundES.compoundText2ES}
          handleInputChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
        />
      )}
      {nameFieldFS.nameModifierFS === "startsWith" && (
        <NameInputStartsWith
          startsWithFS={nameFieldFS.startsWithFS}
          startsWithES={nameFieldES.startsWithES}
          handleInputChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
        />
      )}
      {nameFieldFS.nameModifierFS === "endsWith" && (
        <NameInputEndsWith
          endsWithFS={nameFieldFS.endsWithFS}
          endsWithES={nameFieldES.endsWithES}
          handleInputChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
        />
      )}
      {nameFieldFS.nameModifierFS === "multipleExclusion" && (
        <NameInputMultipleExclusion
          searchTextFS={nameFieldFS.multipleExclusionFS.searchTextFS}
          searchTextES={nameFieldES.multipleExclusionES.searchTextES}
          exclusionText1FS={nameFieldFS.multipleExclusionFS.exclusionText1FS}
          exclusionText1ES={nameFieldES.multipleExclusionES.exclusionText1ES}
          exclusionText2FS={nameFieldFS.multipleExclusionFS.exclusionText2FS}
          exclusionText2ES={nameFieldES.multipleExclusionES.exclusionText2ES}
          handleInputChange={handleInputChange}
          handleErrorDisplay={handleErrorDisplay}
        />
      )}
    </fieldset>
  );
};

export default NameInputHybrid;