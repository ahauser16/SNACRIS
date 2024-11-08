// src/components/acrisComponents/RealPropertyParties/Name/SearchModifier/NameModExactRadioBtn.jsx
import React, { useState } from 'react';
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameModExactRadioBtn = ({ value, checked, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverMessage = 'Search for records that exactly match the text you enter. For example, searching for "John Doe" will return results only for "John Doe" and not "Johnny Doe" or "Johnathan Doe".';

  return (
    <label htmlFor="name_modifier_exact" className="form-control radio">
      <span className="form-control__input radio__input">
        <input
          type="radio"
          id="name_modifier_exact"
          name="name_modifier"
          value="exact"
          checked={checked}
          onChange={onChange}
        />
        <span className="input__control"> </span>
      </span>
      <span className="text-wrapper">Exact</span>
      <InfoIcon
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        hoverMessage={hoverMessage}
      />
    </label>
  );
};

export default NameModExactRadioBtn;