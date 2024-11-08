// src/components/acrisComponents/RealPropertyParties/Name/SearchModifier/NameModNamePartsRadioBtn.jsx
import React, { useState } from 'react';
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameModNamePartsRadioBtn = ({ value, checked, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverMessage = 'Search for records using first, middle, and last name parts. For example, searching for "John" in the first name, "Michael" in the middle name, and "Doe" in the last name will return results like "John Michael Doe" and "John M. Doe".';

  return (
    <label htmlFor="name_modifier_name_parts" className="form-control radio">
      <span className="form-control__input radio__input">
        <input
          type="radio"
          id="name_modifier_name_parts"
          name="name_modifier"
          value="name_parts"
          checked={checked}
          onChange={onChange}
        />
        <span className="input__control"> </span>
      </span>
      <span className="text-wrapper">Full Name</span>
      <InfoIcon
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        hoverMessage={hoverMessage}
      />
    </label>
  );
};

export default NameModNamePartsRadioBtn;