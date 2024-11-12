// src/components/NameInput/NameInputHybrid.jsx
import React from 'react';
import NameInputContains from "./NameInputContains";
import NameInputExact from "./NameInputExact";
import NameInputNameParts from "./NameInputNameParts";
import NameInputBusiness from "./NameInputBusiness";
import NameInputExclusion from "./NameInputExclusion";
import NameInputMultipleSubstrings from "./NameInputMultipleSubstrings";
import NameInputCombinedInclusionExclusion from "./NameInputCombinedInclusionExclusion";
import NameInputComplexCompound from "./NameInputComplexCompound";
import NameInputStartsWith from "./NameInputStartsWith";
import NameInputEndsWith from "./NameInputEndsWith";
import NameInputMultipleExclusion from "./NameInputMultipleExclusion";

const NameInputHybrid = ({
  nameField,
  onChange,
  handleErrorDisplay,
  error,
}) => {

  const {
    nameModifier,
    nameExact,
    nameContains,
    nameBusiness,
    first,
    last,
    middle,
    exclusion,
    multipleSubstrings,
    combinedInclusionExclusion,
    complexCompound,
    startsWith,
    endsWith,
    multipleExclusion,
  } = nameField;

  return (
    <>
      {nameModifier === "contains" && (
        <NameInputContains
          name={nameContains}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={error.nameContains}
        />
      )}
      {nameModifier === "exact" && (
        <NameInputExact
          name={nameExact}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={error.nameExact}
        />
      )}
      {nameModifier === "nameParts" && (
        <>
          <NameInputNameParts
            first={first}
            last={last}
            middle={middle}
            onChange={onChange}
            handleErrorDisplay={handleErrorDisplay}
            namePartsErrors={error}
          />
        </>
      )}
      {nameModifier === "business" && (
        <NameInputBusiness
          name={nameBusiness}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={error.nameBusiness}
        />
      )}
      {nameModifier === "exclusion" && (
        <NameInputExclusion
          searchText={exclusion.searchText}
          exclusionText={exclusion.exclusionText}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={error.exclusion}
        />
      )}
      {nameModifier === "multipleSubstrings" && (
        <NameInputMultipleSubstrings
          substring1={multipleSubstrings.substring1}
          substring2={multipleSubstrings.substring2}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={error.multipleSubstrings}
        />
      )}
      {nameModifier === "combinedInclusionExclusion" && (
        <NameInputCombinedInclusionExclusion
          inclusionText={combinedInclusionExclusion.inclusionText}
          exclusionText={combinedInclusionExclusion.exclusionText}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={error.combinedInclusionExclusion}
        />
      )}
      {nameModifier === "complexCompound" && (
        <NameInputComplexCompound
          mainText={complexCompound.mainText}
          compoundText1={complexCompound.compoundText1}
          compoundText2={complexCompound.compoundText2}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={error.complexCompound}
        />
      )}
      {nameModifier === "startsWith" && (
        <NameInputStartsWith
          name={startsWith}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={error.startsWith}
        />
      )}
      {nameModifier === "endsWith" && (
        <NameInputEndsWith
          name={endsWith}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={error.endsWith}
        />
      )}
      {nameModifier === "multipleExclusion" && (
        <NameInputMultipleExclusion
          searchText={multipleExclusion.searchText}
          exclusionText1={multipleExclusion.exclusionText1}
          exclusionText2={multipleExclusion.exclusionText2}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={error.multipleExclusion}
        />
      )}
    </>
  );
};

export default NameInputHybrid;