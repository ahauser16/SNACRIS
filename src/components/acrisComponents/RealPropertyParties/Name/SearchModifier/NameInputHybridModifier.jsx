// src/components/acrisComponents/RealPropertyParties/Name/SearchModifier/NameInputHybridModifier.jsx
import React from 'react';
import NameModContainsRadioBtn from './NameModContainsRadioBtn';
import NameModExactRadioBtn from './NameModExactRadioBtn';
import NameModNamePartsRadioBtn from './NameModNamePartsRadioBtn';
import NameModBusinessRadioBtn from './NameModBusinessRadioBtn';

const NameInputHybridModifier = ({ value, onChange }) => {
  return (
    <fieldset className="form-group form-group--modifier">
      <legend htmlFor="name-modifier">Search Type</legend>

      <NameModContainsRadioBtn
        value="contains"
        checked={value === "contains"}
        onChange={onChange}
      />

      <NameModExactRadioBtn
        value="exact"
        checked={value === "exact"}
        onChange={onChange}
      />

      <NameModNamePartsRadioBtn
        value="name_parts"
        checked={value === "name_parts"}
        onChange={onChange}
      />

      <NameModBusinessRadioBtn
        value="business"
        checked={value === "business"}
        onChange={onChange}
      />
    </fieldset>
  );
};

export default NameInputHybridModifier;