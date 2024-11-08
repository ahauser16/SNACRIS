// src/components/acrisComponents/RealPropertyParties/Name/SearchModifier/NameModBusinessRadioBtn.jsx
import React, { useState } from 'react';
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameModBusinessRadioBtn = ({ value, checked, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverMessage = 'Search for business names that contain the text you enter. For example, searching for "Tech" will return results like "Tech Solutions", "Tech Innovators", and "TechCorp".';

  return (
    <label htmlFor="name_modifier_business" className="form-control radio">
      <span className="form-control__input radio__input">
        <input
          type="radio"
          id="name_modifier_business"
          name="name_modifier"
          value="business"
          checked={checked}
          onChange={onChange}
        />
        <span className="input__control"> </span>
      </span>
      <span className="text-wrapper">Business Name</span>
      <InfoIcon
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        hoverMessage={hoverMessage}
      />
    </label>
  );
};

export default NameModBusinessRadioBtn;