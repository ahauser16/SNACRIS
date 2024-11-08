// src/components/NameInput/NameInputHybrid.jsx
import React, { useState } from 'react';
import NameInputContains from "./NameInputContains";
import NameInputExact from "./NameInputExact";
import NameInputNameParts from "./NameInputNameParts";
import NameInputBusiness from "./NameInputBusiness";

const NameInputHybrid = ({
  nameModifier,
  name,
  nameParts,
  onChange,
  handleErrorDisplay,
  error,
  namePartsErrors = {},
}) => {

  return (
    <>
      {nameModifier === "contains" && (
        <NameInputContains
          name={name}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={error}
        />
      )}
      {nameModifier === "exact" && (
        <NameInputExact
          name={name}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={error}
        />
      )}
      {nameModifier === "name_parts" && (
        <>
          <NameInputNameParts
            nameParts={nameParts}
            onChange={onChange}
            handleErrorDisplay={handleErrorDisplay}
            namePartsErrors={namePartsErrors}
          />
        </>
      )}
      {nameModifier === "business" && (
        <NameInputBusiness
          name={name}
          onChange={onChange}
          handleErrorDisplay={handleErrorDisplay}
          error={error}
        />
      )}
    </>
  );
};

export default NameInputHybrid;
