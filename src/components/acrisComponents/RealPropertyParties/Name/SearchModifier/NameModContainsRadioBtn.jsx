// src/components/acrisComponents/RealPropertyParties/Name/SearchModifier/NameModContainsRadioBtn.jsx
import React, { useState } from 'react';
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameModContainsRadioBtn = ({ value, checked, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverMessage = 'Search for records that contain the text you enter. For example, searching for "John" will return results like "John Doe", "Johnny Appleseed", and "Johnson".';

  return (
    <label htmlFor="name_modifier_contains" className="form-control radio">
      <span className="form-control__input radio__input">
        <input
          type="radio"
          id="name_modifier_contains"
          name="name_modifier"
          value="contains"
          checked={checked}
          onChange={onChange}
        />
        <span className="input__control"> </span>
      </span>
      <span className="text-wrapper">Contains</span>
      <InfoIcon
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        hoverMessage={hoverMessage}
      />
    </label>
  );
};

export default NameModContainsRadioBtn;