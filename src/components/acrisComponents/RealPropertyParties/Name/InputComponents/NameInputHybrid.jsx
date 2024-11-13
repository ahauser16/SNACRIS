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
  onChange,
  handleErrorDisplay,
  nameFieldES,
}) => {

  const {
    nameModifierFS,
    nameExactFS,
    nameContainsFS,
    nameBusinessFS,
    firstFS,
    lastFS,
    middleFS,
    exclusionFS,
    multipleSubstringsFS,
    inclusionExclusionFS,
    complexCompoundFS,
    startsWithFS,
    endsWithFS,
    multipleExclusionFS,
  } = nameFieldFS;

  return (
    <fieldset>
      {nameModifierFS === "contains" && (
        <NameInputContains
          nameContains={nameContainsFS}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={nameFieldES.nameContainsES}
        />
      )}
      {nameModifierFS === "exact" && (
        <NameInputExact
          name={nameExactFS}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={nameFieldES.nameExactES}
        />
      )}
      {nameModifierFS === "nameParts" && (
        <NameInputNameParts
          first={firstFS}
          last={lastFS}
          middle={middleFS}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={nameFieldES}
        />
      )}
      {nameModifierFS === "business" && (
        <NameInputBusiness
          nameBusinessSoql={nameBusinessFS}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={nameFieldES.nameBusinessES}
        />
      )}
      {nameModifierFS === "exclusion" && (
        <NameInputExclusion
          searchText={exclusionFS.searchTextFS}
          exclusionText={exclusionFS.exclusionTextFS}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={nameFieldES.exclusionES}
        />
      )}
      {nameModifierFS === "multipleSubstrings" && (
        <NameInputMultipleSubstrings
          substring1={multipleSubstringsFS.substring1FS}
          substring2={multipleSubstringsFS.substring2FS}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          errors={nameFieldES.multipleSubstringsES}
        />
      )}
      {nameModifierFS === "inclusionExclusion" && (
        <NameInputInclusionExclusion
          inclusionText={inclusionExclusionFS.inclusionTextFS}
          exclusionText={inclusionExclusionFS.exclusionTextFS}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          errors={nameFieldES.inclusionExclusionES}
        />
      )}
      {nameModifierFS === "complexCompound" && (
        <NameInputComplexCompound
          mainText={complexCompoundFS.mainTextFS}
          compoundText1={complexCompoundFS.compoundText1FS}
          compoundText2={complexCompoundFS.compoundText2FS}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          errors={nameFieldES.complexCompoundES}
        />
      )}
      {nameModifierFS === "startsWith" && (
        <NameInputStartsWith
          name={startsWithFS}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={nameFieldES.startsWithES}
        />
      )}
      {nameModifierFS === "endsWith" && (
        <NameInputEndsWith
          endsWith={endsWithFS}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={nameFieldES.endsWithES}
        />
      )}
      {nameModifierFS === "multipleExclusion" && (
        <NameInputMultipleExclusion
          searchText={multipleExclusionFS.searchTextFS}
          exclusionText1={multipleExclusionFS.exclusionText1FS}
          exclusionText2={multipleExclusionFS.exclusionText2FS}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          errors={nameFieldES.multipleExclusionES}
        />
      )}
    </fieldset>
  );
};

export default NameInputHybrid;